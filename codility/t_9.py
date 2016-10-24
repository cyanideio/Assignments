A = [1, 3, 1, 4, 2, 3, 5, 4]

def solution(X,A):
	ROUTE = range(1, X + 1)
	i = 0
	for leaf in A:
		if leaf in ROUTE:
			if len(ROUTE) != 1:
				ROUTE.remove(leaf)
			else:
				return i
		i += 1
	if i == len(A):
		return 0

print solution(5, A)