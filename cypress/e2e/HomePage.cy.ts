/// <reference types="cypress" />
import validate from "../support/pages/home"

describe('VALIDATE HOME PAGE', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Texts - Home', () => {
      validate.texts()
    })

    it('Title & Subtitles - Home', () => {
      validate.TitlesSubtitles()
    })

    it('Footer - Home', () => {
        validate.footer()
    })
  })