import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-auto items-start gap-5 `}
      >
        
        <div className="flex flex-col justify-center items-center mt-5  ">
          <div className="w-5 h-5 rounded-full bg-[#9153ff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <p
            className={`font-bold large-font text-white`}
           
          >
            Hi, I'm <span className="text-[#915eff]">Mike</span>
          </p>
          <p
            className={`font-bold small-font mt-2 text-white-100 `}
            
          >
            Crafting Immersive Digital Experiences 
            <br className="sm:block-hidden" />with{" "}
            <span className="text-[#61dafb]">React.js</span>
            {" "}&{" "}
            <span className="text-[#43853d]">Node.js</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:botton-10 bottom:32 w-full flex justify-center items-center">
        <Link to="/about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
