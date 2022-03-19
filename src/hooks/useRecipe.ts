import * as React from 'react'
import { useSelector } from 'react-redux'
import recipeSelector from '../selectors/recipeSelector'

const useRecipe = ({ setValue }) => {
  const recipe = useSelector(recipeSelector.getSelectedRecipe)

  React.useEffect(() => {
    if (recipe) {
      const keys = Object.keys(recipe)
      keys.forEach((key) => {
        const item = recipe[key]
        if (item) {
          setValue(key, item)
        }
      })
    }
  }, [recipe])
}

export default useRecipe
