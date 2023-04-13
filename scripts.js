const images = [
    'https://i.imgur.com/Dt9B96r.jpg',
    'https://i.imgur.com/KcZhE7q.jpg',
    'https://i.imgur.com/ASDi2X0.jpg',
    'https://i.imgur.com/3bwFJKd.jpg',
    'https://i.imgur.com/1115n3i.jpg',
    'https://i.imgur.com/kMwIAbE.jpg',
    'https://i.imgur.com/zdWplr7.jpg',
    'https://i.imgur.com/hOOeEqD.jpg',
    'https://i.imgur.com/72nVed1.jpg'
];

// Function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to update URL parameter
function updateUrlParameter(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
    history.replaceState(null, null, newUrl);
}

function clearCards() {
    const cardContainer = document.getElementById('cardContainer');
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}

document.getElementById('newCard').addEventListener('click', () => {
    clearCards();
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    createCard(imageUrl);
});

function createCard(imageUrl) {
    updateUrlParameter('img', imageUrl);

    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'card-img-top';
    card.appendChild(img);

    const qrCodeCanvas = document.createElement('div');
    const qrCode = qrcode(0, 'M');
    qrCode.addData(window.location.href);
    qrCode.make();
    qrCodeCanvas.innerHTML = qrCode.createImgTag(8);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(qrCodeCanvas);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);
}

// Load the initial card
const imageUrlParam = getUrlParameter('img');
if (imageUrlParam && images.includes(imageUrlParam)) {
    createCard(imageUrlParam);
} else {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    createCard(imageUrl);
}