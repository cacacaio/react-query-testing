/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';

interface IError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export function handleError(err: IError | any): void {
  Alert.alert(
    'Aviso',
    err?.response?.data?.message
      || err?.message
      || 'Houve um imprevisto, tente novamente mais tarde',
  );
}
