$( document ).ready(function() {
    function parallax(e){
      this.querySelectorAll('.stages-of-work__parallax-item').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translate(${e.clientX*speed/1000}px, ${e.clientX*speed/900}px)`;
      })
    }

    document.addEventListener('mousemove', parallax);
});