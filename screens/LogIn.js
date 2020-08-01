import React, { useState, Component } from 'react'
import { View, Text, TouchableOpacity, 
         TextInput, StyleSheet, ActivityIndicator,
         Keyboard, KeyboardAvoidingView, } from 'react-native';



const VALID_EMAIL = "Chelickan";
const VALID_PASSWORD = "subscribe";

export default class Login extends Component {

    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false
    };


    handleLogin() {
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];
        Keyboard.dismiss();
        this.setState({ loading: true });
        if (email !== VALID_EMAIL) {
            errors.push("email");
        }
        if (password !== VALID_PASSWORD) {
            errors.push("password");
        }

        this.setState({ errors, loading: false });

        if (!errors.length) {
            navigation.navigate("SignUp");
        }

    }
    // const [data, setData] = useState([

    //     { name: 'Scryyyl', password: 1111, id: 1 },
    //     { name: 'Shopka',  password: 1, id: 2 },
    //     { name: 'Scryyyl', password: 1111, id: 3 },
    //     { name: 'Scryyyl', password: 1111, id: 4 },
    //     { name: 'Scryyyl', password: 1111, id: 5 },

    // ]);

    // const [text, setText] = useState('');

    // const changeText = (val) => {
    //     setText(val)
    // };

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

        return (
            <KeyboardAvoidingView style={styles.allApp} >

                <View style={styles.header}>
                    <Text style={styles.headerText}>Log in</Text>
                </View>

                <View style={styles.logContainer}>
                    <TextInput
                        style={styles.textInput}
                        label="Email"
                        error={hasErrors("email")}
                        defaultValue={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                    <TextInput
                        style={styles.textInput}
                        label="Password"
                        error={hasErrors("password")}
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>

                <View style={{ flex: 0.1, alignItems: 'center' }}>

                    <TouchableOpacity
                        style={styles.bigBatton}
                        onPress={() => this.handleLogin()}>
                        {loading ? (<ActivityIndicator size="small" color="white" />) : (
                                <Text style={{ fontSize: 23 }}>Login</Text>
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.lowBatton}>
                        <Text style={{ fontSize: 16 }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({

    allApp: {
        flex: 1,
        backgroundColor: '#000',
    },


    header: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },

    logContainer: {
        flex: 0.5,
    },

    textInput: {
        backgroundColor: '#a39d9d',
        color: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginHorizontal: '8%',
        marginVertical: '5%',
        fontSize: 18,
        padding: 12
    },

    bigBatton: {
        backgroundColor: '#e3e3e3',
        padding: '3%',
        borderRadius: 6,
        width: '76%',
        marginHorizontal: '12%',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    lowBatton: {
        backgroundColor: '#fff',
        padding: '2%',
        borderRadius: 6,
        width: '26%',
        marginHorizontal: '12%',
        marginVertical: '6%',
        alignItems: 'center',
        fontWeight: 'bold',
    },
});
