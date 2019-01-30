$(function(){
    function update(){
        let album=$('#album');//相册
        let imgOverlay=$('#img-overlay');//遮盖层
    
        //图片在脚本中插入
    
        let imgs=`
        <img src="images/1.jpg">
        <img src="images/2.jpg">
        <img src="images/3.jpg">
        <img src="images/4.jpg">
        <img src="images/5.jpg">
        <img src="images/6.jpg">
        <img src="images/7.jpg">
        <img src="images/8.jpg">
        <img src="images/9.jpg">
        <img src="images/10.jpg">
        <img src="images/11.jpg">
        <img src="images/12.jpg">
        <img src="images/13.jpg">
        <img src="images/14.jpg">
        <img src="images/15.jpg">
        <img src="images/16.jpg">
        <img src="images/17.jpg">
        <img src="images/18.jpg">
        <img src="images/19.jpg">
        <img src="images/20.jpg">
        <img src="images/21.jpg">
        <img src="images/22.jpg">
        <img src="images/23.jpg">
        <img src="images/24.jpg">
        <img src="images/25.jpg">
        <img src="images/26.jpg">
        <img src="images/27.jpg">
        <img src="images/28.jpg">
        `;
        //图片载入相册
        album.html(imgs);
        album.attr('title','相册');
    
        //图片为圆形,高度需等于宽度
        let imgwidth=$('.album  img').width();
        $('.album  img').css('height',imgwidth);
    
    
        //点击图片显示大图
        $('#album').on('click','img',function(e){
           let imgSrc=$(e.target).attr('src');//获取目标元素src
           let currentImg=document.createElement('img');//创建src
         
           $(currentImg).attr("src",imgSrc); //添加src                  
           imgOverlay.append(currentImg);
    
           //图片居中
           imgOverlay.css({
               'display':'flex',
               'justify-content':'center',
               'align-items':'center'
           })
    
        //    获取图片实际高宽
           let imge=new Image();
           imge.src=imgSrc;
           let imgHeight=imge.height;
           let imgWidth=imge.width;
    
        //获取遮盖层内实际图片dom元素   
           let imgoverlayImg=$('#img-overlay img');
        //    遮罩层宽高
           let imgOverlayHeight=imgOverlay.height();
           let imgOverlayWidth=imgOverlay.width();
    
        //    计算宽高比,对图片进行设置
            if((imgHeight/imgWidth)>1.2) {
                    imgoverlayImg.css('height',imgOverlayHeight)
            };
    
            if((imgHeight/imgWidth)<1.2) {
                     imgoverlayImg.css({
                        'width':imgOverlayWidth,
                        'line-height':imgOverlayHeight,
                        'flex':1
                     })
            };
    
        })
        //再次点击显示小图
        imgOverlay.on('click',function(){
            imgOverlay.css({
                'display':'none',
            });
            //点击后清空遮盖层
            imgOverlay.empty();
        })

    };

    update();

    $(window).resize(function(){
        window.location.href="";
        update()
    });

   
});