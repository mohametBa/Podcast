import { createStackNavigator } from '@react-navigation/stack';
import Audioplayer from './Audioplayer'; // Assurez-vous que le chemin est correct pour Audioplayer
import Homee from './Homee'


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homee" component={Homee} />
      <Stack.Screen name="Audioplayer" component={Audioplayer} /> {/* Définir la route Audioplayer */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
