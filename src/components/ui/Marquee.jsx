import { motion } from "framer-motion";

const marqueeVariantsLeft = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsRight = {
  animate: {
    x: [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = (props) => {
  let marqueeVariants;
  if (props.direction === "left") {
    marqueeVariants = marqueeVariantsLeft;
  } else if (props.direction === "right") {
    marqueeVariants = marqueeVariantsRight;
  } else {
    marqueeVariants = marqueeVariantsLeft;
  }
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
