/**
 * You are a spy. You lurk in the enemy's control zone. Your task
 * is to get the length data of a railway, accurate to meters.

Although you have taken all kinds of technical measures,
you still haven't finished your task.

Now, You can only use the last method: Take the train, record the
sounds you hear, and then calculate the length of the railroad.

You will hear these voices:

1. "呜呜呜". This is the whistle of the train when it comes in or
out of the station.

That is, When you hear the sound for the first time, the train
leaves the station and goes into high speed; When you hear the
sound for the second time, The train pulled into the station and
goes into low speed. and so on.

2. "哐当". This is the sound of the train hitting the railroad track.

That is, Every time you hear it, the train advances 20 meters (high
  speed) or 10 meters(low speed).

3. Any other sound. These are all noise, please ignore them ;-)

 * @param {string} sounds
 * @return {number}
 *
 * Examples:
 *   lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"), 150
 *   lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"), 300
 *   lengthOfRailway("呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"), 150
 * Pseudocode:
 *   initialize length var assigned to 0
 *   split input on whistle sound
 *   iterate over array of sounds (skip first empty str)
 *     split str on track sound
 *     add (length of track sound array - 1 * 20 / 1 if index is odd, 2 if even) to length var
 *   return length
 */

function lengthOfRailway(sounds) {
  let length = 0, s = sounds.split('呜呜呜');
  for (let i = 1; i < s.length; i++) length += --s[i].split('哐当').length * 20 / (i % 2 || 2);
  return length;
}