// AppNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SilverCalculatorScreen from '../screens/SilverCalculatorScreen';
import BitcoinCalculatorScreen from '../screens/BitcoinCalculatorScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Silver Calculator" component={SilverCalculatorScreen} />
      <Tab.Screen name="Bitcoin Calculator" component={BitcoinCalculatorScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
