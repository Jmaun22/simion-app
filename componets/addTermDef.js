import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import TermDef from "./termDefComp";

const AddPage = () => {



  return (
    <SafeAreaView>
    <TermDef/>
    <TermDef/>
    

 
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

export default AddPage;