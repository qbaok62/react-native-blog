import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import IndexScreen, {
  headerRight as IndexHeaderRight,
} from "./src/screens/IndexScreen";
import ShowScreen, {
  headerRight as ShowScreenHeaderRight,
} from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitle: "Blog" }}
          initialRouteName="Index"
        >
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => IndexHeaderRight(navigation),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => ShowScreenHeaderRight({ navigation, route }),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
