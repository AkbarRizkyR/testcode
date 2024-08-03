import  { useState, useEffect } from 'react';

const slides = [
    { id: 1, image: '/banner1.jpg', alt: 'Slide 1' },
    { id: 2, image: '/banner2.jpg', alt: 'Slide 2' },
    { id: 3, image: '/banner3.jpg', alt: 'Slide 3' },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Ganti slide setiap 3 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-500">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;