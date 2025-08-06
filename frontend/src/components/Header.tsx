import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-blue-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <svg
                        className="w-8 h-8 text-blue-300 group-hover:text-blue-100 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z" />
                    </svg>
                    <h1 className="text-2xl font-extrabold tracking-tight group-hover:text-blue-100 transition-colors">
                        ClipURL
                    </h1>
                    <span className="text-sm font-light text-gray-200 hidden md:inline">
                        Shorten. Share. Track.
                    </span>
                </Link>
                <nav className="flex gap-6 text-sm font-medium">
                    <Link
                        to="/"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-300 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;