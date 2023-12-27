import Home from "./components/pages/Home";
import RootLayout from "./components/layout/RootLayout";
import ListOfMovies from "./components/pages/ListOfMovies";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MovieLayout from "./components/layout/MovieLayout";
import MovieDetail from "./components/pages/MovieDetail";
import { movieDetailLoader } from "./components/pages/MovieDetail";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Movies" element={<MovieLayout />}>
        <Route index element={<ListOfMovies />} />
        <Route path=":id" element={<MovieDetail />} loader={movieDetailLoader} />
      </Route>
    </Route>
  )
)


function App() {
  return <RouterProvider router={router} />
}
export default App