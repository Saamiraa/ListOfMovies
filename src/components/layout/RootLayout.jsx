import { Fragment } from "react"
import { NavLink, Outlet } from "react-router-dom"
import './RootLayout.css'

function RootLayout() {
    return (
        <Fragment>
            <header className="rootContainer">
                <h1 className="rootHeader">ORIENTAL THEATRE</h1>
                <nav className="navBar">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='movies'>ListOfMovies</NavLink>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default RootLayout