// App.js
import Users from "./Users";

function App() {
  const users = [
    { name: "Rohit", age: 20, phone: "1234567890", email: "rohit@gmail.com" },
    { name: "Anu", age: 22, phone: "9876543210", email: "anu@example.com" },
    { name: "Raj", age: 19, phone: "1112223333", email: "raj@example.com" }
  ];

  return (
    <div>
      {users.map((user, index) => (
        <Users key={index} {...user} />
      ))}
    </div>
  );
}

export default App;
