import { StyleSheet } from "react-native"
export default StyleSheet.create({

    screen: {
      flex: 1,
      flexDirection: 'column',
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      width: '100%'
  
    },
    backgroundImage: {
      height: '100%',
      width: '100%',
      // opacity: 0.6,
      // backgroundColor:'transparent'
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#000000",
      marginTop: 100,
      marginBottom: 20
    },
  
    detailsContainer: {
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 50,
      marginBottom: 50,
      height: 'auto',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingBottom: 20
    },
    studentDetails: {
      padding: 20,
  
    },
    name: {
      flexDirection: 'row',
      padding: 2,
    },
    studentDetailsText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    verticalLine: {
      borderBottomColor: "#000000",
      borderBottomWidth: 1,
    },
    subHeading: {
      flexDirection: 'row',
      padding: 5
    },
  
    subject: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      padding: 5,
      fontWeight: 'bold',
    },
  
    totalMarks: {
      borderWidth: 1,
      padding: 5,
      fontWeight: 'bold'
    },
    obtainMarks: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      padding: 5,
      fontWeight: 'bold'
    },
  
    resultContainer: {
      flexDirection: 'row',
      marginBottom: 10
    },
  
    subjectName: {
      fontWeight: 'bold',
      padding: 4,
      marginLeft: 15,
  
    },
    subjectMarks: {
      fontWeight: 'bold',
      padding: 4,
      marginLeft: 60,
  
    },
  
    inputMarks: {
      fontWeight: 'bold',
      padding: 4,
      marginLeft: 80
    },
  
    resultSummary: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'black',
      padding: 5,
      marginLeft: 20,
      marginRight: 20
    },
    grandTotal: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 15,
      fontWeight: 'bold',
    },
    obtainMarksTotal: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 15,
      fontWeight: 'bold',
    },
    percentage: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 11,
      fontWeight: 'bold'
    },
  
    grandTotal: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: "#000000",
    paddingHorizontal: 15,
    fontWeight: 'bold',
    },

    grandTotal1: {
      borderWidth: 1,
      borderColor: "#000000",
      padding:5,
      width:83,
      fontWeight: 'bold',
      alignItems: 'center'
    },
    obtainMarksTotal1: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      padding:5,
      width:87,
      fontWeight: 'bold',
    },
    percentage1: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      padding:5,
      width:118,
      fontWeight: 'bold'
    },
  

    rankNumber: {
      textAlign: 'center',
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 59,
      fontWeight: 'bold',
    },
  
    checkBtn: {
      borderColor: "#403B3B",
      borderWidth: 1,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#403B3B",
      margin: 10
    },
  
    saveBtn: {
      borderColor: "#5799EC",
      borderWidth: 1,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#5799EC",
      margin: 10
    },
    buttons: {
      textAlign: 'center',
      fontWeight: '800',
      color: 'white'
    }
  
  })