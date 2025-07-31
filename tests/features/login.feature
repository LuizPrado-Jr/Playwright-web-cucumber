Feature: Login

    Scenario: Valid Login
        Given Eu estou na pagina de login
        When Eu digito meu "luiz@teste.com" e "teste"
        Then eu faco o login com sucesso

    Scenario: Login Invalido
        Given Eu estou na pagina de login
        When Eu digito meu "luizinvalidologin@teste.com" e "teste"
        Then eu recebo uma mensagem de erro
