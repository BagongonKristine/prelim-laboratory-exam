import React from "react";
import { Text, View, Image } from "react-native";

const HelloWorld= () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          color: "white",
          paddingTop: 115,
          backgroundColor: "black",
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        "ANIMATION WOLRD"
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          fontStyle: "italic",
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
        }}
      >
       ANIME 
      </Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/7/7d/Mashle_anime_key_visual.png",
  
        }}
        style={{
          width: 450,
          height: 200,
          opacity: 0.9,
          borderWidth: 2,
          borderColor: "white",
        }}
      />
    </View>
  );
};

export default HelloWorld;