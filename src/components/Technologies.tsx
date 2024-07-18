import { motion, Variants } from "framer-motion"
import { FaPhp } from "react-icons/fa"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { DiJqueryLogo } from "react-icons/di"
import { SiMysql } from "react-icons/si"

const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

export default function Technologies() {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Tecnologías
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <FaPhp className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <BiLogoJavascript className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <BiLogoTypescript className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <FaLaravel className="text-7xl text-red-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <FaBootstrap className="text-7xl text-violet-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <DiJqueryLogo className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4"
                >
                    <SiMysql className="text-7xl" />
                </motion.div>
            </motion.div>
        </div>
    )
}
