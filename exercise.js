function candySalesToObject(sales) {
    const [item, price, quantity] = sales
    const salesObject = { item, price, quantity }
    return salesObject
}


module.exports = {
    candySalesToObject,
    // salesDayToObject,
    // allSalesToArray
};
