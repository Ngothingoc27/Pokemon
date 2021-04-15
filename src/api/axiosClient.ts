import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://pokeapi.co',
  
  headers: {
    'Content-Type': 'application/json',
  },
});