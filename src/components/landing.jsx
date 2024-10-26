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
import eshop from "../assets/images/e-Shop.png"

function Landing() {
    return (
        <div className=" dark:bg-gray-950 dark:text-gray-400" > 
            <Navbar />
            <Home />
            <About />
            <Skills />

            <div id="projects" className="pt-20 md:pt-38  project " >
                <h1 className="text-3xl text-[#ff8484] font-medium text-center mb-5 ">My Projects</h1>
                <div className="flex justify-center flex-wrap gap-6 ">
                    <Project img={eshop} title={"e-Shop"} subtitle={"Frontend"} skill1={"React.js"} skill2={"Redux Toolkit"} skill3={"Tailwind"} live={"https://e-shop-flame-pi.vercel.app/"} repo={"https://github.com/aswin-pro/e-Shop"} />
                    <Project img={weather} title={"Weather App"} subtitle={"Frontend"} skill1={"React.js"} skill2={"API"} skill3={"TailwindCss"} live={"https://weather-app-react-lake-two.vercel.app/"} repo={"https://github.com/aswin-pro/Weather-app-react"} />
                    <Project img={actodo} title={"Actodo"} subtitle={"Frontend"} skill1={"React.js"} skill2={"useState"} skill3={"TailwindCss"} live={"https://actodo-react-nine.vercel.app/"} repo={"https://github.com/aswin-pro/Actodo-React"} />
                    <Project img={nostra} title={"Nostra"} subtitle={"Frontend"} skill1={"HTML"} skill2={"CSS"} skill3={"JavaScript"} live={"https://aswin-pro.github.io/Nostra-Ecommerce/"} repo={"https://github.com/aswin-pro/Nostra-Ecommerce"} />
                    <Project img={greendan} title={"Greenden"} subtitle={"Frontend"} skill1={"HTML"} skill2={"TailwindCss"} skill3={"JavaScript"} live={"https://aswin-pro.github.io/Greenden-Tailwind/"} repo={"https://github.com/aswin-pro/Greenden-Tailwind"} />
                    <Project img={teetopia} title={"TeeTopia"} subtitle={"Frontend"} skill1={"HTML"} skill2={"TailwindCss"} skill3={"Grid"} live={"https://aswin-pro.github.io/E-Commerce-Tailwindcss/"} repo={"https://github.com/aswin-pro/E-Commerce-Tailwindcss"} />
                </div>
            </div>
      
            <Contact />
            <Footer />
            <Floatinglogo />
        </div>
    )
}
export default Landing