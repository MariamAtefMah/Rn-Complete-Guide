import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableOpacity //TouchableOpacity is most used.
} from 'react-native';

const GoalItem = props => {
    return( 
        //onDelete is a function called by props, acriveOpaciet for changing the color when touch.
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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