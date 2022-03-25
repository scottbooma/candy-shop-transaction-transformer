function candySalesToObject(sales) {
    const [item, price, quantity] = sales
    const salesObject = { item, price, quantity }
    salesObject.price = parseFloat(salesObject.price)
    return salesObject
}

function salesDayToObject (date, daySales) {
    

    // return {
    // date: (dateValue)
    sales: daySales.map(daySale => {
        candySalesToObject(daySale)
    })
}

module.exports = {
    candySalesToObject,
    // salesDayToObject,
    // allSalesToArray
};
