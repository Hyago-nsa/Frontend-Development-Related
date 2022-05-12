import React from "react";

function App() {

  const [contact,setContact] = React.useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const {name, value} = event.target;

    setContact( (previousValue) => {
        return{
          ...previousValue,
          [name] : value
        }
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
