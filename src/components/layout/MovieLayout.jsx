import { Outlet } from "react-router-dom"
import './MovieLayout.css'

function MovieLayout() {
    return (
        <div className="movieLayoutContainer">
            <h3 className="movieLayoutHeader">Here Are UpComing Movies</h3>
            <p className="movieLayoutContext">Click on any photo for more information and reservations</p>
            <Outlet />
        </div>
    )
}

export default MovieLayout