import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:3000/genuine';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/get`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/delete/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/edit/${id}`, user)
}
