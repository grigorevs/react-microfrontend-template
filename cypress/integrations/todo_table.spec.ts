describe('TodoTable E2E Test', () => {
    it('should display at least one todo item in the table', () => {
      // 1. Посетите страницу с TodoTable
      cy.visit('/'); // Замените '/' на URL вашей страницы с TodoTable
  
      // 2. Найдите таблицу (TodoTable)
      cy.get('[data-cy="todo-table"]'); // Лучше использовать data-cy
  
      // 3. Проверьте, что в таблице есть хотя бы одна строка с данными
      cy.get('[data-cy="todo-table"] tbody tr') //  Находим строки в таблице
        .should('have.length.greaterThan', 0); //  Убеждаемся, что их больше 0
    });
  });