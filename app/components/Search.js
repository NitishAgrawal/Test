import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { searchIcon, clearIcon } from '../assets';

const WAIT_INTERVAL = 1000;

const style = StyleSheet.create({
  search: {
    width: '100%',
    marginHorizontal: 16,
    height: 32,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  searchIcon: {
    width: 13,
    height: 14,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 7,
    backgroundColor: '#F8F8F8',
    fontSize: 14,
  },
  clearIconButton: {
    marginRight: 8,
  },
  clearIcon: {
    width: 14,
    height: 14,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleChange(value) {
    clearTimeout(this.timer);
    this.setState({ value });
    if (value.length > 2) {
      this.props.onSearchChange(value);
    } else if (value.length === 0) {
      this.props.onSearchChange(null);
    }
  }

  render() {
    return (
      <View style={[style.search, this.props.style.search]}>
        <Image style={style.searchIcon} source={searchIcon} />
        <TextInput
          ref={(input) => { this.textInput = input; }}
          style={[style.input, this.props.style.input]}
          placeholder={this.props.searchHolderText}
          returnKeyType="done"
          underlineColorAndroid="transparent"
          value={this.state.value}
          placeholderTextColor={this.props.placeholderTextColor}
          onChangeText={value => this.handleChange(value)}
        />
        <TouchableOpacity
          style={style.clearIconButton}
          onPress={() => this.handleChange('')}
        >
          <Image style={style.clearIcon} source={clearIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Search;

Search.defaultProps = {
  onSearchChange: _.noop,
  waitInterval: WAIT_INTERVAL,
  style: {},
  searchHolderText: 'Search',
  placeholderTextColor: undefined,
  value: null,
  setValue: _.noop,
};

Search.propTypes = {
  onSearchChange: PropTypes.func,
  waitInterval: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.any),
  searchHolderText: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
