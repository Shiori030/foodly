import { registerRootComponent } from 'expo';

import App from './App';



async function enableMocking() {
  if (!__DEV__) {
    return
  }
 
  await require('./msw.polyfills')
  const { server } = await require('./mocks/server')
  server.listen()
}

enableMocking().then(() => {
  registerRootComponent(App);
})

