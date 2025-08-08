import React, { useState } from 'react';

const Hudini = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div>{show ? "Now you see me" : "Now you don't"}</div>
            <button onClick={() => setShow(!show)}>Toggle Visibility</button>
        </div>
    );
};

export default Hudini;
