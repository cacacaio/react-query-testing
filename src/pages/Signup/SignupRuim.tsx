import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, ListRenderItem, Button } from 'react-native';
import Loading from '../../components/Loading/Loading';
import { handleError } from '../../global/utils/handleError';
import { login } from '../../services/api/login';
import { getServiceTypes, ServiceType } from '../../services/api/serviceTypes';

const Teste = {
  email: 'caio@teste.com',
  password: '123465',
};

const SignupRuim: React.FC = () => {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      apiFetch();
    }, []),
  );

  const apiFetch = async () => {
    try {
      setIsLoading(true);
      const data = await getServiceTypes({} as any);
      setServiceTypes(data);
    } catch (err: any) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await login(Teste);
      console.log(data);
    } catch (err: any) {
      handleError(err);
    }
  };

  const renderItem: ListRenderItem<ServiceType> = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Testar" onPress={handleSubmit} />
      <FlatList
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        data={isLoading ? [] : serviceTypes}
        ListEmptyComponent={isLoading ? Loading : null}
      />
    </View>
  );
};

export default SignupRuim;
