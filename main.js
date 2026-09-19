function rolarPara(elementoId) {
  const elemento = document.querySelector(elementoId);
  if (elemento) {
    elemento.scrollIntoView({ 
      behavior: 'smooth' // Rola a tela de forma suave
    });
  }
}