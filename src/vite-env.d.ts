/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_COGNITO_USERPOOL_ID: string;
	readonly VITE_COGNITO_CLIENT_ID: string;
	readonly VITE_COGNITO_ENDPOINT: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
