import useValidityCSS from 'hooks/useValidityCSS';
import React from 'react';

export default function TextArea({
  labelText,
  name,
  type,
  placeholder,
  register,
  errors,
  dirtyFields,
  ...rest
}) {
  const validityCSS = useValidityCSS(dirtyFields[name], errors[name]);

  return (
    <div className="py-2">
      <label
        htmlFor={name}
        className="block text-sm font-bold text-indigo-900 pb-2"
      >
        {labelText}
      </label>
      <textarea
        id={name}
        type={type}
        className={`block h-20 w-full pl-5 pr-12 py-3 sm:text-md border rounded-md focus:outline-none focus:border-indigo-500 border-slate-300 resize-none ${validityCSS}`}
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
