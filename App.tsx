import { Provider, useSelector } from "react-redux";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/store/redux/store';
import { selectIsAuthenticated } from "./src/store/redux/authSlice";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { movieApi } from "./src/store/redux/api";
import MovieList from "./src/screens/MoviesOverview";


const Stack = createNativeStackNavigator();

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    < GluestackUIProvider config={config}>
      < NavigationContainer >
        <Stack.Navigator>
          {
            isAuthenticated ? (
              <Stack.Screen name="Profile" component={MovieList} />
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
    <ApiProvider api={movieApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  );
}
