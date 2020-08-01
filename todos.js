import React, { useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const App = () => {

  const [todos, setTodos] = useState([
    { text: ' Покушать ', id: 1 },
    { text: ' Чай! ', id: 2 },
    { text: ' Навернуть супца ', id: 3 },
    { text: ' Учитььььььь ', id: 4 },
    { text: ' Посидеть ', id: 5 },
  ])
  const [text, setText] = useState('')



  // delete
  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }

  //changeText
  const changeText = (val) => {
    setText(val)
  }

  //addTodo
  const addTodo = (text) => {

    //Checking for the number of characters
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, id: Math.random() },
          ...prevTodos,
        ];
      })
    } else {
      Alert.alert('Opssssi!', 'Text less than 3 symb')
    }
  }

  return (
    <View style={styles.allApp}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Todo list</Text>
      </View>

      <View style={styles.addContainer}>
        <TextInput placeholder='task...' onChangeText={changeText} style={styles.input} />
        <TouchableOpacity style={styles.addBottom} onPress={() => addTodo(text)}><Text style={{ fontSize: 20 }}>Add</Text></TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        style={styles.todoList}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={styles.todoItem} onPress={() => deleteTodoItem(item.id)} >
              <Text style={{ fontSize: 18 }}>{item.text}</Text>
            </TouchableOpacity>
          )}/>
          
    </View>
  )
}

const styles = StyleSheet.create({

  allApp: {
    flex: 1,
  },

  header: {
    backgroundColor: 'coral',
    flex: 0.1,
    alignItems: 'center'
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },

  addContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {

    flex: 0.6,
    marginRight: 6,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 22,
    borderRadius: 4
  },

  addBottom: {
    flex: 0.2,
    borderWidth: 1,
    padding: 11,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FF6F10'

  },

  todoList: {
    flex: 0.6
  },

  todoItem: {
    margin: 10,
    borderWidth: 1,
    padding: 14,
    marginHorizontal: 24,
    borderRadius: 4,
    borderStyle: 'solid'
  }
})

export default App;
