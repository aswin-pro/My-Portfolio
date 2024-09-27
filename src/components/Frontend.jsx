import html from "../assets/images/html-5.png"
import css from "../assets/images/css-3.png"
import js from "../assets/images/js (1).png"
import react from "../assets/images/react.png"
import tailwind from "../assets/images/tailwind.png"

function Frontend(){
    return(
        <>
        <div className="mt-10 text-center m-3 p-3 pb-10  border rounded-lg border-gray-200 dark:border-gray-500" data-aos="fade-right"> 
            <h1 className="py-2 font-medium text-xl">Frontend</h1>
        <div className=" grid grid-cols-3 gap-2 w-62 " >
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={html} alt="" className="w-6"/>
                <p className="font-medium">HTML</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={css} alt="" className="w-6"/>
                <p className="font-medium">CSS</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={js} alt="" className="w-6"/>
                <p className="font-medium">JavaScript</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={react} alt="" className="w-6"/>
                <p className="font-medium">React js</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={tailwind} alt="" className="w-6 mt-1"/>
                <p className="font-medium mt-2">TailwindCss</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Frontend