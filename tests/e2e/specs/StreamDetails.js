describe('Stream Search', () => {
  it('Shows the steam', () => {
    cy.visit('/channel/twitchpresents')
    cy.get('iframe').should('exist')
  })

  it('Shows the number of viewers and total views', () => {
    cy.get('.cy-viewers').should('exist')
  })

  it('Shows the number of viewers and total views', () => {
    cy.get('.cy-views').should('exist')
  })
})
