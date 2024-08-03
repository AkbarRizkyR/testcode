import { useEffect, useState } from 'react';
import { viewUser, editUser } from '../api/userServices';
import { useParams, useNavigate } from 'react-router-dom';
import DateInput from '../components/DateInput'; // Import DateInput
import GenderInput from '../components/GenderInput'; // Import GenderInput

function EditUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await viewUser(id);
                // Konversi birthDate ke objek Date
                userData.birthDate = new Date(userData.birthDate);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, [id]);

    const handleUpdateUser = async () => {
        try {
            await editUser(id, user);
            navigate('/about');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className='p-20 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <h2 className='text-2xl font-bold mb-4'>Edit User</h2>
            <div className='space-y-4'>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-md' type='text' placeholder='First Name' value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                <input className='w-full px-3 py-2 border border-gray-300 rounded-md' type='text' placeholder='Last Name' value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                <input className='w-full px-3 py-2 border border-gray-300 rounded-md' type='text' placeholder='Address' value={user.address?.address || ''} onChange={(e) => setUser({ ...user, address: { ...user.address, address: e.target.value } })} />
                <GenderInput value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })} /> {/* Gunakan GenderInput */}
                <DateInput value={user.birthDate} onChange={(date) => setUser({ ...user, birthDate: date })} /> {/* Gunakan DateInput dengan value */}
                <button className='w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' onClick={handleUpdateUser}>Update User</button>
            </div>
        </div>
    );
}

export default EditUser;