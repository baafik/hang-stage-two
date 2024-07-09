import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Cart from "./routes/Cart"

import "./routes.css"
import Checkout from "./routes/Checkout"

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
            element: <Checkout />
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
export default Router