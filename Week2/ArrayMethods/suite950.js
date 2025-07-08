const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const user = users.find(a => a.address.suite === "Apt. 950");
    
    console.log(user.company.name);

};

fetchUsers();

