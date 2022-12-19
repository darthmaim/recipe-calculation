import { clone } from '@devoxa/flocky'
import { RecipeTreeWithCraftFlags } from '../src/types'
import { updateTree } from '../src'

describe('updateTree', () => {
  const calculatedTree: RecipeTreeWithCraftFlags = {
    craft: true,
    craftPrice: 384,
    id: 1,
    output: 1,
    quantity: 1,
    totalQuantity: 2,
    usedQuantity: 2,
    decisionPrice: 384,
    craftResultPrice: 384,
    buyPrice: 20,
    buyPriceEach: 10,
    type: 'Recipe',
    min_rating: 123,
    disciplines: ['Chef'],
    components: [
      {
        decisionPrice: 84,
        craftResultPrice: 84,
        buyPrice: 84,
        buyPriceEach: 42,
        craft: false,
        id: 2,
        output: 1,
        quantity: 1,
        totalQuantity: 2,
        usedQuantity: 2,
        type: 'Item',
        min_rating: null,
        disciplines: [],
      },
      {
        decisionPrice: 100,
        craftResultPrice: 100,
        buyPrice: 100,
        buyPriceEach: 10,
        craft: false,
        craftPrice: 200,
        id: 3,
        output: 1,
        quantity: 5,
        totalQuantity: 10,
        usedQuantity: 10,
        type: 'Recipe',
        min_rating: null,
        disciplines: [],
        components: [
          {
            decisionPrice: 200,
            craftResultPrice: 200,
            buyPrice: 200,
            buyPriceEach: 10,
            craft: false,
            id: 4,
            output: 1,
            quantity: 2,
            totalQuantity: 20,
            usedQuantity: 20,
            type: 'Item',
            min_rating: null,
            disciplines: [],
          },
        ],
      },
      {
        decisionPrice: 200,
        craftResultPrice: 200,
        buyPrice: 10000,
        buyPriceEach: 1000,
        craft: true,
        craftPrice: 200,
        id: 5,
        output: 1,
        quantity: 5,
        totalQuantity: 10,
        usedQuantity: 10,
        type: 'Recipe',
        min_rating: null,
        disciplines: [],
        components: [
          {
            decisionPrice: 200,
            craftResultPrice: 200,
            buyPrice: 200,
            buyPriceEach: 10,
            craft: false,
            id: 6,
            output: 1,
            quantity: 2,
            totalQuantity: 20,
            usedQuantity: 20,
            type: 'Item',
            min_rating: null,
            disciplines: [],
          },
        ],
      },
    ],
  }

  it('keeps the tree the same if nothing changed', () => {
    const tree = clone(calculatedTree)
    const prices = { 1: 10, 2: 42, 3: 10, 4: 10, 5: 1000, 6: 10 }
    const updatedTree = updateTree(2, tree, prices)
    expect(updatedTree).toEqual(calculatedTree)
  })

  it('updates a tree correctly if the amount, prices or craft flags changed', () => {
    const tree = clone(calculatedTree)
    tree.components![1].craft = true // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const prices = { 1: 10, 2: 42, 3: 10, 4: 10, 5: 1000, 6: 11 }
    const updatedTree = updateTree(5, tree, prices)
    expect(updatedTree).toMatchSnapshot()
  })

  it('updates a tree correctly if the available items changed', () => {
    const tree = clone(calculatedTree)
    tree.components![1].craft = true // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const prices = { 1: 10, 2: 42, 3: 10, 4: 10, 5: 1000, 6: 11 }
    const updatedTree = updateTree(5, tree, prices, { 2: 1000 })
    expect(updatedTree).toMatchSnapshot()
  })
})
