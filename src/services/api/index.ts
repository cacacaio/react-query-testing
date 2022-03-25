import axios from 'axios';

export type Paginated<T> = {
  results: T[];
  limit: number;
  page: number;
};

export const baseURL = '';

export const api = axios.create({
  baseURL,
});
