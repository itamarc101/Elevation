const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();


  const mappedUsers = users
  .map(u => u.name)
  .filter(n => n.startsWith("C"));

  console.log(mappedUsers); 

};

fetchUsers();

