# Glowing Yellow Triangle - Ready to Paste Code
## Inspired by talaganarajesh.in

### CSS Keyframes (Add to your CSS file)

```css
/* Glowing Yellow Triangle - Inspired by talaganarajesh.in */
@keyframes triangleGlowPulse {
  0%, 100% {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6)) 
            drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))
            drop-shadow(0 0 30px rgba(255, 215, 0, 0.2));
    opacity: 0.85;
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9)) 
            drop-shadow(0 0 40px rgba(255, 215, 0, 0.7))
            drop-shadow(0 0 60px rgba(255, 215, 0, 0.5))
            drop-shadow(0 0 80px rgba(255, 215, 0, 0.3));
    opacity: 1;
  }
}

@keyframes triangleBreath {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.05);
  }
}

@keyframes triangleBlurGlow {
  0%, 100% {
    filter: blur(8px);
    opacity: 0.4;
  }
  50% {
    filter: blur(12px);
    opacity: 0.7;
  }
}

/* Container */
.glowing-triangle-container {
  position: relative;
  width: 600px;
  height: 520px;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main triangle outline using border trick */
.glowing-triangle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  /* Outer triangle - yellow border */
  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 400px solid #FFD700;
  /* Combined animations: glow pulse + breathing */
  animation: triangleGlowPulse 3s ease-in-out infinite, 
             triangleBreath 3s ease-in-out infinite;
  z-index: 1;
}

/* Inner triangle to create outline effect (hollow center) */
.glowing-triangle::before {
  content: '';
  position: absolute;
  top: 4px;
  left: -296px;
  width: 0;
  height: 0;
  border-left: 296px solid transparent;
  border-right: 296px solid transparent;
  border-bottom: 392px solid transparent;
  border-bottom-color: #000000;
  z-index: 2;
}

/* Outer blur glow layer for neon effect */
.glowing-triangle::after {
  content: '';
  position: absolute;
  top: 0;
  left: -300px;
  width: 0;
  height: 0;
  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 400px solid #FFD700;
  animation: triangleBlurGlow 3s ease-in-out infinite;
  z-index: -1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glowing-triangle-container {
    width: 100%;
    height: 400px;
  }
  
  .glowing-triangle {
    border-left-width: 150px;
    border-right-width: 150px;
    border-bottom-width: 200px;
  }
  
  .glowing-triangle::before {
    left: -146px;
    border-left-width: 146px;
    border-right-width: 146px;
    border-bottom-width: 192px;
  }
  
  .glowing-triangle::after {
    left: -150px;
    border-left-width: 150px;
    border-right-width: 150px;
    border-bottom-width: 200px;
  }
}

@media (max-width: 640px) {
  .glowing-triangle-container {
    height: 300px;
  }
  
  .glowing-triangle {
    border-left-width: 120px;
    border-right-width: 120px;
    border-bottom-width: 160px;
  }
  
  .glowing-triangle::before {
    left: -116px;
    border-left-width: 116px;
    border-right-width: 116px;
    border-bottom-width: 152px;
  }
  
  .glowing-triangle::after {
    left: -120px;
    border-left-width: 120px;
    border-right-width: 120px;
    border-bottom-width: 160px;
  }
}
```

### HTML/JSX Structure

```jsx
<div className="glowing-triangle-container">
  <div className="glowing-triangle"></div>
  
  {/* Your content inside the triangle */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    {/* Your text/content here */}
  </div>
</div>
```

### Tailwind CSS Classes (Alternative)

If you prefer using Tailwind utility classes, you can use:

```jsx
<div className="relative w-[600px] h-[520px] max-w-[90vw] mx-auto flex items-center justify-center">
  {/* Triangle */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[300px] border-r-[300px] border-b-[400px] 
                  border-l-transparent border-r-transparent border-b-[#FFD700]
                  animate-[triangleGlowPulse_3s_ease-in-out_infinite, triangleBreath_3s_ease-in-out_infinite] z-[1]">
    {/* Inner triangle via ::before pseudo-element - add via CSS */}
  </div>
  
  {/* Your content */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    {/* Content */}
  </div>
</div>
```

### Features

✅ **CSS Border Triangle** - Pure CSS using border trick  
✅ **Blur Glow** - Multiple blur layers for neon effect  
✅ **Drop Shadow** - Layered drop-shadows for depth  
✅ **Breathing Pulse** - Smooth scale animation (1.0 → 1.05)  
✅ **Glow Pulse** - Brightness and shadow intensity animation  
✅ **Responsive** - Adapts to mobile and tablet screens  
✅ **3s Animation** - Smooth ease-in-out infinite loop  

### Color Customization

To change the triangle color, modify:
- `border-bottom: 400px solid #FFD700;` (main triangle)
- `rgba(255, 215, 0, ...)` in drop-shadow filters

### Animation Speed

To adjust animation speed, change `3s` to your preferred duration:
- Faster: `2s` or `2.5s`
- Slower: `4s` or `5s`

