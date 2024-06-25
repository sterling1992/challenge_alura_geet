// uploadLottie.js
export const uploadLottie = (lottieFilePath) => {
    const mainContainer = document.querySelector("[data-lottie]");
  
    if (mainContainer) {
      // Inserta dinámicamente el contenedor de la animación Lottie
      mainContainer.innerHTML += '<div class="lottie-container" style="width: 300px; height: 300px;"></div>';
  
      const lottieContainer = mainContainer.querySelector(".lottie-container");
  
      // Cargar la animación Lottie
      fetch(lottieFilePath)
        .then(response => response.json())
        .then(animationData => {
          lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          });
        })
        .catch(error => console.error('Error loading Lottie animation:', error));
    }
  };
  
  // Llamar a la función para cargar la animación
  uploadLottie("../img/lottiesFiles/Animation - 1717778363568.json");
  