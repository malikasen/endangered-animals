import * as React from "react";

let userList = [
  { id: 1, name: "Xiao", email: "xiao@email.com" },
  { id: 2, name: "Natalie", email: "natalie@email.com" },
  { id: 3, name: "Tabitha", email: "tabitha@email.com" },
];

let idSequence = 3;

const Users = () => {
  const [users, setUsers] = React.useState([]);

  const loadUsers = () => setUsers(userList);
  const addUser = (user) => {
    userList = [...userList, { ...user, id: (idSequence += 1) }];
    loadUsers();
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section>
      <UserList {...{ users }} />
      <AddUser {...{ addUser }} />
    </section>
  );
};

const UserList = ({ users }) => (
  <ul>
    {users.map(({ id, name, email }) => (
      <li key={id}>
        {name} ({email})
      </li>
    ))}
  </ul>
);

const AddUser = ({ addUser }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      name: { value: name },
      email: { value: email },
    } = form.elements;

    e.preventDefault();
    addUser({ name, email });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name: <input name="name" required />
      </label>
      <label>
        Email: <input name="email" type="email" required />
      </label>
      <button>Add user</button>
    </form>
  );
};

export default Users;
