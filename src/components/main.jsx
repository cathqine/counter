import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MainPage = () => {
  // const [success, setSuccess] = useState(true);
  const [storedName, setStoredName] = useState(localStorage.getItem('name'));
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmission = (data) => {
    if (data.name !== '') {
      // setSuccess(true);
      navigate('/counter', { state: { name: data.name } });
      localStorage.setItem('name', JSON.stringify(data.name));
      setStoredName(JSON.stringify(data.name));
    } else {
      // setSuccess(false);
      alert('Please enter your name');
    }
  }

  useEffect(() => {
    const name = localStorage.getItem('name');
    let finalName = '';
    if (name) {
      const finalName = name.substring(1, name.length - 1);
      setStoredName(finalName);
    }
  }, [])

  return (
    <header className="App-header">
      <h1>Counter</h1>
      <form onSubmit={handleSubmit(onSubmission)}>
        <input onChange={(e) => setStoredName(e.target.value)} placeholder="Name" {...register("name")}></input>
        <button type='submit'> Click me! </button>
      </form>
    </header>
  );
};

export default MainPage;