const wordsContainer = document.querySelector(".floating-words");

// Lista de cumplidos
const palabras = [
  "Eres única", "Belleza pura", "Eres magia", "Dulce mirada", "Encanto real",
  "Eres luz", "Sonrisa mágica", "Eres poesía", "Alma brillante", "Magia suave",
  "Eres un suspiro", "Flor hermosa", "Eres ternura", "Brillo eterno", "Voz de ángel",
  "Ternura viva", "Eres paz", "Mirada dulce", "Arte en ti", "Eres todo",
  "Dulzura infinita", "Tu risa enamora", "Cielo en tus ojos", "Eres mi calma", "Rayo de luz",
  "Eres mi sol", "Suave ternura", "Amor bonito", "Eres delicadeza", "Toque divino",
  "Belleza viva", "Eres especial", "Tu luz brilla", "Ángel tierno", "Eres mi alegría",
  "Corazón noble", "Rosa encantadora", "Dulce caricia", "Eres un sueño", "Tienes magia",
  "Mirada brillante", "Amor sereno", "Eres mi sonrisa", "Estrella pura", "Detalle perfecto",
  "Eres la inspiración", "Musa de amor", "Brillas siempre", "Risa celestial", "Eres inolvidable",
  "Me vuelves loco", "Me gustas", "De otro mundo", "Perfecta en todo", "Lo más bello",
  "Elegante y bella"
];

// Emojis
const emojis = [
  "❤️", "💖", "💘", "💝", "💗", "💓", "💕", "💞", "💟", "❣️",
  "😍", "🥰", "😘", "😚", "😻", "💋", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍💋‍👩", "💑",
  "🌹", "🌸", "💐", "🌺", "🫶", "💫", "✨", "🫰", "👩‍❤️‍💋‍👨", "💍",
  "🎀", "🎁", "💌", "👼", "🪽", "🫂", "😽", "😇", "🥀", "💎"
];
// Colores para texto
const colores = ["#e91e63", "#f44336", "#9c27b0", "#2196f3", "#ff69b4"]; // rosa, rojo, morado, azul, rosa fuerte

// Unir palabras y emojis
const flotantes = [...palabras, ...emojis];

for (let i = 0; i < 70; i++) {
  const span = document.createElement("span");
  span.className = "word";
  span.textContent = flotantes[Math.floor(Math.random() * flotantes.length)];

  // Posición inicial
  span.style.left = `${Math.random() * 100}%`;
  span.style.top = `${Math.random() * 100}vh`;

  // Tamaño, duración, color
  span.style.fontSize = `${Math.random() * 2 + 1.2}rem`;
  span.style.animationDuration = `${Math.random() * 10 + 10}s`;
  span.style.color = colores[Math.floor(Math.random() * colores.length)];

  // Dirección aleatoria
  const randomX = `${(Math.random() - 0.5) * 100}vw`;
  const randomY = `${(Math.random() - 0.5) * 100}vh`;
  span.style.setProperty('--x', randomX);
  span.style.setProperty('--y', randomY);

  wordsContainer.appendChild(span);
}
