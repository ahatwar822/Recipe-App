import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingelRecipe from '../components/RecipeDetails/SingelRecipe'
import Fav from '../components/Fav'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/recipes' element = {<Recipes/>}/>
            <Route path='/recipes/details/:id' element = {<SingelRecipe/>}/>
            <Route path='/create' element={<Create/>} />
            <Route path='/fav' element={<Fav/>} />

            <Route path='*' element={<h1>404 Page Not Found</h1>} />

        </Routes>
    </>
)
}

export default MainRoutes