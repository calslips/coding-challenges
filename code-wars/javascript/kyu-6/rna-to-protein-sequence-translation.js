/*
The central dogma of molecular biology is that DNA is transcribed
into RNA, which is then tranlsated into protein. RNA, like DNA,
is a long strand of nucleic acids held together by a sugar
backbone (ribose in this case). Each segment of three bases is
called a codon. Molecular machines called ribosomes translate the
RNA codons into amino acid chains, called polypeptides which are
then folded into a protein.

Protein sequences are easily visualized in much the same way that
DNA and RNA are, as large strings of letters. An important thing
to note is that the 'Stop' codons do not encode for a specific
amino acid. Their only function is to stop translation of the
protein, as such they are not incorporated into the polypeptide
chain. 'Stop' codons should not be in the final protein sequence.
To save a you a lot of unnecessary (and boring) typing the keys
and values for your amino acid dictionary are provided.

Given a string of RNA, create a funciton which translates the RNA
into its protein sequence. Note: the test cases will always
produce a valid string.

protein('UGCGAUGAAUGGGCUCGCUCC') returns 'CDEWARS'

Included as test cases is a real world example! The last example
test case encodes for a protein called green fluorescent protein;
once spliced into the genome of another organism, proteins like
GFP allow biologists to visualize cellular processes!

Parameters: a string
  (of codons)
Returns: a string
  (codons translated)
Examples:
  protein('AUG') // 'M'
  protein('AUGUGA') // 'M'
  protein('AUGGUUAGUUGA') // 'MVS'
  protein('UGCGAUGAAUGGGCUCGCUCC') // 'CDEWARS'
  protein('AUGUCCUUCCAUCAAGGAAACCAUGCGCGUUCAGCUUUCUGA') // 'MSFHQGNHARSAF'
  protein('AUGCUUCAAGUGCACUGGAAAAGGAGAGGGAAAACCAGUUGA') // 'MLQVHWKRRGKTS'
  protein('AUGGCGUUCAGCUUUCUAUGGAGGGUAGUGUACCCAUGCUGA') // 'MAFSFLWRVVYPC'
  protein('AUGCAGCUUUCUAUGGAGGGUAGUGUUAACUACCACGCCUGA') // 'MQLSMEGSVNYHA'
  protein('AUGCUAUGGAGGGUAGUGUUAACUACCACGCCCAGUACUUGA') // 'MLWRVVLTTTPST'
Pseudocode:
  define amino acid dictionary
  define protein var to be an empty string
  create a loop to run as long as the rna string has length
    codon var to equal the 1st 3 chars of rna
    reassign rna to be the remaining chars from index 3 to the end
    if codon in aad equals 'Stop'
      break out of loop
    concat protein with codon value in aad
  return protein
*/

// recursive
function protein(rna) {
  if (!rna.length || aad[rna] === 'Stop') return '';
  return aad[rna.slice(0, 3)] + protein(rna.slice(3));
}

// iterative
function protein(rna) {
  let proteinSequence = '';
  while (rna.length) {
    const codon = rna.slice(0, 3);
    rna = rna.slice(3);
    if (aad[codon] === 'Stop') break;
    proteinSequence += aad[codon];
  }
  return proteinSequence;
}

// amino acid dictionary
const aad = {
  'UUC':'F', 'UUU':'F',
  'UUA':'L', 'UUG':'L', 'CUU':'L', 'CUC':'L', 'CUA':'L', 'CUG':'L',
  'AUU':'I', 'AUC':'I', 'AUA':'I',
  'AUG':'M',
  'GUU':'V', 'GUC':'V', 'GUA':'V', 'GUG':'V',
  'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'AGU':'S', 'AGC':'S',
  'CCU':'P', 'CCC':'P', 'CCA':'P', 'CCG':'P',
  'ACU':'T', 'ACC':'T', 'ACA':'T', 'ACG':'T',
  'GCU':'A', 'GCC':'A', 'GCA':'A', 'GCG':'A',
  'UAU':'Y', 'UAC':'Y',
  'CAU':'H', 'CAC':'H',
  'CAA':'Q', 'CAG':'Q',
  'AAU':'N', 'AAC':'N',
  'AAA':'K', 'AAG':'K',
  'GAU':'D', 'GAC':'D',
  'GAA':'E', 'GAG':'E',
  'UGU':'C', 'UGC':'C',
  'UGG':'W',
  'CGU':'R', 'CGC':'R', 'CGA':'R', 'CGG':'R', 'AGA':'R', 'AGG':'R',
  'GGU':'G', 'GGC':'G', 'GGA':'G', 'GGG':'G',
  'UAA':'Stop', 'UGA':'Stop', 'UAG':'Stop',
};