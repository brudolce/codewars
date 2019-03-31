function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0, interest;
    while (startPriceOld  + (months * savingperMonth) < startPriceNew) {
        months +=1 ;
        interest = 1 - (percentLossByMonth + 0.5 * Math.floor(months/2))/100;
        [startPriceOld,  startPriceNew] = [startPriceOld * interest,  startPriceNew * interest]
        
    }
    return [months, Math.round((startPriceOld + months * savingperMonth) - startPriceNew)];
}
