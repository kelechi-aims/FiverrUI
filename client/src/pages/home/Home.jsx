import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import SubCategory from '../../components/subCategory/SubCategory';
import Popular from '../../components/popular/Popular';
import Third from '../../components/third/Third';
import Fourth from '../../components/fourth/Fourth';
import Fifth from '../../components/fifth/Fifth';
import Sixth from '../../components/sixth/Sixth';
import Seventh from '../../components/seventh/Seventh';
import Eigth from '../../components/eigth/Eigth';
import Ninth from '../../components/ninth/Ninth';
import Tenth from '../../components/tenth/Tenth';

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <SubCategory />
            <Popular />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Seventh />
            <Eigth />
            <Ninth />
            <Tenth />
        </div>
    )
}

export default Home;