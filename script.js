// --- Data Structure Simulation (EXPANDED TO ENSURE 4 HALLS FOR ALL TYPE/LOCATION/CAPACITY COMBINATIONS) ---
const HALLS_DATA = {
    'engagement': {
        // --- RAJIVNAGAR - Engagement ---
        'rajivnagar': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 1, name: 'Aiman Function Hall', rating: 4.5, address: 'Near Meena Bazar, Rajivnagar', price: 45000, img: 'https://picsum.photos/400/300?random=1', availability: [10, 15, 20, 29] },
                { id: 2, name: 'Classic Function Hall', rating: 4.2, address: '5th Cross, Rajivnagar', price: 50000, img: 'https://picsum.photos/400/300?random=2', availability: [5, 12, 22] },
                { id: 3, name: 'Golden Palace', rating: 5, address: 'Main Road, Golden Palace Compound, Rajivnagar', price: 60000, img: 'https://picsum.photos/400/300?random=3', availability: [3, 10, 25] },
                { id: 7, name: 'Small Celebration Venue', rating: 4.0, address: 'Rajivnagar East', price: 42000, img: 'https://picsum.photos/400/300?random=7', availability: [6, 13, 27] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                 { id: 4, name: 'Grand View Manor', rating: 4.8, address: 'Rajivnagar Bypass', price: 80000, img: 'https://picsum.photos/400/300?random=4', availability: [1, 10, 28] },
                 { id: 8, name: 'Elite Convention Hall', rating: 4.6, address: 'Opposite Mall, Rajivnagar', price: 95000, img: 'https://picsum.photos/400/300?random=8', availability: [15, 18, 26] },
                 { id: 9, name: 'Royal Garden Suite', rating: 4.3, address: 'Near Lake, Rajivnagar', price: 78000, img: 'https://picsum.photos/400/300?random=9', availability: [4, 11, 23] },
                 { id: 10, name: 'The Majestic Place', rating: 4.9, address: 'Rajivnagar Hills', price: 110000, img: 'https://picsum.photos/400/300?random=10', availability: [9, 17, 30] }
            ],
            // Capacity 200+: 4 Halls (New for Engagement)
            '200+': [
                { id: 25, name: 'Grand Ballroom 1', rating: 4.7, address: 'Rajivnagar West', price: 150000, img: 'https://picsum.photos/400/300?random=25', availability: [1, 5, 10, 15] },
                { id: 26, name: 'Skyline Function Hall', rating: 4.5, address: 'Rajivnagar Central', price: 145000, img: 'https://picsum.photos/400/300?random=26', availability: [2, 6, 11, 16] },
                { id: 27, name: 'The Opera Venue', rating: 4.9, address: 'Rajivnagar East', price: 160000, img: 'https://picsum.photos/400/300?random=27', availability: [3, 7, 12, 17] },
                { id: 28, name: 'Prestige Engagement', rating: 4.6, address: 'Rajivnagar North', price: 138000, img: 'https://picsum.photos/400/300?random=28', availability: [4, 8, 13, 18] }
            ]
        },
        // --- BANNIMANTAP - Engagement ---
        'bannimantap': {
            // Capacity 0-100: 4 Halls
             '0-100': [
                 { id: 5, name: 'Mysore Pavilion', rating: 4.7, address: 'Near Highway, Bannimantap', price: 55000, img: 'https://picsum.photos/400/300?random=5', availability: [1, 25] },
                 { id: 11, name: 'Star Light Hall', rating: 4.1, address: 'Central Bannimantap', price: 52000, img: 'https://picsum.photos/400/300?random=11', availability: [7, 14, 21] },
                 { id: 12, name: 'Sattva Venue', rating: 4.4, address: 'Bannimantap Main', price: 58000, img: 'https://picsum.photos/400/300?random=12', availability: [2, 16, 24] },
                 { id: 13, name: 'Heritage Nook', rating: 4.6, address: 'Bannimantap North', price: 62000, img: 'https://picsum.photos/400/300?random=13', availability: [8, 19, 28] }
             ],
            // Capacity 100-200: 4 Halls (New for Engagement)
            '100-200': [
                { id: 29, name: 'Banni Convention Hall', rating: 4.3, address: 'Bannimantap Bypass', price: 85000, img: 'https://picsum.photos/400/300?random=29', availability: [1, 5, 10, 15] },
                { id: 30, name: 'Highway Hall 2', rating: 4.2, address: 'Bannimantap North', price: 79000, img: 'https://picsum.photos/400/300?random=30', availability: [6, 12, 18, 24] },
                { id: 31, name: 'The Sapphire Suite', rating: 4.8, address: 'Bannimantap Center', price: 105000, img: 'https://picsum.photos/400/300?random=31', availability: [7, 13, 19, 25] },
                { id: 32, name: 'Lakeside Engagement', rating: 4.5, address: 'Bannimantap Lake', price: 92000, img: 'https://picsum.photos/400/300?random=32', availability: [8, 14, 20, 26] }
            ],
            // Capacity 200+: 4 Halls (New for Engagement)
            '200+': [
                { id: 33, name: 'Grand Vista Hall', rating: 4.4, address: 'Bannimantap South', price: 130000, img: 'https://picsum.photos/400/300?random=33', availability: [2, 9, 16, 23] },
                { id: 34, name: 'Celebration Grounds', rating: 4.7, address: 'Near RTO, Bannimantap', price: 145000, img: 'https://picsum.photos/400/300?random=34', availability: [3, 10, 17, 24] },
                { id: 35, name: 'The Big Day Venue', rating: 4.5, address: 'Bannimantap Main Road', price: 155000, img: 'https://picsum.photos/400/300?random=35', availability: [4, 11, 18, 25] },
                { id: 36, name: 'Spacious Halls', rating: 4.1, address: 'Bannimantap Link Road', price: 125000, img: 'https://picsum.photos/400/300?random=36', availability: [5, 12, 19, 26] }
            ]
        },
        // --- UDAYAGIRI - Engagement (All New) ---
        'udayagiri': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 37, name: 'Udayagiri Small Hall 1', rating: 4.0, address: 'Udayagiri East', price: 40000, img: 'https://picsum.photos/400/300?random=37', availability: [1, 5, 9, 13] },
                { id: 38, name: 'Cozy Nook Venue', rating: 4.3, address: 'Udayagiri West', price: 45000, img: 'https://picsum.photos/400/300?random=38', availability: [2, 6, 10, 14] },
                { id: 39, name: 'Engagement Studio', rating: 4.5, address: 'Udayagiri Main', price: 50000, img: 'https://picsum.photos/400/300?random=39', availability: [3, 7, 11, 15] },
                { id: 40, name: 'Parkside Hall', rating: 4.1, address: 'Near Park, Udayagiri', price: 42000, img: 'https://picsum.photos/400/300?random=40', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 41, name: 'Medium Event Spot 1', rating: 4.4, address: 'Udayagiri Center', price: 75000, img: 'https://picsum.photos/400/300?random=41', availability: [17, 21, 25, 29] },
                { id: 42, name: 'The Crystal Room', rating: 4.6, address: 'Udayagiri South', price: 85000, img: 'https://picsum.photos/400/300?random=42', availability: [18, 22, 26, 30] },
                { id: 43, name: 'Emerald Suite', rating: 4.2, address: 'Udayagiri North', price: 78000, img: 'https://picsum.photos/400/300?random=43', availability: [19, 23, 27, 31] },
                { id: 44, name: 'Community Hall Plus', rating: 4.0, address: 'Udayagiri Junction', price: 72000, img: 'https://picsum.photos/400/300?random=44', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 45, name: 'Udayagiri Grand Hall 1', rating: 4.8, address: 'Udayagiri Bypass', price: 120000, img: 'https://picsum.photos/400/300?random=45', availability: [5, 12, 19, 26] },
                { id: 46, name: 'Mega Event Place', rating: 4.5, address: 'Near Temple, Udayagiri', price: 130000, img: 'https://picsum.photos/400/300?random=46', availability: [6, 13, 20, 27] },
                { id: 47, name: 'City View Mandapam', rating: 4.7, address: 'Udayagiri Hills', price: 140000, img: 'https://picsum.photos/400/300?random=47', availability: [7, 14, 21, 28] },
                { id: 48, name: 'Spacious Udayagiri', rating: 4.4, address: 'Udayagiri Outer Ring', price: 115000, img: 'https://picsum.photos/400/300?random=48', availability: [8, 15, 22, 29] }
            ]
        }
    },

    'marriage': {
        // --- RAJIVNAGAR - Marriage ---
        'rajivnagar': {
            // Capacity 0-100: 4 Halls (New for Marriage)
            '0-100': [
                { id: 49, name: 'Intimate Marriage Hall', rating: 4.3, address: 'Rajivnagar Side Street', price: 80000, img: 'https://picsum.photos/400/300?random=49', availability: [1, 5, 9, 13] },
                { id: 50, name: 'Mini Kalyana Mandapam', rating: 4.1, address: 'Rajivnagar Alley', price: 75000, img: 'https://picsum.photos/400/300?random=50', availability: [2, 6, 10, 14] },
                { id: 51, name: 'Wedding Cottage', rating: 4.5, address: 'Rajivnagar Gardens', price: 85000, img: 'https://picsum.photos/400/300?random=51', availability: [3, 7, 11, 15] },
                { id: 52, name: 'Small Ceremony Hall', rating: 4.0, address: 'Rajivnagar North End', price: 78000, img: 'https://picsum.photos/400/300?random=52', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls (New for Marriage)
            '100-200': [
                { id: 53, name: 'Midsize Reception', rating: 4.7, address: 'Rajivnagar Central', price: 110000, img: 'https://picsum.photos/400/300?random=53', availability: [17, 21, 25, 29] },
                { id: 54, name: 'Wedding Hall 3', rating: 4.4, address: 'Rajivnagar West', price: 105000, img: 'https://picsum.photos/400/300?random=54', availability: [18, 22, 26, 30] },
                { id: 55, name: 'The Silk Pavilion', rating: 4.8, address: 'Rajivnagar East', price: 125000, img: 'https://picsum.photos/400/300?random=55', availability: [19, 23, 27, 31] },
                { id: 56, name: 'Festive Hall 4', rating: 4.6, address: 'Rajivnagar Near Temple', price: 99000, img: 'https://picsum.photos/400/300?random=56', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 17, name: 'The Wedding Palace', rating: 4.9, address: 'Rajivnagar South', price: 150000, img: 'https://picsum.photos/400/300?random=17', availability: [4, 11, 22] },
                { id: 18, name: 'Kalyana Mandapa', rating: 4.6, address: 'Rajivnagar West', price: 120000, img: 'https://picsum.photos/400/300?random=18', availability: [9, 18, 27] },
                { id: 19, name: 'Sangeet Mahal', rating: 4.7, address: 'Rajivnagar Main', price: 135000, img: 'https://picsum.photos/400/300?random=19', availability: [2, 16, 25] },
                { id: 20, name: 'Vibrant Weddings', rating: 4.5, address: 'Rajivnagar North', price: 140000, img: 'https://picsum.photos/400/300?random=20', availability: [6, 13, 29] }
            ]
        },
        // --- BANNIMANTAP - Marriage (All New) ---
        'bannimantap': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 57, name: 'Banni Small Wedding', rating: 4.0, address: 'Bannimantap Side Rd', price: 82000, img: 'https://picsum.photos/400/300?random=57', availability: [1, 5, 9, 13] },
                { id: 58, name: 'Ceremony Spot B1', rating: 4.2, address: 'Bannimantap Back Rd', price: 76000, img: 'https://picsum.photos/400/300?random=58', availability: [2, 6, 10, 14] },
                { id: 59, name: 'Star Wedding Annex', rating: 4.4, address: 'Near Star Light', price: 88000, img: 'https://picsum.photos/400/300?random=59', availability: [3, 7, 11, 15] },
                { id: 60, name: 'Mini Mahal B2', rating: 4.1, address: 'Bannimantap Gardens', price: 79000, img: 'https://picsum.photos/400/300?random=60', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 61, name: 'Midsize Wedding B3', rating: 4.6, address: 'Bannimantap Center', price: 115000, img: 'https://picsum.photos/400/300?random=61', availability: [17, 21, 25, 29] },
                { id: 62, name: 'Highway Wedding 100+', rating: 4.5, address: 'Bannimantap Highway', price: 108000, img: 'https://picsum.photos/400/300?random=62', availability: [18, 22, 26, 30] },
                { id: 63, name: 'The Grand Banni', rating: 4.8, address: 'Bannimantap Cross', price: 128000, img: 'https://picsum.photos/400/300?random=63', availability: [19, 23, 27, 31] },
                { id: 64, name: 'Mandapam Premium', rating: 4.7, address: 'Bannimantap Main', price: 119000, img: 'https://picsum.photos/400/300?random=64', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 65, name: 'Banni Mega Hall', rating: 4.9, address: 'Bannimantap South', price: 160000, img: 'https://picsum.photos/400/300?random=65', availability: [5, 12, 19, 26] },
                { id: 66, name: 'Wedding City Venue', rating: 4.6, address: 'Near City Market', price: 155000, img: 'https://picsum.photos/400/300?random=66', availability: [6, 13, 20, 27] },
                { id: 67, name: 'The Empress Hall', rating: 4.7, address: 'Bannimantap Hills', price: 170000, img: 'https://picsum.photos/400/300?random=67', availability: [7, 14, 21, 28] },
                { id: 68, name: 'Spacious Banni Mandap', rating: 4.5, address: 'Bannimantap East', price: 149000, img: 'https://picsum.photos/400/300?random=68', availability: [8, 15, 22, 29] }
            ]
        },
        // --- UDAYAGIRI - Marriage (All New) ---
        'udayagiri': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 69, name: 'Udayagiri Small Mandap', rating: 4.1, address: 'Udayagiri Side Rd', price: 78000, img: 'https://picsum.photos/400/300?random=69', availability: [1, 5, 9, 13] },
                { id: 70, name: 'Cozy Wedding U1', rating: 4.3, address: 'Udayagiri Back Rd', price: 83000, img: 'https://picsum.photos/400/300?random=70', availability: [2, 6, 10, 14] },
                { id: 71, name: 'Intimate Ceremony U3', rating: 4.5, address: 'Udayagiri Main', price: 88000, img: 'https://picsum.photos/400/300?random=71', availability: [3, 7, 11, 15] },
                { id: 72, name: 'Park View Wedding Nook', rating: 4.2, address: 'Near Park, Udayagiri', price: 79000, img: 'https://picsum.photos/400/300?random=72', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 73, name: 'Midsize Marriage U3', rating: 4.6, address: 'Udayagiri Center', price: 112000, img: 'https://picsum.photos/400/300?random=73', availability: [17, 21, 25, 29] },
                { id: 74, name: 'The Diamond Suite', rating: 4.7, address: 'Udayagiri South', price: 122000, img: 'https://picsum.photos/400/300?random=74', availability: [18, 22, 26, 30] },
                { id: 75, name: 'Hall for 150 Guests', rating: 4.5, address: 'Udayagiri North', price: 107000, img: 'https://picsum.photos/400/300?random=75', availability: [19, 23, 27, 31] },
                { id: 76, name: 'Wedding Hall U4', rating: 4.4, address: 'Udayagiri Junction', price: 105000, img: 'https://picsum.photos/400/300?random=76', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 77, name: 'Udayagiri Grand Mandap', rating: 4.9, address: 'Udayagiri Bypass', price: 165000, img: 'https://picsum.photos/400/300?random=77', availability: [5, 12, 19, 26] },
                { id: 78, name: 'The Majestic Udaya Hall', rating: 4.6, address: 'Near Temple, Udayagiri', price: 158000, img: 'https://picsum.photos/400/300?random=78', availability: [6, 13, 20, 27] },
                { id: 79, name: 'City View Wedding', rating: 4.7, address: 'Udayagiri Hills', price: 175000, img: 'https://picsum.photos/400/300?random=79', availability: [7, 14, 21, 28] },
                { id: 80, name: 'Mega Marriage Hall U', rating: 4.8, address: 'Udayagiri North', price: 175000, img: 'https://picsum.photos/400/300?random=80', availability: [8, 15, 22, 29] }
            ]
        }
    },

    'party': {
        // --- RAJIVNAGAR - Party (All New) ---
        'rajivnagar': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 81, name: 'Rajivnagar Party Spot 1', rating: 4.0, address: 'Rajivnagar Side Street', price: 30000, img: 'https://picsum.photos/400/300?random=81', availability: [1, 5, 9, 13] },
                { id: 82, name: 'Birthday Bash Venue', rating: 4.3, address: 'Rajivnagar Central', price: 35000, img: 'https://picsum.photos/400/300?random=82', availability: [2, 6, 10, 14] },
                { id: 83, name: 'Small Gathering Spot', rating: 4.5, address: 'Rajivnagar Gardens', price: 40000, img: 'https://picsum.photos/400/300?random=83', availability: [3, 7, 11, 15] },
                { id: 84, name: 'Party Hall R2', rating: 4.1, address: 'Rajivnagar North End', price: 32000, img: 'https://picsum.photos/400/300?random=84', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 85, name: 'Midsize Party R3', rating: 4.6, address: 'Rajivnagar West', price: 60000, img: 'https://picsum.photos/400/300?random=85', availability: [17, 21, 25, 29] },
                { id: 86, name: 'Celebration Hall R4', rating: 4.4, address: 'Rajivnagar East', price: 55000, img: 'https://picsum.photos/400/300?random=86', availability: [18, 22, 26, 30] },
                { id: 87, name: 'Event Venue 150', rating: 4.7, address: 'Rajivnagar Central', price: 70000, img: 'https://picsum.photos/400/300?random=87', availability: [19, 23, 27, 31] },
                { id: 88, name: 'The Social Hub R5', rating: 4.5, address: 'Rajivnagar South', price: 62000, img: 'https://picsum.photos/400/300?random=88', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 89, name: 'Grand Party Hall R6', rating: 4.8, address: 'Rajivnagar Bypass', price: 100000, img: 'https://picsum.photos/400/300?random=89', availability: [5, 12, 19, 26] },
                { id: 90, name: 'Mega Celebration R7', rating: 4.6, address: 'Rajivnagar North', price: 110000, img: 'https://picsum.photos/400/300?random=90', availability: [6, 13, 20, 27] },
                { id: 91, name: 'The Night Spot R8', rating: 4.9, address: 'Rajivnagar Main Road', price: 120000, img: 'https://picsum.photos/400/300?random=91', availability: [7, 14, 21, 28] },
                { id: 92, name: 'Large Event Hall R9', rating: 4.7, address: 'Rajivnagar Outer', price: 105000, img: 'https://picsum.photos/400/300?random=92', availability: [8, 15, 22, 29] }
            ]
        },
        // --- BANNIMANTAP - Party (All New) ---
        'bannimantap': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 93, name: 'Banni Party Hall 1', rating: 4.1, address: 'Bannimantap East', price: 33000, img: 'https://picsum.photos/400/300?random=93', availability: [1, 5, 9, 13] },
                { id: 94, name: 'Kids Party Zone', rating: 4.3, address: 'Bannimantap Center', price: 38000, img: 'https://picsum.photos/400/300?random=94', availability: [2, 6, 10, 14] },
                { id: 95, name: 'Banni Social Hub', rating: 4.5, address: 'Bannimantap Main', price: 42000, img: 'https://picsum.photos/400/300?random=95', availability: [3, 7, 11, 15] },
                { id: 96, name: 'Cozy Celebration B4', rating: 4.0, address: 'Bannimantap West', price: 35000, img: 'https://picsum.photos/400/300?random=96', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 97, name: 'Midsize Party B5', rating: 4.6, address: 'Bannimantap North', price: 63000, img: 'https://picsum.photos/400/300?random=97', availability: [17, 21, 25, 29] },
                { id: 98, name: 'Celebration Spot B6', rating: 4.4, address: 'Bannimantap South', price: 58000, img: 'https://picsum.photos/400/300?random=98', availability: [18, 22, 26, 30] },
                { id: 99, name: 'The Fun Zone B7', rating: 4.7, address: 'Bannimantap East', price: 72000, img: 'https://picsum.photos/400/300?random=99', availability: [19, 23, 27, 31] },
                { id: 100, name: 'Party Hall B8', rating: 4.5, address: 'Bannimantap West', price: 65000, img: 'https://picsum.photos/400/300?random=100', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 101, name: 'Grand Party B9', rating: 4.8, address: 'Bannimantap Bypass', price: 105000, img: 'https://picsum.photos/400/300?random=101', availability: [5, 12, 19, 26] },
                { id: 102, name: 'Large Event B10', rating: 4.6, address: 'Bannimantap Center', price: 115000, img: 'https://picsum.photos/400/300?random=102', availability: [6, 13, 20, 27] },
                { id: 103, name: 'Banni City Hall', rating: 4.9, address: 'Bannimantap Main Rd', price: 125000, img: 'https://picsum.photos/400/300?random=103', availability: [7, 14, 21, 28] },
                { id: 104, name: 'Spacious Fun Venue', rating: 4.7, address: 'Bannimantap Outer', price: 112000, img: 'https://picsum.photos/400/300?random=104', availability: [8, 15, 22, 29] }
            ]
        },
        // --- UDAYAGIRI - Party (All New) ---
        'udayagiri': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 105, name: 'Udayagiri Small Party 1', rating: 4.0, address: 'Udayagiri Side Street', price: 29000, img: 'https://picsum.photos/400/300?random=105', availability: [1, 5, 9, 13] },
                { id: 106, name: 'Cozy Corner U1', rating: 4.3, address: 'Udayagiri Center', price: 34000, img: 'https://picsum.photos/400/300?random=106', availability: [2, 6, 10, 14] },
                { id: 107, name: 'Mini Celebration U1', rating: 4.5, address: 'Udayagiri Main', price: 39000, img: 'https://picsum.photos/400/300?random=107', availability: [3, 7, 11, 15] },
                { id: 108, name: 'Small Birthday U2', rating: 4.1, address: 'Udayagiri North', price: 32000, img: 'https://picsum.photos/400/300?random=108', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls (New for Party)
            '100-200': [
                { id: 109, name: 'Udaya Midsize Party 2', rating: 4.5, address: 'Udayagiri Bypass', price: 65000, img: 'https://picsum.photos/400/300?random=109', availability: [17, 21, 25, 29] },
                { id: 110, name: 'The Party Center', rating: 4.3, address: 'Udayagiri South', price: 60000, img: 'https://picsum.photos/400/300?random=110', availability: [18, 22, 26, 30] },
                { id: 111, name: 'Event Hall U3', rating: 4.6, address: 'Udayagiri East', price: 70000, img: 'https://picsum.photos/400/300?random=111', availability: [19, 23, 27, 31] },
                { id: 112, name: 'Celebration Spot U4', rating: 4.4, address: 'Udayagiri West', price: 62000, img: 'https://picsum.photos/400/300?random=112', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 113, name: 'Udayagiri Mega Party 3', rating: 4.8, address: 'Udayagiri Main', price: 95000, img: 'https://picsum.photos/400/300?random=113', availability: [5, 12, 19, 26] },
                { id: 114, name: 'Large Event U5', rating: 4.6, address: 'Udayagiri North', price: 105000, img: 'https://picsum.photos/400/300?random=114', availability: [6, 13, 20, 27] },
                { id: 115, name: 'The Party Venue U6', rating: 4.9, address: 'Udayagiri South', price: 115000, img: 'https://picsum.photos/400/300?random=115', availability: [7, 14, 21, 28] },
                { id: 116, name: 'Grand Gathering U7', rating: 4.7, address: 'Udayagiri Outer', price: 100000, img: 'https://picsum.photos/400/300?random=116', availability: [8, 15, 22, 29] }
            ]
        }
    },

    'conference': {
        // --- RAJIVNAGAR - Conference (All New) ---
        'rajivnagar': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 117, name: 'Small Meeting Room R1', rating: 4.2, address: 'Rajivnagar Side Street', price: 35000, img: 'https://picsum.photos/400/300?random=117', availability: [1, 5, 9, 13] },
                { id: 118, name: 'Training Room R2', rating: 4.0, address: 'Rajivnagar Center', price: 38000, img: 'https://picsum.photos/400/300?random=118', availability: [2, 6, 10, 14] },
                { id: 119, name: 'Board Room R3', rating: 4.5, address: 'Rajivnagar Gardens', price: 42000, img: 'https://picsum.photos/400/300?random=119', availability: [3, 7, 11, 15] },
                { id: 120, name: 'Seminar Hall R4', rating: 4.3, address: 'Rajivnagar North End', price: 36000, img: 'https://picsum.photos/400/300?random=120', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 121, name: 'Midsize Conf Hall R5', rating: 4.7, address: 'Rajivnagar West', price: 60000, img: 'https://picsum.photos/400/300?random=121', availability: [17, 21, 25, 29] },
                { id: 122, name: 'Seminar Hall R6', rating: 4.4, address: 'Rajivnagar East', price: 55000, img: 'https://picsum.photos/400/300?random=122', availability: [18, 22, 26, 30] },
                { id: 123, name: 'Convention Center 1', rating: 4.8, address: 'Rajivnagar Central', price: 75000, img: 'https://picsum.photos/400/300?random=123', availability: [19, 23, 27, 31] },
                { id: 124, name: 'Training Hall R8', rating: 4.5, address: 'Rajivnagar South', price: 62000, img: 'https://picsum.photos/400/300?random=124', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 125, name: 'Grand Expo Center R9', rating: 4.9, address: 'Rajivnagar Bypass', price: 90000, img: 'https://picsum.photos/400/300?random=125', availability: [5, 12, 19, 26] },
                { id: 126, name: 'Corporate Auditorium R10', rating: 4.6, address: 'Rajivnagar North', price: 100000, img: 'https://picsum.photos/400/300?random=126', availability: [6, 13, 20, 27] },
                { id: 127, name: 'Large Conference Hall', rating: 4.7, address: 'Rajivnagar Main Road', price: 110000, img: 'https://picsum.photos/400/300?random=127', availability: [7, 14, 21, 28] },
                { id: 128, name: 'Business Convention', rating: 4.5, address: 'Rajivnagar Outer', price: 95000, img: 'https://picsum.photos/400/300?random=128', availability: [8, 15, 22, 29] }
            ]
        },
        // --- BANNIMANTAP - Conference (All New) ---
        'bannimantap': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 129, name: 'Banni Training Room 1', rating: 4.1, address: 'Bannimantap East', price: 36000, img: 'https://picsum.photos/400/300?random=129', availability: [1, 5, 9, 13] },
                { id: 130, name: 'Meeting Hall B1', rating: 4.3, address: 'Bannimantap Center', price: 39000, img: 'https://picsum.photos/400/300?random=130', availability: [2, 6, 10, 14] },
                { id: 131, name: 'Small Seminar Hall B2', rating: 4.5, address: 'Bannimantap Main', price: 44000, img: 'https://picsum.photos/400/300?random=131', availability: [3, 7, 11, 15] },
                { id: 132, name: 'Executive Board B3', rating: 4.2, address: 'Bannimantap West', price: 37000, img: 'https://picsum.photos/400/300?random=132', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 133, name: 'Midsize Conf B4', rating: 4.6, address: 'Bannimantap North', price: 65000, img: 'https://picsum.photos/400/300?random=133', availability: [17, 21, 25, 29] },
                { id: 134, name: 'Business Center 1', rating: 4.4, address: 'Bannimantap South', price: 60000, img: 'https://picsum.photos/400/300?random=134', availability: [18, 22, 26, 30] },
                { id: 135, name: 'Training Venue B2', rating: 4.7, address: 'Bannimantap East', price: 77000, img: 'https://picsum.photos/400/300?random=135', availability: [19, 23, 27, 31] },
                { id: 136, name: 'Corporate Hall B5', rating: 4.5, address: 'Bannimantap West', price: 68000, img: 'https://picsum.photos/400/300?random=136', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls (New for Conference)
            '200+': [
                { id: 137, name: 'Banni Grand Conference 2', rating: 4.8, address: 'Bannimantap Bypass', price: 95000, img: 'https://picsum.photos/400/300?random=137', availability: [5, 12, 19, 26] },
                { id: 138, name: 'Corporate Auditorium B3', rating: 4.7, address: 'Bannimantap Main', price: 105000, img: 'https://picsum.photos/400/300?random=138', availability: [6, 13, 20, 27] },
                { id: 139, name: 'The Convention Center', rating: 4.9, address: 'Bannimantap Hills', price: 115000, img: 'https://picsum.photos/400/300?random=139', availability: [7, 14, 21, 28] },
                { id: 140, name: 'Large Seminar Hall B4', rating: 4.6, address: 'Bannimantap Link Rd', price: 102000, img: 'https://picsum.photos/400/300?random=140', availability: [8, 15, 22, 29] }
            ]
        },
        // --- UDAYAGIRI - Conference (All New) ---
        'udayagiri': {
            // Capacity 0-100: 4 Halls
            '0-100': [
                { id: 141, name: 'Udaya Small Meeting 1', rating: 4.0, address: 'Udayagiri Side Street', price: 34000, img: 'https://picsum.photos/400/300?random=141', availability: [1, 5, 9, 13] },
                { id: 142, name: 'Training Nook U1', rating: 4.3, address: 'Udayagiri Center', price: 37000, img: 'https://picsum.photos/400/300?random=142', availability: [2, 6, 10, 14] },
                { id: 143, name: 'Seminar Room U2', rating: 4.5, address: 'Udayagiri Main', price: 41000, img: 'https://picsum.photos/400/300?random=143', availability: [3, 7, 11, 15] },
                { id: 144, name: 'Board Room U3', rating: 4.2, address: 'Udayagiri North', price: 35000, img: 'https://picsum.photos/400/300?random=144', availability: [4, 8, 12, 16] }
            ],
            // Capacity 100-200: 4 Halls
            '100-200': [
                { id: 145, name: 'Midsize Conf U4', rating: 4.6, address: 'Udayagiri Bypass', price: 64000, img: 'https://picsum.photos/400/300?random=145', availability: [17, 21, 25, 29] },
                { id: 146, name: 'Business Center U5', rating: 4.4, address: 'Udayagiri South', price: 59000, img: 'https://picsum.photos/400/300?random=146', availability: [18, 22, 26, 30] },
                { id: 147, name: 'Event Hall U5', rating: 4.7, address: 'Udayagiri East', price: 76000, img: 'https://picsum.photos/400/300?random=147', availability: [19, 23, 27, 31] },
                { id: 148, name: 'Training Hall U6', rating: 4.5, address: 'Udayagiri West', price: 67000, img: 'https://picsum.photos/400/300?random=148', availability: [20, 24, 28, 1] }
            ],
            // Capacity 200+: 4 Halls
            '200+': [
                { id: 149, name: 'Udayagiri Convention 3', rating: 4.8, address: 'Udayagiri Main', price: 92000, img: 'https://picsum.photos/400/300?random=149', availability: [5, 12, 19, 26] },
                { id: 150, name: 'Corporate Training U7', rating: 4.6, address: 'Udayagiri North', price: 102000, img: 'https://picsum.photos/400/300?random=150', availability: [6, 13, 20, 27] },
                { id: 151, name: 'Auditorium U6', rating: 4.9, address: 'Udayagiri South', price: 112000, img: 'https://picsum.photos/400/300?random=151', availability: [7, 14, 21, 28] },
                { id: 152, name: 'The Expo U7', rating: 4.7, address: 'Udayagiri Outer', price: 98000, img: 'https://picsum.photos/400/300?random=152', availability: [8, 15, 22, 29] }
            ]
        }
    }
};

