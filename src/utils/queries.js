/* eslint-disable import/prefer-default-export */
import instance from './axios';

export const login = (data) => instance.post('/auth/login', data);

export const register = (data) => instance.post('/auth/register', data);

export const getAllPosts = () => instance.get('/post/all-posts');

export const createPost = (data) => instance.post('/post/create-post', data);

export const deletePost = (postId) => instance.delete(`/post/delete-post/${postId}`);

export const getFollowingUsersPosts = () => instance.get('/post/get-users-all-posts');
