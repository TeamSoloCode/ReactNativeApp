import React, { Component } from 'react';
import { Text, View, TextInput, Image ,ImageBackground} from 'react-native';
import { connect } from 'react-redux'

import LoginButton from '../../components/login-button/LoginButton';
import RegisterButton from '../../components/register-button/RegisterButton';
import styles from './LoginStyle';

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.props.email = ''
    this.props.password = ''
  }

  render() {
    return (
      <ImageBackground  
        style={styles.backgroundImage}
        blurRadius={2}
        source={require('../../images/asset/backgroundLogin.jpeg')} >
        <View style={styles.container}>

          <View style={styles.titlePosition}>
            <Image source={require('../../images/asset/logoGeolocation.png')} style={styles.logo}/>
          </View>

          <View style={styles.inputPositionUsername}>
            <Image source={require('../../images/asset/userLoginIcon.png')} style={styles.ImageStyle} />
            <TextInput style={styles.input} keyboardType="email-address" placeholder="Input Email"
              onChangeText={(text) => { this.props.email = text }}
              underlineColorAndroid="transparent" />
          </View>

          <View style={styles.inputPositionPassword}>
            <Image source={require('../../images/asset/passwordLoginIcon.png')} style={styles.ImageStyle} />
            <TextInput style={styles.input} keyboardType="default" textContentType="password"
              placeholder="Input Password" secureTextEntry={true}
              onChangeText={(text) => { this.props.password = text }}
              underlineColorAndroid="transparent" />
          </View>

          <View style={styles.buttonPosition}>
            <LoginButton email={this.props.email} password={this.props.password}></LoginButton>
            <RegisterButton></RegisterButton>
          </View>
        </View>

      </ImageBackground>

    );
  }
}

export default connect()(LoginScreen);