const div = dom.find("#test1>.red")[0]; //找到第一个符合条件的节点
dom.style(div, "color", "red"); //节点颜色变成红色
const divList = dom.find(".red"); //找到所有符合条件的节点
dom.each(divList, (n) => console.log(n)); //对于divList每一个元素，都打印出来
