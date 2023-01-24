import { useState, useEffect } from "react";
//import Add from "./Add";
import { useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {OrdersContext} from './OrdersContext';
//import Edit from "./Edit";

function Home () {

// 1. atvaizduojame duomenis is json failo
    const [addOrder, setAddOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:9000/orders');
            const data = await res.json();
            setAddOrder(data);
        };
        fetchData();
    }, []);

// ---- iki  cia ---
// nuo cia edit
     const {orders, loading, editOrder, deleteOrder} = useContext(OrdersContext);
     
     const navigate = useNavigate();
   
     if (loading) {
         return <p>Loading...</p>;
     }

     const handleEditOrder = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDeleteOrder = async (id) => {
        await fetch(`http://localhost:9000/orders/${id}`, {
            method: 'DELETE',
        });
        deleteOrder(id);
        setAddOrder(addOrder.filter(order => order.id !== id));
        navigate("/");
    };
  
    return ( 
        <div className="dataTable">
            <h2>Užsakymų duomenys</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Number of people</th>
                        <th>Price, Eur</th>
                        <th>Make changes</th>
                    </tr>
                </thead>
                <tbody>
                     {addOrder.map((order, id) => (
                        <tr key={id}>
                            <td>{order.id}</td>
                            <td>{order.people}</td>
                            <td>{order.price}</td>
                            <td>
                                <button className="editbtn" onClick={() => handleEditOrder(order.id)}>Edit</button>
                                <button className="deletebtn" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                            </td>
                        </tr>
                     ))
                }
                </tbody>
            </table>
        </div>
    );  
}
 
export default Home;
