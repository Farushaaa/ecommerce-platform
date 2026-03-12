
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import CartPage from "./pages/CartPage/CartPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import MainLayout from "./shared/layout/MainLayout.tsx";
import FavouritesPage from "./pages/FavoritesPage/FavouritesPage.tsx";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/favorites' element={<FavouritesPage/>} />
      </Route>

    </Routes>
  )
}

export default App
