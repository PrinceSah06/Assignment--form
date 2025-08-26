import React from "react";

function InputField({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  name,
}) {
  // Variant styles
  const variants = {
    filled: "bg-gray-100 border-none",
    outlined: "border border-gray-400 bg-white",
    ghost: "bg-transparent border-b border-gray-300"
  };

  // Size styles
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg"
  };

  // Build classNames
  let inputClass = `
    w-full rounded transition
    ${variants[variant]}
    ${sizes[size]}
    ${invalid ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  return (
    <div className="w-full max-w-md mx-auto my-3">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1 text-gray-700">
          {label}
        </label>
      )}

      {/* Input Field */}
      <input
        id={name}
        name={name}
        type="text"
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={invalid}
        aria-describedby={helperText || errorMessage ? `${name}-desc` : undefined}
        disabled={disabled}
      />

      {/* Helper or Error Message */}
      {(helperText || errorMessage) && (
        <p
          id={`${name}-desc`}
          className={`mt-1 text-xs ${invalid ? "text-red-600" : "text-gray-500"}`}
        >
          {invalid ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
}

export default InputField;
