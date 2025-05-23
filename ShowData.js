import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, fetchOrdersByUserId, fetchProducts, postUser, deleteUser } from './api/supabaseApi';
import axios from 'axios';

const ShowData = () => {

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        enabled: true,
    });

    if(isLoading) return <View><Text>Component Loading...</Text></View>
    if(isError) return <View><Text>Some error occured.</Text></View>

   const queryClient = useQueryClient();

    const {mutate: post} = useMutation({
        mutationFn: postUser,
        onSuccess: (data) => {
             console.log("deleted the data in array", data)
             queryClient.invalidateQueries({ queryKey: ['users'] });
            }
    }) 

    return (
        <View style={{ padding: 20, marginTop: 50 }}>
            <Text style={styles.heading}>Products:</Text>
            <TouchableOpacity onPress={() => postUser(8)} style={styles.button}>
                <Text>Add</Text>
            </TouchableOpacity>

            {users?.map((user) => (
                <Text key={user.id}>{user.id}.{user.Name} - {user.Mobile}</Text>
            ))}

         
        </View>
    );
};

export default ShowData;

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    userText: {
        fontSize: 16,
        marginVertical: 4,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    inputBox: {
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        borderWidth: 1,
        padding: 20,
    }
});
