import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './Counter'
import Hello from './Hello'
import Switch from './Switch'
import Output from './Output'
import Greet from './Greet'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const main = () => {
  return (
    <>
      <Counter />
      <Hello />
      <Switch />
      <Output />
      <Greet />
    </>
  )
}

export default main
