import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

const Home = () => {
    return (
    <div id="page-home">
        <div className="content">
            <header>
                <img src={logo} alt="Ecoleta"/>
            </header>
        </div>
    </div>
    );
}

export default Home;