-- ============================================================
-- Campus Companion — Supabase seed data (all fictional)
-- Run this in your Supabase SQL editor after creating tables
-- ============================================================

-- ── TIMETABLE ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS timetable_slots (
  id SERIAL PRIMARY KEY,
  day TEXT NOT NULL,
  time_start TEXT NOT NULL,
  time_end TEXT NOT NULL,
  subject TEXT NOT NULL,
  room TEXT NOT NULL,
  lecturer TEXT NOT NULL,
  color TEXT DEFAULT 'blue'
);

INSERT INTO timetable_slots (day, time_start, time_end, subject, room, lecturer, color) VALUES
  ('mon', '09:00', '10:00', 'Cloud Architecture',       'G-204',    'Dr. Byrne',      'blue'),
  ('mon', '11:00', '12:00', 'UX Design Principles',     'B-108',    'Dr. Walsh',      'green'),
  ('mon', '14:00', '16:00', 'Enterprise Computing Lab', 'IT-Lab3',  'Mr. O Sullivan', 'amber'),
  ('tue', '09:00', '10:00', 'Database Systems',         'A-201',    'Dr. Flanagan',   'blue'),
  ('tue', '12:00', '13:00', 'Software Testing',         'B-305',    'Ms. Maguire',    'green'),
  ('tue', '15:00', '16:00', 'Agile and Scrum',          'G-101',    'Dr. Dempsey',    'amber'),
  ('wed', '10:00', '12:00', 'Cloud Architecture Lab',   'IT-Lab1',  'Dr. Byrne',      'blue'),
  ('wed', '14:00', '15:00', 'Professional Skills',      'A-104',    'Ms. O Brien',    'green'),
  ('thu', '09:00', '10:00', 'UX Design Principles',     'B-108',    'Dr. Walsh',      'green'),
  ('thu', '11:00', '12:00', 'Enterprise Computing',     'G-204',    'Mr. O Sullivan', 'blue'),
  ('thu', '14:00', '16:00', 'Database Systems Lab',     'IT-Lab2',  'Dr. Flanagan',   'amber'),
  ('fri', '10:00', '11:00', 'Software Testing',         'B-305',    'Ms. Maguire',    'green'),
  ('fri', '12:00', '13:00', 'Agile and Scrum',          'G-101',    'Dr. Dempsey',    'blue');

-- ── EVENTS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT,
  event_date DATE,
  event_time TEXT,
  category TEXT,
  color TEXT DEFAULT 'blue'
);

INSERT INTO events (title, description, location, event_date, event_time, category, color) VALUES
  ('Hackathon: Build for Good',   '24-hour team hackathon focused on social impact. Meals provided, prizes for top 3 teams.',           'Block B Atrium',       '2026-05-06', '09:00', 'academic',  'blue'),
  ('Tech Careers Fair',           'Meet 30+ companies hiring graduates and interns. Bring your CV!',                                    'Sports Hall',          '2026-05-07', '11:00', 'academic',  'amber'),
  ('Salsa Night',                 'Beginner-friendly dance social. No experience needed. 3 euro entry includes refreshments.',          'Student Bar',          '2026-05-08', '20:00', 'social',    'green'),
  ('5K Campus Run',               'Join the running club for a friendly 5K around campus. All paces welcome!',                         'Main Gate',            '2026-05-09', '08:00', 'sport',     'blue'),
  ('CV and LinkedIn Workshop',    '1:1 feedback on your CV and LinkedIn profile from career coaches.',                                  'Room A-104',           '2026-05-10', '14:00', 'workshop',  'green'),
  ('Open Mic Night',              'Student performers take the stage: comedy, music, poetry. Sign up at the SU desk.',                 'Student Bar',          '2026-05-13', '19:00', 'social',    'amber'),
  ('Machine Learning Seminar',    'Guest lecture from industry practitioner on applied ML in fintech.',                                 'G-204 Lecture Hall',   '2026-05-14', '12:00', 'academic',  'blue'),
  ('Yoga and Mindfulness',        'Free drop-in session with certified instructor. Mats provided.',                                     'Gym Studio',           '2026-05-15', '17:30', 'sport',     'green');

-- ── SOCIETIES ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS societies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  member_count INT DEFAULT 0,
  category TEXT
);

INSERT INTO societies (name, description, icon, member_count, category) VALUES
  ('Computing Society',           'Weekly coding challenges, hackathons, and guest talks from industry. Annual CompuFest.',             '💻', 142, 'academic'),
  ('Art and Design Society',      'Life drawing classes, gallery trips, and collaborative campus mural projects. All skills welcome.',  '🎨',  88, 'creative'),
  ('Drama Society',               'Two major productions per year, improv workshops, and lots of backstage chaos.',                    '🎭',  65, 'social'),
  ('Athletic Union',              'Over 12 sports teams: football, basketball, rowing and more. National league representation.',      '🏃', 310, 'sport'),
  ('International Students Soc', 'Cultural events, language exchanges, and a safe space for international students to connect.',       '🌍',  97, 'social'),
  ('Green Campus Society',        'Sustainability campaigns, litter picks, and an annual Eco-Week with workshops and talks.',          '♻️',  54, 'academic');

