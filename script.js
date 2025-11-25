// The Master Song List: Song Title (key) and Artist (value)
// Genres/Decades: '60s', '70s', '80s', '90s', '00s', '10s', 'rock', 'pop', 'hiphop', 'rnb', 'country'
const SONG_DATA = {
    // 1960s/1970s Classics
    "Bohemian Rhapsody": { artist: "Queen", genres: ["70s", "rock"] },
    "Imagine": { artist: "John Lennon", genres: ["70s", "pop"] },
    "Hotel California": { artist: "Eagles", genres: ["70s", "rock"] },
    "Dancing Queen": { artist: "ABBA", genres: ["70s", "pop"] },
    "September": { artist: "Earth, Wind & Fire", genres: ["70s", "rnb"] },
    "I Want You Back": { artist: "The Jackson 5", genres: ["60s", "pop", "rnb"] },
    "Hey Jude": { artist: "The Beatles", genres: ["60s", "rock"] },
    "Respect": { artist: "Aretha Franklin", genres: ["60s", "rnb"] },
    "Like a Rolling Stone": { artist: "Bob Dylan", genres: ["60s", "rock"] },
    "Let It Be": { artist: "The Beatles", genres: ["70s", "pop"] },
    "Bridge Over Troubled Water": { artist: "Simon & Garfunkel", genres: ["70s", "pop"] },

    // 1980s Hits
    "Sweet Dreams (Are Made of This)": { artist: "Eurythmics", genres: ["80s", "pop"] },
    "Livin' on a Prayer": { artist: "Bon Jovi", genres: ["80s", "rock"] },
    "Girls Just Want to Have Fun": { artist: "Cyndi Lauper", genres: ["80s", "pop"] },
    "Billie Jean": { artist: "Michael Jackson", genres: ["80s", "pop", "rnb"] },
    "Take On Me": { artist: "a-ha", genres: ["80s", "pop"] },
    "Don't Stop Believin'": { artist: "Journey", genres: ["80s", "rock"] },
    "Walk This Way": { artist: "Run-DMC ft. Aerosmith", genres: ["80s", "hiphop", "rock"] },
    "Like a Virgin": { artist: "Madonna", genres: ["80s", "pop"] },
    "Africa": { artist: "Toto", genres: ["80s", "pop"] },
    "With or Without You": { artist: "U2", genres: ["80s", "rock"] },
    "Every Breath You Take": { artist: "The Police", genres: ["80s", "rock"] },
    "Jump": { artist: "Van Halen", genres: ["80s", "rock"] },
    "Careless Whisper": { artist: "George Michael", genres: ["80s", "pop"] },
    "I Wanna Dance with Somebody": { artist: "Whitney Houston", genres: ["80s", "pop", "rnb"] },

    // 1990s Hits
    "Smells Like Teen Spirit": { artist: "Nirvana", genres: ["90s", "rock"] },
    "I Will Always Love You": { artist: "Whitney Houston", genres: ["90s", "rnb", "pop"] },
    "Wannabe": { artist: "Spice Girls", genres: ["90s", "pop"] },
    "One": { artist: "U2", genres: ["90s", "rock"] },
    "Enter Sandman": { artist: "Metallica", genres: ["90s", "rock"] },
    "Macarena (Bayside Boys Mix)": { artist: "Los del Río", genres: ["90s", "pop"] },
    "Wonderwall": { artist: "Oasis", genres: ["90s", "rock"] },
    "...Baby One More Time": { artist: "Britney Spears", genres: ["90s", "pop"] },
    "Vogue": { artist: "Madonna", genres: ["90s", "pop"] },
    "Losing My Religion": { artist: "R.E.M.", genres: ["90s", "rock"] },
    "No Scrubs": { artist: "TLC", genres: ["90s", "rnb"] },
    "Gettin' Jiggy wit It": { artist: "Will Smith", genres: ["90s", "hiphop"] },
    "Bitter Sweet Symphony": { artist: "The Verve", genres: ["90s", "rock"] },
    "My Heart Will Go On": { artist: "Celine Dion", genres: ["90s", "pop"] },

    // 2000s Hits
    "Mr. Brightside": { artist: "The Killers", genres: ["00s", "rock"] },
    "Crazy In Love": { artist: "Beyoncé ft. Jay-Z", genres: ["00s", "pop", "rnb"] },
    "Lose Yourself": { artist: "Eminem", genres: ["00s", "hiphop"] },
    "Hey Ya!": { artist: "Outkast", genres: ["00s", "pop", "hiphop"] },
    "Seven Nation Army": { artist: "The White Stripes", genres: ["00s", "rock"] },
    "Umbrella": { artist: "Rihanna ft. Jay-Z", genres: ["00s", "pop", "rnb"] },
    "Hips Don't Lie": { artist: "Shakira ft. Wyclef Jean", genres: ["00s", "pop"] },
    "Since U Been Gone": { artist: "Kelly Clarkson", genres: ["00s", "pop"] },
    "In Da Club": { artist: "50 Cent", genres: ["00s", "hiphop"] },
    "Hot N Cold": { artist: "Katy Perry", genres: ["00s", "pop"] },
    "Wake Me Up When September Ends": { artist: "Green Day", genres: ["00s", "rock"] },
    "Rolling in the Deep": { artist: "Adele", genres: ["00s", "pop"] },
    "Hurt": { artist: "Christina Aguilera", genres: ["00s", "pop"] },

    // 2010s Hits
    "Uptown Funk": { artist: "Mark Ronson ft. Bruno Mars", genres: ["10s", "pop", "rnb"] },
    "Shape of You": { artist: "Ed Sheeran", genres: ["10s", "pop"] },
    "Despacito": { artist: "Luis Fonsi & Daddy Yankee", genres: ["10s", "pop"] },
    "Happy": { artist: "Pharrell Williams", genres: ["10s", "pop", "rnb"] },
    "Radioactive": { artist: "Imagine Dragons", genres: ["10s", "rock"] },
    "Party Rock Anthem": { artist: "LMFAO", genres: ["10s", "pop"] },
    "Old Town Road": { artist: "Lil Nas X ft. Billy Ray Cyrus", genres: ["10s", "country", "hiphop"] },
    "Shallow": { artist: "Lady Gaga & Bradley Cooper", genres: ["10s", "pop"] },
    "Blinding Lights": { artist: "The Weeknd", genres: ["10s", "pop", "rnb"] },
    "Call Me Maybe": { artist: "Carly Rae Jepsen", genres: ["10s", "pop"] },
    "Thinking Out Loud": { artist: "Ed Sheeran", genres: ["10s", "pop"] },
    "Somebody That I Used to Know": { artist: "Gotye ft. Kimbra", genres: ["10s", "pop"] },

    // More Rock Anthems (Uncategorized by Decade)
    "Back in Black": { artist: "AC/DC", genres: ["rock"] },
    "Sweet Child o' Mine": { artist: "Guns N' Roses", genres: ["rock"] },
    "I Love Rock 'N Roll": { artist: "Joan Jett & The Blackhearts", genres: ["rock"] },

    // Hip-Hop/R&B (Uncategorized by Decade)
    "Juicy": { artist: "The Notorious B.I.G.", genres: ["hiphop"] },
    "California Love": { artist: "2Pac ft. Dr. Dre", genres: ["hiphop"] },
    "Waterfalls": { artist: "TLC", genres: ["rnb"] },
    "Smooth Operator": { artist: "Sade", genres: ["rnb"] },
    
    // Country (Uncategorized by Decade)
    "Friends in Low Places": { artist: "Garth Brooks", genres: ["country"] },
    "Before He Cheats": { artist: "Carrie Underwood", genres: ["country"] }
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

    // Filter by genre or decade tag
    return songs.filter(song => SONG_DATA[song.title].genres.includes(genre));
}


// 2. GENERATE CARDS and Playlist
function generateBingoCards() {
    const availableSongs = getFilteredSongs(currentGenre);
    
    // Safety check: ensure we have enough songs
    if (availableSongs.length < CARD_SIZE) {
        alert(`Error: The current category ('${currentGenre}') only has ${availableSongs.length} unique songs. You need at least ${CARD_SIZE} unique songs to generate the cards!`);
        return;
    }

    const cardContainer = document.getElementById('card-container');
    const playlistOutput = document.getElementById('playlist-output');
    cardContainer.innerHTML = '';
    playlistOutput.innerHTML = '';

    // Shuffle the master list of all available songs for this category
    const shuffledSongs = shuffleArray([...availableSongs]);

    // Only take the first 25 * 6 songs (or max available) for the playlist pool
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

    // Generate the Playlist (all songs used on any card)
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
