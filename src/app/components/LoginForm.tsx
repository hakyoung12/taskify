'use Client';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  Id: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });
}
