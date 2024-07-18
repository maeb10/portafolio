import { FaLinkedin } from "react-icons/fa"
import { CONTACT } from "../constants"

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div>
                <p className="uppercase text-2xl font-bold tracking-wider">ME</p>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href={CONTACT.linkedin}
                    rel="noopener"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    )
}
