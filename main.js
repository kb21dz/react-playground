function Users() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return users.map((user) => <UserCard key={user.id} user={user} />);
}

/**
 *
 * @returns React.component
 */

function UserCard({ user }) {
  console.log(user);
  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.company.name}</li>
      <li>{user.phone}</li>
      <li>{user.website}</li>
    </ul>
  );
}

ReactDOM.render(<Users />, document.querySelector("#app"));
