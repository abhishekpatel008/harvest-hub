import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faLeaf } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    return (
        <header className="border-b border-gray-500 sticky top-0 z-20 bg-gray-100">
            <div className="flex items-center justify-between mx-auto max-w-\[1152px\] px-6 py-4">
                <a href="/" className="text-center text-lg font-primary font-semibold text-primary py-2">
                    <FontAwesomeIcon icon={faLeaf} className="h-8 w-8" />
                    <span className="font-bold">Harvest Hub</span>
                </a>
                <nav className="flex items-center py-2 z-10">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="text-center font-semibold text-primary">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-center py-2 font-semibold text-primary">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-center py-2 font-semibold text-primary">Contact</a>
                        </li>
                        <li>
                            <a href="/login" className="text-center py-2 font-semibold text-primary">Log in</a>
                        </li>
                        <li>
                            <a href="/cart" className="py-2  text-primary">
                                <FontAwesomeIcon icon={faShoppingBag} className="fa-icon" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;