document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const upload = document.getElementById('upload');
    const grayscaleBtn = document.getElementById('grayscale');
    const invertBtn = document.getElementById('invert');
    const sepiaBtn = document.getElementById('sepia');
    const resetBtn = document.getElementById('reset');
    let originalImageData;

    upload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    grayscaleBtn.addEventListener('click', () => {
        applyFilter((r, g, b) => {
            const avg = (r + g + b) / 3;
            return [avg, avg, avg];
        });
    });

    invertBtn.addEventListener('click', () => {
        applyFilter((r, g, b) => [255 - r, 255 - g, 255 - b]);
    });

    sepiaBtn.addEventListener('click', () => {
        applyFilter((r, g, b) => {
            return [
                0.393 * r + 0.769 * g + 0.189 * b,
                0.349 * r + 0.686 * g + 0.168 * b,
                0.272 * r + 0.534 * g + 0.131 * b
            ];
        });
    });

    resetBtn.addEventListener('click', () => {
        ctx.putImageData(originalImageData, 0, 0);
    });

    function applyFilter(filterFunction) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const [r, g, b] = filterFunction(data[i], data[i + 1], data[i + 2]);
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        ctx.putImageData(imageData, 0, 0);
    }
});
