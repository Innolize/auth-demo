describe('login', () => {
	beforeEach(() => {
		cy.visit('/sign-in');
	});
	it('should ', () => {
		cy.intercept('/', { fixture: 'login-response.json' }).as('login');

		cy.get('[name="username"]').type('username');
		cy.get('[name="password"]').type('password');
		cy.contains('Sign In').click();
		cy.wait('@login');
	});
});

describe('Should redirect to home page if user is logged in', () => {
	before(() => {
		cy.setUser();
	});
	it('should redirect if user is logged in', () => {
		cy.intercept('/', { fixture: 'login-response.json' }).as('login');
		cy.visit('/sign-in');
		cy.wait('@login');
		cy.url().should('not.include', '/sign-in');
	});
});
