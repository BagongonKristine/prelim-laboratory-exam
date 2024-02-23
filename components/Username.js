import React from "react";
import { Text, View } from "react-native";

const GreetUser = (props) => { 
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold", 
          fontWeight: "900",
          fontSize: 15,
        }}
      >
        we are team kyutipot {props.name}!
      </Text>
    </View>
  );
};

const Username = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.9,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 32,
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <GreetUser name=" eljay" />
      <GreetUser name=" Kristine" />
      <GreetUser name=" Kurt" />
    </View>
  );
};

export default Username;