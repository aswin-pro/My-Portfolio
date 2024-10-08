import img3 from "../assets/images/my_pro.png"
import Homebtn from "./Homebtn"
function Home()
{
    return(
        <div className="dark:bg-gray-950  dark:text-white">
            <div className="pt-20 md:pt-40 flex justify-center">
                <img src={img3} alt="profile-image" className="w-32 rounded-full  profile-one dark:opacity-[0.6] "/>
            </div>
            <div className=" text-center mt-5" >
                 <h1  className="text-3xl"><span className="text-[#ff8484]">I am</span> Aswin</h1>
            </div>
            <div className="text-black dark:text-white mt-2  text-center font-medium" >
                <span className="letter">F</span> 
                <span className="letter">r</span>
                <span className="letter">o</span>
                <span className="letter">n</span>
                <span className="letter">t</span>
                <span className="letter">e</span>
                <span className="letter">n</span>
                <span className="letter">d</span> 
                <span className="letter">&nbsp;</span>
                <span className="letter">D</span> 
                <span className="letter">e</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
                <span className="letter">l</span>
                <span className="letter">o</span>
                <span className="letter">p</span>
                <span className="letter">e</span>
                <span className="letter">r</span>
            </div>
            <div className="mx-10 mt-3 text-center md:mx-40 md:text-xl dark:text-gray-400">
                <p>I am a Frontend Developer passionate about creating user-friendly web solutions that solve real-world problems. With a focus on design and creativity, I build visually appealing and functional websites. My commitment to staying current with web development trends ensures my work consistently exceeds expectations.</p>
            </div>
            <div>
                <Homebtn/>
            </div>
        </div>
    )
}
export default Home