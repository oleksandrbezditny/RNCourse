import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => ([...currentCourseGoals, {
            text: enteredGoalText,
            key: Math.random().toString()
        },]));
    }

    function deleteGoalHandler() {
        console.log('DELETE');
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50, paddingHorizontal: 16, flex: 1,
    }, goalsContainer: {
        flex: 5,
    }
});
