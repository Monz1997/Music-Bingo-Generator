// The Master Song List: Song Title (key) and Artist (value)
// Use the tags 'cat1', 'cat2', 'cat3' for your lists.
const SONG_DATA = {
    
    // --- CATEGORY 1: Classic Rock Relaxation (77 Songs) - Tag: 'cat1' ---
    "#9 Dream": { artist: "John Lennon", genres: ["cat1", "70s", "pop", "rock"] },
    "A Horse with No Name": { artist: "America", genres: ["cat1", "70s", "rock", "pop"] },
    "A Pillow of Winds": { artist: "Pink Floyd", genres: ["cat1", "70s", "rock"] },
    "Angie (Remastered 2009)": { artist: "The Rolling Stones", genres: ["cat1", "70s", "rock"] },
    "Beast Of Burden (Remastered 1994)": { artist: "The Rolling Stones", genres: ["cat1", "70s", "rock"] },
    "Bell Bottom Blues": { artist: "Derek & The Dominos", genres: ["cat1", "70s", "rock"] },
    "Black Water": { artist: "The Doobie Brothers", genres: ["cat1", "70s", "rock", "pop"] },
    "Blackbird (Remastered 2009)": { artist: "The Beatles", genres: ["cat1", "60s", "pop"] },
    "California Dreamin' (Single Version)": { artist: "The Mamas & The Papas", genres: ["cat1", "60s", "pop"] },
    "Can't Find My Way Home": { artist: "Blind Faith", genres: ["cat1", "60s", "rock"] },
    "Crazy Love (Van Morrison)": { artist: "Van Morrison", genres: ["cat1", "70s", "pop"] },
    "Crazy Love (Poco)": { artist: "Poco", genres: ["cat1", "70s", "rock", "pop"] },
    "Dark Sweet Lady": { artist: "George Harrison", genres: ["cat1", "70s", "pop"] },
    "Deacon Blues": { artist: "Steely Dan", genres: ["cat1", "70s", "rock", "pop"] },
    "Dirty Work": { artist: "Steely Dan", genres: ["cat1", "70s", "rock", "pop"] },
    "Does Anybody Really Know What Time It Is?": { artist: "Chicago", genres: ["cat1", "70s", "rock"] },
    "Dog & Butterfly": { artist: "Heart", genres: ["cat1", "70s", "rock"] },
    "Dreams (2004 Remaster)": { artist: "Fleetwood Mac", genres: ["cat1", "70s", "rock", "pop"] },
    "Everybody's Talkin' (From 'Midnight Cowboy')": { artist: "Harry Nilsson", genres: ["cat1", "60s", "pop"] },
    "Fearless": { artist: "Pink Floyd", genres: ["cat1", "70s", "rock"] },
    "For What It's Worth": { artist: "Buffalo Springfield", genres: ["cat1", "60s", "rock"] },
    "From Now On": { artist: "Supertramp", genres: ["cat1", "70s", "pop", "rock"] },
    "From the Beginning": { artist: "Emerson, Lake & Palmer", genres: ["cat1", "70s", "rock"] },
    "God Only Knows (Mono)": { artist: "The Beach Boys", genres: ["cat1", "60s", "pop"] },
    "Going to California (Remaster)": { artist: "Led Zeppelin", genres: ["cat1", "70s", "rock"] },
    "Goodbye Yellow Brick Road": { artist: "Elton John", genres: ["cat1", "70s", "pop"] },
    "Graceland": { artist: "Paul Simon", genres: ["cat1", "80s", "pop"] },
    "Hello It's Me": { artist: "Todd Rundgren", genres: ["cat1", "70s", "pop"] },
    "I’ll Have to Say I Love You in a Song": { artist: "Jim Croce", genres: ["cat1", "70s", "pop"] },
    "I'm Not In Love": { artist: "10cc", genres: ["cat1", "70s", "pop"] },
    "If You Could Read My Mind": { artist: "Gordon Lightfoot", genres: ["cat1", "70s", "pop"] },
    "In My Life (Remastered 2009)": { artist: "The Beatles", genres: ["cat1", "60s", "pop"] },
    "It's Too Late": { artist: "Carole King", genres: ["cat1", "70s", "pop"] },
    "Knockin' On Heaven's Door": { artist: "Bob Dylan", genres: ["cat1", "70s", "pop"] },
    "Lady Stardust": { artist: "David Bowie", genres: ["cat1", "70s", "pop", "rock"] },
    "Lay, Lady, Lay": { artist: "Bob Dylan", genres: ["cat1", "60s", "pop"] },
    "Let 'Em In": { artist: "Paul McCartney & Wings", genres: ["cat1", "70s", "pop"] },
    "Let It Be (Remastered 2009)": { artist: "The Beatles", genres: ["cat1", "70s", "pop"] },
    "Lotta Love": { artist: "Nicolette Larson", genres: ["cat1", "70s", "pop"] },
    "Mona Lisas And Mad Hatters": { artist: "Elton John", genres: ["cat1", "70s", "pop"] },
    "My Sweet Lord": { artist: "George Harrison", genres: ["cat1", "70s", "pop"] },
    "Never Going Back Again (2004 Remaster)": { artist: "Fleetwood Mac", genres: ["cat1", "70s", "rock", "pop"] },
    "On And On": { artist: "Stephen Bishop", genres: ["cat1", "70s", "pop"] },
    "Ooh La La": { artist: "Faces", genres: ["cat1", "70s", "rock"] },
    "Our House": { artist: "Crosby, Stills, Nash & Young", genres: ["cat1", "70s", "pop"] },
    "Peaceful Easy Feeling": { artist: "Eagles", genres: ["cat1", "70s", "rock"] },
    "Pink Moon": { artist: "Nick Drake", genres: ["cat1", "70s", "pop"] },
    "Right Down the Line": { artist: "Gerry Rafferty", genres: ["cat1", "70s", "pop"] },
    "Ripple": { artist: "Grateful Dead", genres: ["cat1", "70s", "rock"] },
    "Sara": { artist: "Fleetwood Mac", genres: ["cat1", "70s", "rock", "pop"] },
    "Sara Smile": { artist: "Daryl Hall & John Oates", genres: ["cat1", "70s", "pop"] },
    "Scarborough Fair / Canticle": { artist: "Simon & Garfunkel", genres: ["cat1", "60s", "pop"] },
    "She's Always a Woman": { artist: "Billy Joel", genres: ["cat1", "70s", "pop"] },
    "She's Gone": { artist: "Daryl Hall & John Oates", genres: ["cat1", "70s", "pop"] },
    "Slip Slidin' Away": { artist: "Paul Simon", genres: ["cat1", "70s", "pop"] },
    "Something (Remastered 2009)": { artist: "The Beatles", genres: ["cat1", "60s", "pop"] },
    "Something in the Way She Moves": { artist: "James Taylor", genres: ["cat1", "70s", "pop"] },
    "Summer Breeze": { artist: "Seals and Crofts", genres: ["cat1", "70s", "pop"] },
    "Teach Your Children": { artist: "Crosby, Stills, Nash & Young", genres: ["cat1", "70s", "pop"] },
    "Thank You (Remaster)": { artist: "Led Zeppelin", genres: ["cat1", "70s", "rock"] },
    "The Air That I Breathe (2008 Remaster)": { artist: "The Hollies", genres: ["cat1", "70s", "pop"] },
    "The Long And Winding Road (2021 Mix)": { artist: "The Beatles", genres: ["cat1", "70s", "pop"] },
    "The Only Living Boy in New York": { artist: "Simon & Garfunkel", genres: ["cat1", "70s", "pop"] },
    "The Sound of Silence (Electric Version)": { artist: "Simon & Garfunkel", genres: ["cat1", "60s", "pop"] },
    "The Weight (Remastered 2000)": { artist: "The Band", genres: ["cat1", "60s", "rock"] },
    "Tin Man": { artist: "America", genres: ["cat1", "70s", "rock", "pop"] },
    "Tuesday's Gone": { artist: "Lynyrd Skynyrd", genres: ["cat1", "70s", "rock"] },
    "Undun (2024 Remaster)": { artist: "The Guess Who", genres: ["cat1", "60s", "rock"] },
    "Waterloo Sunset": { artist: "The Kinks", genres: ["cat1", "60s", "pop"] },
    "We Just Disagree": { artist: "Dave Mason", genres: ["cat1", "70s", "pop"] },
    "We've Got Tonight": { artist: "Bob Seger & The Silver Bullet Band", genres: ["cat1", "70s", "rock"] },
    "Wild Horses (2009 Mix)": { artist: "The Rolling Stones", genres: ["cat1", "70s", "rock"] },
    "Wild World (2020 Mix)": { artist: "Cat Stevens", genres: ["cat1", "70s", "pop"] },
    "Winter Time": { artist: "Steve Miller Band", genres: ["cat1", "70s", "rock"] },
    "You Can Call Me Al": { artist: "Paul Simon", genres: ["cat1", "80s", "pop"] },
    "You've Got a Friend": { artist: "Carole King", genres: ["cat1", "70s", "pop"] },
    "Your Song": { artist: "Elton John", genres: ["cat1", "70s", "pop"] },


    // --- CATEGORY 2: PLACEHOLDER (Use tag 'cat2') ---
    // PASTE YOUR LIST FOR CATEGORY 2 HERE. 
    "Placeholder Song D": { artist: "Placeholder Artist 4", genres: ["cat2"] },
    "Placeholder Song E": { artist: "Placeholder Artist 5", genres: ["cat2"] },
    "Placeholder Song F": { artist: "Placeholder Artist 6", genres: ["cat2"] },


    // --- CATEGORY 3: 90s Rock (96 Songs) - Tag: 'cat3' ---
    "Smells Like Teen Spirit": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "November Rain": { artist: "Guns N' Roses", genres: ["cat3", "90s", "rock"] },
    "What's Up?": { artist: "4 Non Blondes", genres: ["cat3", "90s", "rock"] },
    "Losing My Religion": { artist: "R.E.M.", genres: ["cat3", "90s", "rock"] },
    "Everlong": { artist: "Foo Fighters", genres: ["cat3", "90s", "rock"] },
    "Don't Speak": { artist: "No Doubt", genres: ["cat3", "90s", "pop", "rock"] },
    "Self Esteem (2008 Remaster)": { artist: "The Offspring", genres: ["cat3", "90s", "rock", "punk"] },
    "1979": { artist: "The Smashing Pumpkins", genres: ["cat3", "90s", "rock"] },
    "Basket Case": { artist: "Green Day", genres: ["cat3", "90s", "rock", "punk"] },
    "Under the Bridge": { artist: "Red Hot Chili Peppers", genres: ["cat3", "90s", "rock"] },
    "Black Hole Sun": { artist: "Soundgarden", genres: ["cat3", "90s", "rock"] },
    "All Star": { artist: "Smash Mouth", genres: ["cat3", "90s", "pop", "rock"] },
    "Fly Away": { artist: "Lenny Kravitz", genres: ["cat3", "90s", "rock"] },
    "Buddy Holly": { artist: "Weezer", genres: ["cat3", "90s", "rock"] },
    "Glycerine": { artist: "Bush", genres: ["cat3", "90s", "rock"] },
    "Cannonball": { artist: "The Breeders", genres: ["cat3", "90s", "rock"] },
    "Been Caught Stealing": { artist: "Jane's Addiction", genres: ["cat3", "90s", "rock"] },
    "Midlife Crisis": { artist: "Faith No More", genres: ["cat3", "90s", "rock"] },
    "Jeremy": { artist: "Pearl Jam", genres: ["cat3", "90s", "rock"] },
    "Song 2": { artist: "Blur", genres: ["cat3", "90s", "rock"] },
    "Killing In the Name": { artist: "Rage Against The Machine", genres: ["cat3", "90s", "rock"] },
    "You Could Be Mine": { artist: "Guns N' Roses", genres: ["cat3", "90s", "rock"] },
    "Motorcycle Emptiness": { artist: "Manic Street Preachers", genres: ["cat3", "90s", "rock"] },
    "Monkey Wrench": { artist: "Foo Fighters", genres: ["cat3", "90s", "rock"] },
    "Plush": { artist: "Stone Temple Pilots", genres: ["cat3", "90s", "rock"] },
    "Suck My Kiss": { artist: "Red Hot Chili Peppers", genres: ["cat3", "90s", "rock"] },
    "Come As You Are": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "Bullet With Butterfly Wings": { artist: "The Smashing Pumpkins", genres: ["cat3", "90s", "rock"] },
    "Outshined": { artist: "Soundgarden", genres: ["cat3", "90s", "rock"] },
    "Alive": { artist: "Pearl Jam", genres: ["cat3", "90s", "rock"] },
    "Age of Panic (Git-O-Rama Mix)": { artist: "Senser", genres: ["cat3", "90s", "rock"] },
    "Digging the Grave": { artist: "Faith No More", genres: ["cat3", "90s", "rock"] },
    "Screamager": { artist: "Therapy?", genres: ["cat3", "90s", "rock"] },
    "Higher Ground (Remastered 2003)": { artist: "Red Hot Chili Peppers", genres: ["cat3", "90s", "rock"] },
    "Hobo Humpin' Slobo Babe": { artist: "Whale", genres: ["cat3", "90s", "pop"] },
    "Sabotage": { artist: "Beastie Boys", genres: ["cat3", "90s", "hiphop"] },
    "Alice What's the Matter?": { artist: "Terrorvision", genres: ["cat3", "90s", "rock"] },
    "This Is a Call": { artist: "Foo Fighters", genres: ["cat3", "90s", "rock"] },
    "All I Wanna Do": { artist: "Sheryl Crow", genres: ["cat3", "90s", "pop"] },
    "The Chemicals Between Us": { artist: "Bush", genres: ["cat3", "90s", "rock"] },
    "Lump": { artist: "The Presidents Of The United States Of America", genres: ["cat3", "90s", "rock"] },
    "A Design for Life (2016 Remastered Version)": { artist: "Manic Street Preachers", genres: ["cat3", "90s", "rock"] },
    "Pretty Fly (For A White Guy)": { artist: "The Offspring", genres: ["cat3", "90s", "rock", "punk"] },
    "Bulls On Parade": { artist: "Rage Against The Machine", genres: ["cat3", "90s", "rock"] },
    "Cherub Rock": { artist: "Smashing Pumpkins", genres: ["cat3", "90s", "rock"] },
    "Heart-Shaped Box": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "Even Flow": { artist: "Pearl Jam", genres: ["cat3", "90s", "rock"] },
    "Don't Cry": { artist: "Guns N' Roses", genres: ["cat3", "90s", "rock"] },
    "No Rain": { artist: "Blind Melon", genres: ["cat3", "90s", "rock"] },
    "Lovin' Machine": { artist: "The Jon Spencer Blues Explosion", genres: ["cat3", "90s", "rock"] },
    "Everything About You": { artist: "Ugly Kid Joe", genres: ["cat3", "90s", "rock"] },
    "Kill Your Television": { artist: "Ned's Atomic Dustbin", genres: ["cat3", "90s", "rock"] },
    "Aeroplane": { artist: "Red Hot Chili Peppers", genres: ["cat3", "90s", "rock"] },
    "About A Girl": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "You Oughta Know": { artist: "Alanis Morissette", genres: ["cat3", "90s", "rock", "pop"] },
    "Easy": { artist: "Faith No More", genres: ["cat3", "90s", "rock"] },
    "Today": { artist: "Smashing Pumpkins", genres: ["cat3", "90s", "rock"] },
    "Once": { artist: "Pearl Jam", genres: ["cat3", "90s", "rock"] },
    "Longview": { artist: "Green Day", genres: ["cat3", "90s", "rock", "punk"] },
    "Drive (Incubus)": { artist: "Incubus", genres: ["cat3", "90s", "rock"] },
    "Kevin Carter (Remastered Version)": { artist: "Manic Street Preachers", genres: ["cat3", "90s", "rock"] },
    "Runaway Train (2022 Remaster)": { artist: "Soul Asylum", genres: ["cat3", "90s", "rock"] },
    "Drive (R.E.M.)": { artist: "R.E.M.", genres: ["cat3", "90s", "rock"] },
    "Perseverance": { artist: "Terrorvision", genres: ["cat3", "90s", "rock"] },
    "Remedy": { artist: "The Black Crowes", genres: ["cat3", "90s", "rock"] },
    "In Bloom": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "Hard To Handle": { artist: "The Black Crowes", genres: ["cat3", "90s", "rock"] },
    "Stupid Girl": { artist: "Garbage", genres: ["cat3", "90s", "rock"] },
    "Civil War": { artist: "Guns N' Roses", genres: ["cat3", "90s", "rock"] },
    "Walkin' On The Sun": { artist: "Smash Mouth", genres: ["cat3", "90s", "pop", "rock"] },
    "Come Back Brighter": { artist: "Reef", genres: ["cat3", "90s", "rock"] },
    "Come Out and Play (2008 Remaster)": { artist: "The Offspring", genres: ["cat3", "90s", "rock", "punk"] },
    "Richard III": { artist: "Supergrass", genres: ["cat3", "90s", "rock"] },
    "I Think I'm Paranoid": { artist: "Garbage", genres: ["cat3", "90s", "rock"] },
    "Fell On Black Days": { artist: "Soundgarden", genres: ["cat3", "90s", "rock"] },
    "Celebrity Skin": { artist: "Hole", genres: ["cat3", "90s", "rock"] },
    "A Change Would Do You Good": { artist: "Sheryl Crow", genres: ["cat3", "90s", "pop"] },
    "Just A Girl": { artist: "No Doubt", genres: ["cat3", "90s", "pop", "rock"] },
    "Black": { artist: "Pearl Jam", genres: ["cat3", "90s", "rock"] },
    "Scar Tissue": { artist: "Red Hot Chili Peppers", genres: ["cat3", "90s", "rock"] },
    "Santa Monica": { artist: "Everclear", genres: ["cat3", "90s", "rock"] },
    "Lithium": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "Semi-Charmed Life": { artist: "Third Eye Blind", genres: ["cat3", "90s", "pop", "rock"] },
    "My Own Worst Enemy": { artist: "Lit", genres: ["cat3", "90s", "rock"] },
    "Muscle Museum": { artist: "Muse", genres: ["cat3", "90s", "rock"] },
    "Butterfly": { artist: "Crazy Town", genres: ["cat3", "90s", "hiphop", "rock"] },
    "The Red": { artist: "Chevelle", genres: ["cat3", "90s", "rock"] },
    "Crazy (Aerosmith)": { artist: "Aerosmith", genres: ["cat3", "90s", "rock"] },
    "Nancy Boy": { artist: "Placebo", genres: ["cat3", "90s", "rock"] },
    "Mrs. Robinson (2022 Remastered Edition)": { artist: "The Lemonheads", genres: ["cat3", "90s", "rock"] },
    "(Everything I Do) I Do It For You (Classic Version)": { artist: "Bryan Adams", genres: ["cat3", "90s", "pop"] },
    "All Apologies (2013 Mix)": { artist: "Nirvana", genres: ["cat3", "90s", "rock"] },
    "I Don't Want to Miss a Thing (From 'Armageddon' Soundtrack)": { artist: "Aerosmith", genres: ["cat3", "90s", "rock"] },
    "Every You Every Me": { artist: "Placebo", genres: ["cat3", "90s", "rock"] },
};

