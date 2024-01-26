/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 2: Layout Components
 * Name: Cathy Sun
 * Date: 2024 Jan 26
 */

import React from 'react';

import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView  } from 'react-native';

function ToDoList(props) {
    return (
        <>
          <ScrollView>
            <Pressable>
              <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Do laundry</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.task]}>
                <Text style={styles.taskText}>Go to gym</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Walk dog</Text>
              </View>
            </Pressable>
          </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },    
  });

export default ToDoList;