window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
    //dom.style(div,'color','red')
    if (arguments.length === 3) {
      node.style[name] = value;
    }
    //dom.style(div,'color')
    else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      }
    } else if (name instanceof Object) {
      //dom.style(div,{color:'red'})
      const object = name;
      for (let key in object) {
        node.style[key] = object[key];
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
