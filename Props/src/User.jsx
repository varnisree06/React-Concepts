import React from 'react'

// function User(props) {

//   return (
//     <div>
//      <h1>{props.name}</h1>
//      <h6>{props.age}</h6>
//      <h6>{props.phone}</h6>
//      <h6>{props.email}</h6>
//     </div>
//   )
// }

function User({name, age, phone, email}) {
    return (
        <div>
         <h1>{name}</h1>
         <h6>{age}</h6>
         <h6>{phone}</h6>
         <h6>{email}</h6>
        </div>
      )
    
}
export default User
