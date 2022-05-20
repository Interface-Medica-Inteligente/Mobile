import { State } from '../reducers'

const getRecipes = (state: State) => state.recipe.entities.recipes || []
const getSelectedRecipe = (state: State) => state.recipe.entities.selectedRecipe

export default {
  getRecipes,
  getSelectedRecipe
}
