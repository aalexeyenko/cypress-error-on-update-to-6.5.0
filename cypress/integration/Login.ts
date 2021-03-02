describe("Login to https://www.saucedemo.com/", () => {
	it("Login with invalid credentials", () => {
		cy.get("[data-test='error']").should("not.exist");
		cy.get("#user-name").type("test");
		cy.get("#password").type("test");
		cy.get("#login-button").click();
		cy.get("[data-test='error']").should("be.visible");
	});
});
