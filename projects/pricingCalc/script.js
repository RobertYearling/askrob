let avgPrice = 0;
let wholesale = 0;

document.querySelector('.submit').addEventListener('click', function() {
    const priceOne = Number(document.querySelector('.priceOne').value);
    const priceTwo = Number(document.querySelector('.priceTwo').value);
    // console.log(amazonPrice, gazellePrice);

    avgPrice = (priceOne + priceTwo) / 2;
    wholesale = avgPrice - (avgPrice * 0.20);
    value = wholesale - (wholesale * 0.33);
    document.querySelector('#avgPrice').textContent = avgPrice;
    document.querySelector('#poPrice').textContent = avgPrice;
    document.querySelector('#wholesale').textContent = wholesale;
    Math.round(document.querySelector('#value').textContent = value);
    // console.log(avgPrice);
});