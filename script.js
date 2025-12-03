<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Bingo Generator (4x4 B&W - Categorized)</title>

    <style>
        /* --- General Styles (Screen View) --- */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9; 
            color: #333;
            line-height: 1.6;
        }

        header, .controls, .playlist-section, .tabs {
            max-width: 900px;
            margin: 0 auto 20px;
            text-align: center;
        }

        h1 {
            color: #333; 
            margin-bottom: 10px;
        }

        button {
            padding: 10px 15px;
            margin: 5px 2px;
            border: 1px solid #333;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            background-color: white;
            color: #333;
            transition: background-color 0.3s ease;
        }

        #generate-button {
            background-color: #eee;
            font-size: 16px;
            padding: 12px 25px;
        }

        .tab-button.active {
            background-color: #333;
            color: white;
            font-weight: bold;
        }

        /* --- Bingo Card Container (Screen View) --- */
        #card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px; 
            margin: 20px auto;
            max-width: 1400px;
        }

        .bingo-card {
            border: 2px solid #333;
            width: 280px; /* Adjusted size for 4x4 */
            height: 280px; 
            display: flex;
            flex-direction: column;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1); 
            background-color: white;
            border-radius: 4px;
            overflow: hidden; 
        }

        .card-title {
            background-color: #ddd; 
            color: #333;
            padding: 6px;
            text-align: center;
            font-size: 0.9em;
            font-weight: bold;
            flex-shrink: 0; 
            border-bottom: 1px solid #333;
        }

        /* Grid Layout: 4 rows x 4 columns for 15 songs + Free Space */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            flex-grow: 1; 
        }

        .card-cell {
            border: 1px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2px; 
            font-size: 0.65em; /* Smaller font for 4x4 */
            line-height: 1.1;
            overflow: hidden;
            word-wrap: break-word; 
            box-sizing: border-box; 
        }

        .card-cell.free-space { 
            background-color: #ccc; 
            font-weight: bold;
            color: #333;
            font-size: 0.8em;
        }

        /* --- Playlist Styles --- */
        .playlist-section {
            margin-top: 40px;
            border-top: 2px dashed #ccc;
            padding-top: 25px;
            text-align: left;
        }
        .playlist-section h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        #playlist-output {
            max-width: 700px;
            margin: 10px auto;
            padding: 0 20px; 
            list-style-type: decimal; 
            columns: 1; 
        }

        /* --- 🖨️ PRINT MEDIA QUERY: 6 Cards Per Page (Optimized Fit for 4x4) --- */
        @media print {
            body {
                margin: 0;
                padding: 0;
                background-color: white;
                -webkit-print-color-adjust: exact; 
                print-color-adjust: exact;
                color: #000 !important;
            }

            /* Hide elements not needed for printing */
            header, .tabs, .controls, footer, hr {
                display: none;
            }

            /* Card Container: Prepare for 6 cards (2 columns x 3 rows) on a portrait page */
            #card-container {
                display: grid;
                grid-template-columns: repeat(2, 1fr); 
                grid-template-rows: repeat(3, 1fr); 
                width: 21cm; 
                height: 29.7cm; 
                margin: 0 auto; 
                gap: 0; 
                padding: 0.3cm; /* Reduced page padding */
                box-sizing: border-box; 
            }

            .bingo-card {
                /* Sizing reduced to fit 6 cards per page */
                width: 9.5cm; 
                height: 8.8cm; 
                border: 1px solid #000; 
                border-radius: 0; 
                box-shadow: none; 
                margin: 0.2cm; /* Margin between cards */
                background-color: white !important; 
                page-break-inside: avoid; 
            }

            .card-title {
                padding: 3px; 
                font-size: 0.7em;
                background-color: white !important;
                color: #000 !important;
                border-bottom: 1px solid #000;
            }

            /* Grid layout for printing: 4 rows x 4 columns */
            .card-grid {
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(4, 1fr);
            }
            
            .card-cell {
                font-size: 0.55em; /* Significantly smaller font for 4x4 print */
                padding: 1px; 
                border: 1px solid #000; 
                background-color: white !important;
                color: #000 !important;
            }

            .card-cell.free-space {
                background-color: #ddd !important; 
                color: #000 !important;
                font-weight: bold;
                font-size: 0.7em;
            }

            /* Playlist Section: Starts on a new page */
            .playlist-section {
                display: block;
                border-top: none; 
                padding-top: 0;
                page-break-before: always; 
                text-align: left;
                width: 100%; 
                box-sizing: border-box;
                padding: 1cm; 
            }
            .playlist-section h2 {
                color: #000 !important;
            }
            #playlist-output {
                columns: 2; 
                max-width: 100%; 
                font-size: 0.9em;
            }
            #playlist-output li {
                break-inside: avoid-column; 
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>🎶 Music Bingo Generator ($4 \times 4$ Categorized)</h1>
        <p>Select a **Category** and click **Generate New Cards**. (Cards use 15 songs + Free Space)</p>
    </header>

    <div class="tabs" id="category-tabs">
        </div>

    <div class="controls">
        <button id="generate-button">Generate New Cards & Playlist</button>
        <button onclick="window.print()">🖨️ Print 6 Cards (4x4) per Page</button>
    </div>

    <div id="card-container">
        </div>

    <section class="playlist-section">
        <h2>Master Playlist for Called Songs</h2>
        <ol id="playlist-output">
            </ol>
    </section>

    <script>
        // --- EMBEDDED SONG DATA (Provided by User) ---
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

        // --- Configuration for 4x4 Bingo Cards ---
        const CARD_COUNT = 6; // Generates 6 unique cards
        const CARD_SIZE = 15; // Number of unique songs required on the card (15 songs + 1 free space = 16 total cells)
        const FREE_SPACE_INDEX = 7; // Index for the free space (center-top-right in a 4x4 grid: 8th cell)

        let currentGenre = 'cat1'; // Default starting category

        // Mapping for displaying category names
        const CATEGORY_NAMES = {
            'all': 'Complete Mix',
            'cat1': 'Classic Rock Relaxation',
            'cat2': 'Placeholder Songs',
            'cat3': '90s Rock'
        };

        /*
         * --- CORE FUNCTIONS ---
         */

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
            
            // Safety check: Needs enough songs for all cards (6 cards * 15 songs = 90)
            const requiredSongs = CARD_SIZE * CARD_COUNT; 
            
            if (availableSongs.length < requiredSongs) {
                alert(`Error: The current category ('${CATEGORY_NAMES[currentGenre]}') only has ${availableSongs.length} unique songs, but you need ${requiredSongs} to generate ${CARD_COUNT} unique 4x4 cards. Please switch categories or add more songs.`);
                return;
            }
            
            const cardContainer = document.getElementById('card-container');
            const playlistOutput = document.getElementById('playlist-output');
            cardContainer.innerHTML = '';
            playlistOutput.innerHTML = '';

            // 1. Shuffle and slice the exact number of unique songs needed for all cards
            const shuffledSongs = shuffleArray([...availableSongs]);
            const songsOnCards = shuffledSongs.slice(0, requiredSongs); 

            const masterPlaylistSongs = new Set(); 

            for (let i = 0; i < CARD_COUNT; i++) {
                // 2. Take the unique slice for this specific card
                const start = i * CARD_SIZE;
                const end = (i + 1) * CARD_SIZE;
                
                const cardSongsSegment = songsOnCards.slice(start, end); 

                // 3. Randomize the song positions *within* this card's set
                const cardSongs = shuffleArray(cardSongsSegment); 

                // 4. Record the songs for the master playlist
                cardSongs.forEach(song => masterPlaylistSongs.add(song.full_name)); 
                
                // Insert free space at the center position
                cardSongs.splice(FREE_SPACE_INDEX, 0, { full_name: "🎶 FREE SPACE 🎶", isFree: true });

                const card = document.createElement('div');
                card.className = 'bingo-card';
                
                const title = document.createElement('div');
                title.className = 'card-title';
                title.textContent = `${CATEGORY_NAMES[currentGenre].toUpperCase()} BINGO CARD #${i + 1}`;
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

            // Generate the Master Playlist from the recorded songs and shuffle it for calling order
            const finalPlaylist = Array.from(masterPlaylistSongs).map(fullName => {
                return { full_name: fullName }; 
            });

            shuffleArray(finalPlaylist)
                .forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.textContent = song.full_name;
                    playlistOutput.appendChild(listItem);
                });
        }
        
        /*
         * --- UI/EVENT LISTENERS ---
         */

        function createCategoryTabs() {
            const tabsContainer = document.getElementById('category-tabs');
            tabsContainer.innerHTML = '';
            
            // Get unique category tags from the SONG_DATA
            const uniqueCategories = new Set(['all']);
            Object.values(SONG_DATA).forEach(data => {
                data.genres.forEach(genre => {
                    if (genre.startsWith('cat')) {
                        uniqueCategories.add(genre);
                    }
                });
            });

            // Define the order of appearance
            const orderedCategories = ['all', 'cat1', 'cat2', 'cat3'].filter(cat => uniqueCategories.has(cat));

            orderedCategories.forEach(cat => {
                const button = document.createElement('button');
                button.className = 'tab-button';
                button.setAttribute('data-genre', cat);
                button.textContent = CATEGORY_NAMES[cat] || cat.toUpperCase();
                
                if (cat === currentGenre) {
                    button.classList.add('active');
                }
                
                button.addEventListener('click', tabClickHandler);
                tabsContainer.appendChild(button);
            });
        }

        function tabClickHandler() {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentGenre = this.getAttribute('data-genre');
            generateBingoCards();
        }

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Create the category tabs based on the new data structure
            createCategoryTabs();

            // 2. Generate initial cards using the default category
            generateBingoCards();

            // 3. Attach event listener to the main generate button
            document.getElementById('generate-button').addEventListener('click', generateBingoCards);
        });
    </script>
</body>
</html>
