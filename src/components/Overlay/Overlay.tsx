import React from 'react';
import { View, Text } from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface Props {
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({ isVisible, children }) => {
  return (
    <ReactNativeModal isVisible style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text>{children}</Text>
      </View>
    </ReactNativeModal>
  );
};

export default Overlay;
