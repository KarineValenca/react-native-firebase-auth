import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Header, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'
import { Provider as AuthProvider } from './src/context/AuthContext'
const App = () => {

  const [loggedIn, setLoggedIn] = useState(null)

   useEffect(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: "AIzaSyBUXk99P85b3Vno_6NQuqsiU_2VC6WmjJA",
          authDomain: "auth-c93ae.firebaseapp.com",
          databaseURL: "https://auth-c93ae.firebaseio.com",
          projectId: "auth-c93ae",
          storageBucket: "auth-c93ae.appspot.com",
          messagingSenderId: "4280556564",
          appId: "1:4280556564:web:4a9c5d36f525e64af35b01",
          measurementId: "G-MMQY4CBTXH"
        });
      }

      firebase.auth().onAuthStateChanged((user) => {
        user ? setLoggedIn(true) : setLoggedIn(false)
      })
      console.log(loggedIn)
    }, [loggedIn])
    
    const renderContent = () => {
      console.log("Render content")
      switch (loggedIn){
        case true: 
          return (
            <Button 
              onPress={() => firebase.auth().signOut()}> 
              Logout
            </Button>
          )
        case false:
          return (
            <LoginForm />
          )
        
        default: 
          return <Spinner size="large"/>

      }
    }

    return (
      <AuthProvider>
        <View>
          <Header headerText="Authentication" />
          {renderContent()}
        </View>
      </AuthProvider>
    )
}

export default App
