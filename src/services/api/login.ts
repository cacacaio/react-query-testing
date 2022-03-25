import axios from 'axios';
import { MutationFunction } from 'react-query';

const Teste = {
  email: 'caio@teste.com',
  password: '123465',
};

export const login: MutationFunction<any, typeof Teste> = async () => {
  const { data } = await axios.post('https://reqres.in/api/users', Teste);
  return data;
};
