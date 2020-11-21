const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" },
  ]

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User key={index.toString()} name={profile.name} age={profile.age} />;
      })}
    </div>
  );
}

export default App;
