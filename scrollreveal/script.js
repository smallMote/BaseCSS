// 创建元素动画
function createDom() {
  const $ul = document.querySelector('.reval-group')
  const $toc = document.querySelector('#toc')
  for (let i = 0; i < 20; i++) {
    const $li = document.createElement('li')
    const $a = document.createElement('a')
    let index = 'reval-item-' + (i + 1)
    $a.setAttribute('href', '#' + index)
    $a.innerText = index
    $li.setAttribute('id', index)
    $li.innerText = i + 1
    $toc.appendChild($a)
    $ul.appendChild($li)
  }
}
createDom()
let sr = ScrollReveal({
    reset: true,
    duration: 500,
    // delay: 300,
    rotate: {
      x: 90, 
      y: 5, 
      z: 5
    },
    opacity: 0.2,
    scale: 1,
    distance: '100px', // 动画距离
    origin: "bottom", // 开始动画位置(方向)
    easing: "ease-in-out",
    beforeReveal: function (ele) {
        // 动画开始之前的回调
        console.log("动画开始之前", ele);
    },
    afterReveal: function (ele) {
        // 动画结束之后的回调
        console.log("动画结束之后", ele);
    },
    beforeReset: function (ele) {
        // 动画元素被重置之前的回到
        console.log("动画元素被重置", ele);
    },
    afterReset: function (ele) {
        // 动画元素被重置之后的回到
        console.log("动画元素被重置", ele);
    },
});
sr.reveal('li')
