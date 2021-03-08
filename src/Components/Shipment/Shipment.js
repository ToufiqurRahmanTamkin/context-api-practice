import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is shipment</h2>
            <button onClick={()=> setCategory(category+1)}>Increment from category</button>
        </div>
    );
};

export default Shipment;