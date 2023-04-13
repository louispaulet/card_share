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

document.getElementById('newCard').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    createCard(imageUrl);
});

function createCard(imageUrl) {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'card-img-top';
    card.appendChild(img);

    const qrCodeCanvas = document.createElement('canvas');
    new QRCode(qrCodeCanvas, {
        text: window.location.href,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

const cardBody = document.createElement('div');
cardBody.className = 'card-body';
cardBody.appendChild(qrCodeCanvas);
card.appendChild(cardBody);

cardContainer.appendChild(card);
}

// Load the initial card
createCard(images[Math.floor(Math.random() * images.length)]);