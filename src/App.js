import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { InicioPages } from './pages/inicio/InicioPages'
import { InicioColombiaPages } from './pages/inicioColombia/InicioColombia'
import {InicioChilePage} from './pages/inicioChile/inicioChilePages'
import { InicioArgentinaPage} from './pages/inicioArgentina/inicioArgentinaPage'
import { HeaderComponent } from "./components/header/HeaderComponent"
import {FooterComponent} from "./components/footer/footer"


function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<InicioPages></InicioPages>}></Route>
        <Route path='/colombia' element={<InicioColombiaPages></InicioColombiaPages>}></Route>
        <Route path='/chile' element={<InicioChilePage></InicioChilePage>}></Route>
        <Route path='/argentina' element={<InicioArgentinaPage></InicioArgentinaPage>}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>
    
  );
}

export default App;
