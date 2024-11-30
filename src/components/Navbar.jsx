import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// React icons
import { FaBars, FaDribbble, FaMeta, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menu button toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation items
    const navItems = [
        { path: "/", link: "Accueil" },
        { path: "/services", link: "Vidéos" },
        { path: "/about", link: "About Us" },
        { path: "/blogs", link: "Blogs" },
        { path: "/quiz", link: "Quiz" },
        { path: "/contact", link: "Contact us" },
    ];

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-blue-900 text-white z-50">
            <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <a href="/" className="text-xl font-bold text-white">
                    Future<span className="text-blue-400">Intelligence</span>
                </a>

                {/* Navigation items for large screens */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {navItems.map(({ link, path }) => (
                        <li className="text-white" key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-blue-400 font-semibold"
                                        : isPending
                                        ? "text-gray-400"
                                        : ""
                                }
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Icons and Login button for large screens */}
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-blue-400">
                        <FaMeta />
                    </a>
                    <a href="/" className="hover:text-blue-400">
                        <FaDribbble />
                    </a>
                    <a href="/" className="hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <button
                        onClick={openModal}
                        className="bg-blue-400 px-6 py-2 font-medium rounded hover:bg-white hover:text-blue-400 transition-all ease-in duration-200 ml-4"
                    >
                        Log in
                    </button>
                </div>

                {/* Modal component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* Mobile menu toggle button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {isMenuOpen ? (
                            <FaXmark className="w-5 h-5 text-white" />
                        ) : (
                            <FaBars className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu items */}
            <div className="md:hidden">
                <ul
                    className={`md:hidden block space-y-4 px-4 py-6 mt-14 bg-blue-900 text-white ${
                        isMenuOpen
                            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
                            : "hidden"
                    }`}
                >
                    {navItems.map(({ link, path }) => (
                        <li className="text-white" key={path}>
                            <NavLink
                                onClick={toggleMenu}
                                to={path}
                                className={({ isActive, isPending }) =>
                                    isActive ? "text-blue-400 font-semibold" : ""
                                }
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
