import React, { useCallback } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { publicRoute } from 'navigation/public/routes'
import { NavigationHelpers } from 'navigation/functions'
import { RootType } from 'navigation/types'

import styles from './styles'

interface ExampleProps {
  componentId: string
}

const Example: RootType<ExampleProps> = ({ componentId }) => {
  const onPress = useCallback(() => {
    NavigationHelpers.showStackModal({
      name: publicRoute.example2,
    })
  }, [componentId])

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 1!</Text>
        <Button title="Open modal" onPress={onPress} />
      </View>
    </ScrollView>
  )
}

Example.options = {
  topBar: {
    noBorder: false,
    title: { text: 'Example 1' },
    largeTitle: { visible: false },
  },
}

export { Example }
