function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
      <p>This is my first custom component</p>
      <p>you are {props.age} year old</p>
      <p> you city is {props.city}</p>
    </div>
  )
}


export default Greeting 