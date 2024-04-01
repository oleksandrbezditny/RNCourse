import {Button, FlatList, Pressable, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => ([...currentCourseGoals, {
            text: enteredGoalText,
            key: Math.random().toString()
        },]));

        endAddGoalHandler();
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter(({ key }) => key !== id);
        });
    }

    return (
        <>
            <StatusBar style={'light'} />
            <View style={styles.appContainer}>
                <Button title='Add new goal' color="#a065ec" onPress={startAddGoalHandler} />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler} />}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    }, goalsContainer: {
        flex: 5,
    }
});
