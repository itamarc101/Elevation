const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
    
  let isSC = users.every(c => c.address.city === "South Christy")

  console.log(isSC);

};

fetchUsers();

