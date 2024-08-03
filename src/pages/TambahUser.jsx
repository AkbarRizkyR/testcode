import { useState } from 'react';
import { addUser } from '../api/userServices';
import { useNavigate } from 'react-router-dom';
import DateInput from '../components/DateInput'; // Import DateInput
import GenderInput from '../components/GenderInput'; // Import GenderInput

function AddUser() {
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', address: '', gender: '', birthDate: '' });
    const navigate = useNavigate();

    const handleAddUser = async () => {
        try {
            await addUser(newUser);
            navigate('/about');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className='p-24 max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <h2 className='text-2xl font-bold text-center mb-4'>Add New User</h2>
            <div className='grid grid-cols-1 gap-4'>
                <input 
                    type='text' 
                    placeholder='First Name' 
                    value={newUser.firstName} 
                    onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} 
                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input 
                    type='text' 
                    placeholder='Last Name' 
                    value={newUser.lastName} 
                    onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} 
                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input 
                    type='text' 
                    placeholder='Address' 
                    value={newUser.address} 
                    onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} 
                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <GenderInput 
                    value={newUser.gender} 
                    onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })} 
                />
                <DateInput 
                    onChange={(date) => setNewUser({ ...newUser, birthDate: date })} 
                />
            </div>
                <button 
                    onClick={handleAddUser} 
                    className='w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600'
                >
                    Add User
                </button>
        </div>
    );
}

export default AddUser;