const codons = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
};

export default function (sequence) {
  const input = sequence ? String(sequence) : '';
  const seq = input.match(/\D{3}/g);
  const proteins = [];

  if (!seq) {
    return proteins;
  }

  for (let i = 0; i < seq.length; i += 1) {
    if (typeof codons[seq[i]] === 'undefined') {
      throw new Error('Invalid codon');
    } else if (codons[seq[i]] === 'STOP') {
      break;
    } else {
      proteins.push(codons[seq[i]]);
    }
  }

  return proteins;
}
