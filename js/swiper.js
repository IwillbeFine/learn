~~function(){
    let  oWrap = document.getElementById("wrap"),
    oText = document.querySelectorAll(".wrap .text-ul li"),
    oUl = document.querySelector(".wrap .wrap-ul"),
    timer = null,
    len = oText.length,
    lastInex = 0;
    
    function change(idx){
        // 让ul偏移
        oUl.style.left = "-" + (idx *100) + "%"
        // 边缘的判断
        if(idx >= len){
            oUl.style.left = "-" + 0 + "%"
            idx = 0
        }
        // 鼠标移动上去给当前元素添加active名字
        oText[lastInex].classList.remove("active")
        oText[idx].classList.add("active")
        lastInex = idx
    }

    oText.forEach((ele,index)=>{
        ele.onmouseenter = function(){
            change(index)
        }
    })

    // 设置自动播放
    function auto(){
        timer =  setInterval(()=>{
            change(lastInex+1)
        },2000)
    }
    auto()
    oWrap.onmouseenter = () => clearInterval(timer)
    oWrap.onmouseleave = auto
}()