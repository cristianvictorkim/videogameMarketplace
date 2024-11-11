async function uploadPicture(file)
{
    const formData = new FormData();
    formData.append("image", file);
    console.log(file)
    const response = await fetch("http://localhost:5000/images/upload", {
        method: "POST",
        body: formData,
    });
    
    if (response.ok) {
        const result = await response.json();
        console.log("File uploaded successfully:", result);
    } 
    else {
        console.error("Upload failed:", response.statusText);
    }
}

export { uploadPicture }