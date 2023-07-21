describe('Тестирование оформления заказа', function () {
   it('Оформляем заказ', function () {
        cy.visit('https://huntingpony.com');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.wait(2000);
        cy.get('[data-product-id="338933202"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').should('be.visible');
        cy.wait(1000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(1000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart').click();
        cy.get('.cart-controls > .button').click();
        cy.get('#client_surname').type('Душный');
        cy.get('#client_contact_name').type('Василий');
        cy.get('#client_phone').type('89999999999');
        cy.get('#client_email').type('adgfsgwea@mail.ru');
        cy.get('#delivery_title_5909897').click();
        cy.get('#shipping_address_street').type('Кронштадтская');
        cy.get('#shipping_address_house').type('11');
        cy.get('[for="order_payment_gateway_id_3184571"] > .co-payment_method-input > span').click();


    })
})