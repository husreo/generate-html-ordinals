import fs from 'fs';
const Race = ["FISHMAN", "Lunarian"];
const traits = ["Extra", "HairFront", "Clothes", "Mouth", "Eyes", "Skins", "HairBack", "Back"]
const metadata = JSON.parse(fs.readFileSync('metadata.json', 'utf-8'));
type Metadata = {name: string; description:string;}[]
type TraitsMetadataType = Metadata[];
for (let index = 0; index <= 1; index++) {
    const charactor = metadata.filter((val: {name: string, description: string}) => val.name.split('/')[1] === Race[index])
    let array_traits: TraitsMetadataType = [];
    
    for (let j = 0; j < 8; j++) {
        const element = charactor.filter((val: {name: string, descriptin: string}) => val.name.split('/')[2] === traits[j]);
        array_traits.push(element);
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