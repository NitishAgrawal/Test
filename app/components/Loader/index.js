import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000060',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  activityContainer: {
  },
});

const LoaderSize = 'large';

const Loader = ({ color, isAnimating }) => (
  <View style={ styles.container }>
    <ActivityIndicator
      animating={ isAnimating }
      style={ styles.activityContainer }
      size={ LoaderSize }
      color={ color }
    />
  </View>
);

Loader.propTypes = {
  color: PropTypes.string,
  isAnimating: PropTypes.bool,
};

Loader.defaultProps = {
  isAnimating: false,
  color: 'white',
};

export { Loader };
