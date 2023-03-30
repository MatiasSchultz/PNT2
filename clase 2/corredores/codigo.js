function correr() {
    return new Promise((resolve) => {
      const tiempo = Math.floor(Math.random() * 8000) + 3000;
      setTimeout(() => {
        resolve(tiempo);
      }, tiempo);
    });
  }
  
  Promise.all([correr(), correr(), correr()]).then((resultados) => {
    const ganador = resultados.indexOf(Math.min(...resultados)) + 1;
    console.log(`El ganador es el corredor ${ganador}!`);
    alert(`El ganador es el corredor ${ganador}!`);
  });
  