// --- Global Navigation, Authentication, and State Management ---
function checkAuthentication() {
    const currentPage = window.location.pathname.split('/').pop();
    // Allow access to login page
    if (currentPage === 'index.html' || currentPage === '') {
        return;
    }
    if (localStorage.getItem('authenticated') !== 'true') {
        alert('Session expired or unauthorized access. Please log in.');
        window.location.href = 'index.html';
    }
}

function login(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated login credentials
    if (username === 'user' && password === 'pass') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Use "user" and "pass".');
    }
}

window.logout = function() {
    localStorage.clear();
    window.location.href = 'index.html';
}

if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', login);
} else {
    checkAuthentication();
}

// --- Home Page Carousel Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('home-carousel');
    if (carouselContainer) {
        const slides = Array.from(carouselContainer.querySelectorAll('.carousel-slide'));
        let currentSlide = 0;
        let slideInterval;

        // Position slides
        slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });

        function showSlide(index) {
            // Ensure index wraps around
            if (index >= slides.length) {
                index = 0;
            } else if (index < 0) {
                index = slides.length - 1;
            }
            currentSlide = index;
            const offset = -currentSlide * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function startAutoplay() {
            slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
        }

        function stopAutoplay() {
            clearInterval(slideInterval);
        }

        // Start autoplay on load
        startAutoplay();

        // Pause autoplay on mouse hover (optional)
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);

        // Handle window resize
        window.addEventListener('resize', () => {
            slides.forEach((slide, index) => {
                slide.style.left = `${index * 100}%`;
            });
            showSlide(currentSlide); // Re-position current slide correctly
        });

        // Initialize first slide display
        showSlide(0);
    }
});


