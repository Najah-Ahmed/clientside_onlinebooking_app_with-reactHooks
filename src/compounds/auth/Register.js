import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';
import { Link } from 'react-router-dom';
const Register = (props) => {
  const authContext = useContext(AuthContext);
  // const alertContext = useContext(AlertContext);
  const { register, clearError, error, isAuthenticated } = authContext;
  // const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/login'); //redircated to homepage
    }
    if (error === 'User already Exist') {
      // setAlert(error, 'danger');
      clearError();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    fullName: '',
    email: '',
    phoneNum: '',
    password: '',
    password2: '',
  });
  const { username, fullName, email, phoneNum, password, password2 } = user;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      // setAlert('Please Enter All Fields ', 'danger');
      console.log('empty field not allow');
    } else if (password !== password2) {
      // setAlert('Password Do Not Match ', 'danger');
      console.log('password not match');
    } else {
      register({
        username,
        fullName,
        email,
        phoneNum,
        password,
      });
      // console.log(username, email, password, fullName, phoneNum);
    }
  };
  return (
    <div className='container mx-auto   h-auto  flex flex-1 justify-center items-center overflow-hidden'>
      <div className='w-full max-w-lg'>
        <div className='leading-loose'>
          <form
            onSubmit={onSubmit}
            className='max-w-xl m-4 p-10 bg-white rounded shadow-xl'>
            <h1 className='text-gray-800 text-center text-3xl   font-bold'>
              Account <span className=''>Register</span>
            </h1>
            <div className='mt-2'>
              <label className='block text-sm text-gray-600' htmlFor='name'>
                Name
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='text'
                name='username'
                value={username}
                onChange={onChange}
              />
            </div>
            <div className='mt-2'>
              <label className='block text-sm text-gray-600' htmlFor='fullName'>
                fullName
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='text'
                name='fullName'
                value={fullName}
                onChange={onChange}
              />
            </div>
            <div className='mt-2'>
              <label className='block text-sm text-gray-600' htmlFor='email'>
                Email
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='email'
                name='email'
                value={email}
                onChange={onChange}
              />
            </div>
            <div className='mt-2'>
              <label className='block text-sm text-gray-600' htmlFor='phoneNum'>
                phoneNum
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='phoneNum'
                name='phoneNum'
                value={phoneNum}
                onChange={onChange}
              />
            </div>
            <div className='mt-2'>
              <label className='block text-sm text-gray-600' htmlFor='password'>
                Password
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                minLength='6'
              />
            </div>
            <div className='mt-2'>
              <label
                className='block text-sm text-gray-600'
                htmlFor='password2'>
                Confirm Password
              </label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                minLength='6'
              />
            </div>
            <div className='mt-4 items-center justify-between'>
              <input
                type='submit'
                value='Register'
                className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
              />
            </div>
            <Link
              className='inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800'
              to='/login'>
              Have account ?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
