import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingelRecipe from '../components/RecipeDetails/SingelRecipe'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/recipes' element = {<Recipes/>}/>
            <Route path='/recipes/details/:id' element = {<SingelRecipe/>}/>
            <Route path='/create' element={<Create/>} />

        </Routes>
    </>
)
}

export default MainRoutes