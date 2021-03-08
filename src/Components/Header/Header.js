import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {

    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>This is a header: {category}</h2>
            <button onClick={()=> setCategory('Laptop')}>Laptop</button>
            <button onClick={()=> setCategory('Mobile')}>Mobile Phone</button>
            <button onClick={()=> setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;