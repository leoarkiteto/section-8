import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = () => {
  const addUserHandler = event => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>{' '}
        <input type='text' id='username' />{' '}
        <label htmlFor='age'>Age (Years)</label>
        <input type='text' id='age' /> <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
