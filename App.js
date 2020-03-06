import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'

const App = () => {
   /* useEffect(() => {
      firebase.initializeApp({
          apiKey: "AIzaSyBUXk99P85b3Vno_6NQuqsiU_2VC6WmjJA",
          authDomain: "auth-c93ae.firebaseapp.com",
          databaseURL: "https://auth-c93ae.firebaseio.com",
          projectId: "auth-c93ae",
          storageBucket: "auth-c93ae.appspot.com",
          messagingSenderId: "4280556564",
          appId: "1:4280556564:web:4a9c5d36f525e64af35b01",
          measurementId: "G-MMQY4CBTXH"
      })
    }, [])*/
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>

    )
}

export default App