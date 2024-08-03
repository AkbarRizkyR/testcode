import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/userServices'; // Import deleteUser
import { Link } from 'react-router-dom';
import { PiPencilLineFill } from 'react-icons/pi';

import { FaTrashCan, FaTableList, FaSquarePlus } from 'react-icons/fa6';

function AboutPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='p-4'>
            <div className='text-3xl font-bold text-green-400'>
                About Page
            </div>
            <div className='mt-4 flex justify-end mb-4'>
                <Link to="/add">
                    <button className='flex items-center bg-primary text-white px-4 py-2 rounded'>
                        <FaSquarePlus className='mr-2' /> Add New User
                    </button>
                </Link>
            </div>
            <table className='min-w-full bg-white border border-gray-200'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='py-2 px-4 border-b'>No</th>
                        <th className='py-2 px-4 border-b'>Name</th>
                        <th className='py-2 px-4 border-b'>Address</th>
                        <th className='py-2 px-4 border-b'>Gender</th>
                        <th className='py-2 px-4 border-b'>Birth Date</th>
                        <th className='py-2 px-4 border-b'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className='hover:bg-gray-50'>
                            <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
                            <td className='py-2 px-4 border-b text-center'>{user.firstName} {user.lastName}</td>
                            <td className='py-2 px-4 border-b text-center'>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</td>
                            <td className='py-2 px-4 border-b text-center'>{user.gender}</td>
                            <td className='py-2 px-4 border-b text-center'>{user.birthDate}</td>
                            <td className='py-4 px-4 border-b text-center flex justify-center space-x-2'>
                                <Link to={`/view/${user.id}`}><FaTableList /></Link>
                                <Link to={`/edit/${user.id}`}><PiPencilLineFill /></Link>
                                <button onClick={() => handleDelete(user.id)}><FaTrashCan /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default AboutPage;