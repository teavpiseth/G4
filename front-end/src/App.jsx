import "./App.css";
import Profile from "./lesson/Profile";
import Gallary from "./lesson/Gallary";
import Greeting from "./lesson/condition-render/Greeting";

const profile = [
  {
    name: "Srey",
    src: "https://i.pinimg.com/736x/b0/28/09/b028096d34128a39b8f90ef834307f0e.jpg",
    age: 20,
    address: {
      houseNum: 51,
      street: 10,
    },
    description: "good person",
  },
  {
    description: "good person 1",
    address: {
      houseNum: 12,
      street: 55,
    },
    age: 10,
    name: "Chenda",
    src: "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
  },
  {
    description: "good person 2",
    address: {
      houseNum: 511,
      street: 120,
    },
    age: 11,
    name: "thyda",
    src: "https://media.istockphoto.com/id/146746272/photo/happy-child.jpg?s=612x612&w=0&k=20&c=Gs9N1pyFHvbMqa9wWoRqxoBO_P_ie4vUYCxSi0bSKxs=",
  },
  {
    description: "good person 3",
    address: {
      houseNum: 511,
      street: 120,
    },
    name: "thyda Ly",
    age: 20,
    src: "https://i.pinimg.com/236x/18/c5/df/18c5df9541f329a4a9db307ccb04bc7e.jpg",
  },
  {
    description: "good person 4",
    address: {
      houseNum: 511,
      street: 120,
    },
    name: "thyda",
    src: "https://media.istockphoto.com/id/146746272/photo/happy-child.jpg?s=612x612&w=0&k=20&c=Gs9N1pyFHvbMqa9wWoRqxoBO_P_ie4vUYCxSi0bSKxs=",
  },
];

function App() {
  // parent component

  function helloChild(name) {
    alert(name);
  }
  return (
    <>
      <Greeting name={"sovannet"} />
      <div className="flex">
        {profile.map((pro, i) => (
          <Profile
            key={i}
            name={pro.name}
            src={pro.src}
            age={pro.age}
            address={pro.address}
            handleAlertName={helloChild}
          >
            <Gallary />
            <p>Description {pro.description}</p>
            <span>......</span>
          </Profile>
        ))}
        <Greeting name={"sovannet"} />
      </div>
    </>
  );
}

export default App;
