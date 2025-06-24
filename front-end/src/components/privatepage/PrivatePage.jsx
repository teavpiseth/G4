import React, { useEffect } from "react";
import Localstorage from "../../utils/Localstorage";

function PrivatePage({ component }) {
  const [isValid, setIsValid] = React.useState(false);
  useEffect(() => {
    if (Localstorage.getAssessToken() !== null) setIsValid(true);
  }, []);

  if (isValid == false) return <div>UnAuthorized</div>;
  return <div>{component}</div>;
}

export default React.memo(PrivatePage);
