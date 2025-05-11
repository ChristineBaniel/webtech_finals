import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = async () => {
  const { data } = await axios.get(`${API_URL}/users`)
  return data
}

export const fetchUser = async (userId: string) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}`)
  return data
}

export const fetchUserPosts = async (userId: string) => {
  const { data } = await axios.get(`${API_URL}/posts?userId=${userId}`)
  return data
}

export const fetchPosts = async () => {
  const { data } = await axios.get(`${API_URL}/posts`)
  return data
}

export const fetchPost = async (postId: string) => {
  const { data } = await axios.get(`${API_URL}/posts/${postId}`)
  return data
}

export const fetchPostComments = async (postId: string) => {
  const { data } = await axios.get(`${API_URL}/posts/${postId}/comments`)
  return data
}

export const fetchComments = async () => {
  const { data } = await axios.get(`${API_URL}/comments`)
  return data
}