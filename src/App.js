import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { InicioPages } from './pages/inicio/InicioPages'
import { InicioColombiaPages } from './pages/inicioColombia/InicioColombia'
import { HeaderComponent } from "./components/header/HeaderComponent"

function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<InicioPages></InicioPages>}></Route>
        <Route path='/colombia' element={<InicioColombiaPages></InicioColombiaPages>}></Route>
      </Routes>
      

    </Router>
    
  );
}

export default App;
