import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//flexDirection to control how button and textInput will appear in App.
export default function App() {
  return (
    <View style={{padding: 50}}> 
    {/*the padding to leave a space to write above the button*/}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
          placeholder="Course Goal" 
          style={{ width: '80%',padding: 2,  borderColor: 'black', borderWidth: 2 }}/>
        <Button title='ADD'/>
      </View>
      <View style={{padding: 30, flexDirection: 'row', width: '80%', height: 300 }}>
        <View 
          style={{backgroundColor: 'red',  
          justifyContent: 'center', alignItems: 'center' }}>
          <Text>1</Text>
        </View>
        <View 
          style={{backgroundColor: 'green',  
          justifyContent: 'center', alignItems: 'center' }}>
          <Text>2</Text>
        </View>
        <View 
          style={{backgroundColor: 'blue', 
          justifyContent: 'center', alignItems: 'center' }}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
