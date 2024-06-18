/// <reference types="cypress" />
import { TEXTS, TITLE_SUBTITLES, FOOTER } from "./elements";

class validate {

    TitlesSubtitles(){
        cy.get(TITLE_SUBTITLES.Title).should('have.text', Cypress.env('titles_subtitles').Title)
        cy.get(TITLE_SUBTITLES.Subtitles).should('have.text', Cypress.env('titles_subtitles').Subtitle)
    }

    texts(){
        cy.get(TEXTS.FirstParagraph).should('have.text', Cypress.env('texts').Sectionpt1)
        cy.get(TEXTS.SecondParagraph).should('have.text', Cypress.env('texts').Sectionpt2)
        cy.get(TEXTS.ThirdParagraph).should('have.text', Cypress.env('texts').Sectionpt3)
        cy.get(TEXTS.FourthParagraph).should('have.text', Cypress.env('texts').Sectionpt4)
        cy.get(TEXTS.FifthParagraph).should('have.text', Cypress.env('texts').Sectionpt5)
        cy.get(TEXTS.SixthParagraph).should('have.text', Cypress.env('texts').Sectionpt6)
        cy.get(TEXTS.SeventhParagraph).should('have.text', Cypress.env('texts').Sectionpt7)
    }

    footer(){
        cy.get(FOOTER.WebPageFooter).should('have.text', Cypress.env('footer').Information)
    }
}

export default new validate()