import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

});


export async function getPosts() {
  const {data} = await axiosInstance('/posts')

  return data
}
