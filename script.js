document.addEventListener('DOMContentLoaded', () => {
    // Dynamic space missions data
    const missions = [
        { name: 'Apollo 11', year: 1969, description: 'First Moon Landing' },
        { name: 'Voyager 1', year: 1977, description: 'Interstellar Space Explorer' },
        { name: 'Hubble', year: 1990, description: 'Space Telescope' },
        { name: 'Mars Perseverance', year: 2020, description: 'Mars Rover Mission' }
    ];

    const missionGrid = document.querySelector('.mission-grid');
    missions.forEach(mission => {
        const missionCard = document.createElement('div');
        missionCard.className = 'mission-card';
        missionCard.innerHTML = `
            <h3>${mission.name}</h3>
            <p>${mission.year}</p>
            <p>${mission.description}</p>
        `;
        missionGrid.appendChild(missionCard);
    });

    // Interactive planet information
    document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('click', () => {
            showPlanetInfo(planet.textContent);
        });
    });

    // Fetch space images from NASA API
    fetchSpaceImages();
});

async function fetchSpaceImages() {
    const imageGrid = document.querySelector('.image-grid');
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6');
        const data = await response.json();
        
        data.forEach(item => {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `
                <img src="${item.url}" alt="${item.title}">
                <h4>${item.title}</h4>
            `;
            imageGrid.appendChild(imageCard);
        });
    } catch (error) {
        console.log('Error fetching space images:', error);
    }
}

function showPlanetInfo(planetName) {
    const planetInfo = {
        Mercury: { distance: '57.9 million km', diameter: '4,879 km' },
        Venus: { distance: '108.2 million km', diameter: '12,104 km' },
        Earth: { distance: '149.6 million km', diameter: '12,742 km' },
        Mars: { distance: '227.9 million km', diameter: '6,779 km' },
        Jupiter: { distance: '778.5 million km', diameter: '139,820 km' },
        Saturn: { distance: '1.4 billion km', diameter: '116,460 km' },
        Uranus: { distance: '2.9 billion km', diameter: '50,724 km' },
        Neptune: { distance: '4.5 billion km', diameter: '49,244 km' }
    };

    const info = planetInfo[planetName];
    if (info) {
        alert(`${planetName}\nDistance from Sun: ${info.distance}\nDiameter: ${info.diameter}`);
    }
}