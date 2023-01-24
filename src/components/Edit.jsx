//import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OrdersContext } from './OrdersContext';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const { orders, editOrder } = useContext(OrdersContext);
  const navigate = useNavigate();
 

  const order = orders.find((order) => order.id === parseInt(id));
  const [people, setPeople] = useState(order ? order.people : '');
  const [price, setPrice] = useState(order ? order.price : '');


  if (!order) {
    return <p>Order not found</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editOrder(id, people, price);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of People:
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </form>
  );
}

export default Edit;