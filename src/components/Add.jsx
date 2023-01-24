import { useState, useContext } from "react";
import { OrdersContext } from './OrdersContext';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [people, setPeople] = useState('');
    const [price, setPrice] = useState('');
    const { addOrder } = useContext(OrdersContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        addOrder({people: people, price: price});
        navigate('/');
    };

    return ( 
        <>
            <form onSubmit={handleSubmit} className="form"> 
                <label>
                    Number of people:
                    <input type="number"
                    name="people"
                    value={people}
                    onChange={e => setPeople(e.target.value)}
                    placeholder="write number..." />
                </label>
                <label>
                    Total Price:
                    <input type="number"
                    name="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="Price..." />
                </label>
                <button type="submit" className="btn">Add Order</button>
            </form>
        </>
     );
}
 
export default Add;

