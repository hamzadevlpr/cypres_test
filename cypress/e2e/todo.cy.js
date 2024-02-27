describe('Firebase interaction', () => {

  it('should successfully store data to Firebase', () => {
    cy.intercept(
      {
        method: 'POST', 
        url: 'http://localhost:5173/', 
      },
      [] 
    ).as('addTodo')

    cy.visit('http://localhost:5173/');

    cy.get('input[name="text"]').type('Test 22');
    cy.get('button').click();


    cy.get('@addTodo')
  });
});
