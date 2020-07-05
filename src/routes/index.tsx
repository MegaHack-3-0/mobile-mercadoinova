import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import NewProduct from '../pages/Products/New';
import Benefits from '../pages/Benefits';
import Coupon from '../pages/Coupon';
import Achievements from '../pages/Achievements';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#D1CFCA',
      },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Products" component={Products} />
    <App.Screen name="NewProduct" component={NewProduct} />
    <App.Screen name="Benefits" component={Benefits} />
    <App.Screen name="Coupon" component={Coupon} />
    <App.Screen name="Achievements" component={Achievements} />
  </App.Navigator>
);

export default Routes;
