import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
