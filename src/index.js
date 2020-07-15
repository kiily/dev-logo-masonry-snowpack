const grid = document.querySelector('.grid');
const gridItems = document.querySelectorAll('.grid-item');
const rowSize = 5;

const setColumns = value => grid.getElementsByClassName.setProperty('--template-columns', value);

const positionGridItems = () => {
    gridItems.forEach((x, i) => {
        if (document.body.clientWidth < 711) {
            x.style = '';
            return;
        } else {
            const rowSpan = Math.ceil(
                gridItems.offsetHeight
            ) / rowSize;
            x.style.setProperty('--row-span', `span ${rowSpan}`);
        }
    });
}

function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

window.addEventListener('resize', debounce(positionGridItems, 20));