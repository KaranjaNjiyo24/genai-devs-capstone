// Cosmic Web - Interactive Particle System
let particles = [];
let numParticles = 80;
let maxDistance = 120;

function setup() {
    // Create canvas that fills the window
    createCanvas(windowWidth, windowHeight);
    
    // Initialize particles with random positions and velocities
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-1, 1),
            vy: random(-1, 1),
            size: random(2, 6)
        });
    }
}

function draw() {
    // Create a fading trail effect
    background(10, 10, 20, 25);
    
    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        // Attract particles to mouse
        let mouseForce = 0.02;
        let dx = mouseX - p.x;
        let dy = mouseY - p.y;
        let distance = sqrt(dx*dx + dy*dy);
        
        if (distance < 200) {
            p.vx += (dx / distance) * mouseForce;
            p.vy += (dy / distance) * mouseForce;
        }
        
        // Add some damping
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Draw particle
        fill(255, 150, 200, 150);
        noStroke();
        ellipse(p.x, p.y, p.size);
    }
    
    // Draw connections between nearby particles
    stroke(100, 150, 255, 80);
    strokeWeight(1);
    
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let p1 = particles[i];
            let p2 = particles[j];
            
            let distance = dist(p1.x, p1.y, p2.x, p2.y);
            
            if (distance < maxDistance) {
                // Make line more transparent as distance increases
                let alpha = map(distance, 0, maxDistance, 100, 0);
                stroke(100, 150, 255, alpha);
                line(p1.x, p1.y, p2.x, p2.y);
            }
        }
    }
}

// Resize canvas when window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Add particles on mouse click
function mousePressed() {
    particles.push({
        x: mouseX,
        y: mouseY,
        vx: random(-2, 2),
        vy: random(-2, 2),
        size: random(3, 8)
    });
}