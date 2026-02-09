# 🎨 Artistry Hub

A modern artist platform for showcasing and managing artistic works. Built with React.js and Clerk authentication.

## ✨ Features

- 🔐 **Secure Authentication** - User sign-up/sign-in with Clerk (Email, Google, GitHub)
- 🎨 **Artist Dashboard** - Manage your artistic portfolio
- 📤 **Upload Artwork** - Share your creations with the community
- 🖼️ **Portfolio Management** - Organize and display your artworks
- 📊 **Analytics** - Track views, likes, and engagement
- 💳 **INR Pricing** - Support for Indian Rupee pricing
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy

## 🚀 Tech Stack

- **Frontend**: React.js 17.0.2
- **Routing**: React Router DOM 5.2.0
- **Authentication**: Clerk (@clerk/clerk-react)
- **Build Tool**: Craco
- **Styling**: Custom CSS with modern gradients

## 📁 Project Structure

```
Artistry-Hub/
├── React Js/                 # Main React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── navbar.js
│   │   │   ├── footer.js
│   │   │   ├── hero.js
│   │   │   ├── pricing.js
│   │   │   ├── testimonial.js
│   │   │   └── ...
│   │   ├── views/           # Page components
│   │   │   ├── home.js
│   │   │   ├── dashboard.js  # Protected artist dashboard
│   │   │   ├── upload.js     # Upload artwork page
│   │   │   ├── portfolio.js  # Portfolio management
│   │   │   ├── privacy.js
│   │   │   ├── terms.js
│   │   │   └── cookies.js
│   │   ├── index.js         # App entry point
│   │   └── style.css        # Global styles
│   ├── public/
│   │   └── index.html
│   ├── .env.example         # Environment variables template
│   ├── .gitignore
│   └── package.json
├── Images/                   # Image assets
└── README.md

```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Clerk account (free tier available)

### 1. Clone the repository
```bash
git clone https://github.com/Abhishhek-Verma/Artistry-Hub.git
cd Artistry-Hub/React\ Js
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Get your Clerk Publishable Key:
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application or select existing one
   - Copy the **Publishable Key** from API Keys section

3. Add your key to `.env`:
   ```
   REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

### 4. Run the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Deploying to Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `React Js`

2. **Environment Variables:**
   Add in Netlify dashboard → Site settings → Environment variables:
   ```
   REACT_APP_CLERK_PUBLISHABLE_KEY=your_publishable_key
   ```

3. **Deploy:**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push to main branch

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Add environment variable in Vercel dashboard.

## 👤 Author

**Abhishek Verma**
- Email: abhishekatkiet@gmail.com
- GitHub: [@Abhishhek-Verma](https://github.com/Abhishhek-Verma)
- LinkedIn: [Abhishhek-Verma](https://www.linkedin.com/in/Abhishhek-Verma)
- Location: Ghaziabad, Delhi NCR, India

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔒 Security

- Never commit `.env` files to version control
- API keys are stored securely in environment variables
- All sensitive data is excluded via `.gitignore`

## 📞 Support

For support, email abhishekatkiet@gmail.com or open an issue in the repository.

---

⭐ Star this repo if you find it helpful!

