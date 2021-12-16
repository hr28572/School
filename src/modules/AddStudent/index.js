import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage';



const temp = [];
const AddStudent = (props) => {

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [standard, setstandard] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentDetail, setstudentDetail] = useState([]);
  const [state, setState] = useState([]);


  useEffect(async () => {

    try {


      AsyncStorage?.getItem('ticket').then((userData) => {
        console.log('read data submit:', JSON.parse(userData))
        if((JSON.parse(userData)!=null)){
          setState(JSON.parse(userData))
        }
       
      }
      );
    } catch (e) {
      console.log('handle:', e);
    }

  }, []);



  const handleSubmit = async (name,fatherName,standard,rollNo) => {
    let temp = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      fatherName: fatherName,
      standard: standard,
      rollNo: rollNo,
      english: '',
      hindi: '',
      maths: '',
      science: '',
      sst: '',
      obtainMarks: '',
      percentage: ''
    };

    try {
      await AsyncStorage.setItem('ticket', JSON.stringify([...studentDetail, temp]));
      setstudentDetail([...studentDetail, temp]);
      AsyncStorage?.getItem('ticket').then((userData) =>
        console.log('read data submit:' + JSON.stringify(JSON.parse(userData)))
      );
    } catch (e) {
      console.log('handle:', e);
    }
  };

  const readData = async () => {
    try {
      const userData = await AsyncStorage?.getItem('ticket');
      if (userData != null) {
       
        setstudentDetail(JSON.parse(userData));
        console.log('read data:' + JSON.stringify(JSON.parse(userData)));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    readData( );
  }, []);

  const addDetails = async (name, fatherName, standard, rollNo, english, hindi, maths, science, sst, obtainMarks, percentage) => {


    const storedData =  await AsyncStorage?.getItem('ticket');
    setstudentDetail([...studentDetail, { name: name, fatherName: fatherName, standard: standard, rollNo: rollNo}])

    console.log("studentDetails", studentDetail);
    console.log('Detailss', storedData)
    alert('Student Added Successfully')

  };

  




  const handleSaveDetail = () => {

    if (name == "") { alert("Please Enter Student Name") }
    else if (fatherName == "") { alert("Please Enter Father's Name") }
    else if (standard == "") { alert('Please Enter Class') }
    else if (rollNo == "") { alert('Please Enter Roll No') }
    else {
      addDetails(name, fatherName, standard, rollNo);
      setName("");
      setFatherName("");
      setstandard("");
      setRollNo("");
      handleSubmit(name, fatherName, standard, rollNo)
      // setStudentDetails();
    }
  }


  const searchRollNo = () => {
    if(state.length>0){
      const filterArray = state.filter((item) => item.rollNo === rollNo)
      if (filterArray != "") { alert("Roll No already added") }
      else{
        handleSaveDetail()
      }

    }
    else{
      handleSaveDetail()
    }
    

  }


  return (


    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.screen}>


          <View >
            <Text style={styles.heading}>Student Details</Text>
          </View>

          <View style={styles.detailsContainer}>


            <View style={styles.details}>
              <Text style={styles.Text}>NAME:</Text>
              <TextInput
                placeholder="Enter Student Name"
                style={styles.nameInput}
                value={name}
                onChangeText={text => setName(text)}
                maxLength={30}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.Text}>FATHER'S NAME:</Text>
              <TextInput
                placeholder="Enter Student Father Name"
                style={styles.fathersInput}
                value={fatherName}
                onChangeText={text => setFatherName(text)}
                maxLength={30}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.Text}>CLASS:</Text>
              <TextInput
                placeholder="Enter Student Class"
                style={styles.classInput}
                value={standard}
                onChangeText={text => setstandard(text)}
                maxLength={5}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.Text}>ROLL NO:</Text>
              <TextInput
                placeholder="Enter Student Roll No"
                style={styles.rollnoInput}
                value={rollNo}
                onChangeText={text => setRollNo(text)}
                maxLength={4}
                keyboardType={'numeric'}
              />
            </View>

          </View>

          <View style={styles.HomeBtn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.buttons}>HOME</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.saveBtn}>
            <TouchableOpacity onPress={searchRollNo}>
              <Text style={styles.buttons}>SAVE DETAILS</Text>
            </TouchableOpacity>
          </View>




        </View>
      </ScrollView>
    </ImageBackground>



  );
}



export default AddStudent;