/// <reference types="cypress" />
import validate from "../support/pages/home"
import '@percy/cypress';
require('cypress-xpath');

describe('VALIDATE HOME PAGE', () => {
    beforeEach(() => {
      cy.visit('/')
      validate.VisualTesting()
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

    it('Layout - Home', () => {
      validate.LayoutCSS()
    })
  })