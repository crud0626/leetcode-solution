const finalPrices = function(prices) {
    const result = [];
    for(let i = 0; i < prices.length; i++) {
        let price = prices[i];
        
        for(let j = i+1; j < prices.length; j++) {
            if (price >= prices[j]) {
                price -= prices[j];
                break;
            }
        }
        
        result.push(price);
    }

    return result;
};
