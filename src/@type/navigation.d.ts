import { RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Profile: {
        nome: string;
        email: string;
        idade: string;
        username: string;
        password: string;
      };
    }
  }
}
