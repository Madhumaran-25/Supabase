import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const ShowAnother = () => {

     const {data, error} = useQuery({queryKey:['users']})

     {console.log("the data from the key in another page is", data)}
  return (
    <View>
      <Text>dummy</Text>
    </View>
  )
}

export default ShowAnother;