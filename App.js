import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => ([...currentCourseGoals, {
            text: enteredGoalText,
            key: Math.random().toString()
        },]));
    }

    return (<View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => (<View style={styles.goalItem}>
                        <Text style={styles.goalText}>{itemData.item.text}</Text>
                    </View>)}/>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50, paddingHorizontal: 16, flex: 1,
    }, inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    }, textInput: {
        borderWidth: 1, borderColor: '#cccccc', width: '80%', marginRight: 8, padding: 8
    }, goalsContainer: {
        flex: 5,
    }, goalItem: {
        margin: 8, borderRadius: 6, backgroundColor: '#5e0acc', padding: 8,
    }, goalText: {
        color: 'white',
    }
});
