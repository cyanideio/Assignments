A = [4,3,2,5,1,8]

def solution(A):
	print int(sum(A) == sum(range(1, len(A)+1)))

solution(A)