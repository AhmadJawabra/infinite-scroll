// Unsplash API
const count = 10;
const apiKey = 'laX7Zw0jK9PsPtP7jJ845o2sRTaUgeig-7uekC15Jhg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
        console.error(error)
    }
}

getPhotos()
