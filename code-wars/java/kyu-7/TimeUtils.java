/*
Given time in seconds, return formatted string, as shown in
following example:

Input: 90061 sec
Output: 1 1 1 1

e.g
90061 sec: 1 1 1 1 (1 day, 1 hour, 1 min and 1 seconds)
93784 sec: 1 2 3 4 (1 day, 2 hours, 3 mins, 4 seconds)

Useful conversions:
60 sec = 1 min
60 min = 1 hour
24 hour = 1 day

Parameters: an int
  time in sec
Returns: a str
  input converted to str formatted "d h m s"
Examples:
  TimeUtils.convertTime(90061), "1 1 1 1"
  TimeUtils.convertTime(-90061), "-1 -1 -1 -1"
Pseudocode:
  initialize int var day to hold timeDiff divided by 86400
  reassign timeDiff to equal itself minus 86400 times day
  initialize int var hr to hold timeDiff divided by 3600
  reassign timeDiff to equal itself minus 3600 times hour
  initialize int var min to hold timeDiff divided by 60
  reassign timeDiff to equal itself minus 60 times min
  return str containing day hr min and timeDiff space-separated
*/

class TimeUtils {
  public static String convertTime(int timeDiff) {
    int day = timeDiff / 86400;
    timeDiff -= 86400 * day;
    int hr = timeDiff / 3600;
    timeDiff -= 3600 * hr;
    int min = timeDiff / 60;
    timeDiff -= 60 * min;
    return day + " " + hr + " " + min + " " + timeDiff;
  }
}