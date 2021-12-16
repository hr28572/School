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
      color: '#FF9900',
      marginTop: 100,
      marginBottom: 20
    },
  
    detailsContainer: {
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 50,
      marginBottom: 100,
      height: 'auto',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5
    },
    sessionHeading: {
      borderWidth: 1,
      borderColor: "#000000",
    },
    textSession: {
      fontWeight: 'bold',
      fontSize: 18
    },
  
    verticalLine: {
      borderBottomColor: "#000000",
      borderBottomWidth: 1,
      paddingTop: 5
    },
    tableHeading: {
      flexDirection: 'row',
    },
    tableHeaderSr: {
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 2,
      padding: 5,
    },
  
    srNoHeader: {
      borderWidth: 1,
      borderColor: "#000000",
      width:46,
      padding: 5,
      flexDirection:'column'
    },
  
    tableHeaderName: {
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 45,
      padding: 5,
      flexDirection:'column'
    },
    nameHeader: {
      borderWidth: 1,
      borderColor: "#000000",
      width:131.5,
      padding: 5,
    },
  
    tableHeaderRoll: {
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 5,
      padding: 5,
    },
  
  
    tableHeaderEdit: {
      borderWidth: 1,
      borderColor: "#000000",
      paddingHorizontal: 8,
      padding: 5,
    },
  
    classHeader: {
      borderWidth: 1,
      borderColor: "#000000",
      width:56.5,
      padding: 5,
    },
  
    rollNoHeader: {
      borderWidth: 1,
      borderColor: "#000000",
      width:76,
      padding: 5,
    },

    tableText: {
      fontWeight: 'bold',
      fontSize: 13,
      textAlign:'center'
    },
    deleteUser:{
      borderWidth: 1,
      borderColor: "#000000",
      width:68,
      padding: 5,
      alignItems:'center'
    },
  
    HomeBtn: {
      borderColor: "#403B3B",
      borderWidth: 1,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#403B3B",
      margin: 10,
    },
  
  
    buttons: {
      textAlign: 'center',
      fontWeight: '800',
      color: "#FFFFFF"
    },
  
  })