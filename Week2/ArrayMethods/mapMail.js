const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();


  const mappedUsers = users.map(user => {
    return {
        email: user.email,
        companyName: user.company.name
    };
  });

  console.log(mappedUsers); 
};

fetchUsers();

