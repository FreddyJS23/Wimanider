import { AnimacionModalInterface } from "../types/index";
import { motion, AnimatePresence } from "framer-motion";

/* para animacion de salidas hay que envolver el div de la animacion con "AnimatePresence" 
y pasar una prop de apertura de la animacion la animacion tiene 3 estado los cuales son
 el estado initial indica los valores iniciales del contenido, animate los valores que se animaran, 
y exit los valores de la animacion de salida */

export const AnimacionModal = ({
  children,
  in: open,
}: AnimacionModalInterface) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y:-20 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y:-20, }}
          transition={{  duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
