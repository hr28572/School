import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles'
import Buttons from '../../Component/HomeScreen/HomeScreen'


const HomeScreen = (props) => {
  
  return (

    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <View style={styles.screen}>


      <TouchableOpacity style={styles.buttons}
          onPress={() => props.navigation.navigate('AddStudent')}>
          <Text style={styles.button}>Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
          onPress={() => props.navigation.navigate('UpdateStudentDetails')}>
          <Text style={styles.button}>Update Students Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
          onPress={() => props.navigation.navigate('AddMarks')}>
          <Text style={styles.button}>Add Marks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
          onPress={() => props.navigation.navigate('Result')}>
          <Text style={styles.button}>View Results</Text>
        </TouchableOpacity>



      </View>
    </ImageBackground>



  );
}

export default HomeScreen;