import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text, View,
  TextInput,
  Button,
  ScrollView,
  FlatList, //used for very long lists.
  Modal,
} from 'react-native';
//flexDirection to control how button and textInput will appear in App.
//justifyContent to move around x-axis, while alignItems move around y-axis.
//the padding to leave a space to write above the button.
//we only pass the name of the function if we want to use it.

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  //we will replace setEnteredGoal and put it into enteredGoal.
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  //this is function.
  
  
  const addGoalHandler = goalTitle => {
    //setCourseGoals([...courseGoals (An array), enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle}
    ]);
    //it will have array of objects each object has its own key
    setIsAddMode(false);
    };
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId);
      });
    };

    const cancelGoalHandler = () => {
      setIsAddMode(false);
    };
  //Anything will run should be inside the reurn function.
  return (
      <View style={styles.screen}> 
          <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
          <GoalInput 
            visible={isAddMode} 
            onAddGoal={addGoalHandler}
            onCancel={cancelGoalHandler}
          />
          <FlatList
            keyExtractor={(item, index) => item.id} 
            data={courseGoals}
            renderItem={itemData => (
              <GoalItem 
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
      );
    }
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
          
 //we can change screen name to any name we want, and inputcontainer and so on.
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
