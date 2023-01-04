import AzaliaTitle from "../componets/AzaliaTitle";
import { View, StyleSheet, FlatList } from "react-native";
import TodoItem from "../componets/TodoItem";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const MainScreen = ({ navigation }) => {
  const todo = useSelector((state) => state.todo.todos);
  console.log(todo);
  return (
    <View style={styles.container}>
      <View
        style={{
          top: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 19 }}>
          <AzaliaTitle />
        </View>
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <TodoItem
              isDone={item.done}
              id={item.id}
              text={item.text}
              todo={todo}
            />
          )}
        />
      </View>
      <Ionicons
        name="add-circle-sharp"
        size={74}
        color="#222F3E"
        style={styles.add}
        onPress={() => navigation.navigate("addtodo")}
      />
    </View>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  add: {
    position: "absolute",
    top: "90%",
    left: "80%",
  },
});
