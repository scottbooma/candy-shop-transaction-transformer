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

function allSalesToArray(allSales) {
    const results = Object.entries(allSales).map(([k, v]) => ({ [k]: v }));
    const date = Object.keys(results).toString();
    const finalAnswer = results.map(result =>
        salesDayToObject(date, result))
    return finalAnswer
    return date;
}

module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
