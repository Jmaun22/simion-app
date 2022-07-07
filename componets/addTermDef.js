import { useState } from 'react'; 
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import TermDef from "./termDefComp";
import { Button } from 'react-native-paper';


const AddPage = () => {


    const [inputList, setInputList] = useState([]);


  const onAddBtnClick = event => {
    setInputList(inputList.concat(<TermDef key={inputList.length} />));
  };



  return (
    <SafeAreaView>


    <Button onPress={onAddBtnClick} icon="plus-circle" >Add </Button>


      {inputList}
    

 
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