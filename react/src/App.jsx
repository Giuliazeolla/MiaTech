import React from 'react'

const App = () => {
  const elements = ['Elemento-1', 'Elemento-2', 'Elemento-3']
  return (
    <>
      <ul>
        {
          elements.map((element) => {
            return <li>{element}</li>
          })
        }
      </ul>
    </>
  )
}
export default App
