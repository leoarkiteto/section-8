import { useState } from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = () => {
  const [enteredUsername, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge)
  };

  const usernameChangeHandler = event => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' onChange={usernameChangeHandler} />

        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
