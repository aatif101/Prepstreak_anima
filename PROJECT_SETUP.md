# PrepStreak - Project Setup Documentation

## Project Overview
PrepStreak is a DSA (Data Structures & Algorithms) learning platform with gamified learning features, built with React, Vite, Tailwind CSS, and React Router.

## Project Structure

```
PREPSTREAK_ANIMA/
├── index.html                 # Main HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Original README
└── src/
    ├── main.jsx               # React application entry point
    ├── App.jsx                # Main app with routing configuration
    ├── index.css              # Global styles with Tailwind imports
    └── screens/
        └── Frames/
            ├── Frame1/        # Landing page
            │   ├── Frame.jsx
            │   └── index.js
            ├── Frame2/        # Onboarding page
            │   ├── Frame.jsx
            │   └── index.js
            └── Frame3/        # Dashboard
                ├── Frame.jsx
                ├── index.js
                └── sections/
                    ├── Container/
                    │   ├── container.jsx
                    │   └── index.js
                    └── Sidebar/
                        ├── Sidebar.jsx
                        └── index.js
```

## Pages and Routes

### 1. Landing Page (Frame1)
- **Route:** `/`
- **File:** [src/screens/Frames/Frame1/Frame.jsx](src/screens/Frames/Frame1/Frame.jsx)
- **Purpose:** Main landing page showcasing PrepStreak features
- **Features:**
  - PrepStreak branding and tagline
  - Three feature cards (Gamified Learning, 5-min Daily Quizzes, AI-Powered Hints)
  - LOGIN button → navigates to `/dashboard`
  - SIGN UP button → navigates to `/get-started`

### 2. Onboarding Page (Frame2)
- **Route:** `/get-started`
- **File:** [src/screens/Frames/Frame2/Frame.jsx](src/screens/Frames/Frame2/Frame.jsx)
- **Purpose:** User onboarding and learning path customization
- **Features:**
  - Skill level selection (Beginner/Intermediate/Advanced)
  - Daily time commitment (5/10/15 minutes)
  - Topic search and selection
  - LET'S GO! button → navigates to `/dashboard`
  - Skip for now link → navigates to `/dashboard`

### 3. Dashboard (Frame3)
- **Route:** `/dashboard`
- **File:** [src/screens/Frames/Frame3/Frame.jsx](src/screens/Frames/Frame3/Frame.jsx)
- **Purpose:** Main user dashboard with stats and progress tracking
- **Features:**
  - **Sidebar Navigation:**
    - PrepStreak logo and branding
    - User profile card (Alex Johnson, Level 12)
    - Navigation menu (Dashboard, Test Mode, Quizzes, Badges, Profile)
    - Logout button → navigates back to `/` (landing page)
  - **Performance Stats Section:**
    - Accuracy: 85%
    - Speed: 72%
    - Average Time: 45s
    - Topics Mastered: 12/20
    - Level progression (Level 12, 2,450/5,000 XP)
  - **Monthly Streak Calendar:**
    - November 2024 calendar view
    - Visual tracking of completed days (red dots)
    - Current day highlighted (24th)
    - Future days marked (green dots)
    - Legend showing completed, missed, and future days
  - **Quick Action Cards:**
    - Quiz card → Daily quiz to maintain streak
    - Test Mode card → Timed challenge tests

## Technologies Used

- **React 18.3.1** - UI library
- **React Router DOM 6.26.2** - Client-side routing
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.13** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Development Server

The application is currently running at:
- **Local:** http://localhost:3000/

## Navigation Flow

1. **User lands on homepage** (`/`)
   - Clicks "SIGN UP" → Onboarding page (`/get-started`)
   - Clicks "LOGIN" → Dashboard (`/dashboard`)

2. **User on onboarding page** (`/get-started`)
   - Clicks "LET'S GO!" → Dashboard (`/dashboard`)
   - Clicks "Skip for now" → Dashboard (`/dashboard`)

3. **Dashboard** (`/dashboard`)
   - Placeholder page for future implementation

## Styling

- All original Tailwind classes have been preserved
- Custom color palette defined in `tailwind.config.js`:
  - Primary: `#ef473a` (red)
  - Secondary: `#1e5f4d` (green)
  - Background: `#f5ebe0` (beige)
  - Dark: `#2b2622` (dark brown)
  - Gray: `#6b6661` (gray)

- Custom fonts:
  - Space Grotesk (headings)
  - Inter (body text)

## Future Enhancements

- Implement Dashboard functionality
- Add authentication system
- Create additional learning modules
- Add state management (if needed)
- Implement API integration
- Add more interactive features

## Notes

- The visual appearance of all frames has been preserved exactly as designed
- Navigation has been added without modifying the styling
- All animations and transitions remain intact
- The project uses modern React practices (functional components, hooks)
