const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();


  const mappedUsers = users
  .filter(user => user.address.zipcode.startsWith("5"))
  .map(i => i.id);

  console.log(mappedUsers); 
};

fetchUsers();

