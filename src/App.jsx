 * @format
 */

import React, { useState }/*, { useState }*/ from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChuckNorrisFact from './ChuckNorrisFact';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Eat food'
  ]);


  const handleAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={handleAdd} />
      <ChuckNorrisFact />
    </SafeAreaView>
  );
}


export default App;
