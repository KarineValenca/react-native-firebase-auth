import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'

const App = () => {
   
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>

    )
}

export default App
