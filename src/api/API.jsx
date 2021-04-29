import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

});


export const getUsers = async () => {
  const {data} = await axiosInstance('/users')
  return data
}

export const getUser = async (id) => {
  const {data} = await axiosInstance(`/users/${id}`)
  return data
}
