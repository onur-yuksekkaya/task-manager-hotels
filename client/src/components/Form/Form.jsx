import React from 'react';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

export default function Form({
  children,
  onSubmit,
  schema = {},
  defaultValues = {},
  ...rest
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: useYupValidationResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
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
    </form>
  );
}
