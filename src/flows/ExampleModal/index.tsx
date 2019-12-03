import React from 'react'
import { View, Text, Button } from 'react-native'
import { RootType } from 'navigation/types'

import styles from './styles'
import { Navigation } from 'react-native-navigation'

export interface ExampleModalProps {}

const ExampleModal: RootType<ExampleModalProps> = ({ componentId }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Example Modal</Text>

      <Button 
        title="Close modal"
        onPress={() => Navigation.dismissModal(componentId)}
      />
    </View>
  )
}

ExampleModal.options = {
  topBar: {
    title: {
      text: 'Example Modal',
      color: 'black',
    },
    noBorder: true,
    background: { color: 'white' },
    largeTitle: {
      visible: true,
      color: 'black'
    }
  }
}

export { ExampleModal }