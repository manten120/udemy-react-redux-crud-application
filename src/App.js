import PropTypes from 'prop-types';

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 },
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
