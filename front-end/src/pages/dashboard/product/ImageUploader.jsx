import React, { useState } from "react";

const MultiImageUploader = ({ form }) => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Generate preview URLs
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...previewUrls, ...prev]);
  };

  const handleDelete = (index) => {
    setPreviews((prev) => prev.filter((_, prevIdx) => prevIdx !== index));
  };

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={handleChange} />

      <div className="mt-4 flex gap-4 flex-wrap">
        {previews.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img}
              alt={`preview-${idx}`}
              className="w-32 h-32 object-cover border rounded"
            />
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs hidden group-hover:flex items-center justify-center"
              title="Delete"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUploader;
