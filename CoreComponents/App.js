import { View, Text, Image, ImageBackground } from "react-native";
import logoImg from "./assets/adaptive-icon.png";

export default function App() {
  return (
    <View
      style={{
        display: "flex",
        
        height: "100%",
        backgroundColor: "plum",
      }}
    >
      
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1689326232616-aea5c86f86bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ flex: 1, zIndex: 5}}
      >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1689249876759-10ff4bc9f189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ height: 200, width: 200 }}
      />
      <Image source={logoImg} style={{ height: 200, width: 200 }} />

      </ImageBackground>
      {/* <View
        style={{ height: 200, width: 159, backgroundColor: "lightgreen" }}
      >
        <Text>Green box</Text>
      </View>
      <View
        style={{ height: 200, width: 159, backgroundColor: "lightblue" }}
      >
        <Text>Blue box</Text>
      </View> */}
    </View>
  );
}
