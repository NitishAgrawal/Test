import styled from 'styled-components';
import {
  UIColors, baseColors, fontSizes, spacing,
} from 'utils/variables';
import { responsiveSize } from 'utils/helpers';

const ModalView = styled.View`
`;

const Modal = styled.Modal`
`;

const ModalContent = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.primary};
`;

const NoInternetImage = styled.Image`
    width: ${responsiveSize(100)};
    height: ${responsiveSize(100)};
`;

const HeaderText = styled.Text`
    fontSize: ${responsiveSize(22)};
    color: ${baseColors.white}};
    margin-horizontal: ${spacing.semiMedium};
    text-align: center;
    margin-top: 20px;
`;

const DetailText = styled.Text`
    align-self: stretch;
    text-align: center;
    fontSize: ${responsiveSize(14)};
    color: ${baseColors.white};
    margin-horizontal: ${responsiveSize(10)};
    margin-top: 10px;
`;

const DismissButton = styled.TouchableOpacity`
    position: absolute;
    bottom: ${responsiveSize(30)};
    width: 80%;
    border-width: 1;
    border-color: transparent;
    border-radius: ${responsiveSize(10)};
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.maroon};
    height: ${responsiveSize(40)};
`;

const ButtonTitle = styled.Text`
    font-size: ${fontSizes.medium};
    color: ${baseColors.white};
    margin-horizontal: ${spacing.semiMedium};
    text-align: center;
    width: 100%;
    margin-top: 5px;
`;

export {
  ModalView,
  Modal,
  ModalContent,
  NoInternetImage,
  HeaderText,
  DetailText,
  DismissButton,
  ButtonTitle,
};
