function UserProfile({ name }) {
  console.log(name);
  return <h1>{name || "Guest User"}</h1>;
}

export default UserProfile;
