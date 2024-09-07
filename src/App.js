import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemList from './components/questionList';
// import AddItem from './components/AddItem'; // Componente que você criará para adicionar itens

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemList />} />
        {/* <Route path="/add-item" element={<AddItem />} /> */}
      </Routes>
    </div>
  );
};

export default App;