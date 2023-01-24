import { createContext, useState, useEffect } from 'react';

export const OrdersContext = createContext();
//"OrdersContext" komponentas yra naudojamas perduoti šias funkcijas ir "state" kitiems komponentams, kurie reikalingi valdyti užsakymus.

export function OrdersProvider({ children }) {
    //"OrdersProvider" komponente yra deklaruojami reikalingi "state" ir "function", kurie yra reikalingi užsakymų sąrašo valdymui.
  

  const [orders, setOrders] = useState([]);
  const addOrder = async (newOrder) => {
    try {
        const response = await fetch('http://localhost:9000/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setOrders([...orders, data]);
    } catch (error) {
        console.error('Error adding order:', error);
    }
}

  const [loading, setLoading] = useState(true);

//"useEffect" naudojamas gauti duomenis iš API
  useEffect(() => {
    fetch('http://localhost:9000/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);


  // paskui prieiti prie sios funkcijos
  function editOrder(id, people, price) {
  }

  const deleteOrder = (id) => {
    fetch (`http://localhost:9000/orders/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    })
    .catch(error => console.error('Error deleting order:', error));
};

useEffect(() => {
    fetch('http://localhost:9000/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [orders]);


  return (
    <OrdersContext.Provider value={{ orders, loading, addOrder, editOrder, deleteOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
