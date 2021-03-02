/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject> {
		/**
		 * Custom command to select get Current Date and time.
		 * @example cy.getCurrentDateAndTime()
		 */
		getCurrentDateAndTime(): Chainable<Element>;

		/**
		 * Custom command to get random number
		 * @example cy.getRandomNumber(10);
		 */
		getRandomNumber(maxNumber: number): Chainable<Element>;
	}
}
