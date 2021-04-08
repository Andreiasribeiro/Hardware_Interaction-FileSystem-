import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function App() {

  
  const [name, setName] = useState();
  //method to save data
  const save = async () => {
    try {
      await AsyncStorage.setItem("Storage_Key", name)

  //alert('Data successfully saved')
    } catch (error) {
      alert('Failed to save the data to the storage');

    }
  };
 //method to load data
  const load = async () => {
    try {
      let name = await AsyncStorage.getItem("Storage_Key");

      if (name !== null) {
        setName(name);
      }

    } catch (error) {
      alert('Failed to load the data from storage');

    }

  };
  //method to remove data
  const remove = async () => {
    try {

      await AsyncStorage.removeItem("Storage_Key");
    } catch (error) {

    } finally {
      setName("");
    }
  };

  useEffect(() => {
    load();
  }, []);



  return (
    <View style={styles.container}>

      <Image
        source={require("./assets/logo_CA1.png")}
        style={{ width: 200, height: 200, marginTop: 64 }}
        resizeModo="contain"
      />

      <Text style={{ height: 30 }}>{name}</Text>
      <Text > Enter your data here:</Text>

      <TextInput style={styles.input} onChangeText={(text) => setName(text)} />

      <TouchableOpacity style={styles.botton} onPress={() => save()}>
        <Text style={{ color: "white" }}>Save your data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botton} onPress={() => remove()}>
        <Text style={{ color: "white" }}>Remove your data</Text>
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
  name: {

    fontWeight: "300",
    fontSize: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: "#A0E7E5",
    alignSelf: "stretch",
    margin: 24,
    height: 64,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 34,
    fontWeight: "300",
  },

  botton: {

    backgroundColor: "#00A0F3",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 32,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,

  }
});
