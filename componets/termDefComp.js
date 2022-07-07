import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [term, onChangeTerm] = React.useState("Term");
  const [def, onChangeDef] = React.useState("Def");


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTerm}
        value={term}
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeDef}
        value={def}
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