import React, { useCallback, useEffect } from 'react'
import { Text, View, Button, ScrollView, Alert, EmitterSubscription } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { publicRoute } from 'navigation/public/routes'
import { RootType } from 'navigation/types'
import { NavigationHelpers } from 'navigation/functions'

import styles from './styles'

interface Example2Props {
  componentId: string
}

const Example2: RootType<Example2Props> = ({ componentId }) => {
  const onCloseModal = useCallback(() => {
    Navigation.dismissModal(componentId)
  }, [componentId])

  useEffect(() => {
    const modalDismissEvent = Navigation.events().registerModalDismissedListener(
      ({ componentId: modalId }) => {
        if (modalId !== componentId) return
        Alert.alert('Modal dismissed!', 'The modal is dismissed.')
      }
    )

    return () => {
      modalDismissEvent.remove()
    }
  }, [])

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Modal Screen!</Text>
        <Button title="Close modal" onPress={onCloseModal} />
      </View>
    </ScrollView>
  )
}

Example2.options = () => ({
  topBar: {
    noBorder: true,
    title: { text: 'Example 2' },
    largeTitle: { visible: false },
  },
})

export { Example2 }
