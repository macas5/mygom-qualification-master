import {API} from '~/constants';
import getUrl from '../utils/getUrl';

const login = async (username: string, password: string) => {
  // Checks if username and password are longer than 4 characters then
  // asks server if they match  
  if ((username.length > 4) && (password.length > 4)) {
    const url = getUrl(API.Login, {
      username,
      password,
    });
  
    const response = await fetch(url);
    if (response.status == 200){
      const data = await response.json();
      const { token } = data;
      localStorage.setItem('token', token);
    } else 
      throw ('Invalid username or password');
  } else
  throw ('Username and password must be more than 4 characters long');
};

export default login;
