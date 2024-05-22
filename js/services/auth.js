import { fetchAPI } from './fetchAPI.js';

export async function authenticateUser(username, password) {
  try {
    const users = await fetchAPI('http://localhost:3001/users');
    const user = users.find(user => user.username === username && user.password === password);
    return { success: !!user };
  } catch (error) {
    console.error('Error durant l\'autenticació:', error);
    throw error;
  }
}
