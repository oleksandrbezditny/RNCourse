import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, borderColor: '#cccccc', width: '80%', marginRight: 8, padding: 8
    }, inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    },
});

function GoalInput({ onAddGoal }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput;