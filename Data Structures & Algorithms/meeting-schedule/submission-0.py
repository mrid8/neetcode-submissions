"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        # sort the intervals
        # check if end of the end of the first interval 
        # is bigger than the start of the second interval
        # if it isn't, return false

        intervals.sort(key=lambda x: x.start)

        for i in range(1, len(intervals)):
            i1 = intervals[i-1] #0
            i2 = intervals[i] #1

            if i1.end > i2.start:
                return False
        
        return True