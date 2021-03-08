import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid red'}}>
            <h2>This is home: {category}</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;