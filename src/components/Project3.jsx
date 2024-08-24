import nostra from "../assets/images/nostra.png"
function Project2(){
    return(
        <>
            <div className="m-3 border border-gray-200 p-2 pro-img hover:shadow-lg cursor-pointer">
                <div>
                    <img src={nostra} alt="" className=" " />
                    <h1 className="text-center font-medium text-xl mt-1">Nostra</h1>
                    <p className="text-xl text-center font-semibold text-gray-500">Frontend</p>
                </div>
                <div className="flex justify-center gap-2 mt-1 ">
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">JavaScript</p>
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">HTML</p>
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">CSS</p>
                </div>
                <div className="mt-4 flex justify-center gap-2 mb-5">
                    <a href="https://aswin-pro.github.io/Nostra-Ecommerce/" target="_blank" className="text-center border border-x-2 border-red-500 p-1 px-6 rounded-lg w-36"><button>Live</button></a>
                    <a href="https://github.com/aswin-pro/Nostra-Ecommerce" target="_blank" className="text-center border border-x-2 border-red-500 p-1 px-6 rounded-lg w-36 bg-red-500 text-white"><button>Repo </button></a>
                </div>
            </div>
        </>
    )
}
export default Project2