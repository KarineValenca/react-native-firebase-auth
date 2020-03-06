import React, {useState} from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                    isSecurePassword
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
            </CardSection>
            <CardSection>
                <Button>
                    Log In
                </Button>
            </CardSection>
        </Card>
    )
}



export default LoginForm