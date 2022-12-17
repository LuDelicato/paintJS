const canvas = document.querySelector('canvas');
const canvasCtx = canvas.getContext('2d');
const colorPicker = document.querySelector('select[name="colorPicker"]');
const linePicker = document.querySelector('select[name="linePicker"]');
const reset = document.querySelector('button.reset');

let clicking = false;

canvas.addEventListener('mousedown', (e) => {
  const canvasX = e.pageX - canvas.offsetLeft;
  const canvasY = e.pageY - canvas.offsetTop;

  clicking = true;

  canvasCtx.beginPath();

  canvasCtx.moveTo(canvasX, canvasY);
});

canvas.addEventListener('mousemove', (e) => {
  if (clicking === true) {
    const canvasX = e.pageX - canvas.offsetLeft;
    const canvasY = e.pageY - canvas.offsetTop;

    canvasCtx.lineTo(canvasX, canvasY);
    canvasCtx.stroke();
  }
});

canvas.addEventListener('mouseup', (e) => {
  clicking = false;
});

canvas.addEventListener('mouseout', () => {
  clicking = false;
});

colorPicker.addEventListener('change', () => {
  canvasCtx.strokeStyle = colorPicker.value;
});

linePicker.addEventListener('change', () => {
  canvasCtx.lineWidth = linePicker.value;
});

reset.addEventListener('click', () => {
  if (confirm('Are you sure you want to erase your work?')) {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    colorPicker.selectedIndex = 0;
    linePicker.selectedIndex = 0;

    canvasCtx.lineWidth = linePicker.value;
    canvasCtx.strokeStyle = colorPicker.value;
  }
});
