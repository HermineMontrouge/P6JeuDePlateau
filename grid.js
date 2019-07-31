const $board = document.querySelector('#board');

for (let wrapper = 0; wrapper < 10; wrapper++) {
    const newWrapper = document.createElement('div');
    newWrapper.className = "wrapper";
    // newWrapper.innerHTML = 'wrap';
    $board.appendChild(newWrapper);

    for (let box = 0; box < 10; box++) {
        const newBox = document.createElement('div');
        newBox.className = "box";
        // newBox.innerHTML = 'box';
        newWrapper.appendChild(newBox);
    }
}