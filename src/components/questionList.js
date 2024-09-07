import React, { useEffect, useState } from 'react';

var array = [];

const ItemList = () => {
const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/v1/questions')  // Substitua pela URL da sua API
    .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          array = Object.values(data.data);
          console.log(array)
          setItems(array);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Questões</h1>
      <ul>
        {items.map(item => (
          <li key={item.ID}>{item.Question}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;