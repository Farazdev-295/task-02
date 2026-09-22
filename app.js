const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    const filteredUsers = users.filter(({ company }) =>
      /group|service/i.test(company.catchPhrase)
    );

    const formattedUsers = filteredUsers.map(
      ({ name, email, address: { city } }) =>
        `User: ${name} | Email: ${email} | City: ${city}`
    );

    console.log(formattedUsers);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });