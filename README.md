# PROFILE_KANJANAROJ

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deployed with GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

## ภาพรวมโปรเจกต์ (Project Overview)

**PROFILE_KANJANAROJ** คือเว็บไซต์ส่วนตัว (Personal Portfolio Website) ที่สร้างขึ้นเพื่อจัดแสดงทักษะ, โครงการ, ใบรับรอง, และข้อมูลประวัติโดยย่อของ **กาญจนโรจน์ ขำคม** พัฒนาด้วยเทคโนโลยีที่ทันสมัยอย่าง React, TypeScript และ Vite เพื่อมอบประสบการณ์การใช้งานที่รวดเร็วและตอบสนองได้ดี

เว็บไซต์นี้ถูกออกแบบมาเพื่อให้ผู้ที่สนใจสามารถเข้าถึงข้อมูลเกี่ยวกับโปรไฟล์และผลงานได้อย่างง่ายดดาย ไม่ว่าจะเป็นในส่วนของ:
* **เกี่ยวกับฉัน (About Me):** ข้อมูลส่วนตัว, สรุปคุณสมบัติ, และลิงก์สำหรับดาวน์โหลด CV/Resume
* **โครงการ (Projects/My Work):** จัดแสดงผลงานและโครงการสำคัญ
* **ใบรับรอง (Certificates):** แสดงใบรับรองที่ได้รับ
* **ติดต่อ (Contact):** ช่องทางสำหรับติดต่อ

## เทคโนโลยีที่ใช้ (Technologies Used)

* **[React](https://react.dev/)**: ไลบรารี JavaScript สำหรับการสร้างส่วนติดต่อผู้ใช้ (UI) ที่มีประสิทธิภาพ
* **[TypeScript](https://www.typescriptlang.org/)**: Superset ของ JavaScript ที่เพิ่มความสามารถด้าน Type เพื่อช่วยในการพัฒนาโค้ดที่แข็งแกร่งและบำรุงรักษาง่ายขึ้น
* **[Vite](https://vitejs.dev/)**: Build Tool ที่รวดเร็วสำหรับการพัฒนาเว็บสมัยใหม่ มอบประสบการณ์การพัฒนาที่เหนือกว่าด้วย Hot Module Replacement (HMR) ที่รวดเร็ว
* **[React Router DOM](https://reactrouter.com/en/main)**: สำหรับการจัดการ Routing ภายใน Single Page Application
* **[i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/)**: สำหรับการจัดการภาษาในเว็บไซต์ (Internationalization)

## คุณสมบัติหลัก (Key Features)

* **Responsive Design:** แสดงผลได้ดีบนทุกอุปกรณ์ (Desktop, Tablet, Mobile)
* **Interactive UI:** ประสบการณ์ผู้ใช้ที่ราบรื่นและน่าสนใจ
* **Multi-language Support:** รองรับหลายภาษา (ถ้ามีการนำ i18next มาใช้จริง)
* **Project Showcase:** จัดแสดงผลงานด้วยรูปภาพและรายละเอียด
* **Direct PDF View/Download:** สามารถดูและดาวน์โหลด CV/Resume ได้โดยตรงจากเว็บไซต์

## การติดตั้งและใช้งาน (Installation and Usage)

ทำตามขั้นตอนด้านล่างเพื่อตั้งค่าและรันโปรเจกต์นี้บนเครื่องของคุณสำหรับการพัฒนาหรือทดสอบ:

### 1. Clone Repository

    git clone https://github.com/puoq007/Portfolio.git
    cd PROFILE_KANJANAROJ

### 2. ติดตั้ง Dependencies
    npm install
หรือใช้ yarn install

### 3. รัน Development Server

โปรเจกต์จะรันบน http://localhost:5173 (หรือพอร์ตอื่น ๆ ที่ว่าง) โดยมี Hot Module Replacement (HMR) เพื่อการพัฒนาที่รวดเร็ว:

    npm run dev
หรือใช้ yarn dev

### 4. สร้าง Production Build

คอมไพล์โค้ดสำหรับ Production ไปยังโฟลเดอร์ dist/:

    npm run build
หรือใช้ yarn build

### 5. Deploy ไปยัง GitHub Pages

โปรเจกต์นี้มีการตั้งค่าสำหรับ Deploy ไปยัง GitHub Pages โดยใช้ gh-pages package:

    npm run deploy
หรือใช้ yarn deploy


### โครงสร้างไฟล์ (Project Structure)
    PROFILE_KANJANAROJ/
    ├── public/                 # ไฟล์ static assets (รูปภาพ, PDF) ที่เข้าถึงได้โดยตรง
    │   ├── documents/          # ไฟล์ PDF เช่น CV, Resume
    │   └── images/             # รูปโปรไฟล์, รูปภาพสำหรับ Project/Certificates
    ├── src/
    │   ├── assets/             # รูปภาพ (ถ้า import ผ่าน JS/TS), fonts, etc.
    │   │   ├── Documents/      # เอกสารต่างๆ ที่ import โดยตรง (ถ้าเลือกใช้วิธีนี้)
    │   │   └── img/            # รูปภาพที่ import โดยตรง (ถ้าเลือกใช้วิธีนี้)
    │   ├── components/         # คอมโพเนนต์หลักของแต่ละหน้า (AboutMe, Certificates, etc.)
    │   │   ├── css/            # ไฟล์ CSS เฉพาะของคอมโพเนนต์
    │   │   └── page/           # คอมโพเนนต์ของแต่ละหน้าหลัก (ถ้าแยก)
    │   ├── i18n/               # ไฟล์สำหรับ Internationalization (ภาษา)
    │   ├── Page_css/           # ไฟล์ CSS สำหรับหน้าเพจหลัก
    │   ├── App.tsx             # คอมโพเนนต์หลักของแอปพลิเคชัน
    │   ├── main.tsx            # จุดเริ่มต้นของแอปพลิเคชัน
    │   └── vite-env.d.ts
    ├── .gitignore              # ไฟล์ที่ Git จะไม่ติดตาม
    ├── index.html              # ไฟล์ HTML หลัก
    ├── package.json            # รายละเอียดโปรเจกต์และ dependencies
    ├── tsconfig.json           # การตั้งค่า TypeScript
    ├── tsconfig.node.json
    ├── vite.config.ts          # การตั้งค่า Vite
    └── README.md               # เอกสารโปรเจกต์# Portfolio# Portfolio
