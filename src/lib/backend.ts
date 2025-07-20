// lib/backend.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/api/v1',
});

// Add JWT to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return api.post('/user/register', data);
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  return api.post('/user/login', data);
};

export const googleAuth = async (token: string) => {
  return api.post('/user/google-auth', { access_token: token });
};

export const getProfile = async () => {
  return api.get('/user/profile');
};