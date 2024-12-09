const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Bubble phase (default)
document.addEventListener('click', () => console.log('Parent listener (bubble)'),true);

// Capture phase
child.addEventListener('click', () => console.log('Parent listener (capture)'));

// Clicking on child triggers:
// 1. "Parent listener (capture)"
// 2. "Parent listener (bubble)"
