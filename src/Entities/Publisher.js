const publishers = new Map()

async function getPublisherById(publisherId)
{
    let publisher = {};

    await fetch(`http://localhost:5000/publishers/public/${publisherId}`)
        .then(res => res.json())
        .then(data => publisher = data);

    return publisher;
}

async function register(registerObject) {
    let result = '';
    await fetch(`http://localhost:5000/publishers/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            registerObject: registerObject
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        result = data.message;
    });   

    return result;
}

export { getPublisherById, register }