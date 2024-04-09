import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();
export function AppRoutes() {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name ="Home"
                component = {Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name ="Profile"
                component = {Profile}
                options={{
                    headerStyle: {
                    backgroundColor: '#000000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    )
}