import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Footer(){
    return(
    <footer className="shadow-lg bg-gray-50 py-6 dark:bg-gray-950">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Aswin. All Rights Reserved.</p>
            <p>Frontend Developer | Passionate about building interactive and responsive web applications.</p>
            <div className="mt-1">
                <p>Email: <a href="mailto:aswinramesh2016@gmail.com" className="text-blue-600">aswinramesh2016@gmail.com</a></p>
                <p>Phone: +91 97894 73408</p>
            </div>
            <div className="mt-1 flex justify-center gap-1">
            <div>
            <a href="https://wa.me/919789473408" target="_blank" rel="noopener noreferrer" className="text-4xl">
            <FaWhatsappSquare />
            </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/aswin-aswin/" target="_blank"className="text-4xl" ><FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/aswin-pro" target="_blank"className="text-4xl"> <FaGithubSquare />
                
                </a>
            </div>
        </div>
        </div>
    </footer>
    )
}
export default Footer