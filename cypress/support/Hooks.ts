before(function () {});

beforeEach(function () {
	cy.visit("/");
	cy.clearLocalStorage();
});
