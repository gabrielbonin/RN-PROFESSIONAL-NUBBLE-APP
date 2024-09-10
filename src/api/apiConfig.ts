import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTM.jHVVehJlid8wrkA1g6oWn4wigE9BZOEvCUgTKAKHjRkeHRiMxjNbIC5zXT8v',
  },
});
