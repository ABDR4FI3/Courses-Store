var c = document.querySelector('#test');
function create(path , titre , price ){
    let div  = document.createElement('div'),
    img  = document.createElement('img'),
    p  = document.createElement('p'),
    span  = document.createElement('span');
    img.src = path ;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(price));
    div.setAttribute('class','card col-3 me-2 mb-2');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    c.append(div)
}

content.forEach((v)=>{
    create(v.path , v.title , v.price);
    });


function  filall(){
let  div =document.querySelector('#test');
div.innerHTML="";
content.forEach((v)=>{
create(v.path , v.title , v.price);
});
}


function  filcss(){
    let  div =document.querySelector('#test');
    div.innerHTML="";

    content.forEach((v)=>{
        if (v.cat=="css"){

            create(v.path , v.title , v.price);
        };
    
    });
}
function  filjs(){
  let  div =document.querySelector('#test');
   div.innerHTML="";
    
   content.forEach((v)=>{
    if (v.cat=="Js"){
      create(v.path , v.title , v.price);
   };
        
 });
}
function  filhtml(){
  let  div =document.querySelector('#test');
 div.innerHTML="";
        
     content.forEach((v)=>{
                if (v.cat=="html"){
        
                    create(v.path , v.title , v.price);
                };
            
            });
            }
            function  filphp(){
                let  div =document.querySelector('#test');
                div.innerHTML="";
            
                content.forEach((v)=>{
                    if (v.cat=="php"){
            
                        create(v.path , v.title , v.price);
                    };
                
                });
                }
                function  filsql(){
                    let  div =document.querySelector('#test');
                    div.innerHTML="";
                
                    content.forEach((v)=>{
                        if (v.cat=="sql"){
                
                            create(v.path , v.title , v.price);
                        };
                    
                    });
                    }


function  filprice(){
    let  div =document.querySelector('#test');
    let val = document.querySelector('#range').value;  
    div.innerHTML="";             
    content.forEach((v)=>{
        if (v.price<=val){                  
        create(v.path , v.title , v.price);
        }               
    });
}
function  filsearch(){
    let  div =document.querySelector('#test');
    let val = document.querySelector('#search').value;  
    div.innerHTML="";             
    content.forEach((v)=>{
        console.log(v.title.includes(val));
        if (v.title.includes(val)){                  
        create(v.path , v.title , v.price);
        }               
    });
}
addEventListener('change',filprice);

//pour afficher la valeur du range 
function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
  }
