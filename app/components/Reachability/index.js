/* eslint react/forbid-prop-types: 0 */
import React, { PureComponent } from 'react';
import { NetInfo } from 'react-native';
import { commonLocalizeStrings } from 'localization';
import {
  Modal,
  ModalContent,
  ModalView,
  NoInternetImage,
  HeaderText,
  DetailText,
  DismissButton,
  ButtonTitle,
} from './styles';

export const NetworkStatus = {
  isInternetConnected: true,
};

class Reachability extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.internetConnectionChange);
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.internetConnectionChange);
  }

  internetConnectionChange = (result) => {
    if (!result) return;

    if (typeof result === 'string') {
      if (result === 'none' || result === 'NONE' || result === 'unknown' || result === 'UNKNOWN') {
        NetworkStatus.isInternetConnected = false;
        this.setState({ showModal: true });
      } else {
        NetworkStatus.isInternetConnected = true;
        this.setState({ showModal: false });
      }
    } else if (result.type && (result.type === 'none' || result.type === 'NONE' || result.type === 'unknown' || result.type === 'UNKNOWN')) {
      NetworkStatus.isInternetConnected = false;
      this.setState({ showModal: true });
    } else {
      NetworkStatus.isInternetConnected = true;
      this.setState({ showModal: false });
    }
  }

  dismiss = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;

    return (
      <ModalView>
        <Modal
          transparent
          visible={ showModal }
          animationType="slide"
        >
          <ModalContent>
            <NoInternetImage source={{ url: '' }} />
            <HeaderText>{ commonLocalizeStrings.internetError }</HeaderText>
            <DetailText>{ commonLocalizeStrings.noNetworkError }</DetailText>
            <DismissButton
              accessibilityLabel="buttonAllow"
              onPress={ this.dismiss }
            >
              <ButtonTitle>
                  DISMISS
              </ButtonTitle>
            </DismissButton>
          </ModalContent>
        </Modal>
      </ModalView>
    );
  }
}

export { Reachability };
