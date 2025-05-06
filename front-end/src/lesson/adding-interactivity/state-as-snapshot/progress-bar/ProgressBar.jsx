// App.js
import React, { useState, useEffect } from "react";
import LoadingProgress from "./LoadingProgress";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    ///////////////// code not work
    // const interval = setInterval(() => {
    //   setProgress(progress + 10);
    //   console.log(progress)
    // }, 500); // Adjust the interval duration as needed

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10; // Adjust the increment as needed
      });
    }, 500); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {progress < 100 ? (
        <LoadingProgress progress={progress} />
      ) : (
        <div>
          <h1>Build Complete!</h1>
          {/* Your main application content */}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
