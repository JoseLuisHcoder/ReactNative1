import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity} from 'react-native';
import icon2 from './assets/favicon.png'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

let openImagePickerAsync = async () => {
 let permissionResult =  await ImagePicker.requestMediaLibraryPermissionsAsync()
  if(permissionResult.granted === false){
  alert('Permission to acces camera is requiered')
  return
  }
  const pickerResults = await ImagePicker.launchImageLibraryAsync()
  if(pickerResults.canceled === true){
    return
  }
  setSelectedImage({localUri: pickerResults.uri})
}


  return (
    <View style={styles.container}>
      <Image source={{uri: selectedImage !== null ? selectedImage.uri : 'https://picsum.photos/200/200'}} style={styles.image}/>
      <Text style={styles.title}>HOla Mundo</Text>
      <StatusBar style="auto" />
      <Image source={icon2}/>
      <Button title='Hola' onPress={() => Alert.alert('que tal') } color='red'   />
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text>Hola Mundo</Text>
      </TouchableOpacity>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red'
  },
  image:{
    width: 200,
    height:200,
    borderRadius:10
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderRadius: 10,
    width:100,
    height:50,
    backgroundColor:'orange'
  }
});
