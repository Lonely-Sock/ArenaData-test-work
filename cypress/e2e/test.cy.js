describe('Отправка сообщения', () => {
    it('Переход на страницу формы', () => {
        cy.fixture('formTest').then(data => {
            cy.log('Переход на страницу формы')
            cy.visit(data.url)
        
            cy.log('Получение формы')
            cy.get('#tte-i-33').scrollIntoView().should('be.visible').click()
            const getIframe =() => {
                return cy.get('iframe[id="ttgraf-33"]').its('0.contentDocument').should('exist')
            }
            const getBody = () => {
                return getIframe().its('body').should('not.be.undefined').then(cy.wrap)
            }

            cy.log('Заполнение формы')
            getBody()
                .find('[class="question question_107 question_type_1 question___df23e051d300eb092d0d"]')
                .find(data.classInput)
                .type(data.name)
            getBody()
                .find('[class="question question_108 question_type_1 question___df23e051d300eb092d0d"]')
                .find(data.classInput)
                .type(data.email)
            getBody()
                .find('[class="question question_56519 question_type_15 question___df23e051d300eb092d0d"]')
                .find('[class="label___d2136eb582d9c1b93bd8 placeholder___bbd31f6b2ddf2df48ff7 label___c76e42a70bb39451a92b"]')
                .click()
            getBody()
                .find('#popper')
                .contains(data.reason)
                .click()
            getBody()
                .find('[class="question question_110 question_type_2 question___df23e051d300eb092d0d"]')
                .find(data.classInput)
                .type(data.message)
            getBody()
                .find('[class="button button___fd25a2fb454e3f726adc blue___f42ee3b7578def392092 fluid___b8ec6d1bc6ffd588c6ef"]')
                .click()
            getBody().contains('Благодарим за обращение!')
                cy.log('Обращение отправлено')                         
        }) 
    })
})