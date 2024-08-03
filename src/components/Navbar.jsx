import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="block h-6 w-6" aria-hidden="true" />
                            <FaTimes className="hidden h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="/crud.png" alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                    <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;