// --- LOGIC STARTS HERE ---

// Configuration for 3x3 Bingo Cards (8 songs + 1 free space = 9 total cells)
const CARD_COUNT = 6; // Generates 6 unique cards (1 page of 6)
const CARD_SIZE = 8; // Number of unique songs required on the card (excluding free space)
let currentGenre = 'all';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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

function generateBingoCards() {
    const availableSongs = getFilteredSongs(currentGenre);
    
    // Safety check: Needs enough songs for 10 unique winning potential cards (10 * 8 = 80 unique songs needed)
    const required UniqueSongs = Math.max(80, CARD_SIZE * CARD_COUNT); 
    
    if (availableSongs.length < requiredUniqueSongs) {
        alert(`Warning: The current category ('${currentGenre}') only has ${availableSongs.length} unique songs. You need at least ${requiredUniqueSongs} unique songs to guarantee 10 potential winning tickets! Please add more songs or switch to 'Complete Mix'.`);
        // We still allow card generation if the list is big enough for at least one card set (CARD_SIZE * CARD_COUNT)
        if (availableSongs.length < CARD_SIZE * CARD_COUNT) {
            alert(`Error: Cannot generate ${CARD_COUNT} cards, list is too short.`);
            return;
        }
    }

    const cardContainer = document.getElementById('card-container');
    const playlistOutput = document.getElementById('playlist-output');
    cardContainer.innerHTML = '';
    playlistOutput.innerHTML = '';

    const shuffledSongs = shuffleArray([...availableSongs]);
    // Use enough songs to fill all cards
    const songsOnCards = shuffledSongs.slice(0, CARD_SIZE * CARD_COUNT);

    for (let i = 0; i < CARD_COUNT; i++) {
        // Take a unique slice of songs for this card's set
        const cardSongs = shuffleArray(songsOnCards.slice(i * CARD_SIZE, (i + 1) * CARD_SIZE)); 
        
        // Insert free space at the center position (index 4 of 9 total cells)
        cardSongs.splice(4, 0, { full_name: "🎶 FREE SPACE 🎶", isFree: true });

        const card = document.createElement('div');
        card.className = 'bingo-card';
        
        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = `BINGO CARD #${i + 1}`;
        card.appendChild(title);

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

    // Use only the songs that actually appear on the cards for the playlist output
    shuffleArray(songsOnCards) 
        .forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = song.full_name;
            playlistOutput.appendChild(listItem);
        });
}

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentGenre = this.getAttribute('data-genre');
        generateBingoCards();
    });
});

document.getElementById('generate-button').addEventListener('click', generateBingoCards);

document.addEventListener('DOMContentLoaded', () => {
    generateBingoCards();
});
