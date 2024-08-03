import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 p-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center md:text-left">
                    <div className="">
                        <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                        <div className='flex justify-start items-center mb-2'>
                            <p className="">Alamat: Jl. Bebas No. 123, Jakarta</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9200000000005!2d106.827153315316!3d-6.1751100000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e000000000%3A0x0000000000000000!2sJakarta!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
                            className="w-full h-48 max-w-lg mx-auto border-0"
                        ></iframe>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Company</h3>
                    <ul>
                        <li className="mb-2"><a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                        <li className="mb-2"><a href="/navigation" className="text-gray-700 hover:text-gray-900">Navigation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Service</h3>
                    <ul>
                        <li className="mb-2"><a href="/size-chart" className="text-gray-700 hover:text-gray-900">Size Chart</a></li>
                        <li className="mb-2"><a href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
                        <li className="mb-2"><a href="/return-refund" className="text-gray-700 hover:text-gray-900">Return & Refund</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-gray-500'>Copyright &copy; 2024 - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
