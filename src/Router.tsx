import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Cart from "./routes/Cart"

import "./routes.css"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <div>404</div>
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "checkout",
            element: <></>
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
export default Router