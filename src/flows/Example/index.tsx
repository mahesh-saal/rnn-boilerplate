import React, { useCallback, useEffect } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { publicRoute } from 'navigation/public/routes'
import { NavigationHelpers } from 'navigation/functions'
import { RootType } from 'navigation/types'

import styles from './styles'
import { Navigation } from 'react-native-navigation'

interface ExampleProps {
  componentId: string
}

const Example: RootType<ExampleProps> = ({ componentId }) => {
  const onPress = useCallback(() => {
    NavigationHelpers.pushTo(componentId, {
      name: publicRoute.example2,
    })
  }, [componentId])

  const openExampleModal = useCallback(() => {
    Navigation.showModal({
      stack: {
        id: 'MODAL_STACK_ID',
        children: [
          {
            component: {
              id: 'MODAL_COMPONENT_ID',
              name: publicRoute.exampleModal,
            },
          },
        ],
      },
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 1!</Text>
        <Button title="Navigate to Next" onPress={onPress} />

        <Button title="Open Example modal" onPress={openExampleModal} />
      </View>
    </ScrollView>
  )
}

Example.options = {
  topBar: {
    noBorder: true,
    title: { text: 'Example 1', color: 'black' },
    largeTitle: { visible: true, color: 'black' },
    background: {
      color: 'white',
    },
  },
}

export { Example }
