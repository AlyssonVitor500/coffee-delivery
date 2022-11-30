import espressoSVG from '../assets/coffees/espresso.svg'
import americanEspressoSVG from '../assets/coffees/americanEspresso.svg'
import creamyEspressoSVG from '../assets/coffees/creamyEspresso.svg'
import icedEspressoSVG from '../assets/coffees/icedEspresso.svg'
import coffeeWithMilkSVG from '../assets/coffees/coffeeWithMilk.svg'
import latteSVG from '../assets/coffees/latte.svg'
import cappuccinoSVG from '../assets/coffees/cappuccino.svg'
import macchiatoSVG from '../assets/coffees/macchiato.svg'
import mocaccinoSVG from '../assets/coffees/mocaccino.svg'
import hotChocolateSVG from '../assets/coffees/hotChocolate.svg'
import cubanSVG from '../assets/coffees/cuban.svg'
import hawaiianSVG from '../assets/coffees/hawaiian.svg'
import arabicSVG from '../assets/coffees/arabic.svg'
import irishSVG from '../assets/coffees/irish.svg'

enum LabelsList {
  TRADICIONAL = 'TRADICIONAL',
  GELADO = 'GELADO',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO',
}

export interface CoffeeInterface {
  name: string
  labelList: LabelsList[]
  description: string
  coffeeAmount: number
  coffeePrice: number
  coffeSVG: string
}

export const coffeeDataList: CoffeeInterface[] = [
  {
    name: 'Expresso Tradicional',
    labelList: [LabelsList.TRADICIONAL],
    description: 'O tradicional café feito com água quente e grãos moídos',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: espressoSVG,
  },
  {
    name: 'Expresso Americano',
    labelList: [LabelsList.TRADICIONAL],
    description: 'Expresso diluído, menos intenso que o tradicional',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: americanEspressoSVG,
  },
  {
    name: 'Expresso Cremoso',
    labelList: [LabelsList.TRADICIONAL],
    description: 'Café expresso tradicional com espuma cremosa',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: creamyEspressoSVG,
  },
  {
    name: 'Expresso Gelado',
    labelList: [LabelsList.TRADICIONAL, LabelsList.GELADO],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: icedEspressoSVG,
  },
  {
    name: 'Café com Leite',
    labelList: [LabelsList.TRADICIONAL, LabelsList.COM_LEITE],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: coffeeWithMilkSVG,
  },
  {
    name: 'Latte',
    labelList: [LabelsList.TRADICIONAL, LabelsList.COM_LEITE],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: latteSVG,
  },
  {
    name: 'Capuccino',
    labelList: [LabelsList.TRADICIONAL, LabelsList.COM_LEITE],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: cappuccinoSVG,
  },
  {
    name: 'Macchiato',
    labelList: [LabelsList.TRADICIONAL, LabelsList.COM_LEITE],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: macchiatoSVG,
  },
  {
    name: 'Mocaccino',
    labelList: [LabelsList.TRADICIONAL, LabelsList.COM_LEITE],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: mocaccinoSVG,
  },
  {
    name: 'Chocolate Quente',
    labelList: [LabelsList.ESPECIAL, LabelsList.COM_LEITE],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: hotChocolateSVG,
  },
  {
    name: 'Cubano',
    labelList: [LabelsList.ESPECIAL, LabelsList.ALCOOLICO, LabelsList.GELADO],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: cubanSVG,
  },
  {
    name: 'Havaiano',
    labelList: [LabelsList.ESPECIAL],
    description: 'Bebida adocicada preparada com café e leite de coco',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: hawaiianSVG,
  },
  {
    name: 'Árabe',
    labelList: [LabelsList.ESPECIAL],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: arabicSVG,
  },
  {
    name: 'Irlandês',
    labelList: [LabelsList.ESPECIAL, LabelsList.ALCOOLICO],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    coffeePrice: 9.99,
    coffeeAmount: 1,
    coffeSVG: irishSVG,
  },
]
