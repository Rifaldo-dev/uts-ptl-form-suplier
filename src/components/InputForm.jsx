import React from "react";

const InputForm = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  const baseStyle =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-700 mb-1"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows="3"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseStyle} resize-none`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseStyle}
        />
      )}
    </div>
  );
};

export default InputForm;