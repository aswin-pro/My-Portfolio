import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import { Contact } from "./Contact"
import Footer from "./Footer"
import Floatinglogo from "./Flotinglogo"
//Projects
import Project from "./Project"
//Images 
import weather from "../assets/images/weather.png"
import actodo from "../assets/images/actodo.png"
import nostra from "../assets/images/nostra.png"
import greendan from "../assets/images/greendan.png"
import teetopia from "../assets/images/teetopia.png"
import tripadvisor from "../assets/images/tripadvisor.png"

function Landing() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />

            <div id="projects" className="pt-20 md:pt-38  project " >
                <h1 className="text-3xl text-[#ff8484] font-medium text-center mb-5 ">My Projects</h1>
                <div className="flex justify-center flex-wrap gap-6 ">
                    <Project img={weather} title={"Weather App"} subtitle={"Frontend"} skill1={"React Js"} skill2={"API"} skill3={"TailwindCss"} live={"https://weather-app-react-lake-two.vercel.app/"} repo={"https://github.com/aswin-pro/Weather-app-react"} />
                    <Project img={actodo} title={"Actodo"} subtitle={"Frontend"} skill1={"React Js"} skill2={"useState"} skill3={"TailwindCss"} live={"https://actodo-react-nine.vercel.app/"} repo={"https://github.com/aswin-pro/Actodo-React"} />
                    <Project img={nostra} title={"Nostra"} subtitle={"Frontend"} skill1={"HTML"} skill2={"CSS"} skill3={"JavaScript"} live={"https://aswin-pro.github.io/Nostra-Ecommerce/"} repo={"https://github.com/aswin-pro/Nostra-Ecommerce"} />
                    <Project img={greendan} title={"Greenden"} subtitle={"Frontend"} skill1={"HTML"} skill2={"TailwindCss"} skill3={"JavaScript"} live={"https://aswin-pro.github.io/Greenden-Tailwind/"} repo={"https://github.com/aswin-pro/Greenden-Tailwind"} />
                    <Project img={teetopia} title={"TeeTopia"} subtitle={"Frontend"} skill1={"HTML"} skill2={"TailwindCss"} skill3={"Grid"} live={"https://aswin-pro.github.io/E-Commerce-Tailwindcss/"} repo={"https://github.com/aswin-pro/E-Commerce-Tailwindcss"} />
                    <Project img={tripadvisor} title={"Tripadvisor"} subtitle={"Frontend"} skill1={"HTML"} skill2={"CSS"} skill3={"Flex"} live={"https://aswin-pro.github.io/Tripadvisor/"} repo={"https://github.com/aswin-pro/Tripadvisor"} />
                </div>
            </div>
      
            <Contact />
            <Footer />
            <Floatinglogo />
        </>
    )
}
export default Landing