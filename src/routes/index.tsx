import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#f0f0f5',
      },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    {/* <App.Screen name="Home" component={Home} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Home" component={Home} /> */}
  </App.Navigator>
);

export default Routes;
