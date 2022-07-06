import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, Keyboard } from 'react-native';
import Task from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onPress={() => completeTask(index)}>
                 <Task text={item} />   
                </TouchableOpacity>
              )
                
            })
          }
          {/* <Task text={'Task1'} />
          <Task text={'Task2'} /> */}

        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Add a Task"} value={task} onChangeText={text => setTask(text)} ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370DB',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#fff"
  },

  items: {
    marginTop: 30
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,


  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    width: 250,


  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#4B0082",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"


  },
  addText: {
    color: "#fff",
    fontSize: 25,
    justifyContent: "space-around"

  }
});
