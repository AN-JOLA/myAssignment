import React ,{ useState } from "react";
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import Task from "./components/Task";

 interface Todos {
}

type Props = {
    text? : string;
}

const Todos: React.FC <Props> = (props) => {
    const [task, setTask] = useState(props.text);
    const [taskItems, setTaskItems] = useState<string[]>([])

    const handleAddTask = () => {
        setTaskItems({...taskItems, task})
        setTask(null)
    }
    return (
        <View style={styles.container}>
            <View style = {styles.tasksWrapper}>
                <Text style = {styles.sectionTitle}>Today's Tasks</Text>
                <View style = {styles.items}>

                    <Task text = {'Task 1'}/>
                    <Task text = {'Task 2'}/>
                </View>
            </View>
            <KeyboardAvoidingView
             behavior={Platform.OS === "android"? "padding" : "height"}
             style = {styles.writeTaskWrapper}
             >
                <TextInput style = {styles.input} placeholder = {"Add a Task"} value = {task} onChangeText = {text => setTask(text)}></TextInput>
                <TouchableOpacity onPress = {() => handleAddTask()}>
                    <View style = {styles.addWrapper}>
                        <Text style = {styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
             </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex : 1,
        fontSize: 20,
        backgroundColor: '#FFDAF8',
    },
    tasksWrapper:{
        paddingTop : 40,
        paddingHorizontal : 20,
    },
    sectionTitle:{
        fontSize : 24,
        width: '70%',
        fontWeight: "bold"
    },
    items: {
        marginTop: 30

    },
    writeTaskWrapper:{
        position: "absolute",
        bottom : 40,
        width : '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,


    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        opacity: 0.8,
        borderRadius : 20,
        borderColor : '#fff',
        borderWidth: 1,
        width: 250,


    },
    addWrapper:{
        width: 60,
        height: 60,
        backgroundColor: "purple",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"


    },
    addText:{
        color: "#fff",
        fontSize: 25,
        justifyContent: "space-around"

    }

});



export default Todos

