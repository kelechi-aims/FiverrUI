import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import SubCategory from '../../components/subCategory/SubCategory';
import Popular from '../../components/featured/popular/Popular';

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <SubCategory />
            <Popular />
        </div>
    )
}

export default Home;