const Profile = ({
  name,
  src,
  age = 12,
  address,
  handleAlertName,
  children,
  width = 100,
}) => {
  function alert_() {
    alert("Hello student full stack");
  }

  return (
    <div className="p-2" onClick={() => handleAlertName(name)}>
      <p className="bg-[#20972f] text-[white]">
        Name: {name}, age : {age}, street: {address.street}
      </p>
      <img width={width} className=" object-cover border-[3px]" src={src} />
      {children}
    </div>
  );
};

export default Profile;
