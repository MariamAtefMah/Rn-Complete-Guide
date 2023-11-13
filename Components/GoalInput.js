import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Modal
} from 'react-native';

const GoalInput = props => {
const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    };    

//To clear all functions:
const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
};

    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Course Goal" style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <Button title='Cancel All' color='red' onPress={props.onCancel} />
                <Button title='ADD' onPress={addGoalHandler}/>
                {/*onPress={() => props.onAddGoal(enteredGoal)}*/}
            </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,    
        justifyContent: 'center',
        alignItems: 'center'
      },
      input:{ 
        width: '80%',
        padding: 2,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10, 
      },
    /*CanceButton: {
        padding: 10,
        borderColor: 'black',
        marginBottom: 10,
    },*/
});

export default GoalInput;