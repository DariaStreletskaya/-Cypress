describe('Автотесты на авторизацию', function () {

    it('Правильный логин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru'); //верный логин
      cy.get('#pass').type('iLoveqastudio1'); //верный пароль
      cy.get('#loginButton').click(); //нажать войти
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка текста
      cy.get('#messageHeader').should('be.visible'); //видимость текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость крестик

    })

    it('Восстановления пароля', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#forgotEmailButton').click(); //нажать забыл пароль
     cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести любой имейл
     cy.get('#restoreEmailButton').click(); //нажать отправить код
     cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка текста
     cy.get('#messageHeader').should('be.visible'); //видимость текса
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость крестик

   })
    it('Правильный логин,неверный пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnikov.ru'); //верный логин
     cy.get('#pass').type('iLoveqastudio13'); //неверный пароль
     cy.get('#loginButton').click(); //нажать войти
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
     cy.get('#messageHeader').should('be.visible'); //видимость текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость крестик

}) 
    it('Неверный логин,верный пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german13@dolnikov.ru'); //неверный логин
     cy.get('#pass').type('iLoveqastudio1'); //верный пароль
     cy.get('#loginButton').click(); //нажать войти
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
     cy.get('#messageHeader').should('be.visible'); //видимость текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость крестик

}) 
    it('Проверка валидации', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('germandolnikov.ru'); // без@
     cy.get('#pass').type('iLoveqastudio1'); //верный пароль
     cy.get('#loginButton').click(); //нажать войти
     cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка текста
     cy.get('#messageHeader').should('be.visible'); //видимость текста

})
    it('Строчные буквы в логине', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('GerMan@Dolnikov.ru'); // логин
     cy.get('#pass').type('iLoveqastudio1'); //верный пароль
     cy.get('#loginButton').click(); //нажать войти
     cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка текста
     cy.get('#messageHeader').should('be.visible'); //видимость текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость крестик


    })
})
