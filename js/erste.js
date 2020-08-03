function calcAmount()
{
    let percent = 100;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseFloat(amountInput.value);
    amountNumber = (isNaN(amountNumber)) ? 0 : amountNumber;
    
    let trxFee = document.querySelector("input[name='trx-fee']");
    let trxFeeValue = parseFloat(trxFee.value);

    let trxMin = document.querySelector("input[name='trx-min']");
    let trxMinValue = parseFloat(trxMin.value);

    let trxMax = document.querySelector("input[name='trx-max']");
    let trxMaxValue = parseFloat(trxMax.value);

    let additionalPrice = document.querySelector("input[name='additional-price']");
    let additionalPriceValue = parseFloat(additionalPrice.value);

    let optionOne = document.querySelector("input[name='option-one']");
    let optionOneValue = parseFloat(optionOne.value);

    showSumPrice(amountNumber, trxFeeValue, trxMinValue, trxMaxValue, percent, optionOneValue, additionalPriceValue);
}


function showSumPrice(amountNumber, trxFeeValue, trxMinValue, trxMaxValue, percent, optionOneValue, additionalPriceValue)
{
    let showAmount = document.querySelector("span.show-amount");

    let amount = (amountNumber / percent * trxFeeValue);
    if (amount <= trxMinValue)
    {
        amount = trxMinValue;
    }
    else if (amount >= trxMaxValue)
    {
        amount = trxMaxValue;
    }
    let additionalPriceAmount = additionalPriceValue
    let trxAmount =  (amountNumber / percent * optionOneValue);
    if (trxAmount >= 6000) 
    {
        trxAmount = 6000;
    }
    showAmount.innerHTML = amount + additionalPriceAmount + trxAmount;
}