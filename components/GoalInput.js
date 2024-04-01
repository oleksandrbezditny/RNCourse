import {Button, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    }, inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        padding: 16,
    }, buttonContainer: {
        flexDirection: "row", marginTop: 16,
    }, button: {
        width: 100, marginHorizontal: 8
    }
});

function GoalInput({onAddGoal, visible, onCancel}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (<Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}
                           value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Add Goal' onPress={addGoalHandler}/></View>
                    <View style={styles.button}><Button title='Cancel' onPress={onCancel}/></View>
                </View>
            </View>
        </Modal>);
}

export default GoalInput;