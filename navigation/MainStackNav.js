import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import MainScreen from "../screens/MainScreen";
import TodoAddScreen from "../screens/TodoAddScreen";
const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <MainStack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="mainscreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="addtodo"
          component={TodoAddScreen}
          options={{
            title: "Вернуться назад",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 28,
              color: "#999999",
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
