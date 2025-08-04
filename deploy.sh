#!/bin/bash

# Fangteng FU's Personal Website Deployment Script

echo "🚀 Building Fangteng FU's Personal Website..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "1. Push your code to GitHub"
    echo "2. Go to Settings > Pages"
    echo "3. Select 'Deploy from a branch'"
    echo "4. Choose 'gh-pages' branch or 'main' branch with '/docs' folder"
    echo ""
    echo "🌐 To deploy to Netlify:"
    echo "1. Drag and drop the 'dist' folder to netlify.com"
    echo "2. Or connect your GitHub repository"
    echo ""
    echo "🌐 To deploy to Vercel:"
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Run: vercel --prod"
    echo ""
    echo "📧 Contact: ffu000@connect.hkust-gz.edu.cn"
else
    echo "❌ Build failed!"
    exit 1
fi 