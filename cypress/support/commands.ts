/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('getBySel', (selector, ...args) => {
	return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
	return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add('setUser', () => {
	localStorage.setItem(
		'CognitoIdentityServiceProvider.f57xus4aqxlted28t5jahujbc.LastAuthUser',
		'username',
	);
	localStorage.setItem(
		'CognitoIdentityServiceProvider.f57xus4aqxlted28t5jahujbc.username.refreshToken',
		'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2duaXRvOnVzZXJuYW1lIjoidXNlcm5hbWUiLCJpYXQiOjE2OTIzNjIyODEsImp0aSI6ImE2ZTNmYjI2LTEzMDEtNDg2MC05ZjMxLWE5MGNjNjMxYmE3NiIsImV4cCI6MTY5Mjk2NzA4MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MjI5L2xvY2FsXzdjU01HWjZoIn0.imd_b6Y5GgIld4F-XCV_h9s4vvw0K1RBmBQCUsCiYIF_4rQ1U_UNUOcXaY_U33UADGKkwktB8jVMCMENJ0thm_z5gx2Ro4AASgz0FoX4Ma0ALv4FwtCvjAVUz8YC6l9MqVNaPr_iafSczBlkTsqqe8e0Ska1w7DVR2dMQ38FbjrL1-BEP7UIrHzwCzUoDhzsXowo58-MwfaGi9sUFMm18HjSo3PJOaNvKHoWpKXzzqe_JajXCJdSnwFvOdAJwa9l-_uayO-ypr-GnFqWpH4qnaEx0TXjgdkKUSn0cm1zuMd7iImacPj9H1Ji6LQEkHw0CQdlR1_4tTB1g-jjDrE1GA',
	);
	localStorage.setItem(
		'CognitoIdentityServiceProvider.f57xus4aqxlted28t5jahujbc.username.clockDrift',
		'0',
	);
	localStorage.setItem(
		'CognitoIdentityServiceProvider.f57xus4aqxlted28t5jahujbc.username.accessToken',
		'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNvZ25pdG9Mb2NhbCJ9.eyJhdXRoX3RpbWUiOjE2OTIzNjIyODEsImNsaWVudF9pZCI6ImY1N3h1czRhcXhsdGVkMjh0NWphaHVqYmMiLCJldmVudF9pZCI6IjQ1NjUxMjMwLTc2NTktNDFlOS05MzkwLTI3N2Y0NWNmMjZiNCIsImlhdCI6MTY5MjM2MjI4MSwianRpIjoiN2I3ZDAyZGEtYjllNy00NWQ1LTkxMGYtNzY2YTZhYTNkOTdlIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsInN1YiI6ImU2MDFkZTRhLTRjYTYtNGVmMS1iZjJlLTk5MDQzZjBlZjc2NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJleHAiOjE2OTIzNjU4ODEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTIyOS9sb2NhbF83Y1NNR1o2aCJ9.f7Jh4oXHANAGplKSNi01dH9jhjIX_ui43z_PPbuqdwwFl8d1LcDA3jdhaPFdphZ768MlMIk17uei_qBeQj8fvm2KILkaubf4g17ciXPC3lgwzsS6DzCfOo8kpfxEWuMnXwOlqvZM4vqVOj_xzgqEgLez305WmVSn_-W1K4HsbNxCslUEZ5xEG_lUGpefB1CysXZHBRGMAp62KzE_ARBbOZa2DuNxHXKmzD2yVMLmOWPdCJ6Pbvg_pFGxlPrkVfeHi5r4riBXiwMhy7XVUFZjANxEMlGB_ZRiCsxH3Hnnm_upo2WA7zAWkKXSH__deXkNAOXAAePr8R-LDvWKdwylRA',
	);
	localStorage.setItem(
		'CognitoIdentityServiceProvider.f57xus4aqxlted28t5jahujbc.username.idToken',
		'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNvZ25pdG9Mb2NhbCJ9.eyJjb2duaXRvOnVzZXJuYW1lIjoidXNlcm5hbWUiLCJhdXRoX3RpbWUiOjE2OTIzNjIyODEsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiI0NTY1MTIzMC03NjU5LTQxZTktOTM5MC0yNzdmNDVjZjI2YjQiLCJpYXQiOjE2OTIzNjIyODEsImp0aSI6ImU4YjNmZDk4LTNmY2UtNGQyNi1hMGIyLWUzOWI5NzA5OTVmYiIsInN1YiI6ImU2MDFkZTRhLTRjYTYtNGVmMS1iZjJlLTk5MDQzZjBlZjc2NiIsInRva2VuX3VzZSI6ImlkIiwiZXhwIjoxNjkyNDQ4NjgxLCJhdWQiOiJmNTd4dXM0YXF4bHRlZDI4dDVqYWh1amJjIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MjI5L2xvY2FsXzdjU01HWjZoIn0.VYiJXtEkBFdT8GL44ZbmyvIEokW4iSRjy5H1eT92APGHgiWCr5TW8BX_pxFJMlCC6Eak_HLty82dBImaqNvr_LXlOxK8KBh1Nebg0BTn1s-COj5SymWx7NiZGZKnpS5YfCwb-hhob9EAP0jd1rtMV4Ese4pKNuV4iqVtbbdANn1pWWqSB6jW1ZsjOKge7DTyhDpDsdEXMGkCCYQzjYVZxxetQi8lHUfndlH1MTZJQrZKfaaCW1m6vW_FjU7tyjyZ39fWFzF0-u4cUnYnqoomnWVFTsMN00JhkV-_EBOW0DJZfAlIK-h2JcCTagOSZk0yW2o8ZbdSR0XGPGjh2XnkIQ',
	);
});
