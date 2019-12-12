import React, { useEffect } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { RootType } from 'navigation/types'

import styles from './styles'

export interface ExampleModalProps {}

const ExampleModal: RootType<ExampleModalProps> = ({ componentId }) => {
  useEffect(() => {
    const modalDismissEvent = Navigation.events().registerModalDismissedListener(
      ({ componentId: modalId }) => {
        console.log(modalId)
        if (modalId !== componentId) return
        Alert.alert('Modal Dismissed!')
      }
    )

    return () => {
      modalDismissEvent.remove()
    }
  }, [])

  return (
    <View style={styles.wrapper}>
      <Text>Example Modal</Text>

      <Button title="Close modal" onPress={() => Navigation.dismissModal(componentId)} />
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
      visible: false,
      color: 'black',
    },
  },
}

export { ExampleModal }
