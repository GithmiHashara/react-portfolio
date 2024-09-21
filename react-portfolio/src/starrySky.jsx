import React, { useEffect, useRef } from 'react';

const StarrySky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', resizeCanvas);

    // Star object
    function Star(x, y, radius, dx) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
      };

      this.update = function () {
        this.x += this.dx;
        if (this.x > canvas.width) this.x = 0;
        this.draw();
      };
    }

    let starsArray = [];
    const numberOfStars = 200;

    function initStars() {
      starsArray = [];
      for (let i = 0; i < numberOfStars; i++) {
        const radius = Math.random() * 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = Math.random() * 0.5 + 0.1;
        starsArray.push(new Star(x, y, radius, dx));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsArray.forEach((star) => star.update());
    }

    initStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default StarrySky;
