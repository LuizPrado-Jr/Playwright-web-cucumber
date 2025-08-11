Feature: Fluxo de compra em e-commerce

  Scenario: Fluxo completo de compra com validações
    Given que estou logado na loja
    When adiciono um produto ao carrinho
    When valido o produto "Sauce Labs Backpack" no carrinho
    When avanço para o checkout
    When preencho o formulário de compra validando produto "Sauce Labs Backpack", quantidade 1 e valor total "32.39"
    Then vejo a confirmação de pedido com sucesso