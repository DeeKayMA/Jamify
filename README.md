# Jamify 🎧  
[Live Site](http://jamify-dk.netlify.app/)

Jamify is a minimalist web app built with React that lets you search for songs using the Spotify API and create a custom playlist directly in your Spotify account. Auth is handled via Spotify’s OAuth flow.

![Jamify Screenshot](http://jamify-dk.netlify.app/jamify-screenshot.png)

---

## ⚙️ Features

- 🔍 Search for any song using the **Spotify API**
- ➕ Add/remove tracks to your custom playlist
- 💾 Save playlist to your actual **Spotify account**
- 🔐 OAuth-based login with Spotify
- 🎧 Clean, responsive UI with a focus on simplicity

---

## 🧪 Tech Stack

- **React**
- **Spotify Web API**
- **OAuth 2.0** (Authorization Code Flow with Implicit Grant)
- **CSS** (custom, minimal styling)
- **Netlify** for deployment

---

## 🚀 Getting Started

### 1. Clone the Repo

git clone https://github.com/DeeKayMA/Jamify.git
cd Jamify

### 2. Install Dependencies

npm install
#### or
yarn install

### 3. Spotify API Setup

Go to Spotify Developer Dashboard

Create a new app

Add http://localhost:3000 and your deployed site (http://jamify-dk.netlify.app) as Redirect URIs

### 4. Create .env file in the root 

REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000
REACT_APP_SPOTIFY_SCOPES=playlist-modify-public

### 5. Run the app

npm start
#### or
yarn start


### ✅ How It Works
- Users authenticate via Spotify.
- They search for songs and build a custom playlist.
- The app uses Spotify’s Web API to create and save that playlist to their account.

### 📄 License
MIT



