async function findDuplicatedPhotos(){
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let photos = await response.json();
    let urlList = photos.map((photo) => (photo.url));
    let urls = [...new Set(urlList)];
    console.log(urls)
}

findDuplicatedPhotos(); 