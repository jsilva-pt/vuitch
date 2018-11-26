describe('Stream Search', () => {
  it('Shows the steam and it details', () => {
    cy.visit('/channel/twitchpresents')
    cy.get('iframe').should('exist')

    cy.get('.cy-viewers').should('exist')
    cy.get('.cy-views').should('exist')
    cy.get('.cy-game').should('exist')
    cy.get('.cy-name').should('exist')
  })
})
