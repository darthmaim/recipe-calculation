import { dailyCooldowns } from '../../src'
import { RecipeTreeWithCraftFlags } from '../../src/types'

describe('helpers > dailyCooldowns', () => {
  it('gets all daily cooldowns from a recipe tree', () => {
    const tree: RecipeTreeWithCraftFlags = {
      craft: true,
      id: 1,
      totalQuantity: 2,
      usedQuantity: 2,
      quantity: 2,
      type: 'Recipe',
      output: 1,
      min_rating: null,
      disciplines: [],
      buyPriceEach: 1,
      buyPrice: 1,
      decisionPrice: 1,
      craftResultPrice: 1,
      components: [
        {
          craft: false,
          id: 66913,
          totalQuantity: 6,
          usedQuantity: 6,
          quantity: 6,
          type: 'Recipe',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: 1,
          buyPrice: 1,
          decisionPrice: 1,
          craftResultPrice: 1,
          components: [
            {
              craft: false,
              id: 4,
              totalQuantity: 12,
              usedQuantity: 12,
              quantity: 12,
              type: 'Item',
              output: 1,
              min_rating: null,
              disciplines: [],
              buyPriceEach: 1,
              buyPrice: 1,
              decisionPrice: 1,
              craftResultPrice: 1,
              prerequisites: [],
            },
          ],
          prerequisites: [],
        },
        {
          craft: true,
          id: 46740,
          totalQuantity: 10,
          usedQuantity: 3,
          quantity: 10,
          type: 'Recipe',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: 1,
          buyPrice: 1,
          decisionPrice: 1,
          craftResultPrice: 1,
          components: [
            {
              craft: true,
              id: 19,
              totalQuantity: 3,
              usedQuantity: 3,
              quantity: 3,
              type: 'Recipe',
              output: 1,
              min_rating: null,
              disciplines: [],
              buyPriceEach: 1,
              buyPrice: 1,
              decisionPrice: 1,
              craftResultPrice: 1,
              components: [
                {
                  craft: true,
                  id: 66913,
                  totalQuantity: 3,
                  usedQuantity: 3,
                  quantity: 3,
                  type: 'Recipe',
                  output: 1,
                  min_rating: null,
                  disciplines: [],
                  buyPriceEach: 1,
                  buyPrice: 1,
                  decisionPrice: 1,
                  craftResultPrice: 1,
                  components: [
                    {
                      craft: false,
                      id: 4,
                      totalQuantity: 6,
                      usedQuantity: 6,
                      quantity: 6,
                      type: 'Item',
                      output: 1,
                      min_rating: null,
                      disciplines: [],
                      buyPriceEach: 1,
                      buyPrice: 1,
                      decisionPrice: 1,
                      craftResultPrice: 1,
                      prerequisites: [],
                    },
                  ],
                  prerequisites: [],
                },
              ],
              prerequisites: [],
            },
          ],
          prerequisites: [],
        },
        {
          craft: false,
          id: 5,
          totalQuantity: 4,
          usedQuantity: 0,
          quantity: 4,
          type: 'Recipe',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: 1,
          buyPrice: 1,
          decisionPrice: 1,
          craftResultPrice: 1,
          components: [
            {
              craft: false,
              id: 6,
              totalQuantity: 0,
              usedQuantity: 0,
              quantity: 0,
              type: 'Item',
              output: 1,
              min_rating: null,
              disciplines: [],
              buyPriceEach: 1,
              buyPrice: 1,
              decisionPrice: 1,
              craftResultPrice: 1,
              prerequisites: [],
            },
          ],
          prerequisites: [],
        },
        {
          craft: true,
          id: 66913,
          totalQuantity: 1,
          usedQuantity: 1,
          quantity: 1,
          type: 'Recipe',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: 1,
          buyPrice: 1,
          decisionPrice: 1,
          craftResultPrice: 1,
          components: [
            {
              craft: true,
              id: 7,
              totalQuantity: 6,
              usedQuantity: 6,
              quantity: 6,
              type: 'Recipe',
              output: 1,
              min_rating: null,
              disciplines: [],
              buyPriceEach: 1,
              buyPrice: 1,
              decisionPrice: 1,
              craftResultPrice: 1,
              components: [
                {
                  craft: false,
                  id: 4,
                  totalQuantity: 12,
                  usedQuantity: 12,
                  quantity: 12,
                  type: 'Item',
                  output: 1,
                  min_rating: null,
                  disciplines: [],
                  buyPriceEach: 1,
                  buyPrice: 1,
                  decisionPrice: 1,
                  craftResultPrice: 1,
                  prerequisites: [],
                },
              ],
              prerequisites: [],
            },
          ],
          prerequisites: [],
        },
        {
          craft: true,
          id: 46736,
          totalQuantity: 1,
          usedQuantity: 1,
          quantity: 1,
          type: 'Item',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: 1,
          buyPrice: 1,
          decisionPrice: 1,
          craftResultPrice: 1,
          prerequisites: [],
        },
        {
          craft: false,
          id: 1,
          totalQuantity: 1,
          usedQuantity: 1,
          quantity: 1,
          type: 'Currency',
          output: 1,
          min_rating: null,
          disciplines: [],
          buyPriceEach: false,
          buyPrice: false,
          decisionPrice: false,
          craftResultPrice: false,
          prerequisites: [],
        },
      ],
      prerequisites: [],
    }

    expect(dailyCooldowns(tree)).toEqual({
      46740: 3,
      66913: 4,
    })
  })
})
