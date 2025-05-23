import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import supabase from '../supabse/supabse-client';


const Home = () => {

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [item, setItem] = useState('');
  const [users, setUsers] = useState([])
  const [quantity, setQuantity] = useState('');


  const addUser = async () => {
    const newUser = {
      Name: name,
      Mobile: mobileNumber
    }
    const { data: user, error } = await supabase.from('UserList').insert([newUser]).select().single()
    setUsers(user)
    setName('');
    setMobileNumber('');
  };

  const placeOrder = async () => {
    console.log("User ID being used:", users);
    if (!users.id || !item || !quantity) {
      console.warn("Missing fields! Make sure all values are filled.");
      return;
    }
  
    const newOrder = {
      user_id: users.id,
      item: item,
      quantity: Number(quantity),
    };

    const { data: order, error } = await supabase.from('Orders').insert([newOrder]).select().single(); 
    if (error) {
      console.error(" Order insert error:", error);
    } else {
      console.log(" Order inserted:", order);
    }
    setItem('');
    setQuantity('');
  };


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Supabase</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.sideHeading}> Post a new user :</Text>
        <TextInput
          placeholder="User name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder='mobile number'
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
          style={styles.inputBox}

        />
        <TouchableOpacity onPress={addUser} style={styles.button}>
          <Text style={styles.buttonText}>Add User</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TextInput
          placeholder="item"
          value={item}
          onChangeText={(text) => setItem(text)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder='quantity'
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          style={styles.inputBox}

        />
        <TouchableOpacity onPress={placeOrder} style={styles.button}>
          <Text style={styles.buttonText}>Add User</Text>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 22,
    marginTop: 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    margin: 10,
    padding: 10,
  },
  inputBox: {
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    width: '20%',
    marginLeft: 150,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sideHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'blue'
  }
})