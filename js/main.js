//?  Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

const friendNumbers = ({ sy1, sy2 }) => {
    let sy1Total = 0, sy2Total = 0;

    for (let i = 1; i < sy1; i++) {
        if (sy1 % i === 0) {
            sy1Total += i;
        }
    }

    for (let j = 1; j < sy2; j++) {
        if (sy2 % j === 0) {
            sy2Total += j;
        }
    }

    if (sy1Total === sy2 && sy2Total === sy1) {
        console.log(`${sy1} ve ${sy2} arkadaş sayılardır.`);
    } else {
        console.log(`${sy1} ve ${sy2} arkadaş sayılar değildir.`);
    }
};

friendNumbers({ sy1: 220, sy2: 284 });



//? 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


const perfectNumbers = ({ sayi }) => {
    for (let i = 1; i <= sayi; i++) {
        let total = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                total += j;
            }
        }
        if (total === i) {
            console.log(`Bu Sayılar Mükemmel Sayıdır : ${i}`);
        }
    }
};

perfectNumbers({ sayi: 1000 });


//? 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.


const primeNumbers = ({ sayi }) => {
    for (let i = 2; i <= sayi; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`Bu Sayı Asal Sayıdır : ${i}`);
        }
    }
};

primeNumbers({ sayi: 1000 });
