import { StyleSheet } from "react-native"
export default StyleSheet.create({
    
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    alignItems:"center",
    width:'100%'

  },
  backgroundImage:{
    height:'100%',
    width:'100%',
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FF9900',
    marginTop:150
  },
  detailsContainer:{
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,
    marginTop:100
  },
  details:{
    flexDirection:'row',
    padding:5
  },
  Text:{
    fontSize:14,
    fontWeight:'bold',
    padding:5
  },
  nameInput:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    width:'60%',
    marginLeft:80,
    padding:5,
  },
  fathersInput:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    width:'60%',
    marginLeft: 8,
    padding:5
  },
  classInput:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    width:'60%',
    marginLeft:75,
    padding:5
  },
  rollnoInput:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    width:'60%',
    marginLeft: 60,
    padding:5
  },
  HomeBtn: {
    borderColor: "#403B3B",
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#403B3B",
    margin:10,
    marginTop: 150
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
    color: "#FFFFFF"
  }
})