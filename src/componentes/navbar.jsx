import {Link , NavLink} from 'react-router-dom'

export function Navbar(){
    return(<>
        <nav className="navbar">
            {/* Link funciona com un anchor (<a>) pero interno a React, no recarga toda la página */}
            <Link to="/">Inicio </Link>

            <NavLink to="/Error" className={({isActive})=> isActive ? 'Link-activo' : ''}>
                Error
            </NavLink>
            <NavLink to="/Vieja" className={({isActive})=> isActive ? 'Link-activo' : ''}>
                  Pagina Vieja
            </NavLink>
        </nav>
    </>)
}