-- ── CANTEEN MENU ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(5,2),
  allergy_tags TEXT[],
  day_label TEXT,
  category TEXT
);

INSERT INTO menu_items (name, description, price, allergy_tags, day_label, category) VALUES
  ('Roast of the Day',        'Roast chicken with seasonal veg, roast potatoes, and gravy',           6.50, ARRAY['GF option'],              'today',    'hot'),
  ('Veggie Curry',            'Red lentil and chickpea curry, steamed rice, naan bread',              5.50, ARRAY['V','VG','GF'],            'today',    'hot'),
  ('Chicken Wrap',            'Grilled chicken, mixed leaves, sundried tomato pesto, tortilla',       4.20, ARRAY[]::TEXT[],                 'today',    'cold'),
  ('Pasta Bake',              'Penne, beef bolognese, mozzarella topping, garlic bread',              5.00, ARRAY['gluten','dairy'],         'today',    'hot'),
  ('Soup and Roll',           'Today soup: Leek and Potato with a batch roll',                        3.00, ARRAY['V','GF option'],          'today',    'soup'),
  ('Build Your Own Salad',    'Unlimited greens, toppings, dressing from the salad bar',              4.50, ARRAY['V','VG','GF'],            'today',    'cold'),
  ('Fish and Chips',          'Beer-battered cod fillet, chunky chips, mushy peas, tartare sauce',   6.00, ARRAY['fish','gluten'],          'tomorrow', 'hot'),
  ('Mushroom Risotto',        'Arborio rice, wild mushrooms, parmesan, truffle oil',                  5.50, ARRAY['V','GF'],                 'tomorrow', 'hot'),
  ('BLT Baguette',            'Crispy bacon, lettuce, tomato, mayo in a crusty baguette',             3.80, ARRAY['gluten','dairy'],         'tomorrow', 'cold');

-- ── LOCATIONS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  building TEXT
);

INSERT INTO locations (name, description, icon, building) VALUES
  ('Block A – Lecture Halls',         'Floors 1–3. Lecture rooms and seminar rooms',                    '🎓', 'A'),
  ('Block B – Engineering/Computing', 'Floors 1–4. Labs IT-Lab1 to IT-Lab4, project rooms',             '💻', 'B'),
  ('Block C – Library',               'Floors 1–3. 24/7 study zone, printing, silent study',            '📚', 'C'),
  ('Canteen – Food Hall',             'Ground floor. Open 07:30–16:30 weekdays',                        '🍽️', 'S'),
  ('Student Services Hub',            'Ground floor Block B. Cards, finance, counselling',               '🏢', 'B'),
  ('Sports Hall and Gym',             'East campus. Gym open 07:00–22:00',                              '🏋️', 'E'),
  ('Car Park P1',                     'Main entrance. Pay and Display, EV charging available',           '🅿️', 'P'),
  ('Bus Stop – Route 40',             'Outside main gate. City centre every 12 mins',                   '🚌', 'X');

-- ── LOST AND FOUND ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lost_found_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  location_found TEXT,
  date_reported DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'found',
  icon TEXT,
  contact_email TEXT
);

INSERT INTO lost_found_items (name, description, location_found, date_reported, status, icon) VALUES
  ('Sony Headphones (Black)',             'Over-ear, black cable, no case',          'Library, Floor 2',              '2026-04-29', 'found', '🎧'),
  ('Navy Puffer Jacket (M)',              'No label, zip broken on left pocket',      'Block B Canteen seating',       '2026-04-28', 'found', '🧥'),
  ('Set of Keys (3 keys, red fob)',       'Yale key, two mortice keys',               'Near Block A entrance',         '2026-04-27', 'found', '🔑'),
  ('Blue Notebook – Comp Arch notes',    'A5 size, blue cover, pen attached',        'IT-Lab1',                       '2026-04-26', 'found', '📓'),
  ('iPhone 14 Pro (Black, cracked)',     'Black case, cracked rear glass',           'Sports Hall',                   '2026-04-28', 'lost',  '📱'),
  ('Grey Samsonite Backpack',            'Grey, red zip, laptop inside',             'Block C / Library area',        '2026-04-27', 'lost',  '💼'),
  ('Burgundy Wool Scarf',                'Hand-knitted, tassels at ends',            'Unknown location on campus',    '2026-04-25', 'lost',  '🧣');

-- ── HELPDESK TICKETS ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS helpdesk_tickets (
  id SERIAL PRIMARY KEY,
  ticket_ref TEXT UNIQUE NOT NULL,
  subject TEXT NOT NULL,
  details TEXT,
  category TEXT DEFAULT 'Other',
  status TEXT DEFAULT 'Open',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO helpdesk_tickets (ticket_ref, subject, details, category, status, created_at) VALUES
  ('#TK-0041', 'Projector not working in G-204',     'The projector in G-204 flickers and does not display HDMI input.',    'IT Support',   'Open',        NOW() - INTERVAL '2 days'),
  ('#TK-0039', 'Wi-Fi disconnects in Block B labs',  'Connection drops every 15-20 minutes in IT-Lab3.',                   'IT Support',   'In Progress', NOW() - INTERVAL '4 days'),
  ('#TK-0035', 'Library printer out of paper',       'Printer on Floor 2 has been out of paper since Tuesday.',            'Facilities',   'Resolved',    NOW() - INTERVAL '6 days');

-- ── NOTIFICATIONS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  icon TEXT,
  title TEXT NOT NULL,
  body TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE
);

