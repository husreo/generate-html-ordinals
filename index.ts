import fs from 'fs';

const metadata = JSON.parse(fs.readFileSync('metadata.json', 'utf-8'));
type Metadata = {name: string; description:string;}[]
type TraitsMetadataType = Metadata[];
let array_traits: TraitsMetadataType = [];
for (let index = 0; index <= 1; index++) {
    const charactor = metadata.filter((val: {name: string, description: string}) => Number(val.name.split(',')[3]) === index)
    
    for (let j = 0; j < 8; j++) {
        const element = charactor.filter((val: {name: string, descriptin: string}) => Number(val.name.split(',')[4]) === j);
        array_traits.push(element);
    }
    for (let j = 0; j < 8; j++) {
        
    }
    console.log(`charactor ${index} \'s tratis:`, array_traits);
}

function getRWeights(_str: string) {
    var weight = Number(_str.split("#").pop());
    if(isNaN(weight)){
      weight = 1;
    }
    return weight;
  }