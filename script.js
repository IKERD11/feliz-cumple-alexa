// Función para iniciar la celebración extra
function startCelebration() {
    const container = document.querySelector('.container');
    container.classList.add('extra-celebration');
    
    // Crear más fuegos artificiales dinámicos
    createExtraFireworks();
    
    // Crear efecto cascada después de 1 segundo
    setTimeout(() => {
        createCascadeFireworks();
    }, 1000);
    
    // Reproducir sonido de celebración (opcional)
    // playBirthdaySound();
    
    // Mostrar mensaje especial
    showSpecialMessage();
    
    // Quitar la clase después de un tiempo
    setTimeout(() => {
        container.classList.remove('extra-celebration');
    }, 8000);
}

// Crear fuegos artificiales adicionales más realistas
function createExtraFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = (Math.random() * 80 + 10) + '%'; // Entre 10% y 90%
        firework.style.animationDelay = Math.random() * 3 + 's';
        firework.style.animationDuration = (Math.random() * 2 + 5) + 's'; // Entre 5-7 segundos
        
        // Agregar brillo inicial al proyectil
        firework.style.background = `radial-gradient(circle, #ffffff, ${getRandomColor()})`;
        firework.style.boxShadow = `0 0 8px #ffffff, 0 0 16px ${getRandomColor()}`;
        
        // Crear múltiples explosiones para cada fuego artificial
        for (let j = 1; j <= 5; j++) {
            const explosion = document.createElement('div');
            explosion.className = `explosion explosion${j}`;
            explosion.style.background = `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()})`;
            explosion.style.boxShadow = `0 0 15px ${getRandomColor()}, 0 0 30px ${getRandomColor()}`;
            explosion.style.animationDelay = (4 + j * 0.15) + 's';
            explosion.style.animationDuration = (4 + Math.random() * 1) + 's';
            
            // Agregar variación en el tamaño
            const size = Math.random() * 2 + 3; // Entre 3-5px
            explosion.style.width = size + 'px';
            explosion.style.height = size + 'px';
            explosion.style.top = (-size/2) + 'px';
            explosion.style.left = (-size/2) + 'px';
            
            firework.appendChild(explosion);
        }
        
        fireworksContainer.appendChild(firework);
        
        // Eliminar el fuego artificial después de la animación
        setTimeout(() => {
            firework.remove();
        }, 10000);
    }
}

// Obtener colores más vibrantes y realistas para los fuegos artificiales
function getRandomColor() {
    const colors = [
        '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', 
        '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
        '#ee5a24', '#0abde3', '#c44569', '#6c5ce7', '#a55eea',
        '#fd79a8', '#fdcb6e', '#6c5ce7', '#74b9ff', '#00b894'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Crear fuegos artificiales tipo cascada
function createCascadeFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = (20 + i * 12) + '%';
            firework.style.animationDelay = '0s';
            firework.style.animationDuration = '5.5s';
            
            // Crear efecto de cascada con múltiples explosiones tipo palmera
            for (let j = 1; j <= 5; j++) {
                const explosion = document.createElement('div');
                explosion.className = `explosion explosion${j}`;
                explosion.style.background = `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()})`;
                explosion.style.boxShadow = `0 0 18px ${getRandomColor()}, 0 0 36px ${getRandomColor()}`;
                explosion.style.animationDelay = (4 + j * 0.2) + 's';
                explosion.style.animationDuration = '4.5s';
                
                firework.appendChild(explosion);
            }
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                firework.remove();
            }, 10000);
            
        }, i * 200); // Retraso escalonado
    }
}

// Mostrar mensaje especial
function showSpecialMessage() {
    // Crear un mensaje temporal
    const specialMessage = document.createElement('div');
    specialMessage.innerHTML = `
        <div style="text-align: center; line-height: 1.6;">
            <h3 style="margin: 0 0 15px 0; font-size: 1.8rem;">¡Feliz cumple, Alexa! 🥳</h3>
            <p style="margin: 0 0 12px 0; font-size: 1.1rem;">Solo quería recordarte lo increíble que eres: tu energía, tu humor y tu esencia única hacen que todo sea mejor ☀️.</p>
            <p style="margin: 0 0 12px 0; font-size: 1.1rem;">¡Que este año supere todos los anteriores en risas, éxitos y momentos inolvidables!</p>
            <p style="margin: 0 0 12px 0; font-size: 1.1rem;">Te deseo lo mejor hoy y siempre 🌠.</p>
            <p style="margin: 0; font-size: 1.3rem; font-weight: bold;">¡Vas por todo! 💪❤️</p>
        </div>
    `;
    specialMessage.style.cssText = `
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.95), rgba(78, 205, 196, 0.95), rgba(69, 183, 209, 0.95));
        color: white;
        padding: 30px 40px;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: normal;
        z-index: 100;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        max-width: 600px;
        width: 90%;
        animation: specialMessageAnim 0.8s ease-out;
    `;
    
    // Agregar la animación CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes specialMessageAnim {
            from {
                opacity: 0;
                transform: translateX(-50%) scale(0.7) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(specialMessage);
    
    // Eliminar el mensaje después de 8 segundos para que se pueda leer bien
    setTimeout(() => {
        specialMessage.style.animation = 'specialMessageAnim 0.8s ease-out reverse';
        setTimeout(() => {
            specialMessage.remove();
            style.remove();
        }, 800);
    }, 8000);
}

// Crear partículas adicionales de confeti
function createExtraConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = getRandomColor();
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        confettiContainer.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}

// Función para reproducir música (opcional - requiere archivo de audio)
function playBirthdaySound() {
    // Descomenta y agrega un archivo de audio si lo deseas
    /*
    const audio = new Audio('happy-birthday.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio no disponible'));
    */
}

// Efectos automáticos cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear confeti adicional periódicamente
    setInterval(createExtraConfetti, 8000);
    
    // Mensaje de bienvenida
    setTimeout(() => {
        console.log('🎉 ¡Feliz cumpleaños Alexa! Haz clic en el botón para más diversión 🎉');
    }, 1000);
});

// Efectos de teclado para más interactividad
document.addEventListener('keydown', function(event) {
    // Presionar espacio para celebrar
    if (event.code === 'Space') {
        event.preventDefault();
        startCelebration();
    }
    
    // Presionar Enter para confeti extra
    if (event.code === 'Enter') {
        event.preventDefault();
        createExtraConfetti();
    }
});

// Efectos de mouse/touch
let clickCount = 0;
document.addEventListener('click', function(event) {
    // Si no es el botón, crear efectos en el punto de clic
    if (!event.target.classList.contains('celebration-btn')) {
        createClickEffect(event.clientX, event.clientY);
        
        clickCount++;
        if (clickCount >= 5) {
            startCelebration();
            clickCount = 0;
        }
    }
});

// Crear efecto visual en el punto de clic
function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: ${getRandomColor()};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: clickExplosion 0.8s ease-out forwards;
    `;
    
    // Agregar animación de explosión
    const style = document.createElement('style');
    style.textContent = `
        @keyframes clickExplosion {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
        style.remove();
    }, 800);
}
