var myimage=document.querySelector("#myimg");


var index=1;
var max=4;

var isEven=false;
var elements=document.querySelectorAll("img");
setInterval(() => {
    if(!isEven){
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.borderRadius=`20%`;
        }
    }
    else{
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.borderRadius=`0%`;
        }
    }
    isEven=!isEven;
    myimage.style.marginLeft=`-${index*650}px`;
    index++;
    if(index==max){
        index=0;
    }
}, 2000);