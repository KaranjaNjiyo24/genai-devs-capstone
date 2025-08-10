# Cosmic Web - Interactive Particle System

An elegant, interactive particle visualization built with P5.js that responds to mouse movement with attraction forces and dynamic connections.

## 🌟 Inspiration

While browsing through developer portfolios, I stumbled upon a breathtaking website where mouse movements caused particles to gracefully repel away from the cursor, creating mesmerizing ripple effects across the screen. The fluid, organic movement was so captivating that I found myself moving my mouse around just to watch the particles dance.

This beautiful interaction sparked my curiosity - how was such elegance achieved with seemingly simple code? My research led me down a rabbit hole of creative coding, where I discovered **P5.js** - a JavaScript library specifically designed for artists, designers, and anyone wanting to create visual art through code.

What struck me most was how P5.js democratizes creative coding. Complex visual effects that would typically require advanced graphics programming can be achieved with just a few lines of intuitive JavaScript. It's the perfect bridge between programming logic and artistic expression.

## 🎨 What This Project Does

This Cosmic Web visualization creates:
- **80 floating particles** that move freely across the screen
- **Dynamic connections** - particles link with glowing lines when nearby
- **Mouse attraction** - particles are gently pulled toward your cursor
- **Interactive spawning** - click anywhere to add new particles
- **Trailing effects** - subtle fade creates a dreamy, cosmic atmosphere
- **Responsive design** - adapts to any screen size

## 🚀 How to Run

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (Python, Node.js, or VS Code Live Server)

### Using Python (Recommended for WSL/Linux)
```bash
# Navigate to the project directory
cd p5js-cosmic-web

# Start a local server
python3 -m http.server 8000

# Open your browser and visit:
# http://localhost:8000
```


## 🎮 How to Interact

- **Move your mouse** around the screen to attract particles
- **Click anywhere** to spawn a new particle at that location
- **Watch the connections** form and break as particles move
- **Enjoy the trails** - particles leave subtle traces as they move

## 🛠️ Project Structure

```
p5js-cosmic-web/
├── index.html          # Main HTML file with P5.js CDN
├── style.css           # Styling for dark cosmic theme
├── sketch.js           # P5.js animation logic
├── README.md           # This file
└── assets/             # For future images/sounds
```

## 🔧 Customization Ideas

Want to make it your own? Try tweaking these values in `sketch.js`:

```javascript
// Change particle count
let numParticles = 80;  // Try 50 or 120

// Adjust connection distance
let maxDistance = 120;  // Try 80 or 200

// Modify attraction strength
let mouseForce = 0.02;  // Try 0.01 or 0.05

// Change colors
fill(255, 150, 200, 150);  // RGB + Alpha values
stroke(100, 150, 255, 80); // Connection line colors
```

## 🎯 Learning Outcomes

Through this project, you'll understand:
- **P5.js fundamentals** - setup() and draw() functions
- **Particle systems** - managing arrays of moving objects
- **Mouse interaction** - responding to user input
- **Vector mathematics** - distance, attraction forces
- **Animation techniques** - smooth movement and trails
- **Creative coding principles** - turning math into art

## 📚 Resources

- [P5.js Official Documentation](https://p5js.org/reference/)
- [P5.js Examples Gallery](https://p5js.org/examples/)
- [The Coding Train](https://thecodingtrain.com/) - Excellent P5.js tutorials
- [OpenProcessing](https://openprocessing.org/) - Community sketches for inspiration

---

*From a moment of visual inspiration to a Starfleet-style artwork - this is the magic of creative coding with P5.js.*