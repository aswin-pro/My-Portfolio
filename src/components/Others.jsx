import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import vscode from "../assets/images/vscode.png"
import canva from "../assets/images/canva.png"
function Others()
{
    return(
        <>
        <div className="mt-10 text-center m-3 p-4 pb-10  border border-gray-200"> 
            <h1 className="py-2 font-medium text-xl">Others</h1>
        <div className=" grid grid-cols-3 gap-2 w-62  ">
            <div className="flex flex-col items-center shadow-md border p-2">
                <img src={git} alt="" className="w-6"/>
                <p className="font-medium">Git</p>
            </div>
            <div className="flex flex-col items-center shadow-md border p-2">
                <img src={github} alt="" className="w-6"/>
                <p className="font-medium">GitHub</p>
            </div>
            <div className="flex flex-col items-center shadow-md border p-2">
                <img src={vscode} alt="" className="w-6"/>
                <p className="font-medium">VS Code</p>
            </div>
            <div className="flex flex-col items-center shadow-md border p-2">
                <img src={canva} alt="" className="w-6"/>
                <p className="font-medium">Canva</p>
            </div>
            {/* <div className="flex flex-col items-center shadow-md border p-2">
                <img src={tailwind} alt="" className="w-6 mt-1"/>
                <p className="font-medium mt-2">TailwindCss</p>
            </div> */}
        </div>
        </div>
        </>
    )
}
export default Others