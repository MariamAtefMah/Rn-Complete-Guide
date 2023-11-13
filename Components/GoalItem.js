import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const GoalItem = props => {
    return( 
    <View style={styles.listItem}>
        <Text>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ff7f50',
        borderEndColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;