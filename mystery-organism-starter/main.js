// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum,
		dna,
		mutate() {
			indexToChange = Math.floor(Math.random() * 15);
			baseToChange = this.dna[indexToChange];
		    while (this.dna[indexToChange] == baseToChange) {
		    	newBase = returnRandBase();
		    	this.dna[indexToChange] = newBase;
		    }
		    return this.dna;
		},
		compareDNA(pAequor) {
			sameBases = 0;
			for (let i = 0; i < this.dna.length; i++) {
				if (this.dna[i] == pAequor.dna[i]) sameBases += 1;
			}
			percentDiff = sameBases/15 * 100;
			return `Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentDiff.toFixed()}% DNA in common.`;
		},
		willLikelySurvive() {
			let numCorG = 0;
			for (i of this.dna) {
				if (i == 'C' || i == 'G') numCorG += 1;
			}
			const percentCorG = numCorG/15 * 100;
			if (percentCorG >= 60) return true;
			return false;
		}
	};
}

const specimens = [];
for (let i = 0; i < 30; i++) {
	do specimens[i] = pAequorFactory(i, mockUpStrand())
	while (specimens[i].willLikelySurvive() == false);
}






