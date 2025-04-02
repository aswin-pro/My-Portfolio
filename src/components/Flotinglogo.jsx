import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Floatinglogo() {
    return (
        <div className="hidden md:flex flex-col  gap-1 fixed logo border border-gray-200 dark:border-gray-500 p-2 ">
            <div>
                <a href="https://wa.me/919789473408" target="_blank" rel="noopener noreferrer" className="text-4xl">
                    <FaWhatsappSquare />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/aswin-aswin/" target="_blank" className="text-4xl" ><FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/aswin-pro" target="_blank" className="text-4xl"> <FaGithubSquare />
                </a>
            </div>
        </div>
    )
}
export default Floatinglogo