import React from 'react';

const ValidationComponent = (props) => {
    let lenMsg = 'Input long enough';

    if (props.strLen <= 5) {
        lenMsg = "Input too short"
    }
    return (
        <div>
            <p>{lenMsg}</p>
        </div>
    );
}

export default ValidationComponent;