import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EvilIcons } from 'expo-vector-icons';
import Input from '../../components/Input/Input';
import { Container, Title } from './styles';
import { AuthProps } from '../../routes/auth.routes';

export type FormData = {
  email: string;
  password: string;
  cpf: string;
  password_confirm: string;
};

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

type NavProps = AuthProps<'Login'>;

const Login: React.FC<NavProps> = ({ navigation }) => {
  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    navigation.navigate('Signup');
  };

  return (
    <Container>
      <Input control={control} name="email" placeholder="E-Mail" />
      <Input control={control} name="password" placeholder="Senha" secureTextEntry />
      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
};

export default Login;
