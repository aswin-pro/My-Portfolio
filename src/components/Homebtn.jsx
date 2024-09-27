import { FaDownload } from 'react-icons/fa';

function Homebtn(){

    const handleDownload=()=>{
        const link=document.createElement('a')
        link.href="ASWIN_RESUME.pdf"
        link.download="ASWIN-RESUME.pdf"
        link.click()
    }

    return(
        <>
        <div className="flex justify-center gap-5 mt-4">
        <a href="#aboutme" className='text-center border border-x-2 border-black p-2 rounded-lg w-36 hover:border-[#d45050] dark:border-white'><button className=''>About Me</button></a>
        <button className='flex gap-2 justify-center  border border-x-2 border-[#d45050] text-white p-2 rounded-lg w-36 bg-[#d45050] hover:bg-[#ff8484] hover:border-[#ff8484]'
        onClick={handleDownload}>
        <FaDownload className="text-lg" />My Resume</button>
        </div>
        </>
    )
}

export default Homebtn