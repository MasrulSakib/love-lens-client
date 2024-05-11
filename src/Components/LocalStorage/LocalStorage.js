// to set data
const addToDb = _id => {
    let requiredItems = getRequiredItems()
    // add quantity
    const quantity = requiredItems[_id];
    if (!quantity) {
        requiredItems[_id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        requiredItems[_id] = newQuantity;

    }

    localStorage.setItem('required-items', JSON.stringify(requiredItems));
}
// remove data from LS
const removeFromDb = id => {
    const requiredItems = getRequiredItems();
    if (id in requiredItems) {
        delete requiredItems[id];
        localStorage.setItem('required-items', JSON.stringify(requiredItems));
    }
}


const getRequiredItems = () => {
    let requiredItems = {};

    // get the items
    const storedItems = localStorage.getItem('required-items');
    if (storedItems) {
        requiredItems = JSON.parse(storedItems);
    }
    // else {
    //     requiredItems = {};
    // }
    return requiredItems;
}

// delete local storage completely
const deleteRequiredItems = () => {
    localStorage.removeItem('required-items');
    localStorage.removeItem('breakTime');
}

export {
    addToDb,
    removeFromDb,
    getRequiredItems,
    deleteRequiredItems
}