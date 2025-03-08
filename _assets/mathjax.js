window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};
// 吐槽：令人迷惑的行为 覆写了MathJax还要调用MathJax的方法
/*
document$.subscribe(() => {
  MathJax.typesetPromise();
});
*/
