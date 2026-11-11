/* ==========================================================================
   BOM FILHO MARITUBA - ARQUIVO DE CONFIGURACAO DO SITE
   --------------------------------------------------------------------------
   ESTE E O UNICO ARQUIVO QUE VOCE PRECISA MEXER NO DIA A DIA.
   Aqui voce muda: WhatsApp, endereco, horarios, taxa de entrega,
   formas de pagamento e todos os itens do cardapio (nome, preco, foto).

   COMO EDITAR COM SEGURANCA:
   - Troque somente o que esta entre aspas "assim" ou os numeros.
   - Nao apague virgulas, chaves { } ou colchetes [ ].
   - Depois de salvar, atualize a pagina no navegador (tecla F5).
   ========================================================================== */

const CONFIG = {
  /* ---- IDENTIDADE DA CASA ---- */
  marcaLinha1: "LA’ PIZZA",
  marcaLinha2: "DELIVERY",
  tagline: "PIZZAS ARTESANAIS • DELIVERY",

  /* ---- WHATSAPP QUE RECEBE OS PEDIDOS ----
     Formato: 55 + DDD + numero, tudo junto e sem espacos.
     Exemplo Marituba/PA: "5591988887777"                                   */
  whatsapp: "559182690437",

  /* ---- ENDERECO (aparece no rodape) ---- */
  enderecoLinha1: "LA’ PIZZA DELIVERY",
  enderecoLinha2: "CONSULTE A ÁREA DE ENTREGA",
  enderecoLinha3: "",

  /* ---- HORARIO DE FUNCIONAMENTO ---- */
  horarioLinha1: "TERCA A DOMINGO: 18H AS 00H",
  horarioLinha2: "FECHADO AS SEGUNDAS",

  /* ---- ENTREGA ---- */
  taxaEntrega: 0,              // Taxa em reais. Use 0 para entrega gratis.
  pedidoMinimo: 0,               // Valor minimo do pedido. Use 0 para nenhum.

  /* ---- FORMAS DE PAGAMENTO ACEITAS ---- */
  pagamentos: ["PIX", "Dinheiro", "Cartao de credito", "Cartao de debito"]
};

/* ==========================================================================
   CARDAPIO
   --------------------------------------------------------------------------
   Cada item tem:
     categoria -> "pizzas", "burgers" ou "bebidas"
     nome      -> nome que aparece no card
     descricao -> ingredientes, uma linha
     preco     -> use ponto no lugar da virgula. Ex.: 49.90
     foto      -> caminho da imagem dentro de assets/img/
     esgotado  -> true esconde o botao e marca como indisponivel (opcional)

   PARA ADICIONAR UM ITEM: copie um bloco { ... } inteiro, cole abaixo dele,
   coloque uma virgula entre os blocos e troque os textos.
   PARA TROCAR A FOTO: coloque a sua imagem na pasta assets/img/ e escreva o
   nome dela aqui. Fotos quadradas ficam melhores.
   ========================================================================== */

const CARDAPIO = [
  { categoria: "pizzas", nome: "PIZZA CALABRESA", descricao: "Tamanho G • Molho de tomate, mussarela, calabresa, cebola e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-calabresa.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA PRESUNTO", descricao: "Tamanho G • Molho de tomate, mussarela, presunto, tomate e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-calabresa.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA MISTA", descricao: "Tamanho G • Molho de tomate, mussarela, calabresa, presunto, azeitona, cebola e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-calabresa-bacon.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA MARGUERITA", descricao: "Tamanho G • Molho de tomate, mussarela, tomate, manjericão e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-marguerita.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA 4 QUEIJOS", descricao: "Tamanho G • Molho de tomate, mussarela, provolone, ricota, Catupiry e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-quatro-queijos.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA PORTUGUESA", descricao: "Tamanho G • Molho de tomate, mussarela, calabresa, cebola, pimentão, azeitona, ovos e orégano. Acompanha Guaraná Garoto 1 L.", preco: 40.00, foto: "assets/img/pizza-portuguesa.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA FRANGO COM CATUPIRY", descricao: "Tamanho G • Molho de tomate, mussarela, frango, Catupiry, azeitona e orégano.", preco: 50.00, foto: "assets/img/pizza-frango-catupiry.jpg?v=20261111" },
  { categoria: "pizzas", nome: "PIZZA MODA DA CASA", descricao: "Tamanho G • Molho de tomate, mussarela, peito de peru, bacon, tomate, Catupiry e orégano.", preco: 60.00, foto: "assets/img/pizza-calabresa-bacon.jpg?v=20261111" }
];
