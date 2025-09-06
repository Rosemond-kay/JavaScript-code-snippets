// Local storage
        // Stores data with no expiration date.
        // Data persists even after the browser is closed and reopened.
        // Shared across all windows with the same origin.
        // Typically has a larger storage limit compared to session storage.


// Methods:
        // localStorage.setItem(key, value): Stores data with the specified key in local storage.
        // localStorage.getItem(key): Retrieves the data associated with the specified key from local storage.
        // localStorage.removeItem(key): Removes the item with the specified key from local storage.



// Storing data
localStorage.setItem('username', 'Amanuel');

// Retrieving data
const username = localStorage.getItem('username');
console.log(username); // Output: Amanuel

// Removing data
localStorage.removeItem('username');