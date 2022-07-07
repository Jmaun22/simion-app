import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import TermDef from "./termDefComp";
import { Button } from 'react-native-paper';


const AddPage = () => {



  return (
    <SafeAreaView>
    <TermDef/>
    <TermDef/>

    <Button icon="plus-circle" mode="contained" onPress={() => console.log('Add Another')}>
    Add Another
  </Button>
    

 
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