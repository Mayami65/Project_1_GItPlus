// Function to get users (team members) from Local Storage or return an empty array
function getUsers() {
    const users = localStorage.getItem('teamMembers'); // Use 'teamMembers' key to avoid conflict with auth data
    return users ? JSON.parse(users) : [];
  }
  
  // Function to save users (team members) to Local Storage
  function saveUsers(users) {
    localStorage.setItem('teamMembers', JSON.stringify(users));
  }
  
  // Function to display users (team members) on the page
  function displayUsers() {
    const users = getUsers();
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear existing users list
  
    // If there are no users, show a message
    if (users.length === 0) {
      userList.innerHTML = '<p>No team members found.</p>';
      return;
    }
  
    // Iterate over each user and display them
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
  
      // Add user info to the card
      userCard.innerHTML = `
        <div>
          <h4>${user.name}</h4>
          <p>${user.email}</p>
          <p>${user.role}</p>
        </div>
        <div class="actions">
          <button class="edit" onclick="editUser(${user.id})">Edit</button>
          <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
        </div>
      `;
  
      userList.appendChild(userCard);
    });
  }
  
  // Function to handle form submission (Create or Update user)
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const id = document.getElementById('userId').value; // Hidden field for editing users
    const name = document.getElementById('name').value.trim(); // Trim whitespace
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value.trim();
  
    if (!name || !email || !role) {
      alert('Please fill in all fields.');
      return;
    }
  
    let users = getUsers();
  
    if (id) {
      // Update existing user
      users = users.map(user => user.id == id ? { id: parseInt(id), name, email, role } : user);
    } else {
      // Create new user
      const newUser = { id: Date.now(), name, email, role };
      users.push(newUser);
    }
  
    saveUsers(users); // Save updated users list
    displayUsers(); // Refresh the displayed users list
  
    // Reset the form for a new entry
    document.getElementById('userForm').reset();
    document.getElementById('userId').value = ''; // Clear hidden ID field
  });
  
  // Function to edit a user
  function editUser(id) {
    const users = getUsers();
    const user = users.find(user => user.id === id);
  
    // Populate the form with user data for editing
    document.getElementById('userId').value = user.id;
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('role').value = user.role;
  }
  
  // Function to delete a user
  function deleteUser(id) {
    let users = getUsers();
    users = users.filter(user => user.id !== id); // Remove the user with the matching ID
  
    saveUsers(users); // Save updated users list
    displayUsers(); // Refresh the displayed users list
  }
  
  // Initial render of users (team members)
  displayUsers();
  