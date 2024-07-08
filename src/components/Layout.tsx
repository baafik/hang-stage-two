import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return (
    <main className="w-screen h-max font-inika bg-red-500/0">
        <Header />
            {children}
        <Footer /> 
    </main>
  )
}
export default Layout