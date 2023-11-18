/**
 * My To Do List App
 *
 * @format
 */

import React/*, { useState }*/ from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';


function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Eat food'
  ]);

  const handleAddTask = (task) => {
    /*const newTasks = tasks;
    
    newTasks.push(task);
    setTasks(newTasks)*/

    setTasks([...tasks, task])
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={handleAddTask}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
