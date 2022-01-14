/*
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available
to chat!

Given an input of an array of objects containing usernames, status and time
since last activity (in mins), create a function to work out who is online,
offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they
are to be considered away.

The input data has the following structure:
[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

The corresponding output should look as follows:
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}

If for example, no users are online the output should look as follows:
{
  offline: ['Lucy'],
  away: ['Bob']
}

username will always be a string, status will always be either 'online' or
'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be
an empty array []. In this case you should return an empty object {}
(empty Dictionary in C#).

Parameters: an array of objects
Returns:
  an object
    each key is the status of your friends (if applicable)
    each value is an array of the friends whose status match the key
Examples:
    friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    whosOnline(friends)
      // {online: ['David'], offline: ['Lucy'], away: ['bob']}

    friends = [{
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    whosOnline(friends)
      // {offline: ['Lucy'], away: ['Bob']}
Pseudocode:
  initialize a result variable assigned to an empy object
  iterate over the input friends list
    if their status is online and last activity is > 10
      check if result obj has an away key
        if it does
          push friends name to away array
        if not
          initialize it as an empty array
          push friends name to away array
    otherwise, if their status is online (and they're active)
      check if result obj has an online key
        if it does
          push friends name to online array
        if not
          initialize it as an empty array
          push friends name to online array
    otherwise, they're offline
      check if result obj has an offline key
        if it does
          push friends name to offline array
        if not
          initialize it as an empty array
          push friends name to offline key
  return result obj
*/

const whosOnline = (friends) => {
  const result = {};
  for (const f of friends) {
    const s = f.status === 'online' && f.lastActivity > 10 ? 'away' : f.status;
    result[s] ? result[s].push(f.username) : result[s] = [f.username];
  }
  return result;
}

// const whosOnline = (friends) => {
//   const result = {};
//   for (const friend of friends) {
//     if (friend.status === 'online' && friend.lastActivity > 10) {
//       result.away ? result.away.push(friend.username) : result.away = [friend.username];
//     } else if (friend.status === 'online') {
//       result.online ? result.online.push(friend.username) : result.online = [friend.username];
//     } else {
//       result.offline ? result.offline.push(friend.username) : result.offline = [friend.username];
//     }
//   }
//   return result;
// }