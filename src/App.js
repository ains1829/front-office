import { Route, Routes, useLocation } from 'react-router-dom';
import Acceuils from './page/Acceuil';
import Recherche from './page/Recherche';
import Details from './page/Details';
import Message from './page/Message';
import Login from './page/Login';
import Favoris from './page/Favoris';
import Mesannonce from './page/Mesannonce';
import MonSolde from './page/MonSolde';
function App() { 
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' Component={Acceuils}></Route>
      <Route path='/acceuil' Component={Acceuils}></Route>
      <Route path='/recherche' Component={Recherche}></Route>
      <Route path='/details/:id' Component={Details}></Route>
      <Route path='/message' Component={Message}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/favorie' Component={Favoris}></Route>
      <Route path='/mysolde' Component={MonSolde}></Route>
      <Route path='/mesannonce' Component={Mesannonce}></Route>
    </Routes>
  );
}
export default App;
