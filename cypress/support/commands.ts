// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getRandomNumber", (maxNumber: number) => {
	var numberRandom = Cypress._.random(maxNumber - 1);
	var int = Math.round(numberRandom);
	return int;
});

Cypress.Commands.add("getCurrentDateAndTime", () => {
	const dateAndTime = Cypress.moment().format("M/D/YYYY, h:");
	return dateAndTime.toString();
});
