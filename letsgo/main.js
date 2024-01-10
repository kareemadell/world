
let up_par =document.querySelector(".up-par");
let body =document.querySelector("body");
let icon =document.querySelector(".up-par .right i");
let button_for_darkmode=document.querySelector(".up-par .right ");
let count_dark=0;
let bodyof_site=document.querySelector(" .bodyof_site");
let search =document.querySelector("  .bodyof_site .up_bar .left input");
let text_in_search=document.styleSheets[1].cssRules[7];
let region = document.querySelector(".bodyof_site .up_bar .right .dropdown ");
let backgroundcolor_nameofsquar = document.querySelector(".bodyof_site .up_bar .right .dropdown .nameofsquar");
let backgroundcolor_regiongion =document.querySelector(" .bodyof_site .up_bar .right .dropdown .region");
let father_of_child= document.querySelector(".bodyof_site .contant ");
let up_bar= document.querySelector(" .bodyof_site .up_bar");
let button_for_change=document.querySelector(".bodyof_site .up_bar .left button")

let on_inspan= document.querySelector( ".bodyof_site .up_bar .right .dropdown .region span.on");
let inspan= document.querySelectorAll( ".bodyof_site .up_bar .right .dropdown .region span");

let upBar=document.querySelector( ".bodyof_scound_site .upBar");
let span_of_upBar=document.querySelector( ".bodyof_scound_site .upBar span");
let icon_of_upBar=document.querySelector( ".bodyof_scound_site .upBar span i");
let bodyof_scound=document.querySelector( ".bodyof_scound_site ");
let contiant_of_scound=document.querySelector( ".bodyof_scound_site .contant");
let imag_div=document.querySelector( ".bodyof_scound_site .contant .left");
let h2_inRight=document.querySelector( ".bodyof_scound_site .contant .right h2");
let left_side_ofText=document.querySelector( ".bodyof_scound_site .contant .right .text .left");
let right_side_ofText=document.querySelector( ".bodyof_scound_site .contant .right .text .right");


// for json opj
 let data_from_json =new XMLHttpRequest();



 backgroundcolor_regiongion.style.display="none";
 backgroundcolor_nameofsquar.onclick=function(){
 if( backgroundcolor_regiongion.style.display==="none"){
  backgroundcolor_regiongion.style.display="block"
 }else{
  backgroundcolor_regiongion.style.display="none"
 }
 }

