import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import SignupRuim from '../pages/Signup/SignupRuim';

const AuthStack = createNativeStackNavigator();

type AuthRoutesTypes = {
  Login: undefined;
  Signup: undefined;
};

export type AuthProps<Route extends keyof AuthRoutesTypes> = NativeStackScreenProps<
  AuthRoutesTypes,
  Route
>;

export const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
