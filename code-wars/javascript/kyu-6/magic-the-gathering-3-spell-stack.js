/*
Magic The Gathering is a collectible card game that features
wizards battling against each other with spells and creature
summons. The game itself can be quite complicated to learn. In
this series of katas, we'll be solving some of the situations
that arise during gameplay. You won't need any prior knowledge
of the game to solve these contrived problems, as I will provide
you with enough information.

In magic, spells utilize a stack. The last spell onto the stack,
is generally the first one to be cast (LIFO - Last-In, First-Out).
The spell stack was created to give players the chance to respond
to a spell before it actually resolves and manifests itself in the
game. Spells have 2 speeds, instant and sorcery. If a spell is of
type instant, it can be cast at any time and in response to other
spells. If a spell is a sorcery, it may only be cast if the stack
is empty. Here are some examples:

The stack is empty.
Player 1 casts Lightning Bolt (instant).
Stack -> ['Lightning Bolt']
Player 2 casts Giant Growth (instant).
Stack -> ['Lightning Bolt', 'Giant Growth']
Both players agree that they are done casting spells.
Giant Growth resolves.
Stack -> ['Lightning Bolt']
Lightning Bolt resolves.
Stack -> []
Create a method of the Magic object called spellStack() that when
called without an argument returns and removes a spell from the
stack in the correct order. When passed a spell object, the spell
should be added to the stack and the length of the stack should be
returned. Remember: A sorcery may only be cast when the stack is
empty. An instant may be cast at any time. If a sorcery is being
put on the stack when it's not empty, or if you're trying to cast
a spell when the stack is empty, spellStack should throw an error.
Spells will be passed as an object with the keys name and type:

spellStack({'name':'Lightning Bolt', 'type':'instant'}) -> 1
  // Adds lightning bolt to the stack and returns the length of
     the stack
spellStack() -> {'name':'Lightning Bolt', 'type':'instant'}
  // Removes lightning bolt from the stack and returns it

Parameters: an obj or nothing
Returns:
  if an obj is passed in
    return a num representing the spell stack length
      (sorcery spells can only get added to an empty stack,
      otherwise an error is thrown)
  if no args
    return the spell obj at the top of the spell stack
      or error if spell stack is empty
Examples:
  const spells = [{'name':'Lightning Bolt', 'type': 'instant'}, {'name': 'Giant Growth', 'type': 'instant'},
                {'name':'Time Walk', 'type': 'sorcery'}, {'name': 'Ponder', 'type': 'sorcery'}];
  const myMagic = new Magic();

  myMagic.spellStack(), Error
    // trying to remove a spell from an empty spell stack
  myMagic.spellStack(spells[2]), 1
  myMagic.spellStack(spells[0]), 2
  myMagic.spellStack(spells[0]), 3
  myMagic.spellStack(spells[1]), 4
  myMagic.spellStack(), {'name': 'Giant Growth', 'type': 'instant'}
  myMagic.spellStack(), {'name':'Lightning Bolt', 'type': 'instant'}
  myMagic.spellStack(), {'name':'Lightning Bolt', 'type': 'instant'}
  myMagic.spellStack({'name': 'Ponder', 'type': 'sorcery'}), Error
    // because spells[2] is still in spell stack
  myMagic.spellStack({'name':'Time Walk', 'type': 'sorcery'}), Error
    // because spells[2] is still in spell stack
Pseudocode:
  initialize a Magic class
    contains property stack assigned to an empty array
    contains method spellStack (can be called with/without args)
      if no args
        if stack is empty
          throw an error
        otherwise
          pop the last spell off the stack and return it
      if args (spell obj)
        if type of spell is sorcery
          if stack is empty
            push spell on top of stack
            return length of stack
          otherwise
            throw an error
        otherwise it is instant
          push spell on top of stack
          return length of stack
*/

class Magic {
  constructor() {
    this.spells = [];
  }
  spellStack (spell) {
    if (!spell) {
      if (this.spells.length) return this.spells.pop();
      throw Error;
    }
    if (spell.type === 'sorcery' && this.spells.length) throw Error;
    return this.spells.push(spell);
  }
}