INSERT INTO notifications (icon, title, body, created_at, is_read) VALUES
  ('📅', 'Class cancelled: Database Systems',  'Dr. Flanagan has cancelled Thursday 11:00 class. Room will be free.',                NOW() - INTERVAL '10 minutes', FALSE),
  ('🏆', 'Hackathon team confirmed',           'You have been matched with Team Syntax Error for the May 6th Hackathon.',            NOW() - INTERVAL '1 hour',     FALSE),
  ('🍽️', 'Today special: Roast Chicken',      'The canteen special today is roast chicken with seasonal veg. Serves from 12:00.',   NOW() - INTERVAL '3 hours',    FALSE),
  ('🔍', 'Lost item match',                   'A Blue Notebook matching your report was found in IT-Lab1.',                         NOW() - INTERVAL '1 day',      TRUE),
  ('🎉', 'New event: Open Mic Night',          'Sign up by May 12th to perform at the Student Bar Open Mic on May 13.',             NOW() - INTERVAL '2 days',     TRUE);

-- ── STUDENT INTERACTIONS (for ML) ──────────────────────────
CREATE TABLE IF NOT EXISTS student_interactions (
  id SERIAL PRIMARY KEY,
  student_id TEXT NOT NULL,
  event_id INT REFERENCES events(id),
  interest_tech NUMERIC(3,2) DEFAULT 0,
  interest_arts NUMERIC(3,2) DEFAULT 0,
  interest_sport NUMERIC(3,2) DEFAULT 0,
  interest_career NUMERIC(3,2) DEFAULT 0,
  interest_sustainability NUMERIC(3,2) DEFAULT 0,
  interest_social NUMERIC(3,2) DEFAULT 0,
  interest_science NUMERIC(3,2) DEFAULT 0,
  interest_volunteering NUMERIC(3,2) DEFAULT 0,
  clicked BOOLEAN DEFAULT TRUE
);

INSERT INTO student_interactions (student_id, event_id, interest_tech, interest_arts, interest_sport, interest_career, interest_sustainability, interest_social, interest_science, interest_volunteering) VALUES
  ('stu_001', 1, 0.9, 0.1, 0.0, 0.4, 0.2, 0.3, 0.6, 0.1),
  ('stu_002', 2, 0.5, 0.0, 0.1, 0.9, 0.1, 0.2, 0.3, 0.0),
  ('stu_003', 3, 0.0, 0.7, 0.3, 0.0, 0.1, 0.9, 0.0, 0.1),
  ('stu_004', 4, 0.0, 0.1, 0.9, 0.0, 0.3, 0.5, 0.0, 0.2),
  ('stu_005', 5, 0.3, 0.0, 0.0, 0.9, 0.0, 0.2, 0.2, 0.0),
  ('stu_006', 6, 0.0, 0.8, 0.1, 0.0, 0.0, 0.9, 0.0, 0.0),
  ('stu_007', 7, 0.7, 0.0, 0.0, 0.3, 0.1, 0.1, 0.9, 0.0),
  ('stu_008', 8, 0.0, 0.3, 0.8, 0.0, 0.5, 0.4, 0.0, 0.3),
  ('stu_009', 1, 0.8, 0.0, 0.1, 0.5, 0.0, 0.2, 0.7, 0.0),
  ('stu_010', 2, 0.6, 0.1, 0.0, 0.8, 0.0, 0.3, 0.2, 0.0),
  ('stu_011', 3, 0.1, 0.6, 0.2, 0.0, 0.0, 0.8, 0.0, 0.1),
  ('stu_012', 4, 0.0, 0.0, 0.8, 0.1, 0.4, 0.6, 0.0, 0.3),
  ('stu_013', 5, 0.4, 0.0, 0.0, 0.8, 0.1, 0.1, 0.1, 0.0),
  ('stu_014', 6, 0.0, 0.9, 0.0, 0.0, 0.0, 0.8, 0.0, 0.0),
  ('stu_015', 7, 0.8, 0.1, 0.0, 0.2, 0.0, 0.1, 0.8, 0.0),
  ('stu_016', 8, 0.0, 0.2, 0.7, 0.0, 0.6, 0.3, 0.1, 0.4),
  ('stu_017', 1, 0.7, 0.2, 0.1, 0.3, 0.1, 0.4, 0.5, 0.0),
  ('stu_018', 3, 0.0, 0.5, 0.4, 0.0, 0.0, 0.9, 0.0, 0.1),
  ('stu_019', 2, 0.5, 0.0, 0.0, 0.9, 0.0, 0.2, 0.4, 0.0),
  ('stu_020', 7, 0.9, 0.0, 0.0, 0.4, 0.0, 0.0, 0.9, 0.0);
