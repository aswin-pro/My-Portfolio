import express from "../assets/images/express.png"
import node from "../assets/images/node.png"
import mongodb from "../assets/images/mongodb.png"
import nestjs from "../assets/images/nestjs.png"
import python from "../assets/images/python.png"

function Backend(){
    return(

        <div className="mt-10 text-center m-3 p-3 pb-10  border rounded-lg border-gray-200 dark:border-gray-500"> 
            <h1 className="py-2 font-medium text-xl">Backend</h1>
        <div className=" grid grid-cols-3 gap-2 w-62 " >
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={express} alt="" className="w-6"/>
                <p className="font-medium">Express Js</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={node} alt="" className="w-6"/>
                <p className="font-medium">Node Js</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={mongodb} alt="" className="w-6"/>
                <p className="font-medium">MongoDB</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={nestjs} alt="" className="w-6"/>
                <p className="font-medium">Nestjs</p>
            </div>
            <div className="flex flex-col items-center shadow-md border dark:border-gray-500 p-2">
                <img src={python} alt="" className="w-6 "/>
                <p className="font-medium ">Python</p>
            </div>
        </div>
        </div>

    )
}
export default Backend