import React from 'react'
import { View, Text } from 'react-native'
import { Header } from './src/components/common'


const App = () => {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>

    )
}

export default App