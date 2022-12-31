var c = document.querySelector('#test')
function random_courses(path , titre , price ){
    let div  = document.createElement('div'),
    img  = document.createElement('img'),
    p  = document.createElement('p'),
    span  = document.createElement('span');
    img.src = path ;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu)
    span.appendChild(document.createTextNode(price));
    div.setAttribute('class','card col-3 me-2 mb-2');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    c.append(div)
}
let l = content.length;
x=Math.floor(Math.random() * l);console.log(x);
y=Math.floor(Math.random() * l);console.log(y);
z=Math.floor(Math.random() * l);console.log(z);

    random_courses(content[x].path , content[x].title , content[x].price);
    random_courses(content[y].path , content[y].title , content[y].price);
    random_courses(content[z].path , content[z].title , content[z].price);

var but= document.querySelector('#show_list');
but.addEventListener("click",function() {
    window.location.replace("All courses.HTML");
});
var butt2 = document.querySelector('#button_all_courses')
butt2.addEventListener('click' ,function() {
    window.location.replace("All courses.HTML");
} )



