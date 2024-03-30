import {Pressable, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    goalItem: {
        margin: 8, borderRadius: 6, backgroundColor: '#5e0acc', padding: 8,
    },
    goalText: {
        color: 'white',
    }
})

function GoalItem({text, onDeleteItem}) {
    return (
        <Pressable onPress={onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;