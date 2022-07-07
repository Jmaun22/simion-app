import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const UselessTextInput = (props) => {
  const [term, onChangeTerm] = React.useState("");
  const [def, onChangeDef] = React.useState("");


  return (
    <SafeAreaView>
    <Text>{props.text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTerm}
        value={term}
        placeholder={"term"}
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeDef}
        value={def}
        placeholder={"def"}
      />
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;