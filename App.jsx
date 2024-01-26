/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 2: Layout Components
 * Name: Cathy Sun
 * Date: 2024 Jan 26
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />      
    </SafeAreaView>
  );
}

export default App;
