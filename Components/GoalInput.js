import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
//import punycode from "punycode/";  //for improving performance while running
// (props(can be any name)) => this is arrow function.
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //To clear all functions:
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.CancelButton}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.CancelButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          {/*onPress={() => props.onAddGoal(enteredGoal)}*/}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    //padding: 10,
    //borderColor: 'black',
    //marginBottom: 10,
  },
  CancelButton: {
    width: "40%",
  },
});

export default GoalInput;
