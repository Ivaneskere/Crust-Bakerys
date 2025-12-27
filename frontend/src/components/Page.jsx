import { motion } from "framer-motion";

export function Page({children}) {
    return (
        <motion.main
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            exit={{ opacity: 0,y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.main>
    )
}