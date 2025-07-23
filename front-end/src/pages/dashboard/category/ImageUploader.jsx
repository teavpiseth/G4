import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../../const";

const ImageUploader = ({ form }) => {
  const [image, setImage] = useState(null); // preview URL
  const [file, setFile] = useState(null); // actual file

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(selected);
      form.setFieldValue("image", selected);
      setImage(URL.createObjectURL(selected));
    } else {
      setFile(null);
      setImage(null);
    }
  };

  useEffect(() => {
    if (!form.getFieldValue("image")) return; // edit
    setImage(SERVER_URL + "/" + form.getFieldValue("image"));
    form.setFieldValue("oldImage", form.getFieldValue("image"));
  }, []);

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image && (
        <div className="mt-2">
          <img
            src={image}
            alt="Preview"
            className="w-full object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
