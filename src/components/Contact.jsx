import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { Link } from "react-router-dom";


const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    setform({...form, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

      //Q5hFtolbAayWzAYHT
      //template_1hsr9ct
      //service_eqhd4qk

      emailjs.send(
        'service_eqhd4qk',
        'template_1hsr9ct',
        {
          from_name: form.name,
          to_name: 'Sunaim',
          from_email: form.email,
          to_email: 'sunaim.abdullah@gmail.com',
          message: form.message,
        },
        'Q5hFtolbAayWzAYHT'
      )
      .then(()=>{
        setloading(false)
        alert('Thank you. I will get back to you as soon as possible.');

        setform({
          name:'',
          email:'',
          message:'',
        });
      }, (error)=>{
        setloading(false);
        console.log(error);
        alert('Something went wrong');
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] h-[620px] bg-[#151030] p-8 rounded-3xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mt-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#29205a] py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mt-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#29205a] py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mt-3">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#29205a] h-[120px] w-[100%] py-2 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-[#29205a] mt-3 py-3 px-8 outline-none w-[100%] text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {/* <Link to="https://www.linkedin.com/in/sunaim-abdullah-571990244/"
            className="bg-[#0a66c2] mt-3 py-3 px-8 outline-none w-[100%] text-white  shadow-md shadow-primary rounded-xl text-center"
          >
            Follow Me On Linkedin
          </Link> */}
        </form>
      </motion.div>
      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)} 
      className="xl:flex-1  md:h-[650px] h-[450px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
