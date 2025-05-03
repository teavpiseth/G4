function UserProfile({ name }) {
  return <h1>{name || "Guest User"}</h1>;
}

export default UserProfile;
