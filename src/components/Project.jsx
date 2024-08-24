import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import Project5 from "./Project5"
import Project6 from "./Project6"
function Project()
{
    return(
    <>
    <div id="projects" className="pt-20 md:pt-38  project " >
        <h1 className="text-3xl text-[#ff8484] font-medium text-center mb-5 ">My Projects</h1>
        <div  className="flex justify-center flex-wrap gap-6 ">
               <Project1/>
               <Project2/>
               <Project3/>
               <Project4/>
               <Project5/>
               <Project6/>
        </div>
    </div>
    </>
    )
}
export default Project