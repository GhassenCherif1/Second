const texte = document.getElementById('Test');
const champCouleur = document.getElementById('color-picker');
const champTaille = document.getElementById('taille');
const champPolice = document.getElementById('police');

champCouleur.addEventListener('change', () => {
	texte.style.color = champCouleur.value ;
});

champTaille.addEventListener('input', () => {
	texte.style.fontSize = champTaille.value + 'px';
});

champPolice.addEventListener('change', () => {
	texte.style.fontFamily = champPolice.value;
});
