import React from 'react'
import RecipeCard from './RecipeCard/RecipeCard'

const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem('fav'))

  const randerRecipes = favroite.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })

  return (
    <>
      <div className='flex flex-wrap gap-6 mt-9  '>{randerRecipes}</div>
    </>

  )
}

export default Fav