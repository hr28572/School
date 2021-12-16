import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';



const SearchStudent = (props) => {
  const [state, setstate] = useState([])
  const [rollNo, setRollNo] = useState([])
  useEffect(async () => {

    try {


      AsyncStorage?.getItem('ticket').then((userData) => {
        console.log('read data submit:', JSON.parse(userData))
        setstate(JSON.parse(userData))
      }
      );
    } catch (e) {
      console.log('handle:', e);
    }

  }, []);

  console.log("userData", state);

  
  const searchRollNo = () => {
    let filterArray = state.filter((item) => item.rollNo === rollNo)
    // filterArray=filterArray[0]
    if (filterArray == "") { alert("Please Enter Correct Roll No") }
    else{props.navigation.navigate('AddStudentMarks', {filterArray})}
    
    console.log("lll", filterArray)
  }

  
  



  

  return (

    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.screen}>


          <View >
            <Text style={styles.heading}>Session(2021-22)</Text>
          </View>

      <View style={styles.subHeading}>
        <Text style={styles.text}>ENTER STUDENT ROLL NO BELOW:</Text>
      </View>

        
          <View>
            <TextInput 
            style={styles.rollNoInput} 
            maxLength={4}
            keyboardType='numeric'
            onChangeText={text => setRollNo(text)}
            />
          </View>




          <TouchableOpacity style={styles.homeBtn}
          onPress={()=>props.navigation.navigate('Home')}>
            <Text style={styles.buttons}>HOME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchBtn}
           onPress={searchRollNo}>
            <Text style={styles.buttons}>SEARCH STUDENT</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>



  );
}

export default SearchStudent;