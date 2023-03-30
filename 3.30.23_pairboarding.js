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

  const breadthFirstValues = (root) => {
    if (!root) return [];
    
    const values = [];
    
    const queue = [ root ]
    
    while (queue.length) {
      let node = queue.shift()
      values.push(node.val)
      
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      
    }
    return values
  };