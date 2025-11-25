// The Master Song List: Song Title (key) and Artist (value)
// Genre tags are used for filtering: '80s', '90s', '00s', 'pop', 'rock', 'hiphop', 'rnb'
const SONG_DATA = {
    // 1980s Hits
    "Sweet Dreams (Are Made of This)": { artist: "Eurythmics", genres: ["80s", "pop"] },
    "Livin' on a Prayer": { artist: "Bon Jovi", genres: ["80s", "rock"] },
    "Girls Just Want to Have Fun": { artist: "Cyndi Lauper", genres: ["80s", "pop"] },
    "Billie Jean": { artist: "Michael Jackson", genres: ["80s", "pop"] },
    "Take On Me": { artist: "a-ha", genres: ["80s", "pop"] },
    "Don't Stop Believin'": { artist: "Journey", genres: ["80s", "rock"] },
    "Walk This Way": { artist: "Run-DMC ft. Aerosmith", genres: ["80s", "hiphop", "rock"] },
    "Like a Virgin": { artist: "Madonna", genres: ["80s", "pop"] },
    
    // Rock Anthems
    "Bohemian Rhapsody": { artist: "Queen", genres: ["rock"] },
    "Smells Like Teen Spirit": { artist: "Nirvana", genres: ["90s", "rock"] },
    "Welcome to the Jungle": { artist: "Guns N' Roses", genres: ["80s", "rock"] },
    "Seven Nation Army": { artist: "The White Stripes", genres: ["00s", "rock"] },
    "Mr. Brightside": { artist: "The Killers", genres: ["00s", "rock"] },
    "I Love Rock 'N Roll": { artist: "Joan Jett & The Blackhearts", genres: ["rock"] },
    "Sweet Child o' Mine": { artist: "Guns N' Roses", genres: ["rock"] },

    // Pop Favorites
    "Oops!... I Did It Again": { artist: "Britney Spears", genres: ["00s", "pop"] },
    "Single Ladies (Put a Ring on It)": { artist: "Beyoncé", genres: ["00s", "pop", "rnb"] },
    "Shape of You": { artist: "Ed Sheeran", genres: ["pop"] },
    "Umbrella": { artist: "Rihanna ft. Jay-Z", genres: ["00s", "pop", "rnb"] },
    "Uptown Funk": { artist: "Mark Ronson ft. Bruno Mars", genres: ["pop"] },
    "Wannabe": { artist: "Spice Girls", genres: ["90s", "pop"] },
    "Hips Don't Lie": { artist: "Shakira ft. Wyclef Jean", genres: ["00s", "pop"] },

    // More Mix/Other Genres
    "Lose Yourself": { artist: "Eminem", genres: ["00s", "hiphop"] },
    "I Will Always Love You": { artist: "Whitney Houston", genres: ["90s", "rnb"] },
    "Dancing Queen": { artist: "ABBA", genres: ["70s", "pop"] },
    "September": { artist: "Earth, Wind & Fire", genres: ["70s", "rnb"] },
    "Hotel California": { artist: "Eagles", genres: ["70s", "rock"] }
};

const CARD_COUNT = 6;
const CARD_SIZE = 25; // 5x5 grid
let currentGenre = 'all';

// Helper function to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 1. FILTER SONGS based on the current selection
function getFilteredSongs(genre) {
    const songs = Object.entries(SONG_DATA).map(([title, data]) => ({
        title,
        artist: data.artist,
        full_name: `${title} (${data.artist})`
    }));

    if (genre === 'all') {
        return songs;
    }

    return songs.filter(song => SONG_DATA[song.title].genres.includes(genre));
}


// 2. GENERATE CARDS and Playlist
function generateBingoCards() {
    const availableSongs = getFilteredSongs(currentGenre);
    
    // Safety check: ensure we have enough songs (need at least 25 songs for 1 card)
    if (availableSongs.length < CARD_SIZE) {
        alert(`Error: You only have ${availableSongs.length} songs for the '${currentGenre}' category. You need at least ${CARD_SIZE} unique songs!`);
        return;
    }

    const cardContainer = document.getElementById('card-container');
    const playlistOutput = document.getElementById('playlist-output');
    cardContainer.innerHTML = '';
    playlistOutput.innerHTML = '';

    // Shuffle the master list of all available songs for this category
    const shuffledSongs = shuffleArray([...availableSongs]);

    // Only take the first 25 * 6 songs (or max available) for the playlist
    // This ensures that the playlist only contains songs that actually appear on the generated cards.
    const songsOnCards = shuffledSongs.slice(0, Math.min(shuffledSongs.length, CARD_SIZE * CARD_COUNT));

    // Generate the Cards
    for (let i = 0; i < CARD_COUNT; i++) {
        // Get 24 unique songs from the `songsOnCards` pool for the current card
        const cardSongs = shuffleArray([...songsOnCards]).slice(0, CARD_SIZE - 1); // 24 songs
        
        // Add the Free Space in the center
        cardSongs.splice(12, 0, { full_name: "🎶 FREE SPACE 🎶", isFree: true });

        const card = document.createElement('div');
        card.className = 'bingo-card';
        
        // Add Title/Header
        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = `BINGO CARD #${i + 1}`;
        card.appendChild(title);

        // Add Grid
        const grid = document.createElement('div');
        grid.className = 'card-grid';
        
        cardSongs.forEach(song => {
            const cell = document.createElement('div');
            cell.className = 'card-cell';
            cell.textContent = song.full_name;
            if (song.isFree) {
                 cell.classList.add('free-space');
            }
            grid.appendChild(cell);
        });

        card.appendChild(grid);
        cardContainer.appendChild(card);
    }

    // Generate the Playlist
    shuffleArray(songsOnCards) // Shuffle the playlist order one last time
        .forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = song.full_name;
            playlistOutput.appendChild(listItem);
        });
}

// 3. EVENT LISTENERS

// Handle Tab Switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Update active class for visual feedback
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update the global genre variable
        currentGenre = this.getAttribute('data-genre');
        
        // Generate new cards for the new genre
        generateBingoCards();
    });
});

// Handle Generate Button Click
document.getElementById('generate-button').addEventListener('click', generateBingoCards);

// Initial load: Generate cards for the default genre ('all')
document.addEventListener('DOMContentLoaded', () => {
    generateBingoCards();
});
