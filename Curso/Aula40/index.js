// break e continue, quebrar ou pular o laço


const ns = [1,2,3,4,5,6,7,8,9];

for (let n of ns){
    if (n === 2 || n === 5){
        console.log(`pulei`);
        continue;
    }
    if (n === 8){
        console.log(`parei no break`);
        break;
    }

    console.log(n)    
}