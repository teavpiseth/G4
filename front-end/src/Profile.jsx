const Profile = ({ name, src, age = 12, address, handleAlertName }) => {
  function alert_() {
    alert("Hello student full stack");
  }

  return (
    <div className="p-2" onClick={() => handleAlertName(name)}>
      <p className="bg-[#20972f] text-[white]">
        Name: {name}, age : {age}, street: {address.street}
      </p>
      <img
        className="w-[200px] h-[200px] object-cover border-[3px]"
        src={src}
      />
    </div>
  );
};

export default Profile;
