"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "relative p-8 flex items-center",
                "bg-black/30 backdrop-blur-sm",
                "border border-amber-400/20",
                "rounded-lg",
                "transition-colors duration-300",
                "hover:border-amber-400/50",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            {children}
        </motion.div>
    );
};

export default ItemLayout;