function get_data_data_from_json(){

 data_from_json.onreadystatechange=function(){
    if(this.readyState===4&&this.status===200){

        let object_from_json =JSON.parse(this.responseText);        
        
        for(let i=0 ; i<object_from_json.length;i++){
     let main_div = document.createElement("div");  
        let  image_div =document.createElement("div");  // end
        let image =document.createElement("img");  // end
        let text_div =document.createElement("div");
        let h2 = document.createElement("h2");  // end
         
        let populationHeader = document.createElement("h3");
        let populationSpanOne = document.createElement("span");
        let populationSpanTwo = document.createElement("span");
        
        let regionHeader = document.createElement("h3");
        let regionSpanOne = document.createElement("span");
        let regionSpanTwo = document.createElement("span");
        
        let capitalHeader = document.createElement("h3");
        let capitalSpanOne = document.createElement("span");
        let capitalSpanTwo = document.createElement("span");
        
      
        populationSpanOne.className = "one";
        populationSpanTwo.className = " two";
     
        regionSpanOne.className = "one";
        regionSpanTwo.className = " two";
        regionSpanTwo.id="child"

        capitalSpanOne.className = "one";
        capitalSpanTwo.className = " two";

        populationSpanOne.textContent = "Population:";
        populationSpanTwo.textContent = object_from_json[i].population;
        
        regionSpanOne.textContent = "Region:";
        regionSpanTwo.textContent = object_from_json[i].region;
        
        capitalSpanOne.textContent = "Capital:";
        capitalSpanTwo.textContent = object_from_json[i].capital;
        
       
        populationSpanOne.appendChild(populationSpanTwo);
        populationHeader.appendChild(populationSpanOne);
        
        regionSpanOne.appendChild(regionSpanTwo);
        regionHeader.appendChild(regionSpanOne);
        
        capitalSpanOne.appendChild(capitalSpanTwo);
        capitalHeader.appendChild(capitalSpanOne);
        
        text_div.className="text";
        image_div.className="image";
          main_div.className="child";
     image.src=`${object_from_json[i].flags.png}`;
    let H2text = document.createTextNode(object_from_json[i].name);
    h2.appendChild(H2text);
    image_div.appendChild(image);
    text_div.appendChild(h2);
    text_div.appendChild(populationHeader);
    text_div.appendChild(regionHeader);
    text_div.appendChild(capitalHeader);
main_div.appendChild(image_div);
main_div.appendChild(text_div);
main_div.id=object_from_json[i].numericCode
father_of_child.appendChild(main_div);    




main_div.onclick=function(){
  bodyof_site.style.display="none";
  bodyof_scound.style.display="block";
let id_of_main =this.id;
for(let o=0 ; o<object_from_json.length;o++){
if(object_from_json[o].numericCode===id_of_main){
  imag_div.innerHTML="";
  h2_inRight.innerHTML="";
  left_side_ofText.innerHTML="";
  right_side_ofText.innerHTML="";

let amage=document.createElement("img");
amage.src=`${object_from_json[o].flags.png}`;
imag_div.appendChild(amage);
h2_inRight.textContent=object_from_json[o].name;

 let first_h3=document.createElement("h3");
let first_spanOne=document.createElement("span");
let first_spanTwo=document.createElement("span");

first_spanOne.className="one";
first_spanTwo.className="two";
first_spanOne.textContent="Native Name:";
first_spanTwo.textContent=object_from_json[o].nativeName;

first_h3.appendChild(first_spanOne)
first_h3.appendChild(first_spanTwo)


let scound_h3=document.createElement("h3");
let scound_spanOne=document.createElement("span");
let scound_spanTwo=document.createElement("span");

scound_spanOne.className="one";
scound_spanTwo.className="two";
scound_spanOne.textContent="population:";
scound_spanTwo.textContent=object_from_json[o].population;

scound_h3.appendChild(scound_spanOne);
scound_h3.appendChild(scound_spanTwo);


let threed_h3=document.createElement("h3");
let threed_spanOne=document.createElement("span");
let threed_spanTwo=document.createElement("span");

threed_spanOne.className="one";
threed_spanTwo.className="two";
threed_spanOne.textContent="Region:";
threed_spanTwo.textContent=object_from_json[o].region;

threed_h3.appendChild(threed_spanOne);
threed_h3.appendChild(threed_spanTwo);


let fourd_h3=document.createElement("h3");
let fourd_spanOne=document.createElement("span");
let fourd_spanTwo=document.createElement("span");

fourd_spanOne.className="one";
fourd_spanTwo.className="two";
fourd_spanOne.textContent="sub Region:";
fourd_spanTwo.textContent=object_from_json[o].subregion;

fourd_h3.appendChild(fourd_spanOne);
fourd_h3.appendChild(fourd_spanTwo);


let fived_h3=document.createElement("h3");
let fived_spanOne=document.createElement("span");
let fived_spanTwo=document.createElement("span");

fived_spanOne.className="one";
fived_spanTwo.className="two";

fived_spanOne.textContent="capital:";
fived_spanTwo.textContent=object_from_json[o].capital;

fived_h3.appendChild(fived_spanOne);
fived_h3.appendChild(fived_spanTwo);

left_side_ofText.appendChild(first_h3);
left_side_ofText.appendChild(scound_h3);
left_side_ofText.appendChild(threed_h3);
left_side_ofText.appendChild(fourd_h3);
left_side_ofText.appendChild(fived_h3);




let one_left_h3=document.createElement("h3");
let one_left_spanOne=document.createElement("span");
let one_left_spanTwo=document.createElement("span");

one_left_spanOne.className="one";
one_left_spanTwo.className="two";

one_left_spanOne.textContent="top Level Domain:";
one_left_spanTwo.textContent=object_from_json[o].topLevelDomain;

one_left_h3.appendChild(one_left_spanOne);
one_left_h3.appendChild(one_left_spanTwo);


let two_left_h3=document.createElement("h3");
let two_left_spanOne=document.createElement("span");
let two_left_spanTwo=document.createElement("span");
two_left_spanOne.className="one";
two_left_spanTwo.className="two";
two_left_spanOne.textContent="currencies:";
two_left_spanTwo.textContent=object_from_json[o].currencies[0].name;
two_left_h3.appendChild(two_left_spanOne);
two_left_h3.appendChild(two_left_spanTwo);
let three_left_h3=document.createElement("h3");
let three_left_spanOne=document.createElement("span");
let three_left_spanTwo=document.createElement("span");

three_left_spanOne.className="one";
three_left_spanTwo.className="two";

three_left_spanOne.textContent="languages:";

for(let z=0; z<object_from_json[o].languages.length ;z++){
let spanf=document.createElement("span");
  spanf.className="two"
  spanf.textContent=object_from_json[o].languages[z].name;
  three_left_spanTwo.appendChild(spanf)
  
}
three_left_h3.appendChild(three_left_spanOne);
three_left_h3.appendChild(three_left_spanTwo);
right_side_ofText.appendChild(one_left_h3);
right_side_ofText.appendChild(two_left_h3);
right_side_ofText.appendChild(three_left_h3);

let text_in_divone=document.querySelectorAll(".bodyof_scound_site .contant .one");
let text_in_divtwo=document.querySelectorAll(".bodyof_scound_site .contant .two");

if(h2_inRight.style.color==="white"){
  for(let t=0;t<text_in_divone.length ;t++){
  text_in_divone[t].style.color="white";
}
for(let t=0;t<text_in_divone.length ;t++){
  text_in_divtwo[t].style.color="hsl(0, 0%, 98%)";
} 
    
}else if(h2_inRight.style.color==="black"){
  for(let t=0;t<text_in_divone.length ;t++){
    text_in_divone[t].style.color="black";
  }
  for(let t=0;t<text_in_divone.length ;t++){
    text_in_divtwo[t].style.color="black";
  } 
      
}




}

}
};

}
  }
 }
 

 data_from_json.open("get","rest-countries-api-with-color-theme-switcher-master/data.json",true);
 data_from_json.send();

}

