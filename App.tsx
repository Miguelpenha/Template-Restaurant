import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from './theme'
import { ListProvider } from './listContext'
import { LocationProvider } from './locationContext'
import Routes from './routes'

function App() {
  const [pronto, setPronto] = useState(false)
  
  useEffect(() => {
    updateApp().then()
    setPronto(true)
  }, [])
  
  if (!pronto) {
    return <AppLoading/>
  } else {
    console.log(green('>> App Started'))

    return (
      <ThemeProvider>
        <ListProvider>
          <LocationProvider>
            <Routes/>
          </LocationProvider>
        </ListProvider>
      </ThemeProvider>
    )
  }
}

export default App