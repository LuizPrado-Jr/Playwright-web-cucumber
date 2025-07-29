Feature: Fluxo de compra em e-commerce

  Scenario: Finalizar uma compra com sucesso
    Given que estou logado na loja
    When adiciono um produto ao carrinho
    And avanço para o checkout
    And preencho o formulário de compra
    Then vejo a confirmação de pedido com sucesso