import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './LoginButtonStyle'
import { loginWithFirebase } from './../../actions/actions';

class LoginButton extends Component {

    constructor(props) {
        super(props)
        this.props.email = ''
        this.props.password = ''  
    }

    render() {
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => {
                        this.props.loginWithFirebase(this.props.email, this.props.password)
                    }}
                    onShowUnderDelay={()=>{alert("Thông báo");}}  >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
}


const mapDispatchToProps = (dispatch) => ({
    loginWithFirebase: (email, password) => {
        dispatch(loginWithFirebase(email, password))
    }
})

export default connect(null, mapDispatchToProps)(LoginButton)
