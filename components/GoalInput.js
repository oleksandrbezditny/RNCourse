import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    }, inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    }, buttonContainer: {
        flexDirection: "row", marginTop: 16,
    }, button: {
        width: 100, marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}
                           value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Cancel' onPress={onCancel} color="#f31282" /></View>
                    <View style={styles.button}><Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"/></View>
                </View>
            </View>
        </Modal>);
}

export default GoalInput;