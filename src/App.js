
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemUpdateContainer from './components/ItemUpdateContainer/ItemUpdateContainer';
import ItemFormContainer from './components/ItemFormContainer/ItemFormContainer';
import ChatContainer from './components/ChatContainer/ChatContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const greeting = '¡Buenos días! Que tenga una excelente compra.';
  
  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={greeting} />} />
          <Route path='category/:id' element={<ItemListContainer greeting={greeting} />} />
          <Route path='itemUpdate/:id' element={<ItemUpdateContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='chat/:email' element={<ChatContainer />} />
          <Route path='cart' element={<Cart />} />
          <Route path='addProd' element={<ItemFormContainer/>} />
          <Route path="*" element={<main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
