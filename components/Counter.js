import React, { useState } from "react";
import { View, Text, Button } from "react-native";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text
        style={{
          color: "white",
          paddingTop: 35,
          paddingBottom: 35,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 100,
          borderColor: "white",
          borderWidth: 2,
          backgroundColor: "black",
          opacity: 0.9,
        }}
      >
        {count}
      </Text>
      <Button
        color={"blue"}
        onPress={() => {
          setCount(count + 1);
        }}
        title=" Eljay"
      />

      <Button
        color={"blue"}
        onPress={() => {
          setCount(count + 1);
        }}
        title=" Kristine"
      />
      <Button
        color={"blue"}
        onPress={() => {
          setCount(count + 1);
        }}
        title=" Kurt"
       
      />
    </View>
  );
};

export default Counter;