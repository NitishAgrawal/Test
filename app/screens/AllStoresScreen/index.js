/**
 * Sample React Native App Created by Nitish Agrawal
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Loader } from 'components/Loader';
import { ActionCreators } from 'actions';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Search from 'components/Search';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  bodyContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    width: width - 32,
    borderRadius: 5,
  },
  bodyTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '800',
  },
  bodyItems: {
    marginTop: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
});

class AllStores extends Component {
  static navigationOptions = {
    title: 'AllStores',
  };

  constructor(props) {
    super(props);
    // this.updateDateItem = this.updateDateItem.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchAllStores();
  }

  renderItem(item) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity 
        style={{ marginTop: 5 }}
        onPress={() => navigate('SecondScreen')}
      >
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>
            {item.tradingName || item.storeId || item._id}
          </Text>
          <Text style={styles.bodyItems}>
            {item.status}
          </Text>
      </View>
      </TouchableOpacity> 
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        <Search
          onSearchChange={(searchText) => {
            if (searchText === null){
              this.props.actions.fetchAllStores();
              return;
            }
            this.props.actions.searchStore(searchText)
          }}
        />
        {(this.props.allStores && this.props.allStores.length > 0) ?
        <FlatList
          data={this.props.allStores}
          extraData={this.props}
          renderItem={item => this.renderItem(item.item)}
          keyExtractor={item => String(_.get(item, 'storeId'))}
        />
          : <Text style={[styles.bodyTitle, {
              marginTop: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }]}>List have no item.</Text>
        }
        <Loader isAnimating={this.props.isLoading} />
      </View>
    );
  }
}

AllStores.propTypes = {
  isLoading: PropTypes.bool,
  navigation: PropTypes.objectOf(PropTypes.any),
  fetchAllStores: PropTypes.func,
};

AllStores.defaultProps = {
  isLoading: false,
  navigation: {},
  fetchAllStores: _.noop,
};

const mapStateToProps = state => ({
  isLoading: state.loaderReducers.isLoading,
  allStores: state.allStores.allStores,
});

const mapDispatchToProps = () => ({ actions: ActionCreators });

const AllStoresScreen = connect(mapStateToProps, mapDispatchToProps)(AllStores);

export { AllStoresScreen };
