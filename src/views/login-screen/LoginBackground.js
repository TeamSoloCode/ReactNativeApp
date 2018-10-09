import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class BackgroundImage extends Component {
    render() {
        return (
            <Image  source={require('../../images/asset/backgroundLogin.jpeg')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
};
