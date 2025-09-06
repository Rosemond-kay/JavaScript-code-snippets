// Session storage
        // Stores data for one session only.
        // Data is cleared when the browser tab or window is closed.
        // Isolated to the tab or window that created it.
        // Typically has a smaller storage limit compared to local storage.


// Methods:
        // sessionStorage.setItem(key, value): Stores data with the specified key in session storage.
        // sessionStorage.getItem(key): Retrieves the data associated with the specified key from session storage.
        // sessionStorage.removeItem(key): Removes the item with the specified key from session storage.



// Storing data
sessionStorage.setItem('cart', JSON.stringify({ item: 'product1', quantity: 2 }));

// Retrieving data
const cart = JSON.parse(sessionStorage.getItem('cart'));
console.log(cart); // Output: { item: 'product1', quantity: 2 }

// Removing data
sessionStorage.removeItem('cart');