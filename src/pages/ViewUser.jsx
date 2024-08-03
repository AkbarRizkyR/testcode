import { useEffect, useState } from 'react';
import { viewUser } from '../api/userServices';
import { useParams } from 'react-router-dom';

function ViewUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await viewUser(id);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className='p-4'>
            <h2 className='text-2xl text-center font-bold mb-4'>User Profile</h2>
            <div className='flex flex-col md:flex-row items-center md:items-start'>
                <div className='bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 md:mr-4'>
                    <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className='w-32 h-32 rounded-full mx-auto mb-4' />
                    <h3 className='text-center text-xl font-semibold'>{user.firstName} {user.lastName}</h3>
                    <p className='text-center'>User ID: {user.id}</p>
                    <p className='text-center'>Age: {user.age}</p>
                    <p className='text-center'>Phone: {user.phone}</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-4 flex-1'>
                    <h3 className='text-lg font-semibold mb-2'>General Information</h3>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='font-semibold'>Role</td>
                                <td>:</td>
                                <td className='capitalize'>{user.role}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Username</td>
                                <td>:</td>
                                <td className='capitalize'>{user.username}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Gender</td>
                                <td>:</td>
                                <td className='capitalize'>{user.gender}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold capitalize'>university</td>
                                <td>:</td>
                                <td className='capitalize'>{user.university}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Blood</td>
                                <td>:</td>
                                <td className='capitalize'>{user.bloodGroup}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-white shadow-md rounded-lg p-4 mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Other Information</h3>
                <p className=' text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus velit quia ea iusto, ad perspiciatis magnam! Incidunt praesentium consequatur itaque sit?</p>
            </div>
        </div>
    );
}

export default ViewUser;