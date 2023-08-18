import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserPool,
	CognitoUserSession,
	ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';

interface IUserCredentials {
	username: string;
	password: string;
}

const poolData: ICognitoUserPoolData = {
	UserPoolId: import.meta.env.VITE_COGNITO_USERPOOL_ID,
	ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
	endpoint: import.meta.env.VITE_COGNITO_ENDPOINT,
};
const userPool = new CognitoUserPool(poolData);

export const signUp = ({ username, password }: IUserCredentials) => {
	userPool.signUp(username, password, [], [], function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const cognitoUser = result!.user;
		console.log('user name is ' + cognitoUser.getUsername());
	});
};

export const signIn = ({ username, password }: IUserCredentials) => {
	const authenticationData = {
		Username: username,
		Password: password,
	};

	const userPool = new CognitoUserPool(poolData);

	const userData = {
		Username: username,
		Pool: userPool,
	};

	const authenticationDetails = new AuthenticationDetails(authenticationData);

	const cognitoUser = new CognitoUser(userData);

	cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');

	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function (result) {
			const accessToken = result.getAccessToken().getJwtToken();
			console.log(accessToken);
			return accessToken;
		},

		onFailure: function (err) {
			alert(err.message || JSON.stringify(err));
		},
	});
};

export const getCurrentSession = async () => {
	const cognitoUser = userPool.getCurrentUser();

	return new Promise((resolve, reject) => {
		if (!cognitoUser) {
			resolve(null);
			return;
		}

		cognitoUser.getSession((err: null | Error, session: CognitoUserSession) => {
			if (err) {
				reject(err);
				return;
			}

			if (session.isValid()) {
				resolve(session);
				return;
			}

			cognitoUser.refreshSession(
				session.getRefreshToken(),
				(err: Error, session: CognitoUserSession) => {
					if (err) {
						reject(err);
						return;
					}
					resolve(session);
				},
			);
		});
	});
};
