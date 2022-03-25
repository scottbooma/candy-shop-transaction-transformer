function candySalesToObject(sales) {
    const [item, price, quantity] = sales
    const salesObject = { item, price, quantity }
    salesObject.price = parseFloat(salesObject.price)
    return salesObject
}

function salesDayToObject(date, daySales) {
    const dateProperty = Object.keys(daySales).toString();
    const dateValues = daySales[date];
    return {
        date: dateProperty,
        sales: dateValues.map((dateValue) =>
            candySalesToObject(dateValue)
        )
    }
}

module.exports = {
    candySalesToObject,
    salesDayToObject,
    // allSalesToArray
};
