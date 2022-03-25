import React from 'react';
import { View, Text, FlatList, ListRenderItem, Button } from 'react-native';
import { useMutation, useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import { useRefreshOnFocus } from '../../hooks/useRefreshOnFocus';
import { login } from '../../services/api/login';
import { getServiceTypes, ServiceType } from '../../services/api/serviceTypes';

const Teste = {
  email: 'caio@teste.com',
  password: '123465',
};

const Signup: React.FC = () => {
  const {
    data: serviceTypes,
    isFetching,
    refetch,
  } = useQuery<ServiceType[]>('service-types', getServiceTypes);
  useRefreshOnFocus(refetch);

  const loginMutation = useMutation(login);

  const handleSubmit = async () => {
    const data = await loginMutation.mutateAsync(Teste);
    console.log(data);
  };

  const renderItem: ListRenderItem<ServiceType> = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Testar" onPress={handleSubmit} />
      <FlatList
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        data={isFetching ? [] : serviceTypes}
        ListEmptyComponent={isFetching ? Loading : null}
      />
    </View>
  );
};

export default Signup;
