import { Provider, useSelector } from "react-redux";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/store/redux/store';
import { selectIsAuthenticated } from "./src/store/redux/authSlice";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { movieApi } from "./src/store/redux/api";
import MovieList from "./src/screens/MoviesOverview";
import { config } from "@gluestack-ui/config"
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/store/redux/store";
import MovieDetails from "./src/screens/MovieDetails";
import ProfileScreen from "./src/screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from "./src/screens/FavoritesScreen";

export type RootStackParamList = {
  Home: NavigatorScreenParams<TabNavigationParamList>;
  MovieDetails: {
    movieId: number;
  };
  Login: undefined
};

export type TabNavigationParamList = {
  Movies: undefined;
  Profile: undefined;
  Favorites: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabNavigationParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MovieList} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    < GluestackUIProvider config={config}>
      < NavigationContainer >
        {
          isAuthenticated ? (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={TabNavigation}
                options={{ headerShown: false }} />
              <Stack.Screen name="MovieDetails" component={MovieDetails} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          )
        }
      </NavigationContainer >
    </GluestackUIProvider>
  )

}

export default function AppWrapper() {

  return (
    <ApiProvider api={movieApi}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApiProvider>
  );
}
