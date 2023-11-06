import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//flexDirection to control how button and textInput will appear in App.
//justifyContent to move around x-axis, while alignItems move around y-axis.
//the padding to leave a space to write above the button.
//we only pass the name of the function if we want to use it.
export default function App() {
  //we will replace setEnteredGoal and put it into enteredGoal.
  const [enteredGoal, setEnteredGoal] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  //this is function.
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //...courseGoals to create array, of course goals of enteredGoals.
  const addGoalHandler = () => {
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}> 
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal" style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
        <View>
        {courseGoals.map((goal) => (
        <View  key={goal} style={styles.listItem}>
        <Text>{goal}</Text>
        </View>
        ))}
      </View>
      {/*
      <View style={{padding: 30, flexDirection: 'row', width: '80%', height: 100, 
         justifyContent: 'space-around', alignItems: 'ceter'}}>
        <View 
          style={{
            backgroundColor: 'red',  
            justifyContent: 'center',
            alignItems: 'ceter'
          }}>
          <Text>1</Text>
        </View>
        <View 
          style={{
            backgroundColor: 'green',  
            justifyContent: 'center',
            alignItems: 'center', 
            flex: 1
            }}>
          <Text>2</Text>
        </View>
        <View 
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2 
            }}>
          <Text>3</Text>
        </View>
      </View>
          */}
    </View>
  );
}
 //we can change screen name to any name we want, and inputcontainer and so on.
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{ 
    width: '80%',
    padding: 2,
    borderColor: 'black',
    borderWidth: 2
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ff7f50',
    borderEndColor: 'black',
    borderWidth: 1
  }
});
