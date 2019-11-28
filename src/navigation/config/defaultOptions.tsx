import { Options } from 'react-native-navigation'
import { Platform } from 'react-native'

const shared: Options = {
  topBar: {
    background: {
      color: 'white',
    },
    title: {
      color: 'black',
    },
  },

  animations: {
    push: { waitForRender: true },
    setRoot: { waitForRender: true },
    setStackRoot: { waitForRender: true },
    showModal: { waitForRender: true },
    dismissModal: { waitForRender: true },
    pop: { waitForRender: true },
  },
}

const ios: Options = {
  ...shared,
  topBar: {
    ...shared.topBar,
    noBorder: true,
    largeTitle: {
      visible: true,
      color: 'black',
    },
  },
}

const android: Options = {
  ...shared,
  topBar: {
    ...shared.topBar,
    elevation: 0,
  },
}

export const defaultOptions: Options = Platform.select({
  android,
  ios,
})
