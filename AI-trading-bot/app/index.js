import { useState } from 'react';
import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {Stack, useRouter } from 'expo-router';



export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hal's hacking Machine</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Trading Time!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>© 2023 My Finance App. All rights reserved.</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      height: 100,
      backgroundColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    footer: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
  });