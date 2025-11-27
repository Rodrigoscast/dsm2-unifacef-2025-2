import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import UserTasksScreen from "./src/screens/UserTasksScreen";
import TeamTasksScreen from "./src/screens/TeamTasksScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Meus compromissos" component={UserTasksScreen} />
        <Stack.Screen name="Compromissos da equipe" component={TeamTasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
