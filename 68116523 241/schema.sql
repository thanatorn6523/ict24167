-- Cloudflare D1 Database Schema for Thanatorn Namkon Portfolio

-- 1. Profile Table
CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    title_th TEXT,
    title_en TEXT,
    bio_th TEXT,
    bio_en TEXT,
    gpax REAL,
    email TEXT,
    phone TEXT,
    location_th TEXT,
    location_en TEXT,
    avatar_url TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Education Table
CREATE TABLE IF NOT EXISTS education (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    degree_th TEXT NOT NULL,
    degree_en TEXT NOT NULL,
    major_th TEXT NOT NULL,
    major_en TEXT NOT NULL,
    university_th TEXT NOT NULL,
    university_en TEXT NOT NULL,
    period_th TEXT,
    period_en TEXT,
    gpax REAL,
    is_current BOOLEAN DEFAULT 0
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL, -- 'Languages', 'Frontend', 'Backend', 'Tools'
    name TEXT NOT NULL,
    proficiency_percentage INTEGER NOT NULL
);

-- 4. Work Experience Table
CREATE TABLE IF NOT EXISTS experience (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_th TEXT NOT NULL,
    role_en TEXT NOT NULL,
    company_th TEXT NOT NULL,
    company_en TEXT NOT NULL,
    period_th TEXT,
    period_en TEXT,
    type_th TEXT,
    type_en TEXT,
    description_th TEXT,
    description_en TEXT
);

-- 5. Projects Table (CRUD)
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Full-Stack', 'Frontend', 'Backend'
    tech_stack TEXT,
    description_th TEXT,
    description_en TEXT,
    demo_url TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 6. Certifications Table (CRUD & PDF)
CREATE TABLE IF NOT EXISTS certifications (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    issuer TEXT NOT NULL,
    issue_date TEXT,
    description_th TEXT,
    description_en TEXT,
    pdf_r2_key TEXT,
    pdf_url TEXT,
    pdf_filename TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial Seed Data
INSERT OR IGNORE INTO profile (id, full_name, title_th, title_en, gpax, email, phone, location_th, location_en)
VALUES (
    1,
    'Thanatorn Namkon',
    'นักศึกษา ICT ชั้นปีที่ 2',
    '2nd Year ICT Student',
    3.78,
    'thanatorn.namkon@gmail.com',
    '080-904-3589',
    'มหาวิทยาลัยศรีปทุม, กทม.',
    'Sripatum University, Bangkok'
);
