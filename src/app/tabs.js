const refs = {
    controls: document.querySelector('[data-controls]'),
    panes: document.querySelector('[data-panes]'),
    pane: document.querySelectorAll('.pane-item'),
    accordion: document.querySelector('.pane-accordion'),
}

refs.controls.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.nodeName !== 'A') {
        return;
    }

    const currentControlItem = document.querySelector('.controls__item--active');

    if (currentControlItem) {
        currentControlItem.classList.remove('controls__item--active');
    }

    const controlItem = e.target;
    controlItem.classList.add('controls__item--active');

    const paneId = controlItem.getAttribute('href').slice(1);

    const pane = refs.panes.querySelector(`#${paneId}`);

    const currentPane = document.querySelector('.pane--active');

    if (currentPane) {
        currentPane.classList.remove('pane--active');
    }

    pane.classList.add('pane--active');

});

for (item of refs.pane) {
    item.addEventListener('click', function() {
        if (this.classList.contains('pane-item--active')) {
            this.classList.remove('pane-item--active');
        } else {
            for (el of refs.pane) {
                el.classList.remove('pane-item--active');
            }
            this.classList.add('pane-item--active');
        }
    });
}
