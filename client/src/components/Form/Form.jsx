import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

export default function Form({
  children,
  onSubmit,
  schema = {},
  defaultValues = {},
  valuesToSet = {},
  isDisabled = false,
  ...rest
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
  } = useForm({
    resolver: useYupValidationResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    const formValueKeys = Object.keys(valuesToSet);
    if (formValueKeys.length) {
      formValueKeys.forEach((key) => setValue(key, valuesToSet[key]));
    }
  }, [valuesToSet]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
      <fieldset className="border-none" disabled={isDisabled}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  errors,
                  dirtyFields,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </fieldset>
    </form>
  );
}
