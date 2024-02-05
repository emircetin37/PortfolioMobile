import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LayoutDashboard, Network } from 'lucide-react-native';
import { DashboardPage, IntroPage, LoginPage, RegisterPage, FakeApiPage } from './src/screens';
import { CustomDrawerContent } from './src/components/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerTabs = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4873FE' }, headerTintColor: '#fff', headerShadowVisible: false }} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{
        drawerLabel: () => null,
        title: '',
      }} name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <LayoutDashboard /> : <LayoutDashboard color="gray" />,
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="FakeApi"
        component={FakeApiPage}
        options={{
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <Network /> : <Network color="gray" />,
          headerShown: false,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Intro" component={IntroPage} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterPage} />
        <Stack.Screen options={{ headerShown: false }} name="DrawerTabs" component={DrawerTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
