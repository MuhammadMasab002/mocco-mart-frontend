import React from "react";

const CustomFormInput = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
}) => {
  const baseStyle =
    "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500";
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-700 font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseStyle} ${className} `}
      />
    </div>
  );
};

export default CustomFormInput;
