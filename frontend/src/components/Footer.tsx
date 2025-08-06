import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4">

                <nav className="flex gap-6 text-sm font-medium">
                    <Link
                        to="/about"
                        className="hover:text-blue-300 transition-colors duration-300 hover:scale-105 transform"
                    >
                        About
                    </Link>
                    <Link
                        to="/privacy"
                        className="hover:text-blue-300 transition-colors duration-300 hover:scale-105 transform"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-300 transition-colors duration-300 hover:scale-105 transform"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex gap-4">
                    <a
                        href="https://x.com/DileshBisen9"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300 hover:scale-110 transform"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.869 3.215 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.115 2.105-.397 0-.79-.019-1.175-.06 2.177 1.395 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dilesh-bisen-2440a5257/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300 hover:scale-110 transform"
                        aria-label="LinkedIn"
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                </div>
                <p className="text-xs text-gray-300">
                    &copy; {new Date().getFullYear()} ClipURL, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;