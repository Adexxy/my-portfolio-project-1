import React, { useState } from 'react';

// const ShoppingList = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   const handleAddItem = () => {
//     setItems([...items, newItem]);
//     setNewItem('');
//   };

//   return (
//     <div>
//       <h2>Shopping List</h2>
//       <input
//         type="text"
//         placeholder="Add item..."
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <button onClick={handleAddItem}>Add</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingList;

// Existing imports and component definition...

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
  
    const handleAddItem = () => {
      setItems([...items, { text: newItem, isPurchased: false }]);
      setNewItem('');
    };
  
    const handleRemoveItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    const handleTogglePurchase = (index) => {
      const updatedItems = [...items];
      updatedItems[index].isPurchased = !updatedItems[index].isPurchased;
      setItems(updatedItems);
    };
  
    return (
      <div>
        <h2>Shopping List</h2>
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.isPurchased}
                onChange={() => handleTogglePurchase(index)}
              />
              {item.text}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ShoppingList;
  