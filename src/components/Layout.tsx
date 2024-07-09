import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="w-screen h-max font-inika bg-red-500/0 space-y-4 text-black">
        <Header />
        <main className="px-4">
            {children}
        </main>
        <Footer /> 
    </div>
  )
}
export default Layout