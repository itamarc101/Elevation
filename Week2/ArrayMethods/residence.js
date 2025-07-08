const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  function printUserInfo(user) {
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
  }

  users.forEach(printUserInfo);


};

fetchUsers();

