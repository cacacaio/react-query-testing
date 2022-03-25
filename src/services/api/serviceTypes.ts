import { QueryFunction } from 'react-query';
import { api } from '.';

export interface ServiceType {
  id: number;
  name: string;
  description: string;
  icon: string;
  is_active: boolean;
  base_price: number;
  order: number;
  created_at: string;
  updated_at: string;
}

export const getServiceTypes: QueryFunction<ServiceType[]> = async () => {
  const { data } = await api.get('/service-types');

  return data.results;
};
