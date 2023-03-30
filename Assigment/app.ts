// import axios from 'axios';

interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      console.table(users);
    })
    .catch(error => console.log(error));

