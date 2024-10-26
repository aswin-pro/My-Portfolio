function Project(props){ //props={img:weather}
    return(
        <>
            <div className="m-3 border border-gray-200 dark:border-gray-500 p-2 pro-img hover:shadow-lg  rounded-lg" data-aos="zoom-in" >
                <div id="projects">
                    <img src={props.img} alt="" className="" />
                    <h1 className="text-center font-medium text-xl mt-1">{props.title}</h1>
                    <p className="text-xl text-center font-semibold text-gray-500">{props.subtitle}</p>
                </div>
                <div className="flex justify-center gap-2 mt-1 ">
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">{props.skill1}</p>
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">{props.skill2}</p>
                    <p className=" w-fit border border-gray-400 shadow-sm px-2 p-1 rounded-md">{props.skill3}</p>
                </div>
                <div className="mt-4 flex justify-center gap-2 mb-5">
                    <a href={props.live} target="_blank" className="text-center border border-x-2 border-red-500 p-1 px-6 rounded-lg w-36"><button>Live</button></a>
                    <a href={props.repo} target="_blank" className="text-center border border-x-2 border-red-500 p-1 px-6 rounded-lg w-36 bg-red-500 text-white"><button>Repo </button></a>
                </div>
            </div>
        </>
    )
}
export default Project