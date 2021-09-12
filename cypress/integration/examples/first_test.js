
//Suite de casos de prueba
describe ('Primer conjunto de casos de prueba', function()
  {
      //aca van los casos redactados
      //cada caso comienza con la palabra it()
        //nombre del caso de uso
      it('Ingresar a la pagina principal de atenea',
      function()
      {
        //pasos a realizar aqui
        //cy es para llamar a cypress y sus metodos
        cy.visit("https://ateneaconocimientos.net/")

      })



  })

