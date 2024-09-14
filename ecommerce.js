function xyz(){
    let std = [ 23,'bilal', 'djjdj'];
    document.getElementById('std_array') .innerText = std ;
}

function abc(){
    let std = [ 22, 'bolal', 'fati'];
    document.getElementById('std_array') .innerText= 'bilal [11]'
}

$(document).ready(function(){
$(".box1").waypoint(function(){
$(".box1").addClass("animate__animated animate__fadeInLeft")
},{offset:"20%"})

$(".p1").waypoint(function(){
$(".p1").addClass("animate__animated animate__backInLeft")
},{offset:"90%"})

$ (".move").waypoint(function(){
 $ (".move").addClass("animate__animated animate__backInLeft")
 },{offset:"40%"})

 $(".box4").waypoint(function(){
 $(".box4").addClass("animate__animated animate__backInDown")
 },{offset:"10%"})
 $(".p2").waypoint(function(){
    $(".p2").addClass("animate__animated animate__backInLeft")
    },{offset:"50%"})
$(".p3").waypoint(function(){
        $(".p3").addClass("animate__animated animate__backInRight")
        },{offset:"100%"})
$(".p4").waypoint(function(){
            $(".p4").addClass("animate__animated animate__bounceInUp")
            },{offset:"10%"})
 $(".p5").waypoint(function(){
                $(".p5").addClass("animate__animated animate__backInLeft")
                },{offset:"40%"})
$(".p6").waypoint(function(){
                    $(".p6").addClass("animate__animated animate__backInRight")
                    },{offset:"20%"})

})

function img2_fun(){
    document.getElementById('pick').src="https://nov-one.myshopify.com/cdn/shop/files/2_b7919f44-7b0a-48c6-b8b0-6e752733dcec_540x.png?v=1705293957"
}
function img_fun(){
    document.getElementById('pick').src="https://nov-one.myshopify.com/cdn/shop/files/product-2_260x.png?v=1693965175"
}
function img3_fun(){
    document.getElementById('pick2') .src="https://nov-one.myshopify.com/cdn/shop/files/2_b7919f44-7b0a-48c6-b8b0-6e752733dcec_540x.png?v=1705293957"
}
function img4_fun(){
    document.getElementById('pick2') .src="https://nov-one.myshopify.com/cdn/shop/files/product-1_260x.png?v=1693965016"
}
function img5_fun(){
    document.getElementById('pick3') .src="https://nov-one.myshopify.com/cdn/shop/files/2_b7919f44-7b0a-48c6-b8b0-6e752733dcec_540x.png?v=1705293957"
}
function img6_fun(){
    document.getElementById('pick3') .src="https://nov-one.myshopify.com/cdn/shop/files/product-3_260x.png?v=1693965226%22"
}

