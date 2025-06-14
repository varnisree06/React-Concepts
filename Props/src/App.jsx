import User from "./User"

function App() {

   const userData = {
        name : "Rohit",
        age : 20,
        phone: "1234567890",
        email: "rohit@gmail.com"
    }

  return (
    // <div>
    //   <h1>Hello World</h1>
    //   <User name={userData.name} 
    //   age={userData.age} 
    //   phone={userData.phone} 
    //   email={userData.email}/>
    // </div>
    // //spread operator - should use the exact arguments name given here in the user page
    // we can only pass the components in a upward direction not the other way
    <div>
      <User {...userData}/> 
    </div>
  )
}

export default App
