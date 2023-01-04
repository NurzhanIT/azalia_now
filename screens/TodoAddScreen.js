import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todoReducer";
const TodoAddScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="Текст новой задачи"
        style={styles.textinput}
      />
      <View
        style={{
          width: "95%",
          height: 44,
        }}
      >
        <Button
          color={"#222F3E"}
          title="Добавить"
          disabled={!text}
          borderRadius={8}
          onPress={() => {
            let newTodo = {
              id: String(Math.round(Math.random() * 100)),
              text,
              done: false,
            };
            dispatch(addTodoAction(newTodo));
            navigation.goBack("mainscreen");
          }}
        />
      </View>
    </View>
  );
};
export default TodoAddScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "95%",
    height: 44,
    padding: 10,
    marginBottom: 16,
  },
});
