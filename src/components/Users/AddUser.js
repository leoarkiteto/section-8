import { useState } from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    onAddUser();
    setEnteredAge('');
    setEnteredUserName('');
  };

  const usernameChangeHandler = event => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      <ErrorModal title='An error occurred!' message='Something went wrong!' />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>{' '}
          <input
            type='text'
            id='username'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />{' '}
          <label htmlFor='age'>Age (Years)</label>{' '}
          <input
            type='number'
            id='age'
            value={enteredAge}
            onChange={ageChangeHandler}
          />{' '}
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
