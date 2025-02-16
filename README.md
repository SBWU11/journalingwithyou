# Date Memory Book 📖❤️

A beautiful, static web application to display your dating memories in a notebook-style interface. Perfect for hosting on GitHub Pages!

## Features
- Notebook-style interface with dates listed in the sidebar
- View date memories with descriptions
- Display images and videos for each date
- Responsive design for mobile and desktop

## Setup for GitHub Pages
1. Fork this repository
2. Add your date memories in `data.js`
3. Add your images to the `images/` directory
4. Add your videos to the `videos/` directory
5. Enable GitHub Pages in your repository settings
6. Your site will be available at `https://[your-username].github.io/[repo-name]`

## Customizing Content
Edit `data.js` to add your own date memories. Each memory should follow this format:
```javascript
{
    id: 1,
    date: '2025-02-14',
    title: 'Valentine\'s Day Dinner',
    description: 'Your description here',
    images: ['images/your-image-1.jpg', 'images/your-image-2.jpg'],
    videos: ['videos/your-video.mp4']
}
```

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages for hosting
