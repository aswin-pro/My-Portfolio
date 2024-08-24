import Frontend from "./Frontend"
import Others from "./Others"
function Skills(){
    return(
        <>
        <div id="skills" className="pt-14  md:pt-38">
            <h1 className="text-3xl text-[#ff8484] font-medium text-center mt-5">My Skills</h1>
            <div  className="grid  justify-center items-center  md:grid-cols-2 w-fit mx-auto gap-3">
                <Frontend/>
                <Others/>
            </div>
        </div>
        </>
    )
}
export default Skills