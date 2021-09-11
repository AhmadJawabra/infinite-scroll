const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'laX7Zw0jK9PsPtP7jJ845o2sRTaUgeig-7uekC15Jhg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Element
function setAttributes (element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos () {
  // Run function for each object in photosArray
  photosArray.forEach( photo => {
    // create <a> to link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank'
    })
    // create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
    })
    // Put <img> inside <a>, then put both inside image container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });

}

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
        console.error(error)
    }
}
// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 ) {
        console.log('get photos');
        getPhotos();
    }
})

// On Load
getPhotos()
