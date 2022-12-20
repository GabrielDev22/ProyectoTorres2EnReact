import "./HeaderComponent.css"
import {Link} from "react-router-dom"
export const HeaderComponent = () => {

    return(
        <header>
        <nav id="menu">                                                                                                                                      
        <ul><img class ="icono2" src="imagenes/home.svg" alt="" />
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <a href=".">Paises</a>
            </li>
        </ul>

        <ul>
            <li>
                <Link to="/colombia">Colombia</Link>
            </li>

            <li>
                <Link to="/chile">Chile</Link>
            </li>

            <li>
                <Link to="/argentina">Argentina</Link>
            </li>

        </ul>

        <ul>
            <li>
                <a href=".">Tutoriales</a>
            </li>

            <li>
                <a href=".">Contactanos</a>
            </li>

            <ul>
                <li>
                    <a href="http://www.facebook.com" title="facebook" target="_blank" rel="noreferrer">Facebook</a>
                </li>

                <li>
                    <a href="http://www.instagram.com" title="facebook" target="_blank" rel="noreferrer">Instagram</a>
                </li>
            </ul>
        </ul>    
   </nav>
</header>
    )
}