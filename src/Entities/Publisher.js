const publishers = new Map()

async function getPublisherById(publisherId)
{
    let publisher = {};

    await fetch(`http://localhost:5000/publishers/public/${publisherId}`)
        .then(res => res.json())
        .then(data => publisher = data);

    return publisher;
}

export { getPublisherById }