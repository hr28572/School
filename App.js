
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/modules/HomeScreen/index';
import AddStudent from './src/modules/AddStudent/index';
import UpdateStudentDetails from './src/modules/UpdateStudentDetails/index';
import SearchStudent from './src/modules/SearchStudent/index';
import AddStudentMarks from './src/modules/AddStudentMarks/index'
import SearchResult from './src/modules/SearchResult/index';
import ViewResult from './src/modules/ViewResult/index';








const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator 
     screenOptions={{
      headerShown: false
    }}
     initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddStudent" component={AddStudent} />
        <Stack.Screen name="UpdateStudentDetails" component={UpdateStudentDetails} />
        <Stack.Screen name="AddMarks" component={SearchStudent} />
        <Stack.Screen name="AddStudentMarks" component={AddStudentMarks} />
        <Stack.Screen name="Result" component={SearchResult} />
        <Stack.Screen name="ViewResult" component={ViewResult} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
