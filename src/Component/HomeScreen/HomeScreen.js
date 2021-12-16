import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

const HomeScreen = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttons}
        onPress={props.AddStudent}>
        <Text style={styles.button}>Add Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}
        onPress={props.UpdateStudentDetails}>

        <Text style={styles.button}>Update Students Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}
        onPress={props.AddMarks}>

        <Text style={styles.button}>Add Marks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}
        onPress={props.Result}>
        <Text style={styles.button}>View Results</Text>
      </TouchableOpacity>


    </View>
  )
}

export default HomeScreen












