import React, { useState } from 'react';

export const MESSAGE_TYPES = {
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning',
    SUCCESS: 'success',
};

// type Message = {
//     text: String,
//     kind: enum(MESSAGE_TYPES),
// }
function usePage() {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    return {
        message,
        setMessage,
        loading,
        setLoading,
    }
}

export default usePage;