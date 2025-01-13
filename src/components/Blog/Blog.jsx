import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          
        Check out my blog to follow along with my journey!
        Click the button below to check it out!! (COMING SOON)

      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
          <button className = "button mt-4">
            BLOG COMING SOON!!
          </button>
        </a>
      </motion.p>

    </>
  );
};

export default SectionWrapper(Blog, "blog");