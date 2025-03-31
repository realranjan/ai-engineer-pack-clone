# AI Engineer Pack Clone

A clone of the AI Engineer Pack website, showcasing essential tools and resources for AI developers.

## 🚀 Features

- Responsive design that works on desktop and mobile
- Dynamic tool cards with offer details
- Interactive tabs for filtering tools
- Smooth animations and transitions
- Fallback handling for missing images

## 🛠️ Technologies Used

- HTML5
- CSS3 with Tailwind CSS
- JavaScript (Vanilla)
- SVG for graphics

## 🔧 Installation

1. Clone the repository:
```
git clone https://github.com/realranjan/ai-engineer-pack-clone.git
```

2. Open `index.html` in your browser or use a local development server:
```
# Using Python
python -m http.server

# Or with Node.js
npx serve
```

## 📁 Project Structure

```
ai-engineer-pack-clone/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and other assets
│   ├── logo_black_vol_3.svg
│   ├── hero.svg
│   ├── favicon.svg
│   ├── placeholder.svg
│   └── [tool logos]    # Various tool logos as SVG
└── README.md           # This file
```

## 🔄 Data Updates

All tool data is stored in the `toolsData` array in `script.js`. To add or modify tools, simply update this array.

## 🎨 Customization

The site uses a combination of Tailwind CSS and custom CSS:

- Base styles and variables are in `styles.css`
- Component styles are added with Tailwind classes
- Custom animations are defined in `styles.css`

## 💻 Browser Compatibility

The site is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🙏 Credits

- Data extraction performed using [Firecrawl](https://www.firecrawl.dev/)
- Logo placeholder designs created specifically for this project

## ⚠️ Disclaimer

This is an educational clone created for learning purposes only. It is not affiliated with the original AI Engineer Pack website.

## 📄 License

MIT License