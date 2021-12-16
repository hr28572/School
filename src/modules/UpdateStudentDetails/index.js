import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import IconAntDesign from 'react-native-vector-icons/AntDesign'




const UpdateStudentDetails = (props) => {
  const [state, setstate] = useState([])
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


  const userDelete = async (item) => {
       console.log(item)

      
    // try {
    //   state.splice(index, 1);
        let data=state.filter(el=>el.id!=item.id)
         setstate(data)
       await AsyncStorage.setItem("ticket",JSON.stringify(data))
    //   setstate({ item: JSON.parse(await AsyncStorage.getItem("ticket")) })
       alert("Student Deleted")
    // } catch (error) {
    //   console.log(error);
    // }

  }





  return (

    <ImageBackground source={{ uri: '/Users/hr/Desktop/Navigation/src/assets/Screen2.jpeg' }} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.screen}>


          <View >
            <Text style={styles.heading}>Update Student Details</Text>
          </View>



          <View style={styles.detailsContainer}>


            <View style={styles.sessionHeading}>
              <Text style={styles.textSession}>Session (2021-22)</Text>
            </View>
            <View style={styles.sessionHeading}>
              <Text style={styles.textSession}>Students List</Text>
            </View>

            <View>
              <View
                style={styles.verticalLine}
              />
            </View>

            <View>
              <View style={styles.tableHeading}>

                <View style={styles.tableHeaderSr}>
                  <Text style={styles.tableText}>Sr.No.</Text>
                </View>

                <View style={styles.tableHeaderName}>
                  <Text style={styles.tableText}>NAME</Text>
                </View>

                <View style={styles.tableHeaderRoll}>
                  <Text style={styles.tableText}>CLASS</Text>
                </View>

                <View style={styles.tableHeaderEdit}>
                  <Text style={styles.tableText}>ROLL NO</Text>
                </View>

                <View style={styles.tableHeaderEdit}>
                  <Text style={styles.tableText}>DELETE</Text>
                </View>


              </View>

          


                {
                 state.map((item, index) => {
                    return (
                      <View style={styles.tableHeading}>
                        <View style={styles.srNoHeader}>
                          <Text style={styles.tableText}>{index+1}</Text>
                        </View>

                        <View style={styles.nameHeader}>
                          <Text style={styles.tableText}>{item.name}</Text>
                        </View>

                        <View style={styles.classHeader}>
                          <Text style={styles.tableText}>{item.standard}</Text>
                        </View>

                        <View style={styles.rollNoHeader}>
                          <Text style={styles.tableText}>{item.rollNo}</Text>
                        </View>

                        <View style={styles.deleteUser}>
                          <TouchableOpacity onPress={() => userDelete(item)}>
                          <IconAntDesign name="deleteuser" size={20} />  
                          </TouchableOpacity>

                        </View>
                      </View>
                    )
                  })
                }



              
            </View>

          </View>

          <TouchableOpacity style={styles.HomeBtn}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.buttons}>HOME</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </ImageBackground>



  );
}

export default UpdateStudentDetails;