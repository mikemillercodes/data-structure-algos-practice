const depthFirstValues = (root) => {
    // todo
    if (!root) return [];
    const stack = [root]; // [e
    const result = []; // [a, b, d, f, c, e]
    
    while (stack.length) {
      const current = stack.pop(); // f
      result.push(current.val);
      
      if (current.right) {
        stack.push(current.right)
      }
      if (current.left) {
        stack.push(current.left);
      }
  
    }
    
    return result;
  };