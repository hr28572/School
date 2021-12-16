import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const ViewResult = (props) => {
  const [viewResult, setViewResult] = useState([])
  useEffect(async () => {

    setViewResult(props.route.params.filterArray[0])
    console.log("sdss", viewResult)
  }, []);


  return (

    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.screen}>


          <View >
            <Text style={styles.heading}>Session(2021-22)</Text>
          </View>



          <View style={styles.detailsContainer}>


            <View style={styles.studentDetails}>

      
              <View style={styles.name}>
                <Text style={styles.studentDetailsText}>NAME :- </Text>
                <Text style={styles.studentDetailsText}>{viewResult.name}</Text>
              </View>

              <View style={styles.name}>
                <Text style={styles.studentDetailsText}>FATHER'S NAME :- </Text>
                <Text style={styles.studentDetailsText}>{viewResult.fatherName}</Text>
              </View>

              <View style={styles.name}>

                <View style={styles.name}>
                  <Text style={styles.studentDetailsText}>CLASS :- </Text>
                  <Text style={styles.studentDetailsText}>{viewResult.standard},</Text>
                </View>

                <View style={styles.name}>
                  <Text style={styles.studentDetailsText}>ROLL NO :- </Text>
                  <Text style={styles.studentDetailsText}>{viewResult.rollNo}</Text>
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

                  <Text style={styles.inputMarks}>{viewResult.english}</Text>
                  <Text style={styles.inputMarks}>{viewResult.hindi}</Text>
                  <Text style={styles.inputMarks}>{viewResult.maths}</Text>
                  <Text style={styles.inputMarks}>{viewResult.science}</Text>
                  <Text style={styles.inputMarks}>{viewResult.sst}</Text>

                </View>




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
                  <Text style={{ fontWeight: 'bold' }}>500</Text>
                </View>

                <View style={styles.obtainMarksTotal1}>
                  <Text style={{ fontWeight: 'bold' }}>{viewResult.obtainMarks}</Text>
                </View>

                <View style={styles.percentage1}>
                  <Text style={{ fontWeight: 'bold' }}>{viewResult.percentage}%</Text>
                </View>

              </View>

            </View>

          </View>
       

          <TouchableOpacity style={styles.checkBtn}
           onPress={() => props.navigation.navigate('Result')}>
            <Text style={styles.buttons}>CHECK ANOTHER RESULT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn}
           onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.buttons}>HOME</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>



  );
}

export default ViewResult;