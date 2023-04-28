/*
The police have placed radars that will detect those vehicles
that exceed the speed limit on that road. If the driver's speed
is 10km/h to 19km/h above the speed limit, the fine will be 100
dollars, if it is exceeded by 20km/h to 29km/h the fine will be
250 dollars and if it is exceeded by more than 30km/h the fine
will be 500 dollars.

You will be provided with the speed limits of those roads with
radar as a collection of speedlimits [90,100,110,120,....] and
the speed of the driver will be the same on all roads and can
never be negative and the amount of the fine will be accumulated
example 95km/h.

Example (Speed=100, Signals=[110,100,80]-> 250)

Parameters:
  an int, driver speed
  an array of ints, speed limits of roads
Returns: an int, cumulative fine incurred
Examples:
 SpeedLimit.speedLimit(60, new int[] {80,70,60 }), 0
 SpeedLimit.speedLimit(90, new int[] {80}), 100
 SpeedLimit.speedLimit(100, new int[]{110,100,80}), 250
 SpeedLimit.speedLimit(130, new int[]{140,130,100}), 500
 SpeedLimit.speedLimit(110, new int[]{120,110,100}), 100
 SpeedLimit.speedLimit(220, new int[]{120,110,100}), 1500
 SpeedLimit.speedLimit(100, new int[]{70,80,90,100}), 850
Pseudocode:
  initialize an int var, sum assigned to 0;
  iterate over the input int array (speed limits)
    obtain the difference between speed and current limit
    if difference is greater than 29
      add 500 to sum
    otherwise if difference is greater than 19
      add 250 to sum
    otherwise if difference is greater than 9
      add 100 to sum
  return sum
*/

// original class name Kata
public class SpeedLimit {
  public static int speedLimit(final int speed, final int[] signals) {
    int sum = 0;
    for (int limit : signals) {
      int difference = speed - limit;
      if (difference > 29) sum += 500;
      else if (difference > 19) sum += 250;
      else if (difference > 9) sum += 100;
    }
    return sum;
  }
}