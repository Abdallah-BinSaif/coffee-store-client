import React from 'react';

const Heading = () => {
    return (
        <div className={"back text-white object-cover"}>
            <div className={"flex justify-center items-center gap-2 py-4 "}>
                <img className={"h-10"} src={"/logo1.png"}/>
                <h2 className={"text-3xl"}>Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Heading;