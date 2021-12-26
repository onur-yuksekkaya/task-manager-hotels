import React from 'react';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

export default function Form({ children, onSubmit, schema = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: useYupValidationResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
