export default class CandidatePage {
  elements = {
    Recruitment: () => cy.get(':nth-child(5) > .oxd-main-menu-item'),
    viewBtn: () => cy.get('.oxd-table-cell-actions'),
    passBtn: () => cy.get('.oxd-button--success'),
    saveBtn: () => cy.get('.oxd-button--secondary'),
    loader: () => cy.get('.oxd-loading-spinner-container'),
    rejectBtn: () => cy.get('.orangehrm-recruitment-actions > :nth-child(1)'),
    failBtn: () => cy.get('.orangehrm-recruitment-actions > :nth-child(2)'),
    jobOfferBtn: () => cy.get('.oxd-button--success'),
    hiredBtn: () => cy.get('.oxd-button--success'),

  }
  findVacancy(vacancyName: any) {
    this.elements.Recruitment().click()
    cy.get('.oxd-table-row.oxd-table-row--with-border')
      .find(`:contains(${vacancyName})`)
      .should('exist')
      .then(($element) => {
        cy.wrap($element)
          .parent('.oxd-table-row')
          .find('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')
          .click({ force: true, multiple: true });
      });
  }
  markInterviewPassed() {
    this.elements.passBtn().click({ force: true })
    this.elements.saveBtn().click({ force: true })
    this.elements.loader().should('not.exist')
    this.elements.saveBtn().click({ force: true })
  }
  markInterviewFailed() {
    this.elements.failBtn().click({ force: true })
    this.elements.saveBtn().click({ force: true })
    this.elements.loader().should('not.exist')
    this.elements.saveBtn().click({ force: true })
  }
  markCandidateHired() {
    this.elements.jobOfferBtn().eq(1).click({ force: true })
    cy.wait(1000)
    this.elements.saveBtn().click({ force: true })
    cy.wait(1000)
    this.elements.hiredBtn().click({ force: true })
    cy.wait(1000)
    this.elements.saveBtn().click({ force: true })
    cy.wait(1000)
  }
  uploadFileForApplicationInitiated() {
    cy.get('.oxd-switch-input').click({ force: true });
    cy.get('input[type="file"]').selectFile('cypress/fixtures/file.txt', { force: true })
    cy.get('.oxd-form-actions').contains('Save').click({ force: true })
    cy.wait(4000)
    // cy.contains('file.txt');
  }
  downladFile() {
    cy.get('.orangehrm-file-preview').click({ force: true })
    cy.readFile('cypress/downloads/file.txt').then((fileContent) => {
      expect(fileContent).to.equal('some content');
    });
  }
}