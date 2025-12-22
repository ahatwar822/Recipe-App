import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard/RecipeCard'

const Recipes = () => {
  const { data } = useContext(recipecontext)

  const randerRecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })

  return (
    <>
      <div className='flex flex-wrap gap-6 mt-9  '>{randerRecipes}</div>
    </>

  )
}

export default Recipes