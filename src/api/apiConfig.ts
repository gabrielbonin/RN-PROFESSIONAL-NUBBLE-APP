import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer OA.iW-Q2MPzg1Q_UiSdhoYu0HJoISfZsyzYu6-GwcmuQW7bWcqDb7Lk-3D9q7vc',
  },
});
