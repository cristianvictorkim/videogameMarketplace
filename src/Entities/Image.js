async function uploadImage(file)
{
    let output = {}
    let formData = new FormData();
    formData.append('filename', file);

    await fetch(`http://localhost:5000/uploads/image`, {
        method: 'POST',
        body: formData
    }).then(res => res.json())
    .then(data => output = data);
    return output;
}

export { uploadImage };