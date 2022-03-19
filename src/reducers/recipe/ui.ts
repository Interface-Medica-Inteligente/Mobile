// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  fetching: boolean,
  error?: string | null
}

const initialState: State = {
  fetching: false,
  error: null
}

const recipeUiSlice = createSlice({
  name: 'recipe/ui',
  initialState,
  reducers: {
    requestRegisterRecipe: () => {
      return { fetching: true, error: null }
    },
    requestFilterRecipe: () => {
      return { fetching: true, error: null }
    },
    requestPDFRecipe: () => {
      return { fetching: true, error: null }
    },
    requestRecipes: () => {
      return { fetching: true, error: null }
    },
    failure: (action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload }
    }
  }
})

export default {
  initialState,
  ...recipeUiSlice
}
