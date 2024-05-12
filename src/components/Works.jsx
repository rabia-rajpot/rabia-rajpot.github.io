import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
textVariant

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, '');