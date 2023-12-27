import { Outlet } from "react-router-dom"
import './MovieLayout.css'

function MovieLayout() {
    return (
        <div className="headerContainer">
            <h3>Here Are UpComing Movies</h3>
            <p className="pragraph">Click on any photo for more information and reservations</p>
            <Outlet />
        </div>
    )
}

export default MovieLayout