get_data_data_from_json()
dark_mode();

function dark_mode(){
    button_for_darkmode.addEventListener("click",
    function(){
      let child_background = document.querySelectorAll(".bodyof_site .contant .child");
let child_color_font = document.querySelectorAll(".bodyof_site .contant .child .text h2");
let child_one_font = document.querySelectorAll(".bodyof_site .contant .child .text h3 .one ");

let text_in_divone=document.querySelectorAll(".bodyof_scound_site .contant .one");
let text_in_divtwo=document.querySelectorAll(".bodyof_scound_site .contant .two");
if(count_dark===0){ 
   h2_inRight.style.color="white";
   
  
  

  
   for(let t=0;t<text_in_divone.length ;t++){
    text_in_divone[t].style.color="white";
  }
  for(let t=0;t<text_in_divone.length ;t++){
    text_in_divtwo[t].style.color="hsl(0, 0%, 98%)";
  } 

 
  

        search.style.backgroundColor=" hsl(209, 23%, 22%)";
        backgroundcolor_nameofsquar.style.backgroundColor=" hsl(209, 23%, 22%)";
        region.style.color="white";
        backgroundcolor_regiongion.style.backgroundColor=" hsl(209, 23%, 22%)";
        search.style.color="white";
        button_for_change.style.backgroundColor=" hsl(209, 23%, 22%)";
        button_for_change.style.color="white";
        up_bar.style.backgroundColor="hsl(207, 26%, 17%)";
        // ##############
        upBar.style.backgroundColor="hsl(207, 26%, 17%)";
        span_of_upBar.style.backgroundColor=" hsl(209, 23%, 22%)";
        icon_of_upBar.style.color="white ";
        // ##################
       for(let i = 0 ; i<child_background.length;i++){
        child_background[i].style.backgroundColor="hsl(209, 23%, 22%)";
        child_color_font[i].style.color="white"; 
      };
      // ###############
      for(let m =0 ; m<child_one_font.length;m++){
        child_one_font[m].style.color="white";
      };
              body.style.backgroundColor="hsl(207, 26%, 17%) " ;
              up_par.style.backgroundColor=" hsl(209, 23%, 22%)";
              icon.style.color=" hsl(0, 0%, 100%)";
              up_par.style.color=" hsl(0, 0%, 100%)";
              count_dark++;
              text_in_search.style.color="white";
       }else if(count_dark===1){

  for(let t=0;t<text_in_divone.length ;t++){
          text_in_divone[t].style.color="black";
        };
        for(let t=0;t<text_in_divone.length ;t++){
          text_in_divtwo[t].style.color="black";
        };

 
       

        h2_inRight.style.color="black";
        upBar.style.backgroundColor=" hsl(0, 0%, 98%)";
        span_of_upBar.style.backgroundColor=" hsl(0, 0%, 100%)";
        icon_of_upBar.style.color="black ";

         body.style.backgroundColor=" hsl(0, 0%, 98%)" ;
      up_par.style.backgroundColor=" hsl(0, 0%, 100%)";
      icon.style.color="   hsl(200, 15%, 8%)";
      up_par.style.color="  hsl(200, 15%, 8%)";
      up_bar.style.backgroundColor="white";
      search.style.backgroundColor=" hsl(0, 0%, 100%)";
      search.style.color="black";
      text_in_search.style.color="#999";
      button_for_change.style.backgroundColor="white";
        button_for_change.style.color="black";
      backgroundcolor_nameofsquar.style.backgroundColor=" hsl(0, 0%, 100%)";
        region.style.color="black";
      backgroundcolor_regiongion.style.backgroundColor=" hsl(0, 0%, 100%)";
      for(let i = 0 ; i<child_background.length;i++){
        child_background[i].style.backgroundColor="hsl(0, 0%, 100%)";
        child_color_font[i].style.color="black"; 
       }
       for(let m =0 ; m<child_one_font.length;m++){
        child_one_font[m].style.color="black";
      };
      count_dark--;
       }
          })
    };
    

    search.addEventListener("change",function(){
      let child_color_font = document.querySelectorAll(".bodyof_site .contant .child .text h2");
      let father = document.querySelectorAll(".bodyof_site .contant .child")
      for(let i=0 ; i<child_color_font.length;i++){
      if(child_color_font[i].textContent.toUpperCase().includes(this.value.toUpperCase())){
        father[i].style.display="block";
      }else{
         father[i].style.display="none";
        }
   }
   
  

  })


  for(let x = 0;x<inspan.length;x++){
    inspan[x].addEventListener("click",function(){
     let child_color_region = document.querySelectorAll(".bodyof_site .contant .child #child");
     let father = document.querySelectorAll(".bodyof_site .contant .child")
 
    for(let i = 0;i<father.length;i++){
     
 if(child_color_region[i].textContent.toUpperCase().includes( inspan[x].textContent.toUpperCase())){
 
   if(inspan[x].className==="off"){
     father[i].style.display="block"
   }else if(inspan[x].className==="on"){
    for(let m = 0;m<father.length;m++){
      father[m].style.display="block"
 }
    }
     
 
 }else{
   father[i].style.display="none";
     }
        }
  })
 }
