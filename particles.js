function loadParticles(amount) {
    let particleContainer = document.querySelector('.particles');

    for (let i = 0; i < amount; i++) {
        let particle = document.createElement('div');
        
        particle.classList.add('particle');

        particle.style.width = `${Math.random() * 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
        
        particleContainer.appendChild(particle);
    }
}

loadParticles(100);

