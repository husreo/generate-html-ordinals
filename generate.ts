import fs from 'fs';

const gender = ["Male", "Female"];
const race = ["Fishman", "Giant", "Human", "Lunarian", "Mink"];
const traits = ["Back", "Background", "Body", "Clothes", "Eyes", "Front", "HairBack", "HairFront", "Mouth"];
type METADATA = {
    id: string,
    metadata: {
        name: string,
        description: string
    }
}

const generateMetadata = () => {
    const trait_metadata: METADATA[] = []

    for (let g = 0; g < gender.length; g++) {
        for (let r = 0; r < race.length; r++) {
            for (let t = 0; t < traits.length; t++) {
                const files = fs.readdirSync(gender[g] + '/' + race[r] + '/' + traits[t])
                {
                    for (const key in files) {
                        const file = files[key];
                        trait_metadata.push({
                            id: '.....',
                            metadata: {
                                name: 'Female' + '/' + race[r] + '/' + traits[t] + '/' + file.split('.')[0],
                                description: "Trait for " + gender[0] + " " + race[r] + " " + "\'s " + traits[t]
                            }
                        })
                    }
                };
            }
        }
        const dataToWrite = JSON.stringify(trait_metadata, null, 2); // Pretty print with 2 spaces

        // Write to a file
        fs.writeFileSync('output.json', dataToWrite);
    }
}

generateMetadata();