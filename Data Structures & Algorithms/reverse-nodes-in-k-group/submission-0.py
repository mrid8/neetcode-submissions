# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or k == 1:
            return head
        
        dummy = ListNode(0)
        dummy.next = head
        prevList = dummy
        
        while True:
            # Check if there are k nodes left
            kth = prevList
            for _ in range(k):
                kth = kth.next
                if not kth:
                    return dummy.next
            
            nextList = kth.next
            
            # Reverse k nodes
            prev = nextList
            curr = prevList.next
            
            for _ in range(k):
                temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            
            # Connect with previous part
            temp = prevList.next
            prevList.next = kth
            prevList = temp

