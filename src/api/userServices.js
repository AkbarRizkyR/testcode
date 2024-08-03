import axios from 'axios';

const USERS_URL = 'https://dummyjson.com/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(USERS_URL);
        return response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Tambah data pengguna
export const addUser = async (userData) => {

    try {
        const response = await axios.post(`${USERS_URL}/add`, userData); // Perbaiki URL
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

// Edit data pengguna
export const editUser = async (id, userData) => {
    try {
        const response = await axios.put(`${USERS_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error editing user:', error);
        throw error;
    }
};

// View data pengguna
export const viewUser = async (id) => {
    try {
        const response = await axios.get(`${USERS_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error viewing user:', error);
        throw error;
    }
};

// Delete data pengguna
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${USERS_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};