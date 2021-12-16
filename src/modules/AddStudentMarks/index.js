import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

import AsyncStorage from '@react-native-community/async-storage';



const AddstudentMarks = (props) => {

  const [english, setEnglish] = useState(0);
  const [hindi, setHindi] = useState(0);
  const [maths, setMaths] = useState(0);
  const [science, setScience] = useState(0);
  const [sst, setSst] = useState(0);
  const [total, setTotal] = useState(0)
    
  



  const totalMarks = () => {

    let total = parseInt(english) + parseInt(hindi) + parseInt(maths) + parseInt(science) + parseInt(sst)
    setTotal(total)
  }

  const percent = (total / 500) * 100;

  // const updateMarks = async () => {
  //   try {
  //     console.log("aish")
  //     await AsyncStorage.setItem("ticket",JSON.stringify(props.route.params.filterArray))
  //     props.route.params.filterArray({ item: JSON.parse(await AsyncStorage.getItem("ticket")) })
  //     alert("marks added successfully")
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  
  

  const saveMarks = async () => {
    props.route.params.filterArray[0].english = english
    props.route.params.filterArray[0].hindi = hindi
    props.route.params.filterArray[0].maths = maths
    props.route.params.filterArray[0].science = science
    props.route.params.filterArray[0].sst = sst
    props.route.params.filterArray[0].obtainMarks = total;
    props.route.params.filterArray[0].percentage = percent;
    totalMarks()

   try {
        AsyncStorage?.getItem('ticket').then((userData) => {
      console.log('read data submit:', JSON.parse(userData))
      let studentData=JSON.parse(userData);
     let newArray  = studentData.map(element=>{
       if(element.id==props.route.params.filterArray[0].id){
        return element=props.route.params.filterArray[0]
       }
       else{
         return element
       }
      })
      
      console.log("data after submit",newArray)
      AsyncStorage.setItem('ticket', JSON.stringify([...newArray]));

      alert("Marks added sucessfully")
      props.navigation.navigate('Home')

     
    }
    );
  } catch (e) {
    console.log('handle:', e);
  }

  



  // try {
  //   AsyncStorage?.getItem('ticket').then((userData) => {
  //     console.log('read data submit after marks add:', JSON.parse(userData))
     
  //   }
  //   );
  // } catch (e) {
  //   console.log('handle:', e);
  // }

  }

 

  

  return (

    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.screen}>


          <View >
            <Text style={styles.heading}>Add Student Marks</Text>
          </View>

          <View style={styles.detailsContainer}>

            
                  <View style={styles.studentDetails}>

                    <View style={styles.name}>
                      <Text style={styles.studentDetailsText}>NAME :- </Text>
                      <Text style={styles.studentDetailsText}>{props.route.params.filterArray[0].name}</Text>
                    </View>

                    <View style={styles.name}>
                      <Text style={styles.studentDetailsText}>FATHER'S NAME :- </Text>
                      <Text style={styles.studentDetailsText}>{props.route.params.filterArray[0].fatherName}</Text>
                    </View>

                    <View style={styles.name}>

                      <View style={styles.name}>
                        <Text style={styles.studentDetailsText}>CLASS :- </Text>
                        <Text style={styles.studentDetailsText}>{props.route.params.filterArray[0].standard}</Text>
                      </View>

                      <View style={styles.name}>
                        <Text style={styles.studentDetailsText}>ROLL NO :- </Text>
                        <Text style={styles.studentDetailsText}>{props.route.params.filterArray[0].rollNo}</Text>
                      </View>
                    </View>


                  </View>
                
          

            <View>

              <View
                style={styles.verticalLine}
              />

              <View style={styles.subHeading}>

                <View><Text style={styles.subject}>SUBJECT'S</Text></View>
                <View><Text style={styles.totalMarks}>TOTAL MARK'S</Text></View>
                <View><Text style={styles.obtainMarks}>OBTAIN MARK'S</Text></View>
              </View>




              <View style={styles.resultContainer}>

                <View>
                  <Text style={styles.subjectName}>ENGLISH</Text>
                  <Text style={styles.subjectName}>HINDI</Text>
                  <Text style={styles.subjectName}>MATHS</Text>
                  <Text style={styles.subjectName}>SCIENCE</Text>
                  <Text style={styles.subjectName}>SST</Text>
                </View>

                <View>
                  <Text style={styles.subjectMarks}>100</Text>
                  <Text style={styles.subjectMarks}>100</Text>
                  <Text style={styles.subjectMarks}>100</Text>
                  <Text style={styles.subjectMarks}>100</Text>
                  <Text style={styles.subjectMarks}>100</Text>
                </View>

                <View >

                  <View >
                    <TextInput
                      style={styles.inputMarks}
                      maxLength={3}
                      value={english}
                      onChangeText={text => setEnglish(text)}
                      keyboardType='numeric'
                    />
                  </View>

                  <View >
                    <TextInput
                      style={styles.inputMarks}
                      maxLength={3}
                      value={hindi}
                      onChangeText={text => setHindi(text)}
                      keyboardType='numeric'
                    />
                  </View>

                  <View >
                    <TextInput
                      style={styles.inputMarks}
                      maxLength={3}
                      value={maths}
                      onChangeText={text => setMaths(text)}
                      keyboardType='numeric'
                    />
                  </View>

                  <View>
                    <TextInput
                      style={styles.inputMarks}
                      maxLength={3}
                      value={science}
                      onChangeText={text => setScience(text)}
                      keyboardType='numeric'
                    />
                  </View>

                  <View>
                    <TextInput
                      style={styles.inputMarks}
                      maxLength={3}
                      value={sst}
                      onChangeText={text => setSst(text)}
                      keyboardType='numeric'
                    />
                  </View>

                </View>



              </View>

              <View>
                <TouchableOpacity style={styles.AddMarks}
                  onPress={totalMarks}>
                  <Text style={styles.buttons}>ADD MARKS</Text>
                </TouchableOpacity>
              </View>



              <View style={styles.resultSummary}>


                <View style={styles.grandTotal}>
                  <Text style={{ fontWeight: 'bold' }}>GRAND</Text>
                  <Text style={{ fontWeight: 'bold' }}>TOTAL</Text>
                </View>



                <View style={styles.obtainMarksTotal}>
                  <Text style={{ fontWeight: 'bold' }} >OBTAIN</Text>
                  <Text style={{ fontWeight: 'bold' }}>MARKS</Text>
                </View>


                <View style={styles.percentage}>
                  <Text style={{ fontWeight: 'bold' }}>PERCENTAGE</Text>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>%</Text>
                </View>

              </View>

              <View style={styles.resultSummary}>

                <View style={styles.grandTotal1}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>500</Text>
                </View>

                <View style={styles.obtainMarksTotal1}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{total}</Text>
                </View>

                <View style={styles.percentage1}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{percent}%</Text>
                </View>

              </View>





            </View>

          </View>




          <TouchableOpacity style={styles.HomeBtn}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.buttons}>HOME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn} onPress={saveMarks}>
            <Text style={styles.buttons}>SAVE MARKS</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>



  );
}

export default AddstudentMarks;