TEST_STR = '((())(()'

get_indexes = lambda x, xs: [i for (y,i) in zip(xs, range(len(xs))) if x == y ]
# Must Be Even Number
def checkEvenOdd(s):
    if len(s) >= 1 and len(s) <= 30000:
        if len(s) % 2 == 0:
            return True
        else:
            return False
    else:
        return False


def check(s):
    print get_indexes('(', s)
#    for i in range(0, len(s)/2):
#        print s[i]
#        print s[-i-1]

def solution(S, K):
    if checkEvenOdd(S):
        check(S)
    else:
        return 0

print solution(TEST_STR, 3)
