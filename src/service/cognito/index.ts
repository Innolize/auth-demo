import {
	CognitoUserPool,
	ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';

interface ISignUpParams {
	username: string;
	password: string;
}

export const signUp = ({ username, password }: ISignUpParams) => {
	const poolData: ICognitoUserPoolData = {
		UserPoolId: import.meta.env.VITE_COGNITO_USERPOOL_ID,
		ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
		endpoint: import.meta.env.VITE_COGNITO_ENDPOINT,
	};
	const userPool = new CognitoUserPool(poolData);

	userPool.signUp(username, password, [], [], function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		const cognitoUser = result!.user;
		console.log('user name is ' + cognitoUser.getUsername());
	});
};
