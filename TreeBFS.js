// 4) Do a breadth first search traversal given a tree (may not be a binary tree).

// Example:
//           j
//      /   \    \ 
//     f      k   i
//   /   \      \
//  a     h      z
//   \
//    d
   
// input tree:
// var tree = {
//   value: 'j',
//   childNodes: [{
//     value: 'f',
//     childNodes:[{
//       value: 'a',
//       childNodes: [{
//         value: 'd', 
//         childNodes: []
//       }]
//     },
//     {
//       value: 'h',
//       childNodes: []
//     }]
//   },
//   {
//     value: 'k',
//     childNodes:[{
//       value: 'z',
//       childNodes: []
//     }]
//   },
//   {
//     value: 'i',
//     childNodes:[]
//   }]
// }

// Output: 'j f k i a h z d'