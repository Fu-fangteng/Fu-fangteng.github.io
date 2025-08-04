# Fangteng FU's Personal Website

A modern React-based personal website showcasing my projects, research, and professional information.

## Features

- **Modern React Architecture**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation with React Router
- **Professional Layout**: Clean and modern UI design
- **Project Showcase**: Dedicated sections for projects and research papers
- **Contact Information**: Easy access to professional contact details

## Pages

- **Home**: Personal introduction and background
- **About**: Detailed biography and work experience
- **Projects**: Showcase of technical projects and research work
- **Papers**: Academic papers and research publications
- **Contact**: Professional contact information

## Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features
- **Development**: ESLint, TypeScript compiler

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Header.css
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page
│   ├── Papers.tsx      # Papers page
│   ├── Contact.tsx     # Contact page
│   └── *.css           # Page-specific styles
├── assets/             # Static assets
│   └── imgs/           # Images and icons
├── App.tsx             # Main app component
├── App.css             # Global styles
└── main.tsx            # Application entry point
```

## Customization

### Adding New Projects

1. Add project images to `src/assets/imgs/projects/`
2. Update the `projects` array in `src/pages/Projects.tsx`
3. Import the new image and add project details

### Adding New Papers

1. Add paper images to `src/assets/imgs/papers/read/`
2. Update the `readPapers` array in `src/pages/Papers.tsx`
3. Include paper title, link, and tags

### Styling

The website uses a consistent color scheme:
- Primary: `#A594F9` (Purple)
- Secondary: `#E5D9F2` (Light Purple)
- Background: `#F5EFFF` (Very Light Purple)
- Text: `#333` (Dark Gray)

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- **GitHub Pages**: Free hosting for personal projects
- **Netlify**: Easy deployment with Git integration
- **Vercel**: Optimized for React applications
- **Firebase Hosting**: Google's hosting solution

## Contributing

This is a personal website, but suggestions and improvements are welcome!

## License

This project is for personal use. All rights reserved.

## Contact

- **Email**: ffu000@connect.hkust-gz.edu.cn
- **Location**: HKUSTGZ, Guangdong, China
- **Phone**: +86 15820433559
