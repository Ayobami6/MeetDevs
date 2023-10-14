import axios from 'axios';

export const getAllTalents = () => {
    const posts = axios.get('http://localhost:3000/talents')
    return posts;
}