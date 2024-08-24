import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import { Contact } from "./Contact"
import Footer from "./Footer"
import Floatinglogo from "./Flotinglogo"

function Landing(){
    return(
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        <Floatinglogo/>
        </>
    )
}
export default Landing