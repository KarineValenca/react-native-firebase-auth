import React, {useState, useContext} from 'react'
import { Text,  StyleSheet } from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import { Context } from '../context/AuthContext'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state, signin } = useContext(Context)
    console.log(state) 

    return (
        <Card>
            <CardSection>
                <Input
                    placeholder="user@gmail.com"
                    label="E-mail:"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </CardSection>

            <CardSection>
                <Input 
                    placeholder="password"
                    label="Password:"
                    isSecureField
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
            </CardSection>
            
           { state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }

            <CardSection>
                <Button onPress={() => signin(email, password)}>
                    Log In
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
})


export default LoginForm