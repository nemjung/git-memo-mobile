import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Entypo } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Memo"}}>
          <Stack.Screen name="Index" component={IndexScreen} options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Entypo name="squared-plus" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Show" component={ShowScreen} options={({navigation , route}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', 
              {
                id: route.params.id, 
                subject: route.params.subject, 
                content: route.params.content, 
                day: route.params.day,
                month: route.params.month,
                time: route.params.time,
                room: route.params.room,
              })}>
                <Entypo name="edit" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Create" component={CreateScreen}/>
          <Stack.Screen name="Edit" component={EditScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create();
