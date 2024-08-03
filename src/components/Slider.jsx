import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '@/api/itemServices';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
    <div
        className="custom-arrow custom-next bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={onClick}
    >
        <FaArrowRight />
    </div>
);

NextArrow.propTypes = {
    onClick: PropTypes.func,
};

const PrevArrow = ({ onClick }) => (
    <div
        className="custom-arrow custom-prev bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={onClick}
    >
        <FaArrowLeft />
    </div>
);

PrevArrow.propTypes = {
    onClick: PropTypes.func,
};

const ImageSlider = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Simulasi pengambilan data
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchProducts().catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="container mx-auto p-4 relative">
            <div className="grid grid-cols-4 gap-4 mb-4">
                {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                            src={product.thumbnail} 
                            alt={`Image ${index + 1}`} 
                            className="object-cover w-full h-64" 
                        />
                        <div className="p-4">
                            <h3 className="text-md font-semibold mb-2">{product.title}</h3>
                            <p className="text-xs text-gray-600">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-[-9px] ">
                <PrevArrow onClick={prevSlide} />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-9px]">
                <NextArrow onClick={nextSlide} />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;