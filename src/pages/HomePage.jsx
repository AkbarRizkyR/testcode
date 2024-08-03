import { useEffect, useState } from 'react';
import { getProducts } from '../api/itemServices'; // Pastikan path ini benar
import ImageSlider from '@/components/Slider';
import Banner from '@/components/Banner';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        }).catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    return (
        <div className="container mx-auto p-4 bg-slate-100 mb-10">
            <section className='mb-10'>
                <Banner />
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map(product => (
                    <div key={product.id} className='bg-white shadow-md rounded-lg p-4'>
                        <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover mb-4 rounded' />
                        <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
                        <p className='text-gray-700 mb-2'>{product.description}</p>
                        <p className='text-gray-500 mb-2'>Category: {product.category}</p>
                        <p className='text-green-600 font-bold'>Price: ${product.price}</p>
                    </div>
                ))}
            </section>
            <hr className='border-gray-300 my-10 w-full' />
            <section className='mt-10'>
                <ImageSlider />
            </section>
        </div>
    );
}

export default HomePage;