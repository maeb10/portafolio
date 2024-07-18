import { motion } from "framer-motion"
import { CONTACT } from "../constants";

export default function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Contacto
            </motion.h2>
            <div className="text-center">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    Puedes enviarme un mensaje al correo {''}
                    <a href={`mailto:${CONTACT.email}?Subject=Página%20Contacto`} className="text-purple-500 border-b border-purple-500">{CONTACT.email}</a>
                </motion.p>
            </div>
        </div>
    )
}
