import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../routes.css"

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="w-screen h-max font-inika bg-red-500/0 space-y-4 text-black overflow-x-hidden">
        <Header />
        <main className="px-4">
            {children}
        </main>
        <Footer /> 
    </div>
  )
}
export default Layout