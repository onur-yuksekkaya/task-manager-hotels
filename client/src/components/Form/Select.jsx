import useValidityCSS from 'hooks/useValidityCSS';
import React from 'react';

export default function Select({
  labelText,
  register,
  options,
  name,
  errors,
  isMultiple = false,
  dirtyFields,
  customStyleClass = '',
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
      <select
        id={name}
        {...register(name)}
        className={`block h-12 w-full pl-5 pr-12 sm:text-md border rounded-md focus:outline-none focus:border-indigo-500 border-slate-300 overflow-y-scroll disabled:bg-gray-300 ${validityCSS} ${customStyleClass}`}
        multiple={isMultiple}
        {...rest}
      >
        {options.map((optionItem) => (
          <option
            key={optionItem.text.slice(0, 5)}
            value={optionItem.value}
            className="even:bg-indigo-200 odd:bg-indigo-300"
          >
            {optionItem.text}
          </option>
        ))}
      </select>
      <p className="inline-block text-red-500 h-1 w-full my-2 text-xs pl-5">
        {errors[name]?.message}
      </p>
    </div>
  );
}
