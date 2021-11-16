export const sendMail = (formData) => {
    return fetch('/api/nm/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
};