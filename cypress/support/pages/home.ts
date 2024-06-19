/// <reference types="cypress" />
require('cypress-xpath');
import { TEXTS, TITLE_SUBTITLES, FOOTER, LINKS } from "./elements";
import {XPATHS} from "./xpaths.sel"


class validate {

    TitlesSubtitles(){
        cy.get(TITLE_SUBTITLES.Title).should('have.text', Cypress.env('titles_subtitles').Title)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-top', '50px')
        .should('have.css', 'padding', '50px 0px 0px')
        .should('have.css', 'font-variant', 'small-caps')
        .should('have.css', 'font-family', '"Passion One", sans-serif')
        .should('have.css', 'font-size', '100px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'text-align', 'center')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'unicode-bidi', 'normal')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'display', 'block')

        cy.get(TITLE_SUBTITLES.Subtitles).should('have.text', Cypress.env('titles_subtitles').Subtitle)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-bottom', '50px')
        .should('have.css', 'padding', '0px 0px 50px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-variant', 'normal')
        .should('have.css', 'font-family', 'Verdana, Geneva, Tahoma, sans-serif')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'text-align', 'center')
        .should('have.css', 'unicode-bidi', 'normal')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'display', 'block')

    }

    texts(){
        cy.get(TEXTS.FirstParagraph).should('have.text', Cypress.env('texts').Sectionpt1)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-left', '30px')
        .should('have.css', 'padding-top', '40px')
        .should('have.css', 'padding-bottom', '70px')
        .should('have.css', 'padding', '40px 0px 70px 30px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'unicode-bidi', 'normal')

        cy.get(TEXTS.SecondParagraph).should('have.text', Cypress.env('texts').Sectionpt2)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.557)')
        .should('have.css', 'padding-left', '5px')
        .should('have.css', 'padding-top', '5px')
        .should('have.css', 'padding-bottom', '5px')
        .should('have.css', 'padding', '5px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'text-shadow', 'rgb(0, 0, 0) 1px 1px 0px')
        .should('have.css', 'unicode-bidi', 'normal')
        .should('have.css', 'display', 'inline-block')


        cy.get(TEXTS.ThirdParagraph).should('have.text', Cypress.env('texts').Sectionpt3)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-left', '30px')
        .should('have.css', 'padding-top', '40px')
        .should('have.css', 'padding-bottom', '70px')
        .should('have.css', 'padding', '40px 0px 70px 30px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'unicode-bidi', 'normal')


        cy.get(TEXTS.FourthParagraph).should('have.text', Cypress.env('texts').Sectionpt4)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-left', '30px')
        .should('have.css', 'padding-top', '40px')
        .should('have.css', 'padding-bottom', '70px')
        .should('have.css', 'padding', '40px 0px 70px 30px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'unicode-bidi', 'normal')


        cy.get(TEXTS.FifthParagraph).should('have.text', Cypress.env('texts').Sectionpt5)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.557)')
        .should('have.css', 'padding-left', '5px')
        .should('have.css', 'padding-top', '5px')
        .should('have.css', 'padding-bottom', '5px')
        .should('have.css', 'padding', '5px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'text-shadow', 'rgb(0, 0, 0) 1px 1px 0px')
        .should('have.css', 'unicode-bidi', 'normal')
        .should('have.css', 'display', 'inline-block')


        cy.get(TEXTS.SixthParagraph).should('have.text', Cypress.env('texts').Sectionpt6)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-left', '30px')
        .should('have.css', 'padding-top', '40px')
        .should('have.css', 'padding-bottom', '70px')
        .should('have.css', 'padding', '40px 0px 70px 30px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'unicode-bidi', 'normal')

        cy.get(TEXTS.SeventhParagraph).should('have.text', Cypress.env('texts').Sectionpt7)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'padding-left', '30px')
        .should('have.css', 'padding-top', '40px')
        .should('have.css', 'padding-bottom', '70px')
        .should('have.css', 'padding', '40px 0px 70px 30px')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'font-size', '35px')
        .should('have.css', 'font-family', 'Sriracha, cursive')
        .should('have.css', 'line-height', '70px')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'unicode-bidi', 'normal')

    }

    footer(){
        cy.get(FOOTER.WebPageFooter).should('have.text', Cypress.env('footer').Information)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'margin-block-start', '0px')
        .should('have.css', 'margin-block-end', '0px')
        .should('have.css', 'margin-inline-start', '0px')
        .should('have.css', 'margin-inline-end', '0px')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'padding', '0px')
        .should('have.css', 'font-variant', 'normal')
        .should('have.css', 'font-family', 'Verdana, Geneva, Tahoma, sans-serif')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'text-align', 'center')
        .should('have.css', 'unicode-bidi', 'normal')
        .should('have.css', 'min-height', '0px')
        .should('have.css', 'display', 'block')
    }

    VisualTesting(){
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.percySnapshot('Página Completa', {capture: 'fullPage'})
    }

    LayoutCSS(){

        cy.xpath(XPATHS.Header)
        .should('have.css', 'background-color', 'rgb(0, 0, 0)')
        .should('have.css', 'text-align', 'center')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.BodySection1)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.BodySection3)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.BodySection4)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.BodySection6)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.BodySection7)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'padding', '0px')

        cy.xpath(XPATHS.Img1)
        .should('have.css', 'background-image', 'url("https://cordel-ashen.vercel.app/sladas/background001.jpg")')
        .should('have.css', 'background-position', '100% 50%')
        .should('have.css', 'background-size', 'cover')
        .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.61) 6px 6px 13px 0px inset')
        .should('have.css', 'background-attachment', 'fixed')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'padding', '66px 0px 66px 30px')

        cy.xpath(XPATHS.Img2)
        .should('have.css', 'background-image', 'url("https://cordel-ashen.vercel.app/sladas/background002.jpg")')
        .should('have.css', 'background-position', '100% 50%')
        .should('have.css', 'background-size', 'cover')
        .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.61) 6px 6px 13px 0px inset')
        .should('have.css', 'background-attachment', 'fixed')
        .should('have.css', 'margin', '0px')
        .should('have.css', 'padding', '66px 0px 66px 30px')

        cy.xpath(XPATHS.FooterLayout)
        .should('have.css', 'background-color', 'rgb(0, 0, 0)')
        .should('have.css', 'padding', '10px' )
        .should('have.css', 'margin', '0px')
    }

    links(){
        cy.get(LINKS.Author).contains('Milton Duarte').invoke('removeAttr', 'target').click()
        cy.origin('https://www.recantodasletras.com.br/poesias/3186743', () => {
            cy.url().should('eq', 'https://www.recantodasletras.com.br/poesias/3186743')
            cy.contains('CORDEL MODERNO').should('exist')
            cy.go('back')
    })

        cy.get(LINKS.CreatorWebPage).contains('Gustavo Guanabara').invoke('removeAttr', 'target').click()
        cy.origin('https://gustavoguanabara.github.io/', () => {
            cy.url().should('eq', 'https://gustavoguanabara.github.io/')
            cy.contains('Gustavo Guanabara').should('exist')
            cy.go('back')
    })

        cy.get(LINKS.Course).contains('Cursoemvideo').invoke('removeAttr', 'target').click()
        cy.origin('https://www.cursoemvideo.com/', () => {
            cy.url().should('eq', 'https://www.cursoemvideo.com/')
            cy.contains('Cursos').should('exist')
            cy.go('back')
})
    }
}

export default new validate()