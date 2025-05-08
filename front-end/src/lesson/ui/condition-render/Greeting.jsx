import Gallary from "../../Gallary";
function UserProfile({ name }) {
  console.log("c Greeting", name);
  return (
    <h1>
      {" "}
      {name || "Guest User"} <Gallary name={name} />
    </h1>
  );
}

export default UserProfile;
