// User.js
function Users({ name, age, phone, email }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Users;
