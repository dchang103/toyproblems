// 1) A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
//     Implement a method to count how many possible ways the child can run up the stairs.
    
// Jack's note:
// There are three approaches to this problem.
// - recursive algorithm
// - top-down dynamic programming - it is actually a recursive algorithm with caching, that saves repeated sub-problems solutions so there is no repetitive calculations.
// - bottom-up dynamic programming - starting from the smallest possible problem size, and work the way up to the original size problem. This can be done by caching states 
// in table, represented in a 1d or 2d arrays. HINT: use two for-loops. The first for-loop is the step size, start from 0 to n steps (thus bottom-up). The second for-loop 
// controls how many hops a child can start with, which are 1 step, 2 steps, or 3 steps.