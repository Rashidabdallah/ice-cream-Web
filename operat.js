$(window).on("load", function () {
 "use strict";

  $("ul li ul ").hide(); //get the second unordered list element and hide it
  $(".has_sub_menu").click(function () { //when mouseover the first unordered list run the function
    const second_ul = $(this).next(); //get the second unordered list and asin it to const 'second_ul'
    $("ul li ul").not(second_ul).hide();
    second_ul.toggle();
  });

  const cupcake = $("nav ul li .second_ul li").first();
  cupcake.click(function () {
    document.querySelector(".img_slider #card #img1").setAttribute( "src","Media/cake/StockCake-Decadent Chocolate Cake_1721553451.jpg" );
    document.querySelector(".img_slider #card #img2").setAttribute("src" ,"Media/cake/StockCake-Decadent Chocolate Treat_1721553312.jpg" );
    document.querySelector(".img_slider #card #img3").setAttribute("src" ,"Media/cake/StockCake-Strawberry Cake Slice_1721553419.jpg" );
    document.querySelector(".img_slider #card #img4").setAttribute("src" , "Media/cake/StockCake-Sweet Pink Cupcake_1721553259.jpg" );
    document.querySelector(".img_slider #card #img5").setAttribute("src" ,"Media/cake/StockCake-Strawberry Layer Cake_1721553412.jpg");
    document.querySelector(".img_slider #card #img6").setAttribute("src" , "Media/cake/StockCake-Decadent Chocolate Cake_1721553451.jpg");
  });

  // let incremnt = 1;
  // setInterval(function(){
  //   if(incremnt = 6){
  //     incremnt = 1;
  //   }
  //   else{
  //     document.querySelector('nav').style.background-image = incremnt;
  //   }

  // }, 3000)


  /* ================================================================================
   image slider with container stage
  ========================================================================================*/
 
  let mypromis = new Promise((resolv,reject)=>{
    let bollian = true;
    if (bollian) {
      resolv('yes')
      
    }else{
      reject('faild')
    }

  }).then(()=>{
    
     var ul_list = document.querySelector("#stage ul");
    let stageWidth = document.getElementById("stage").offsetWidth;
    let num_slides = document.querySelectorAll("#stage ul li").length;
    let total_width = num_slides * stageWidth + "px";
    let float_left = `-${stageWidth}px`;
    ul_list.style.width = total_width;
  
    var counter = 0;
    setInterval(function () {
      if (counter == num_slides - 1) {
        float_left = 0;
        ul_list.style.left = float_left;
        counter = 0;
      } else {
        counter++;
        float_left = `-${stageWidth * counter}px`;
        ul_list.style.left = float_left;
      }
    }, 3000);
    
  }).catch((err)=>{
   console.log(err);
  })
 

  /* ===============================================================================
   controlling image slider with button
  ==================================================================================*/
 
  document.querySelector("button").addEventListener("click", function () {
    if (counter == num_slides - 1) {
      float_left = 0;
      ul_list.style.left = float_left;
      counter = 0;
    } else {
      counter++;
      float_left = `-${stageWidth * counter}px`;
      ul_list.style.left = float_left;
    }

  
  });






  /*----------------------------------------------------------------------
      POSTER SLIDER
  ---------------------------------------------------------------------- */



  let btn = document.querySelector('button');
  let main = document.querySelector('main');
  var body = document.querySelector('body');
  let fruit =  document.querySelector('main #fruit');
  
  
  

  let lista = document.querySelector('main div ul');
  let num_poster = document.querySelectorAll("main ul li").length;

  let  slider_left = -750; 
  let increment = 0;
  let bool = true;
  setInterval(function () {
    // $('#poster_info').slideDown('100' , 'swing')
    if (increment == num_poster - 1) {
      // $('#poster_info').slideUp('100' , 'swing')
      slider_left = 0;
      lista.style.left = slider_left;
      main.style.backgroundColor = '#f0c6e2'
      fruit.setAttribute('src','products/To-png/photo-1528821128474-27f963b062bf copy.png');
     
      increment = 0;
      slider_left = -750; 
    }
    else {
      
      increment++;
      lista.style.left = `${slider_left}px`;
     
      
      if (increment == 1) {
      
         main.style.backgroundColor='rgb(200 200 247 / 90%)' ;
         fruit.setAttribute('src','products/To-png/BG_blueBerry.png')
        
        
         
      }
      else if (increment == 2) {
      
         main.style.backgroundColor = 'hsl(180deg 71.36% 73.43% / 80%)'
         
        
      }
    
      slider_left += -750;  
    }
  }, 4500)

 







 /* ===============================================================================
   controlling product Veiw with button
  ==================================================================================*/

  let veiwall = document.getElementById('veiwAllproducrs');

  veiwall.addEventListener('click',function(){
   let arr= document.querySelectorAll('#last5Product');
   arr.forEach((echproduct)=>{
    // echproduct.style.display = 'none';
    echproduct.classList.toggle('hideProduct')
  })
   if(this.innerHTML == 'Veiw All'){
    $(this).html('return')
   }else{
    $(this).html('Veiw All')
   }
  })
  

   let moveimg1 = document.querySelector('.secproduct');
   let article = document.querySelector('article');
   let moveimg2 = document.querySelector('.origposition');
   let artcle = document.querySelector('article');
   artcle.addEventListener('mouseenter',()=>{

    moveimg2.classList.replace('origposition','movedposition')
   
   })
   artcle.addEventListener('mouseleave',()=>{

    moveimg2.classList.replace('movedposition','origposition')
  
   })


   let stro = document.getElementById('strong');
  
    setInterval(()=>{
     
    },4000)
  
    

});
