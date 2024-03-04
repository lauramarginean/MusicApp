import { Provider, useSelector } from "react-redux";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/store/redux/store';
import { selectIsAuthenticated } from "./src/store/redux/authSlice";
import { GluestackUIProvider } from "@gluestack-ui/themed";


const Stack = createNativeStackNavigator();

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    < GluestackUIProvider>
      < NavigationContainer >
        <Stack.Navigator>
          {
            isAuthenticated ? (
              <Stack.Screen name="Profile" component={ProfileScreen} />
            ) : (
              <Stack.Screen name="Login" component={LoginScreen} />
            )
          }

        </Stack.Navigator>
      </NavigationContainer >
    </GluestackUIProvider>
  )

}

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