// --- Booking Search Logic (Executed on book.html) ---
function handleSearch(form) {
    const type = form.elements['hall-type'].value;
    const capacityRange = form.elements['capacity'].value;
    const location = form.elements['location'].value;

    // Check if the mandatory fields are selected
    if (!type || !capacityRange || !location) {
        alert("Please select a value for all fields.");
        return;
    }

    const searchData = { 
        hallType: type, 
        location: location, 
        capacity: capacityRange 
    };
    
    localStorage.setItem('currentSearch', JSON.stringify(searchData));
    window.location.href = 'results.html';
}

if (document.getElementById('booking-search-form')) {
    document.getElementById('booking-search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleSearch(e.target);
    });
}


// --- Results Page Logic (Executed on results.html) ---
function displaySearchResults() {
    const searchData = JSON.parse(localStorage.getItem('currentSearch'));
    const resultsContainer = document.getElementById('halls-list');
    if (!searchData || !resultsContainer) return;
    
    const { hallType, capacity, location } = searchData;
    resultsContainer.innerHTML = '';

    // 1. Determine the correct data key based on the selected capacity
    // This logic ensures that 200-300, 300-400, 400-500, and 500+ all map to the '200+' data key.
    let dataKey = capacity;
    if (['200-300', '300-400', '400-500', '500+'].includes(capacity)) {
        dataKey = '200+'; // Map all large ranges to the existing '200+' data key
    }

    document.getElementById('results-type').textContent = hallType.charAt(0).toUpperCase() + hallType.slice(1) + ' Hall (' + capacity + ')';
    document.getElementById('results-location').textContent = location.charAt(0).toUpperCase() + location.slice(1);
    
    // 2. Use the corrected dataKey for the lookup
    let availableHalls = HALLS_DATA[hallType]?.[location]?.[dataKey] || [];

    if (availableHalls.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center; padding: 50px; grid-column: 1 / -1;">No halls found matching your criteria. Try a different location or capacity.</p>';
        return;
    }
    
    availableHalls.forEach(hall => {
        const card = document.createElement('div');
        card.classList.add('hall-result-card');
        card.setAttribute('data-hall-id', hall.id);
        card.setAttribute('onclick', `showHallDetail(${hall.id})`);
        card.innerHTML = `
            <img src="${hall.img}" alt="${hall.name}">
            <div class="hall-info">
                <h3>${hall.name}</h3>
                <p>Location: ${hall.address.split(', ')[1] || location.charAt(0).toUpperCase() + location.slice(1)}</p>
                <p class="hall-rating"><i class="fas fa-star"></i> ${hall.rating}</p>
                <p class="hall-price">Starting Price: ₹ ${hall.price.toLocaleString('en-IN')}</p>
                <button class="btn primary-btn card-btn">View Details</button>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// Function to handle viewing hall details (from results.html to detail.html)
window.showHallDetail = function(hallId) {
    const searchData = JSON.parse(localStorage.getItem('currentSearch'));
    if (!searchData) return;

    // Use the same dataKey logic to find the hall in HALLS_DATA
    let dataKey = searchData.capacity;
    if (['200-300', '300-400', '400-500', '500+'].includes(dataKey)) {
        dataKey = '200+';
    }

    const halls = HALLS_DATA[searchData.hallType]?.[searchData.location]?.[dataKey] || [];
    const selectedHall = halls.find(hall => hall.id === hallId);

    if (selectedHall) {
        localStorage.setItem('currentHall', JSON.stringify(selectedHall));
        window.location.href = 'detail.html';
    } else {
        alert('Hall details could not be loaded.');
    }
};

if (document.getElementById('results-page')) {
    document.addEventListener('DOMContentLoaded', displaySearchResults);
}


// --- Detail Page Logic (Executed on detail.html) ---
let currentMonth;
let currentYear;

function populateDetailPage() {
    const hall = JSON.parse(localStorage.getItem('currentHall'));
    const detailContainer = document.getElementById('detail-page');
    if (!hall || !detailContainer) {
        if(detailContainer) detailContainer.innerHTML = '<p style="padding: 50px; text-align: center;">No hall selected. Go back to <a href="book.html">Book Hall</a>.</p>';
        return;
    }

    document.getElementById('detail-image').src = hall.img;
    document.getElementById('detail-name').textContent = hall.name;
    document.getElementById('detail-rating').textContent = hall.rating;
    document.getElementById('detail-address').textContent = hall.address;
    document.getElementById('detail-price').textContent = `Price: ₹ ${hall.price.toLocaleString('en-IN')}`;
    document.getElementById('detail-book-btn').disabled = true;
    document.getElementById('selected-date-display').textContent = 'Select a date to book.';

    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    
    renderCalendar(currentYear, currentMonth, hall.availability);
}

function changeMonth(delta) {
    const hall = JSON.parse(localStorage.getItem('currentHall'));
    if (!hall) return;

    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth, hall.availability);
}

function renderCalendar(year, month, bookedDays) {
    const monthYearDisplay = document.getElementById('current-month-year');
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    const date = new Date(year, month);
    const firstDay = date.getDay(); // 0 for Sunday, 1 for Monday...
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Add day names to the grid header
    dayNames.forEach(day => {
        const header = document.createElement('div');
        header.classList.add('calendar-day', 'day-header');
        header.textContent = day;
        grid.appendChild(header);
    });

    // Add empty divs for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('calendar-day', 'empty-day');
        grid.appendChild(emptyDiv);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day', 'date-number');
        dayDiv.textContent = day;
        dayDiv.setAttribute('data-day', day);

        const currentDate = new Date(year, month, day);
        const isPast = currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (isPast) {
            dayDiv.classList.add('past-day');
        } else {
            // Check if the day is booked
            const isBooked = bookedDays.includes(day);
            if (isBooked) {
                dayDiv.classList.add('booked-day');
                dayDiv.title = 'Booked';
            } else {
                dayDiv.classList.add('available-day');
                dayDiv.title = 'Available - Click to Select';
                dayDiv.addEventListener('click', function() {
                    if (this.classList.contains('booked-day') || this.classList.contains('past-day')) return;
                    
                    // Clear previous selection
                    grid.querySelectorAll('.selected-day').forEach(d => d.classList.remove('selected-day'));
                    
                    // Select the new day
                    this.classList.add('selected-day');
                    
                    // Update the display and enable the button
                    const selectedDate = `${day} ${monthNames[month]}, ${year}`;
                    localStorage.setItem('selectedDate', selectedDate);
                    document.getElementById('selected-date-display').textContent = `Selected Date: ${selectedDate}`;
                    document.getElementById('detail-book-btn').disabled = false;
                });
            }
        }
        grid.appendChild(dayDiv);
    }
}

if (document.getElementById('detail-page')) {
    document.addEventListener('DOMContentLoaded', () => {
        populateDetailPage();
        document.getElementById('prev-month-btn').addEventListener('click', () => changeMonth(-1));
        document.getElementById('next-month-btn').addEventListener('click', () => changeMonth(1));
        document.getElementById('detail-book-btn').addEventListener('click', () => {
            window.location.href = 'user-details.html';
        });
    });
}


// --- User Details Page Logic (Executed on user-details.html) ---
function populateUserDetails() {
    const hall = JSON.parse(localStorage.getItem('currentHall'));
    const date = localStorage.getItem('selectedDate');
    const search = JSON.parse(localStorage.getItem('currentSearch'));
    
    if (!hall || !date || !search) {
        alert("Booking details incomplete. Redirecting to search.");
        window.location.href = 'book.html';
        return;
    }

    const hallType = search.hallType;

    // Set a default purpose based on the hall type
    let defaultPurpose = '';
    switch (hallType) {
        case 'engagement':
            defaultPurpose = 'Family Engagement Ceremony';
            break;
        case 'marriage':
            defaultPurpose = 'Wedding Reception';
            break;
        case 'party':
            defaultPurpose = 'Birthday Party/Social Gathering';
            break;
        case 'conference':
            defaultPurpose = 'Corporate Meeting/Training';
            break;
        default:
            defaultPurpose = 'Event/Function';
    }

    document.getElementById('booking-purpose').value = defaultPurpose;

    // Populate summary on the page
    document.getElementById('summary-hall-name').textContent = hall.name;
    document.getElementById('summary-date').textContent = date;
}

function handleUserDetailsSubmission(e) {
    e.preventDefault();

    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const userPhone = document.getElementById('user-phone').value;
    const bookingPurpose = document.getElementById('booking-purpose').value;

    const hall = JSON.parse(localStorage.getItem('currentHall'));
    const date = localStorage.getItem('selectedDate');

    if (!hall || !date) {
        alert("Booking details lost. Please start over.");
        window.location.href = 'book.html';
        return;
    }

    // --- SIMULATED BOOKING PROCESS ---
    // In a real application, this would send data to a server, which would save the booking 
    // and potentially update the hall's availability (the 'bookedDays' array).
    
    // For simulation:
    console.log("Simulating booking submission...");
    console.log("Hall:", hall.name);
    console.log("Date:", date);
    console.log("Customer:", userName, userPhone);
    console.log("Purpose:", bookingPurpose);
    
    // Store data for the confirmation page
    localStorage.setItem('confirmHallName', hall.name);
    localStorage.setItem('confirmDate', date);
    localStorage.setItem('confirmPhone', userPhone);
    
    // Navigate to confirmation page
    window.location.href = 'confirmation.html';
}

if (document.getElementById('user-details-page')) {
    document.addEventListener('DOMContentLoaded', populateUserDetails);
    document.getElementById('user-details-form').addEventListener('submit', handleUserDetailsSubmission);
}


// --- Confirmation Page Logic (Executed on confirmation.html) ---

function displayConfirmation() {
    const hallName = localStorage.getItem('confirmHallName');
    const date = localStorage.getItem('confirmDate');
    const phone = localStorage.getItem('confirmPhone');

    if (hallName && date && phone) {
        document.getElementById('confirm-hall-name').textContent = hallName;
        document.getElementById('confirm-date').textContent = date;
        document.getElementById('confirm-phone').textContent = phone;
    } else {
        document.getElementById('confirmation-page').innerHTML = '<div class="confirmation-card"><h1>🚫 Error!</h1><p>Booking details could not be loaded. Please try again.</p><button class="btn primary-btn" onclick="window.location.href=\'home.html\'">Go to Home</button></div>';
    }

    // Clear confirmation-specific local storage items after display
    localStorage.removeItem('confirmHallName');
    localStorage.removeItem('confirmDate');
    localStorage.removeItem('confirmPhone');
    // Keep currentHall, selectedDate, and currentSearch for context, but a real app might clear these too.
}

if (document.getElementById('confirmation-page')) {
    document.addEventListener('DOMContentLoaded', displayConfirmation);
}

// --- Home Page Scroll Logic ---
window.scrollToGetStarted = function() {
    const targetSection = document.getElementById('getStartedSection');
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth', // This makes the scroll animated
            block: 'start'      // Scrolls to the top of the element
        });
    }
};
// ... (rest of your HALLS_DATA and other functions) ...

// --- User Details Page Logic (Executed on user-details.html) ---
function populateUserDetails() {
    const hall = JSON.parse(localStorage.getItem('currentHall'));
    const date = localStorage.getItem('selectedDate');
    const search = JSON.parse(localStorage.getItem('currentSearch'));

    if (!hall || !date || !search) {
        alert("Booking details incomplete. Redirecting to search.");
        window.location.href = 'book.html';
        return;
    }

    const hallType = search.hallType; 
    
    // START FIX: Display Hall details (Name, Date, Type, Capacity)
    document.getElementById('user-details-hall-name').textContent = hall.name;
    document.getElementById('user-details-date').textContent = date;
    // Capitalize the first letter of hallType for display
    document.getElementById('user-details-hall-type').textContent = hallType.charAt(0).toUpperCase() + hallType.slice(1);
    document.getElementById('user-details-capacity').textContent = search.capacity;
    // END FIX

    // Set a default purpose based on the hall type
    let defaultPurpose = '';
    switch (hallType) {
        case 'engagement': defaultPurpose = 'Family Engagement Ceremony'; break;
        case 'marriage': defaultPurpose = 'Wedding Ceremony & Reception'; break;
        case 'party': defaultPurpose = 'Birthday Party / Social Gathering'; break;
        case 'conference': defaultPurpose = 'Business Conference / Seminar'; break;
    }
    document.getElementById('booking-purpose').value = defaultPurpose; 
    
    // Setup form submission handler
    document.getElementById('user-details-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleBookingSubmission(hall.name, date, document.getElementById('user-phone').value);
    });
}

function handleBookingSubmission(hallName, date, phone) {
    // Simulate API call and success
    localStorage.setItem('confirmHallName', hallName);
    localStorage.setItem('confirmDate', date);
    localStorage.setItem('confirmPhone', phone); 

    // Clear temporary booking data
    localStorage.removeItem('currentHall');
    localStorage.removeItem('selectedDate');
    localStorage.removeItem('currentSearch'); 

    window.location.href = 'confirmation.html';
}

if (document.getElementById('user-details-page')) {
    document.addEventListener('DOMContentLoaded', populateUserDetails);
}

// ... (rest of your script.js including existing page initialization checks) ...
