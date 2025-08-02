import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router";

function SideLinks() {
    return (
        <>
            <div
                className={`leftLinks fixed lg:left-10 left-4 bottom-0 text-gray-700 h-1/2 hidden md:block`}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border-[#8892b0] border -z-30"></div>
                <ul className="py-4 text-center">
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="https://github.com/lolla-sai">
                            <div className="px-2 py-4 block bg-white">
                                <FiGithub />
                            </div>
                        </Link>
                    </li>
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="https://www.instagram.com/lolla_sai/profilecard/?igsh=eTY5bmtnYjNvMnR5">
                            <div className="px-2 py-4 block bg-white">
                                <FiInstagram />
                            </div>
                        </Link>
                    </li>
                    <li className="text-2xl hover:-translate-y-1 hover:text-black transition-transform">
                        <Link to="https://www.linkedin.com/in/saisameerlolla/">
                            <div className="px-2 py-4 block bg-white">
                                <FiLinkedin />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideLinks;
