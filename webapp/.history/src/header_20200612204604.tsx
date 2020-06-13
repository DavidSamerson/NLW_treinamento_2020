import React from 'react';

interface HeaderProps {
    title: String;
}


const Header : React.FC<HeaderProps> = () => {
    return (
        <div>
            <h1>ECOLETA</h1>
        </div>
    );
}



export default Header;