
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((users) => {

    const filteredUsers = users.filter((user) => {
      const catchPhrase = user.company.catchPhrase.toLowerCase();

      return catchPhrase.includes("group") ||
             catchPhrase.includes("service");
    });

    const result = filteredUsers.map((user) => {
      const { name, email, address } = user;
      const { city } = address;

      return `User: ${name} | Email: ${email} | City: ${city}`;
    });

    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