for(let i = 0;i<inspan.length;i++){
 
     inspan[i].addEventListener("click",function(){

  if(  inspan[i].className==="on"){
    inspan[i].className="off"
      }else{  
        for(let x =0;x<inspan.length;x++)
        inspan[x].className="off"
        inspan[i].className="on"
      }
     })
    };

function create_child(){
    for(let i=0 ; i<object_from_json.length;i++){
      let main_div = document.createElement("div");  
         let  image_div =document.createElement("div");  // end
         let image =document.createElement("img");  // end
         let text_div =document.createElement("div");
         let h2 = document.createElement("h2");  // end
          
         let populationHeader = document.createElement("h3");
         let populationSpanOne = document.createElement("span");
         let populationSpanTwo = document.createElement("span");
         
         let regionHeader = document.createElement("h3");
         let regionSpanOne = document.createElement("span");
         let regionSpanTwo = document.createElement("span");
         
         let capitalHeader = document.createElement("h3");
         let capitalSpanOne = document.createElement("span");
         let capitalSpanTwo = document.createElement("span");
         
       
         populationSpanOne.className = "one";
         populationSpanTwo.className = " two";
      
         regionSpanOne.className = "one";
         regionSpanTwo.className = " two";
         regionSpanTwo.id="child"
 
         capitalSpanOne.className = "one";
         capitalSpanTwo.className = " two";
 
         populationSpanOne.textContent = "Population:";
         populationSpanTwo.textContent = object_from_json[i].population;
         
         regionSpanOne.textContent = "Region:";
         regionSpanTwo.textContent = object_from_json[i].region;
         
         capitalSpanOne.textContent = "Capital:";
         capitalSpanTwo.textContent = object_from_json[i].capital;
         
        
         populationSpanOne.appendChild(populationSpanTwo);
         populationHeader.appendChild(populationSpanOne);
         
         regionSpanOne.appendChild(regionSpanTwo);
         regionHeader.appendChild(regionSpanOne);
         
         capitalSpanOne.appendChild(capitalSpanTwo);
         capitalHeader.appendChild(capitalSpanOne);
         
         text_div.className="text";
         image_div.className="image";
           main_div.className="child";
      image.src=`${object_from_json[i].flags.png}`;
     let H2text = document.createTextNode(object_from_json[i].name);
     h2.appendChild(H2text);
     image_div.appendChild(image);
     text_div.appendChild(h2);
     text_div.appendChild(populationHeader);
     text_div.appendChild(regionHeader);
     text_div.appendChild(capitalHeader);
 main_div.appendChild(image_div);
 main_div.appendChild(text_div);
 father_of_child.appendChild(main_div);    
 
    } 
}
  
span_of_upBar.onclick=function(){
  bodyof_site.style.display="block";
  bodyof_scound.style.display="none";
}