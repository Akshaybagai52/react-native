import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        backgroundColor: "plum",
      }}
    >
      <View
        style={{ height: 200, width: 159, backgroundColor: "lightgreen" }}
      >
        <Text>Green box</Text>
      </View>
      <View
        style={{ height: 200, width: 159, backgroundColor: "lightblue" }}
      >
        <Text>Blue box</Text>
      </View>
    </View>
  );
}
