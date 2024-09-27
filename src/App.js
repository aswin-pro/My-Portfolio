import { useEffect } from "react";
import Landing from "./components/landing";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  //AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Animation duration
    });
  }, []);

  return (
    <>
      <Landing/>
    </>
  );
}

export default App;
