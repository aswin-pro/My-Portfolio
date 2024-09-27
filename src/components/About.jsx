import img from "../assets/images/my_pro.png"
function About() {
    return (
        <div className=" dark:bg-gray-950">

            <div id="aboutme" className=" flex about pt-20 md:pt-38  md:mt-36  justify-center gap-20  ">

                <div className="bg-gray-50 dark:bg-gray-950 flex justify-center gap-20 py-2">
                <div className="about-one w-96 text-center md:text-justify">
                    <h1 className="text-center text-3xl font-medium text-[#ff8484] mb-5">About Me</h1>
                    <p className="ml-30  md:text-xl">I am a Frontend Developer with a passion for creating user-friendly and innovative web solutions. With a strong focus on design and creativity, I build visually appealing and functional websites that solve real-world problems and enhance user experiences. I am committed to staying current with the latest web development trends to ensure my work consistently exceeds expectations.

                        I am eager to apply my skills and enthusiasm in a dynamic environment and am actively seeking opportunities for internships and full-time positions. I look forward to contributing to impactful projects and continuing to grow as a developer.</p>

                    <div className="flex justify-center mt-5 md:flex-start">        
                        <a href="#contact" className="border border-x-2 text-center border-[#d45050] text-white p-2 rounded-lg w-36 bg-[#d45050] hover:bg-[#ff8484] hover:border-[#ff8484]"><button>Let's Talk </button></a>
                    </div>

                </div>
                <div className="hidden  md:flex about-two">
                    <img src={img} alt="progile-image " className="mt-16 w-40 h-48 rounded-r-3xl dark:opacity-[0.6] border filter drop-shadow-[0px_2px_4px_#ffffff]" />
                </div>
                </div>
            </div>

        </div>
    )
}
export default About