import React, {useEffect, useState} from 'react';

function MessageElement({children,other}) {
    {console.log(children,"children")}

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setShowMessage(true);

    }, []);
    return (
        <div className="message-element-container">
            {children}
        <div>
            hghgh
        </div>
        </div>
    );
}

export default MessageElement;