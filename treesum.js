const treeSum = (root) => {
    // todo
    if (!root) return 0;
    
    let sum = 0; 
    const stack = [ root ]; // [ ]
    
    while (stack.length) {
      const current = stack.pop(); // 1
      sum += current.val; // 21
      
      if (current.right !== null) {
        stack.push(current.right); 
      }
      if (current.left !== null) {
        stack.push(current.left);
      }
    }
    return sum;
  };

  const treeSum = (root) => {
    // todo
    // RECURSIVE
    if (!root) return 0;
    
    return root.val + treeSum(root.right) + treeSum(root.left)
  }