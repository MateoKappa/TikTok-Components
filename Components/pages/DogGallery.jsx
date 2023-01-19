import React from "react";
import {motion, AnimatePresence, animate} from "framer-motion";
import styles from "../styles/dogGallery.module.scss";
import {useState} from "react";
function DogTider() {
  const [imageClick, setImageClick] = useState(false);
  return (
    <div className={styles.page}>
      <AnimatePresence exitBeforeEnter mode="true">
        <motion.div
          className={styles.Images}
          onClick={() => setImageClick(!imageClick)}
        >
          <img
            id={imageClick ? "1" : null}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
          />
          <img
            id={imageClick ? "2" : null}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.542xw:0.814xh;0.0472xw,0.127xh&resize=640:*"
          />
          <img
            id={imageClick ? "3" : null}
            src="https://i.guim.co.uk/img/media/364089a4778d97eac2be1a48913931b6f562e169/920_1562_2138_1282/master/2138.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6b604fb567ffa5e9f8172a4c82a7ec5"
          />
          <img
            id={imageClick ? "4" : null}
            src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
          />

          <>
            {" "}
            <img
              id={imageClick ? "5" : null}
              src="https://th-thumbnailer.cdn-si-edu.com/C4MIxDa_YxisZm2EtoTNHweBKZU=/fit-in/1600x0/filters:focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg"
            />
            <img
              id={imageClick ? "6" : null}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVmDfr96OY20peQb0DeS-JMNiJMVTlyfKeg&usqp=CAU"
            />
            <img
              id={imageClick ? "7" : null}
              src="https://hips.hearstapps.com/hmg-prod/images/dog-cry-happy-tears-study-1661938529.jpg?crop=0.625xw:1.00xh;0.176xw,0&resize=640:*"
            />
            <img
              id={imageClick ? "8" : null}
              src="https://www.keeptalkinggreece.com/wp-content/uploads/2018/11/dog.jpg"
            />
          </>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default DogTider;
