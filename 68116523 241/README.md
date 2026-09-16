# 🚀 Single-Page Web Portfolio - Thanatorn Namkon
### ICT Undergraduate Student | Sripatum University (SPU)

เว็บไซต์ Single-Page Web Portfolio ที่พัฒนาด้วย **HTML5, Tailwind CSS, และ Vanilla JavaScript** ดีไซน์สไตล์ **Minimalist Modern** เน้นโทนสี **Cyan/Teal Accent** พร้อมโครงสร้าง **Sticky Left Sidebar** ที่ตอบโจทย์การใช้งานทั้งบน Desktop และ Mobile

---

## 🌟 จุดเด่นและฟีเจอร์หลัก (Key Features)

### 🎨 1. ดีไซน์ & การจัดวาง (Design & Layout)
- **Color Palette**: โทนสี Cyan / Teal (`#06b6d4`, `#0d9488`) ให้ความรู้สึกทันสมัย เหมาะสำหรับสายเทคโนโลยี ICT
- **Template Style**: Minimalist Modern สะอาดตา โปร่งสบาย คอนทราสต์คมชัด
- **Sticky Left Vertical Sidebar**: แถบนำทางด้านซ้าย ตรึงคงที่ (Sticky) พร้อมระบบ Scroll-Spy ไฮไลต์เมนูตามตำแหน่ง Scroll และรองรับ Drawer เมนูบนอุปกรณ์มือถือ

### 🌐 2. ระบบสลับภาษา & ธีม (Language & Theme Toggle)
- **[TH / EN] Language Switcher**: ปุ่มสลับภาษาไทย / อังกฤษ เปลี่ยนข้อความทั้ง 6 ส่วนได้ทันทีแบบเรียลไทม์ พร้อมจำสถานะลงใน `localStorage`
- **Dark / Light Mode**: สลับโหมดสว่าง/มืด พร้อมปรับสีพื้นหลัง การ์ด และตัวหนังสืออย่างนุ่มนวล
- **Toast Notifications**: แจ้งเตือนสถานะเมื่ออัปโหลดรูป, ลบ, เพิ่มผลงาน หรือสลับโหมด

---

## 📑 3. หัวข้อสำคัญครบทั้ง 6 ส่วน (Sections)

1. 👤 **ข้อมูลส่วนตัว (Personal Details & Hero Section)**
   - ชื่อ: Thanatorn Namkon
   - กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 2 มหาวิทยาลัยศรีปทุม
   - เบอร์โทรศัพท์: `080-904-3589`, อีเมล, GPAX: `3.78`
   - ระบบคลิกเลือกรูปภาพโปรไฟล์จากเครื่องเพื่อเปลี่ยนรูปได้ทันที และบันทึกผ่าน Browser Storage

2. 🎓 **ประวัติการศึกษา (Education)**
   - ปริญญาตรี วท.บ. สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม (SPU)
   - มัธยมศึกษาตอนปลาย แผนการเรียนวิทย์-คณิต

3. 🛠️ **ทักษะความสามารถ (Skills)**
   - จัดหมวดหมู่ 4 ด้าน: **Programming Languages**, **Frontend**, **Backend & Database**, **Tools & DevOps**
   - แสดง Progress bar ระดับความเชี่ยวชาญ

4. 💼 **ประสบการณ์ทำงาน (Work Experience)**
   - Timeline แสดงประวัติงาน Freelance Junior Web Developer และ ผู้ช่วยปฏิบัติการแล็บคอมพิวเตอร์และเครือข่าย

5. 📁 **ผลงานของฉัน (My Projects - Dynamic Grid & CRUD)**
   - กรองประเภทผลงาน: `[ทั้งหมด (All)]`, `[Full-Stack]`, `[Frontend]`, `[Backend]`
   - ระบบ **CRUD**: เพิ่มผลงานใหม่ `[➕]`, แก้ไข `[✏️]`, ลบ `[🗑️]`
   - รองรับการใส่ URL หรือเลือกอัปโหลดไฟล์รูปภาพปกจากเครื่องคอมพิวเตอร์

6. 💻 **การฝึกอบรม & ใบรับรอง (Certifications - PDF Attachment CRUD)**
   - ระบบ **CRUD**: เพิ่มใบรับรองใหม่ `[➕]`, แก้ไข `[✏️]`, ลบ `[🗑️]`
   - ปุ่ม **`[📄 เปิดดู PDF]`** เปิดหน้าต่าง Modal พรีวิวเอกสาร PDF หรือเปิดแท็บใหม่
   - ปุ่ม **`[📎 แนบไฟล์ PDF]`** สำหรับแนบไฟล์เอกสารจากเครื่องคอมพิวเตอร์

---

## ☁️ 4. โครงสร้างไฟล์ Cloudflare Ready

โปรเจกต์นี้มาพร้อมโครงสร้างและไฟล์สำหรับ Deploy ขึ้น **Cloudflare Pages / Workers**:

```
├── index.html                   # ไฟล์หลัก Single-Page Portfolio (HTML5 + Tailwind CSS + Vanilla JS)
├── schema.sql                   # ฐานข้อมูล Cloudflare D1 SQLite Schema & Seed Data
├── wrangler.toml                # การตั้งค่า Cloudflare Pages, D1 Database, และ R2 Storage Bucket
├── functions/
│   └── api/
│       ├── projects.js          # Cloudflare Pages Function (REST API สำหรับ Projects)
│       ├── certificates.js      # Cloudflare Pages Function (REST API สำหรับ Certificates)
│       └── upload.js            # Cloudflare Pages Function (อัปโหลดรูปภาพ & PDF ไปยัง R2 Bucket)
└── README.md                    # คู่มือการใช้งานและคำอธิบายระบบ
```

---

## 💻 วิธีการเปิดใช้งาน (How to Run)

### 1. เปิดดูทันทีในเบราว์เซอร์ (Standalone Mode)
ดับเบิลคลิกเปิดไฟล์ `index.html` บนเบราว์เซอร์ใดก็ได้ (Chrome, Edge, Firefox, Safari) หรือเปิดผ่าน Live Server ใน VS Code ได้ทันที โดยไม่ต้องลง Dependency เพิ่มเติม

### 2. นำขึ้น Cloudflare Pages (Deploy to Cloudflare)
1. ติดตั้ง Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
2. สร้างฐานข้อมูล D1:
   ```bash
   wrangler d1 create portfolio-db
   wrangler d1 execute portfolio-db --file=./schema.sql
   ```
3. สร้าง R2 Storage Bucket สำหรับเก็บไฟล์:
   ```bash
   wrangler r2 bucket create portfolio-assets
   ```
4. Deploy ขึ้น Cloudflare Pages:
   ```bash
   wrangler pages deploy . --project-name=thanatorn-namkon-portfolio
   ```

---
© 2026 Thanatorn Namkon • ICT Student Portfolio
