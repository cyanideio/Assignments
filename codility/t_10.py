A = [3, 4, 4, 6, 1, 4, 4]
N = 5

def solution(N,A):
	counters = [0]*N
	for i in range(0, len(A)):
		if A[i] >= 1 and A[i] <= N:
			counters[A[i]-1] += 1
		if A[i] == N+1:
			counters.sort()
			counters = [counters[-1]]*N
	return counters

print solution(N, A)