// https://docs.cypress.io/api/introduction/api.html

describe('Stream Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows msg to start searching', () => {
    cy.get('.stream-list-empty-query').should('exist')
  })

  it('Search returns # results', () => {
    cy.get('.cy-search input').type('pokemon')

    // Sometimes the api returns less items than requested so
    // lets test the number of results inside a range of values
    cy.get('.stream-card').should('have.length.above', 0)
    cy.get('.stream-card').should('have.length.below', 26)
  })

  it('Load more returns more # results', () => {
    cy.get('.cy-search input').type('pokemon')

    cy.get('.cy-load-more').click()
    // Even if the first request returned les than 25
    // the second request must be enough results to go above 25
    cy.get('.stream-card').should('have.length.above', 25)
    cy.get('.stream-card').should('have.length.below', 51)
  })

  it('Search returns # results inserted', () => {
    cy.get('.cy-limit input').clear().type(3)
    cy.get('.cy-search input').clear().type('league of legends')

    cy.get('.stream-card').should('have.length.above', 0)
    cy.get('.stream-card').should('have.length.below', 4)
  })

  it('Shows no results msg if none provided', () => {
    cy.get('.cy-search input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaa')

    cy.get('.stream-card').should('have.length', 0)
    cy.get('.stream-list-no-results').should('exist')
  })

  it('Shows loading msg while waiting for the results', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/kraken/search/streams?query=league+of+legends&limit=25',
      response: {},
      delay: 3000
    })
    cy.get('.cy-search input').clear().type('league of legends')
    cy.get('.stream-loading').should('exist')
  })

  it('Shows error msg if api fails', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/kraken/search/streams?query=league+of+legends&limit=25',
      response: {},
      status: 400
    })
    cy.get('.cy-search input').type('league of legends')
    cy.get('.stream-list-error').should('exist')
  })

  it('Opens a Stream from the Search Page', () => {
    cy.get('.cy-search input').type('league of legends')
    cy.get('.stream-card').first().click()
    cy.url().should('include', '/channel/')
  })
})
