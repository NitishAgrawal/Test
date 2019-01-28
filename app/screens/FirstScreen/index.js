/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from 'actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class First extends Component {
  onGetStarted() {
    const { navigate } = this.props.navigation;

    navigate('SecondScreen');
  }

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity
          style={ styles.welcome }
          onPress={ () => this.onGetStarted() }
        >
          <Text>
            Welcome to React Native!
          </Text>
        </TouchableOpacity>
        <Text style={ styles.instructions }>This is screen 1</Text>
      </View>
    );
  }
}

First.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

First.defaultProps = {
  navigation: {},
};

const mapStateToProps = state => ({
  isLoading: state.loaderReducers.isLoading,
});

const mapDispatchToProps = () => ({ actions: ActionCreators });

const FirstScreen = connect(mapStateToProps, mapDispatchToProps)(First);

export { FirstScreen };
