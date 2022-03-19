// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  recipes: any[],
  selectedRecipe: any
}

const initialState: State = {
  recipes: [],
  selectedRecipe: null
}

const recipeUiSlice = createSlice({
  name: 'recipe/entity',
  initialState,
  reducers: {
    setRecipes: (state: State, action: PayloadAction<any>) => {
      return { ...state, recipes: action.payload }
    },
    setSelectedRecipe: (state: State, action: PayloadAction<any>) => {
      return { ...state, selectedRecipe: action.payload }
    }
  }
})

export default {
  initialState,
  ...recipeUiSlice
}
