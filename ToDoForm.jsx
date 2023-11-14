import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = () => {
  return (
    <View>
      <TextInput placeholder="Add new task..." />
      <Button title="Add" onPress={() => {/* Add task handling logic here */}} />
    </View>
  );
};

export default ToDoForm;
