import React from 'react';

const Header = ({title, subtitle}) => {
    return (
        <div className={"text-center my-8"}>
            <p className={""}>--- Sip & Savor ---</p>
            <h2 className={"text-5xl"}>Our Popular Products</h2>
        </div>
    );
};

export default Header;