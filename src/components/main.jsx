import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MainPage = () => {
  // const [success, setSuccess] = useState(true);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmission = (data) => {
    if (data.name !== '') {
      // setSuccess(true);
      navigate('/counter/app', { state: { name: data.name } });
      localStorage.setItem('name', JSON.stringify(data.name));
    } else {
      // setSuccess(false);
      alert('Please enter your name');
    }
  }

  return (
    <header className="App-header">
      <h1>Counter</h1>
      <form onSubmit={handleSubmit(onSubmission)}>
        <input placeholder="Name" {...register("name")}></input>
        <button type='submit'> Click me! </button>
      </form>
    </header>
  );
};

export default MainPage;