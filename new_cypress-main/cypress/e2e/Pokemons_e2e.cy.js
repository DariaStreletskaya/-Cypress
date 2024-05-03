describe('Покемоны', function () {

    it('Покупка аватара для тренера', function () {
      cy.visit('https://pokemonbattle.me/login');
      cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //логин
      cy.get('#password').type('USER_PASSWORD'); //пароль
      cy.get('.auth__button').click(); // войти
      cy.get('.header__btns > [href="/shop"]').click(); // перейти в магазин

      cy.get(':nth-child(2) > .shop__button').click(); // нажать купить
      cy.get('.credit').type('4111111111111111');
      cy.get('.k_input_ccv').type('125'); // CVV карты
        cy.get('.k_input_date').type('0729'); // срок карты
        cy.get('.k_input_name').type('DARIA ALEKSEEVA');// имя на карте
        cy.get('.pay-btn').click();

        cy.get('#cardnumber').type('56456'); //код из смс/пуш
        cy.get('.payment__submit-button').click(); // нажать отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно') // проверка текста
        cy.get('.payment__font-for-success').should('be.visible'); //видимость текста

        
    })
})
