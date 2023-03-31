/*
Bob has a server farm crunching numbers. He has nodes servers in
his farm. His company has a lot of work to do.

The work comes as a number workload which indicates how many
jobs there are. Bob wants his servers to get an equal number of
jobs each. If that is impossible, he wants the first servers to
receive more jobs. He also wants the jobs sorted, so that the
first server receives the first jobs.

The way this works, Bob wants an array indicating which jobs are
going to which servers.

Can you help him distribute all this work as evenly as possible
onto his servers?

Example
Bob has 2 servers and 4 jobs. The first server should receive
job 0 and 1 while the second should receive 2 and 3.

distribute(2, 4) # => [[0, 1], [2, 3]]
On a different occasion Bob has 3 servers and 3 jobs.
Each should get just one.

distribute(3, 3) # => [[0], [1], [2]]
A couple of days go by and Bob sees a spike in jobs. Now there
are 10, but he hasn't got more than 4 servers available.
He boots all of them. This time the first and second should get
a job more than the third and fourth.

distribute(4, 10) # => [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]

Input
Don't worry about invalid inputs. That is, nodes > 0 and
workload > 0 and both will always be integers.

Parameters: 2 nums
  server count
  job count
Returns: a 2d array
  each sub array is an array of nums
Examples:
  distribute(2, 4), [[0, 1], [2, 3]]
  distribute(3, 3), [[0], [1], [2]]
  distribute(3, 9), [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  distribute(2, 5), [[0, 1, 2], [3, 4]]
  distribute(4, 10), [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]
  distribute(4, 5), [[0, 1], [2], [3], [4]]
  distribute(1, 1), [[0]]
  distribute(2, 1), [[0], []]
  distribute(5, 4), [[0], [1], [2], [3], []]
  distribute(5, 1), [[0], [], [], [], []]
Pseudocode:
  initialize a distribution var assigned to an arr
    with the length equalling nodes arg, each el an empty arr
  iterate over the length of dist array as long as value is less than jobs
  maintain counter (index), value (0-jobs), quotient (jobs/server floored), remainder (jobs%server)
  increment counter by 1 and decrement remainder by 1 (if > 0) each iteration
    create an inner loop to iterate over the length of quotient (+ 1 if remainder exists)
    increment outer value by 1 each iteration
      push outer value to subarray in dist at outer counter
  return distribution array
*/

function distribute(nodes, workload) {
  const dist = Array(nodes).fill().map(n => []);
  for (let i = 0, v = 0, q = Math.floor(workload / nodes), r = workload % nodes; v < workload; i++, r && r--) {
    while (dist[i].length < q + (r ? 1 : 0)) dist[i].push(v++);
  }
  return dist;
}