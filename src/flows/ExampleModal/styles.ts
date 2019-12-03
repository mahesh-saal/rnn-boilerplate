import { StyleSheet, ViewStyle } from 'react-native'

interface Style {
  wrapper: ViewStyle,
}

export default StyleSheet.create<Style>({
  wrapper: {
    flex: 1
  }
})