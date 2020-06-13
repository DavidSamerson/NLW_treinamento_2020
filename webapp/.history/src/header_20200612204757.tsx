import React from 'react';

interface HeaderProps {
    title: String;
}


const Header : React.FC<HeaderProps> = (props) => {
    return (
        <div>
            <h1>titulo:{props.title} ECOLETA</h1>
        </div>
    );
}



export default Header;