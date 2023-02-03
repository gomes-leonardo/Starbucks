import Mocha from "../../src/assets/images/mocha_1_.webp";
import Latte from "../../src/assets/images/11_12398624_starbucks_latte_macchiato_caps.webp";
import Guatemala from "../../src/assets/images/guatemalamagento_1_.webp";
import Colombia from "../../src/assets/images/colombia.webp";
import Escura from "../../src/assets/images/escura.webp";
import Verona from "../../src/assets/images/verona.webp";
import Capuccino from "../../src/assets/images/capuccino.webp";
import Blonde from "../../src/assets/images/blonde.webp";
import Roast from "../../src/assets/images/medium-roast.webp";
import Vanilla from "../../src/assets/images/vanillalatte.webp";
import Torrado from "../../src/assets/images/torrado.webp";
import Pike from "../../src/assets/images/pike-place.webp";

// Type Coffee
import typeMocha from "../../src/assets/images/coffee_type_premium_instant_coffee.png";
import TypeNescafe from "../../src/assets/images/coffee_type_dolce_gusto.png";
import TypeNespresso from "../../src/assets/images/coffee_type_nespresso.png";
import TypeTorrado from "../../src/assets/images/type-torrado.png";

export const coffees = [
  {
    id: 1,
    nome: "Starbucks® Mix Caffè Mocha - 4 sachês de 21,5 g",
    marca: "Café Instantâneo  Premium",
    fullDescription:
      "Inspirados no Starbucks® Caffè Mocha que você adora, criamos esta bebida rica em chocolate para você preparar em casa usando os mesmos grãos 100% arábica de alta qualidade usados em nossos cafés. Habilmente misturado com leite e cacau, é coberto com uma camada macia de espuma para você desfrutar de uma bebida Starbucks deliciosamente familiar.",
    valor: 21.14,
    unidade: 4,
    desconto: 25.99,
    description:
      "Esta bebida rica e achocolatada combina grãos 100% arábica, leite e cacau coberto com uma camada macia de espuma.",
    path: "/mixcaffe",
    image: Mocha,
    type: typeMocha,
  },

  {
    id: 2,
    nome: "Starbucks® Latte Macchiato by NESCAFÉ®",
    marca: "Nescafé  Dolce Gusto",
    fullDescription:
      "Inspirado no Starbucks Latte Macchiato que você ama, aveludado, cremoso e delicioso como você já conhece, feito em casa com a sua máquina Nescafé Dolce Gusto. Prepare-o sem esforço com a cápsulas de café e leite Starbucks® Latte Macchiato by NESCAFÉ®Dolce Gusto® para máquinas de café NESCAFÉ®Dolce Gusto®",
    valor: 24.29,
    unidade: 12,
    desconto: 29.99,
    description:
      "Aveludado, rico e deliciosamente familiar, beba e desfrute do café que adora, em casa.",
    type: TypeNescafe,
    path: "/lattemac",
    image: Latte,
  },

  {
    id: 3,
    nome: "Starbucks® Single-Origin Guatemala by Nespresso®",
    marca: "Nespresso  Torra Clara",
    valor: 30.29,
    desconto: 39.99,
    unidade: 10,
    type: TypeNespresso,
    fullDescription:
      "Nosso desejo pelo café da Guatemala sempre esteve presente, e este café de origem única representa tudo o que mais valorizamos no país - das paisagens vulcânicas deslumbrantes aos sabores coomplexos que emanam de suas fazendas de café. Especialmente torrado, o café destaca os sabores intensos de limão cristalizado e um paladar redondo, com equilíbrio marcante e toque final de cacau pelo qual o café da Guatemala é conhecido.",
    description:
      "Beba e saboreie esta origem única da Guatemala, café torrado acentuando notas de limão cristalizado, caramelo doce com um toque de cacau no final.",
    path: "/guatemala",
    image: Guatemala,
  },

  {
    id: 4,
    nome: "Starbucks® Single-Origin Colombia 250g",
    marca: "Starbucks  Torra Moído",
    valor: 26.49,
    desconto: 32.99,
    fullDescription:
      "Sempre amamos o café da Colômbia. E nunca nos lembramos desse amor mais do que quando viajamos para as fazendas de café. Dirigindo em estradas de terra traiçoeiras com uma parede de montanha íngreme de um lado - nada além de ar por milhares de pés do outro. Para nós, o corpo redondo, o sabor suculento e o característico final de noz deste café 100% colombiano valem a viagem todas as vezes.",
    description:
      "Beba e saboreie este café colombiano de origem única com corpo redondo, sabor suculento e final característico de nozes.",
    unidade: 10,
    path: "/colombia",
    type: TypeTorrado,
    image: Colombia,
  },

  {
    id: 5,
    nome: "Starbucks® Espresso Roast by Nespresso® ",
    marca: "Nespresso  Torra Escura",
    valor: 30.6,
    desconto: 39.99,
    fullDescription:
      "É aqui que se inicia a historia de todas as bebidas com café espresso que preparamos para você. Tudo começou em 1975 com a busca pela perfeita combinação de grãos e torra. Foram meses de intenso trabalho para produzir o café que agora você tem em suas mãos, uma receita tão perfeita que nunca foi alterada, com uma doçura rica e caramelizada.",

    description:
      "Uma deliciosa mistura de cafés da América Latina e da Ásia / Pacífico, este espresso tem uma doçura rica e caramelada e está no coração de nosso café com leite artesanal.",
    unidade: 10,
    type: TypeNespresso,
    path: "/esproast",
    image: Escura,
  },

  {
    id: 6,
    nome: "Starbucks® Caffè Verona™ ",
    marca: "Nespresso  Torra Média",
    valor: 25.99,
    desconto: 29.99,
    unidade: 10,
    type: TypeNespresso,
    fullDescription:
      "Este é o café de um único e verdadeiro amor, mas com 3 nomes. Ele foi criado em 1975 para um restaurante de Seattle e foi chamado de Jake's Blend. As pessoas gostaram tanto que passamos a vende-lo em nossas lojas com o nome de Blend 80/20, por causa da sua receita.",

    description:
      "As notas doces e torradas com cacau preto deste blend, originam uma equilibrada xícara de café.",
    path: "/verona",

    image: Verona,
  },
  {
    id: 7,
    nome: "Starbucks® Cappuccino by NESCAFÉ® Dolce Gusto® ",
    marca: "Nescafé  Dolce Gusto",
    description:
      "Equilibrado, rico e deliciosamente familiar, beba e desfrute do café que adora, em casa.",
    valor: 19.99,
    desconto: 26.0,
    unidade: 12,
    fullDescription:
      "nspirado no Starbucks Cappuccino que você ama, equilibrado, indulgente e delicioso como você já conhece, feito em casa com a sua máquina NESCAFÉ® Dolce Gusto®",
    type: TypeNescafe,
    path: "/capunesc",
    image: Capuccino,
  },
  {
    id: 8,
    nome: "Starbucks® Sunny Day Blend by Nespresso® - ",
    marca: "Nespresso Torra Clara",
    valor: 33.29,
    desconto: 38.0,
    unidade: 12,
    fullDescription:
      "Nosso desejo pelo café da Guatemala sempre esteve presente, e este café de origem única representa tudo o que mais valorizamos no país - das paisagens vulcânicas deslumbrantes aos sabores coomplexos que emanam de suas fazendas de café. Especialmente torrado, o café destaca os sabores intensos de limão cristalizado e um paladar redondo, com equilíbrio marcante e toque final de cacau pelo qual o café da Guatemala é conhecido. ",
    type: TypeNespresso,
    description:
      "Saboreie um café da América Latina com um sabor suave e aveludado e notas subtilmente doces e vibrantes. Desfrute da nossa torrefação mais suave em casa.",
    path: "roastnesc",
    image: Blonde,
  },
  {
    id: 9,
    nome: " Starbucks® Dark Roast Lata - 90g- ",
    marca: "Café Instântaneo Premium  Torra média ",
    valor: 25.91,
    desconto: 31.99,
    description:
      "Desfrute de um café latino-americano equilibrado com notas cremosas de chocolate ao leite e nozes.",
    fullDescription:
      "Criado pelos mestres de torra da Starbucks e torrado na perfeição, este intenso Dark Roast latino-americano tem um sabor doce e torrado com notas de delicioso chocolate amargo. Usando os mesmos grãos 100% arábica de alta qualidade dos nossos cafés, de origem ética e sustentável, torramos os grãos com cuidado e os moemos em pó para que você possa desfrutar do seu café Starbucks favorito em casa.",

    unidade: 10,
    type: typeMocha,
    path: "/roastlata",
    image: Roast,
  },
  {
    id: 10,
    nome: " Starbucks® Mix Vanilla Latte 21,5 g - ",
    marca: "Café Instântaneo Premium  Torra escura ",
    valor: 19.91,
    desconto: 25.99,
    description:
      "Esta bebida rica e cremosa combina grãos 100% arábica, leite e nosso sabor característico de baunilha, coberto com uma camada macia de espuma.",
    fullDescription:
      "nspirados no clássico Starbucks Vanilla Latte, criamos esta bebida rica e cremosa para você preparar em casa usando os mesmos grãos 100% arábica de alta qualidade usados em nossos cafés. Misturado com leite e nosso sabor característico de baunilha, é coberto com uma camada macia de espuma para você desfrutar de uma bebida Starbucks deliciosamente familiar.",
    unidade: 4,
    type: typeMocha,
    path: "/vanillalatte",
    image: Vanilla,
  },
  {
    id: 11,
    nome: " Starbucks® Caffè Verona™ - ",
    marca: "Torrado Moído  Torra escura ",
    valor: 29.91,
    desconto: 35.99,
    fullDescription:
      "Este é o café de um único e verdadeiro amor, mas com 3 nomes. Ele foi criado em 1975 para um restaurante de Seattle e foi chamado de Jake's Blend. As pessoas gostaram tanto que passamos a vende-lo em nossas lojas com o nome de Blend 80/20, por causa da sua receita.",

    description:
      "O doce torrado com notas escuras de cacau deste blend, tornam esta xícara de café rica e equilibrada.",
    unidade: 8,
    path: "/veronatorrado",
    type: TypeTorrado,
    image: Torrado,
  },
  {
    id: 12,
    nome: " Starbucks® House Blend - ",
    marca: "Torrado Moído  Torra média ",
    valor: 39.91,
    desconto: 47.99,
    description:
      "Uma deliciosa mistura de cafés da América Latina e da Ásia / Pacífico, este espresso tem uma doçura rica e caramelada e está no coração de nosso café com leite artesanal.",
    unidade: 20,
    path: "/housebland",
    fullDescription:
      "Parece simples, mas não é. Esse blend dos melhores grãos da América Latina são torrados ao ponto marrom escuro brilhante. Carregado de sabores, equilibrando aromas de cacau, castanhas e o adocicado da torra, este café é o nosso começo, nosso primeiro blend criado para você em 1971. Nada mais que o nosso verdadeiro retrato e uma deliciosa xícara de café.",

    image: Pike,
    type: TypeTorrado,
  },
];
