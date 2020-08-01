import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity,
  TextInput, ActivityIndicator, Keyboard,
  KeyboardAvoidingView, Alert, KeyboardStyleSheet,
  StyleSheet
} from 'react-native';



export default class SignUp extends Component {

  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };


  handleSignUp() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");


    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.allApp} behavior='height'>

        <View style={styles.header}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>
 
        <View style={styles.logContainer}>

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            error={hasErrors("email")}
            defaultValue={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput 
          style={styles.textInput}
          placeholder="Username"
            error={hasErrors("username")}
            defaultValue={this.state.username}
            onChangeText={text => this.setState({ username: text })} /
            >
          <TextInput 
          style={styles.textInput}
          placeholder="Password"
          error={hasErrors("password")}
          defaultValue={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          />
        </View>

        <View style={{ flex: 0.1, alignItems: 'center' }}>


          <TouchableOpacity style={styles.bigBatton} onPress={() => this.handleSignUp()}>
          {loading ? (
             <ActivityIndicator size="small" color="white" />
             ) : (
            <Text style={{ fontSize: 23 }}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.lowBatton} onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 16 }}>Back to Login</Text>
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
      marginVertical: '4%',
      padding: 12,
      fontSize: 18,

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
      width: '36%',
      marginHorizontal: '12%',
      marginVertical: '6%',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  })

