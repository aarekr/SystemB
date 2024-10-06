describe('Home page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })

  it('Home page can be opened', function() {
    cy.visit('http://localhost:5173')
    cy.contains('Name')
    cy.contains('Type')
    cy.contains('Producer')
    cy.contains('Year')
    cy.contains('Country')
    cy.contains('Gambrinus')
    cy.contains('Drinks in sortiment')
  })
})

describe('Navigation', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })

  it('BEERS link can be clicked and page shows beers', function() {
    cy.get('#beers-link').click()
    cy.contains('Beers in sortiment')
    cy.contains('Gambrinus')
    cy.contains('Beer')
    cy.contains('1869')
    cy.contains('Czechia')
    cy.contains('Germany')
  })

  it('CIDERS link can be clicked and page shows ciders', function() {
    cy.get('#ciders-link').click()
    cy.contains('Ciders in sortiment')
  })

  it('VODKAS link can be clicked and page shows vodkas', function() {
    cy.get('#vodkas-link').click()
    cy.contains('Vodkas in sortiment')
    cy.contains('Absolut')
    cy.contains('Sweden')
    cy.contains('Finlandia')
    cy.contains('Koskenkorva')
    cy.contains('Finland')
  })

  it('WHISKEYS link can be clicked and page shows whiskeys', function() {
    cy.get('#whiskeys-link').click()
    cy.contains('Whiskeys in sortiment')
    cy.contains('Jameson')
    cy.contains('1780')
    cy.contains('Ireland')
    cy.contains('Ballantine')
    cy.contains('Scotland')
    cy.contains('Whiskey')
  })

  it('ADD link can be clicked and page shows add new drink form', function() {
    cy.get('#add-drinks-link').click()
    cy.contains('Add a new drink')
  })

  it('HOME link can be clicked and page shows all drinks', function() {
    cy.get('#home-link').click()
    cy.contains('Drinks in sortiment')
  })
})
