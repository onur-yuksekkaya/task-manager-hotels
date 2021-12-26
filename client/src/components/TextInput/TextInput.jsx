import React from 'react';

export default function TextInput({
  id,
  labelText,
  name,
  type,
  placeholder,
  register,
  errors,
  isDirty,
  ...rest
}) {
  return (
    <div className="py-2">
      <label
        htmlFor={id}
        className="block text-sm font-bold text-indigo-900 pb-2"
      >
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        className="block h-12 w-full pl-5 pr-12 sm:text-md border rounded-md invalid:border-red-500 valid:border-green-500 focus:outline-none focus:border-indigo-500 border-slate-300"
        placeholder={placeholder}
        name={name}
        required
        {...register(name)}
        {...rest}
      />
      <p className="inline-block text-red-500 h-1 w-full my-2 text-xs pl-5">
        {errors[name]?.message}
      </p>
    </div>
  );
}
