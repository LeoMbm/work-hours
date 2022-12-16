import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

const Check = () => {
  return (
    <View>
     <Text>Hello</Text>
     <Button
              title="Dark"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />
        
    </View>
  )
}

export default Check