import { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import Error from '../../error/Error';

import {
  isEmail,
  isFirstName,
  isLastName,
  isPassword,
  isPhone,
} from '../../../utils/validation/validation';

import { UserData } from './types';

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<UserData>({
    values: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit: SubmitHandler<UserData> = data => {
    console.log(data);
    reset();
  };

  const password = watch('password');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '450px',
        gap: '10px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <input
        type="text"
        placeholder="First Name"
        {...register('firstName', isFirstName)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.firstName && <Error message={errors.firstName.message} />}
      <input
        type="text"
        placeholder="Last Name"
        {...register('lastName', isLastName)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.lastName && <Error message={errors.lastName.message} />}
      <input
        type="tel"
        placeholder="Phone"
        {...register('phone', isPhone)}
        inputMode="numeric"
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.phone && <Error message={errors.phone.message} />}
      <input
        type="email"
        placeholder="Email"
        {...register('email', isEmail)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.email && <Error message={errors.email.message} />}
      <input
        type="password"
        placeholder="Password"
        {...register('password', isPassword)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.password && <Error message={errors.password.message} />}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register('repeatPassword', {
          validate: value => value === password || 'Passwords do not match',
          required: 'Passwords do not match',
        })}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {errors?.repeatPassword && (
        <Error message={errors.repeatPassword.message} />
      )}
      <button
        type="submit"
        style={{
          background: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Login
      </button>
    </form>
  );
};

export default SignUpForm;