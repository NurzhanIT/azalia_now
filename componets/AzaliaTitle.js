import { View, Text, Image, StyleSheet } from "react-native";
const AzaliaTitle = () => {
  return (
    <View style={TitleStyles.container}>
      <Image
        style={TitleStyles.icon}
        source={require("../assets/Vector.png")}
      />
      <Text style={TitleStyles.title}>AzaliaNow</Text>
    </View>
  );
};
export default AzaliaTitle;
const TitleStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 36,
    color: "#ff003c",
  },
});
