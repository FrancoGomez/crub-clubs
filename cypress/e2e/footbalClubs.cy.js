/// < require type="Cypress" />
before(
  ("Reset the clubs",
  () => {
    cy.visit("/");

    cy.get("#reset-clubs").click();

    cy.get("#confirmation-reset-db-modal .main-button").click();

    cy.wait(1000);

    cy.get("#notification-reset-db-modal .main-button").click();
  })
);

describe("Check if the main page is shown correctly", () => {
  it("Visit the main page", () => {
    cy.visit("/");
  });

  it("Check that the header displays correct information", () => {
    cy.get("h1").contains("There are 22 clubs");
  });

  it("Check if all clubs are loaded", () => {
    const TOTAL_CLUBS = 22;

    cy.get(".club-row").should("have.length", TOTAL_CLUBS);
  });
});

describe("Check that the buttons from the main page work", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check that the create club button works", () => {
    cy.get("#create-club").click();

    cy.url().should("eq", "http://localhost:8080/create/");
  });

  it("Check that the crest link work", () => {
    cy.get("#ARS-crest").click();

    cy.url().should("eq", "http://localhost:8080/ARS");
  });

  it("Check that the view link work", () => {
    cy.get("#view-EVE").click();

    cy.url().should("eq", "http://localhost:8080/EVE");
  });

  it("Check that the update link work", () => {
    cy.get("#update-RIV").click();

    cy.url().should("eq", "http://localhost:8080/update/RIV");
  });
});

describe("Check that the create club page is shown correctly", () => {
  it("Visit the create page", () => {
    cy.visit("/create/");
  });

  it("Check that all the inputs are shown", () => {
    const INPUTS_AMOUNT = 11;

    cy.get(".form-control").should("have.length", INPUTS_AMOUNT);
  });

  it("Check that the select is shown", () => {
    cy.get(".form-select");
  });

  it("Check that the buttons are shown", () => {
    cy.get(".create-form-buttons button").should("have.length", 2);
  });
});

describe("Check that you can create a club", () => {
  it("Fill the required inputs", () => {
    cy.get("#name").type("FC Bayern Munich");

    cy.get("#area-name").select("Germany");

    cy.get("#shortName").type("Bayern Munich");

    cy.get("#tla").type("BAY");

    cy.get("#address").type("Säbener Straße, Munich, Bavaria");

    cy.get("#venue").type("Allianz Arena");

    cy.get("#clubColors").type("Red / White");

    cy.get("#founded").type("1900");

    cy.get("#website").type("https://fcbayern.com/");

    cy.get("#email").type("service@fcbayern.com");

    cy.get("#phone").type("+49 89 699 31-0");

    cy.get("#crest").selectFile("cypress/fixtures/Bayern.png");
  });

  it("Check that you can send the form", () => {
    cy.get(".create-form-buttons .main-button").click();

    cy.get("#confirmation-create-club-modal .main-button").click();

    cy.wait(1000);

    cy.get("#notification-create-club-modal .main-button").click();

    cy.get("#BAY-crest");
  });
});

describe("Check that you can view that new club", () => {
  it("Click into the view button", () => {
    cy.get("#view-BAY").click();

    cy.get(".title").contains("FC Bayern Munich");
  });
});

describe("Check that you can edit the new group", () => {
  it("Click the edit button", () => {
    cy.get("#update-BAY").click();
  });

  it("Edit the short name", () => {
    cy.get("#shortName").clear();

    cy.get("#shortName").type("Bayern");
  });

  it("Send the form", () => {
    cy.get(".update-form-buttons .main-button").click();

    cy.get("#confirmation-update-club-modal .main-button").click();

    cy.wait(1000);

    cy.get("#notification-update-club-modal .main-button").click();

    cy.get("#BAY-crest .text-truncate").contains("Bayern");
  });
});

describe("Check that you can delete the club from the main page", () => {
  it("Delete the club", () => {
    cy.get("#delete-BAY").click();

    cy.get("#confirmation-delete-club-modal .main-button").click();

    cy.wait(1000);

    cy.get("#notification-delete-club-modal .main-button").click();
  });

  it("Check that only exists the original 22 clubs", () => {
    const TOTAL_CLUBS = 22;

    cy.get(".club-row").should("have.length", TOTAL_CLUBS);
  });
});

describe("Check that you can delete a club from the update page", () => {
  it("Click the update button of a club", () => {
    cy.get("#update-ARS").click();
  });

  it("Delete the club", () => {
    cy.get(".update-form-buttons .secondary-button").click();

    cy.get("#confirmation-delete-club-modal .main-button").click();

    cy.wait(1000);

    cy.get("#notification-delete-club-modal .main-button").click();
  });

  it("Check that only exists 21 clubs", () => {
    const TOTAL_CLUBS = 21;

    cy.get(".club-row").should("have.length", TOTAL_CLUBS);
  });
});
