import React from 'react'

const Window3 = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Common Coding Algorithm Approaches</h1>

            <h2>1. Brute Force</h2>
            <p>
                Brute force is a straightforward approach to solving a problem by trying every possibility until a solution is found. It is often the most intuitive approach and is suitable for small input sizes. However, it may not be efficient for larger problems due to its high time complexity.
            </p>

            <h2>2. Divide and Conquer</h2>
            <p>
                Divide and conquer is a technique where a problem is divided into smaller subproblems that are easier to solve individually. These subproblems are then solved recursively, and their solutions are combined to solve the original problem. It is commonly used in algorithms such as merge sort and quicksort.
            </p>

            <h2>3. Dynamic Programming</h2>
            <p>
                Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once. It stores the solutions to subproblems in a table and reuses them when needed, which can significantly improve efficiency by avoiding redundant calculations. Examples of problems solved using dynamic programming include the Fibonacci sequence and the knapsack problem.
            </p>

            <h2>4. Greedy Algorithms</h2>
            <p>
                Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum solution. Unlike dynamic programming, they do not always guarantee the optimal solution but can be faster and simpler to implement. Examples of greedy algorithms include Dijkstra's shortest path algorithm and the minimum spanning tree algorithm.
            </p>

            <h2>5. Backtracking</h2>
            <p>
                Backtracking is a technique for solving problems by recursively exploring all possible solutions. It systematically builds a solution candidate and abandons it if it cannot be completed to a valid solution. It is commonly used in algorithms such as depth-first search and Sudoku solvers.
            </p>

            <h2>6. Binary Search</h2>
            <p>
                Binary search is an efficient algorithm for finding an element in a sorted list by repeatedly dividing the search interval in half. It requires the list to be sorted and can quickly locate the target element by eliminating half of the remaining possibilities at each step.
            </p>
        </div>
    )
}

export default Window3
