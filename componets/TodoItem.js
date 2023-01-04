import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import {
  activateTodoAction,
  doneTodoAction,
  removeTodoAction,
} from "../store/todoReducer";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const TodoItem = ({ text, id, isDone }) => {
  const dispatch = useDispatch();
  const swipe = (progress, dragX) => {
    return (
      <View
        style={{ backgroundColor: "#fff", width: "100%", height: 10 }}
      ></View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={swipe}
        renderLeftActions={swipe}
        onSwipeableOpen={() => dispatch(removeTodoAction(id))}
      >
        <View elevation={5} style={styles.todoItem}>
          {isDone && (
            <AntDesign
              onPress={() => dispatch(activateTodoAction(id))}
              name="checksquare"
              size={24}
              color="black"
            />
          )}
          {!isDone && (
            <Feather
              onPress={() => dispatch(doneTodoAction(id))}
              name="square"
              size={24}
              color="black"
            />
          )}
          <View style={{ justifyContent: "center", marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                textDecorationLine: `${isDone ? "line-through" : ""}`,
                color: `${isDone ? "rgba(34, 47, 62, 0.5)" : "#222F3E"}`,
              }}
            >
              {text}
            </Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
export default TodoItem;
const styles = StyleSheet.create({
  todoItem: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#FAFAFE",
    width: 334,
    height: 44,
    borderRadius: 8,
    shadowColor: "gray",
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 5,
    },
  },
});
