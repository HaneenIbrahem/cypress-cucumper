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
    editSwitch: () => cy.get('.oxd-switch-input'),
    inputFile: () => cy.get('input[type="file"]'),
    savBtn: () => cy.get('.oxd-form-actions').contains('Save'),
    download: () => cy.get('.orangehrm-file-preview'),
    shortlist:()=> cy.get('.oxd-button--success'),
    schedule:()=> cy.get('.oxd-button--success'),
    interviewTitle:()=> cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    interviewer:()=> cy.get('.oxd-autocomplete-text-input > input'),
    date:()=> cy.get('.oxd-date-input > .oxd-input'),

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
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
    this.elements.saveBtn().click({ force: true })
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
    this.elements.hiredBtn().click({ force: true })
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
    this.elements.saveBtn().click({ force: true })
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
  }
  uploadFile(filePath: string) {
    this.elements.editSwitch().click({ force: true });
    this.elements.inputFile().selectFile(filePath, { force: true })
    this.elements.savBtn().click({ force: true })
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
  }
  downladFile() {
    this.elements.download().click({ force: true })
  }
  verifyFileContent(filePath: string) {
    cy.readFile(filePath).then((fileContent) => {
      expect(fileContent).to.equal('some content');
    });
  }
  checkCandidateStatusIExsit(status: string){
    cy.get('.orangehrm-recruitment-status > .oxd-text', { timeout: 40000 }).should('contain', status);
  }
  shortList() {
    this.elements.shortlist().click({ force: true })
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
    this.elements.savBtn().click({ force: true })    
    this.elements.loader().should('exist')
    this.elements.loader().should('not.exist')
  }
  scheduleInterview(empName: string, interviewTitle: string, dayNextWeek: string){
    this.elements.schedule().click({ force: true })
    this.elements.interviewTitle().type(interviewTitle)
    this.elements.interviewer().type(empName)
    cy.contains('.oxd-autocomplete-option', 'Searching....').should('exist')
    cy.contains('.oxd-autocomplete-option', 'Searching....').should('not.exist')
    cy.get('.oxd-autocomplete-option').should('be.visible').click({ force: true })
    this.elements.date().type(dayNextWeek)
    this.elements.saveBtn().click({ force: true })
    this.elements.loader().should('not.exist')
  }
}