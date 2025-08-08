Feature: Login

    Scenario Outline: Tentativa de login sucesso e falha
        Given Eu estou na pagina de login
        When Eu digito meu "<email>" e "<senha>"
        Then <resultado>

    Examples:
      | email                        | senha  | resultado                       |
      | luiz@teste.com               | teste  | eu faco o login com sucesso     |
      | luizinvalidologin@teste.com  | teste  | eu recebo uma mensagem de erro  |
