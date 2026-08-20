# CLIXER® Sanitary Catalogue — React & Vite Website

A complete, responsive, high-performance React website faithfully converted from the 6-page official product catalogue for **CLIXER® / SACO Trading Company**.

---

## 🌟 Features

- **100% Faithful Content**: All product models, dimensions, specifications, finishes, and exact catalogue price matrices reproduced directly from the PDF.
- **Catalogue Product Lineup**:
  - **Channel Drainers**: CLX 8002, CLX 8005, CLX 8004 (Available in 1 FT to 4 FT lengths across Satin, Gold, Rose Gold, Black finishes).
  - **Designer Drainers**: CLX 801, CLX 802, CLX 807, CLX 804 Tile Insert (150x150 mm / 6x6 inch premium grates).
  - **Flat Cut Floor Drainers**: CLX 101, CLX 102, CLX 103, CLX 110 (150x150 mm & 127x127 mm).
  - **Anti-Insect Cockroach Trap Bowl**: Heavy-duty stainless steel automatic gravity closure trap bowl.
  - **Tile Leveling Jack System**: Complete alignment kit including Leveling Pliers, Wedges, Clips, and Cross Spacers (2mm, 3mm, 4mm).
- **Interactive Specifications Modal**: View full size-to-finish price matrices, material grade details, and product highlights.
- **Search & Category Filtering**: Live instant product filter by model number or keyword.
- **Responsive Layout**: Customized layouts for Desktop (1440px+), Tablet (768px - 1024px), and Mobile (320px - 767px).
- **Contact & Inquiries**: Direct WhatsApp inquiry pre-filled with product name, phone call trigger, and verified SACO Trading Company address details.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

Clone or extract the repository and run:

```bash
npm install
```

### Development Server

Start the Vite development server:

```bash
npm run dev
```

The app will open automatically in your browser at `http://localhost:3000`.

---

## 📦 Production Build & Preview

To generate the optimized static bundle:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```

The output will be saved in the `dist/` directory.

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com).
3. Click **New Project** and import your repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### 2. Deploying to Netlify

1. Log in to [Netlify](https://netlify.com).
2. Drag and drop the `dist/` folder into Netlify Drop, or connect your repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

### 3. Deploying to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
2. Add the following to `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/clixer-catalogue/', // Replace with your repository name
     plugins: [react()],
   });
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📄 Catalogue Mapping

| Page # | Catalogue Content | Website Component / Section |
| :--- | :--- | :--- |
| **Page 1** | Cover Artwork, CLIXER® Logo, AISI 304 Badge, SACO Logo | `Hero.jsx`, `Navbar.jsx` |
| **Page 2** | Channel Drainers (CLX 8002, 8005, 8004) & Price Matrix | `CategorySection.jsx` & `ProductModal.jsx` |
| **Page 3** | Designer Drainers (CLX 801, 802, 807, 804 Tile Insert) | `CategorySection.jsx` & `ProductModal.jsx` |
| **Page 4** | Floor Drainers (CLX 101, 102, 103, 110) & Cockroach Bowl | `CategorySection.jsx` & `ProductModal.jsx` |
| **Page 5** | Tile Leveling Jack, Wedges, Clips, Spacers | `CategorySection.jsx` |
| **Page 6** | Back Cover, SACO Address, Phone, Email | `ContactSection.jsx` & `Footer.jsx` |

---

## 📞 Company Contact Details

- **Marketed By**: SACO TRADING COMPANY
- **Brand**: CLIXER®
- **Address**: VIII/123, Thalappara, Moonniyur, Malappuram, Kerala, Pin: 676311
- **Customer Care**: +91 9946852916
- **Email**: sacoclixer@gmail.com
