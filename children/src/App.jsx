import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

const App = () => {

  return (
    <>
      <h1>My card</h1>
      <Card>
        <h4>Card</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, consectetur. Omnis aliquam unde, consectetur suscipit aliquid velit totam numquam vero quos laboriosam inventore provident nemo fugit eius aut saepe fuga!</p>
      </Card>
    </>
  )
}

export default App
