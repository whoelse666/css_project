// 菜单
const menu=document.querySelector('.menu');

// 绑定右键事件
document.addEventListener('contextmenu',function(e){
    // 取消默认的浏览器自带右键
    e.preventDefault();
    // 窗口宽高
    let winWidth=window.innerWidth;
    let winHeight=window.innerHeight;
    // 鼠标点击的位置
    let posX=e.pageX;
    let posY=e.pageY;
    // 菜单宽高
    let menuWidth=menu.getBoundingClientRect().width;
    let menuHeight=menu.getBoundingClientRect().height;
    // 菜单要显示的位置
    let posLeft=0,posTop=0;
    // 菜单显示时可能遇到的几种情况：
    // 右边和底部同时超出
    if(posX+menuWidth>=winWidth && posY+menuHeight>=winHeight){
        posLeft=posX-menuWidth;
        posTop=posY-menuHeight;
    }
    // 右侧超出
    else if(posX+menuWidth>=winWidth){
        posLeft=posX-menuWidth;
        posTop=posY;
    }
    // 底部超出
    else if(posY+menuHeight>=winHeight){
        posLeft=posX;
        posTop=posY-menuHeight;
    }
    // 默认情况，都不超出
    else{
        posLeft=posX;
        posTop=posY;
    }
    // 设置菜单的位置并显示
    menu.style.left=posLeft+'px';
    menu.style.top=posTop+'px';
    menu.style.opacity=1;
    menu.style.zIndex=99;
})

// 最后，加个单击其他地方关闭菜单
document.addEventListener('click',function(){
    menu.style.opacity=0;
    menu.style.zIndex=-1;
})