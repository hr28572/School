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
    },

    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#000000",
      marginTop: 150,
      marginBottom: 20
    },
    subHeading:{
      padding:20,
      marginTop:100
    },
  
    text:{
      fontSize:15,
      fontWeight:'bold',
    },
  
    rollNoInput:{
      backgroundColor:"#FFFFFF",
      borderColor:"#000000",
      borderWidth:1,
      padding:5,
      width:100,
      textAlign:'center',
      fontWeight:'bold',
      fontSize:14,
      marginBottom:80,
      marginTop:20,
      borderRadius:5
  
    },
  
    homeBtn: {
      borderColor: "#403B3B",
      borderWidth: 1,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#403B3B",
      margin: 10
    },
  
    searchBtn: {
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
      color: '#FFFFFF'
    }
  
  })