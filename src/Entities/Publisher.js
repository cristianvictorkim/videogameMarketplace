const publishers = new Map()

async function getPublisherById(publisherId)
{
    let publisher = {};

    await fetch("http://localhost:3001/publisher/byId?" + new URLSearchParams({
            publisherId : publisherId
            }).toString())
        .then(res => res.json())
        .then(data => publisher = data);

    return publisher;
}

export { getPublisherById }