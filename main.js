var courseName=document.querySelector("#courseName") ;
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var courses=[];
var inputs=document.querySelectorAll(".input");

var addbtn=document.querySelector("#click");
addbtn.addEventListener("click", function(e){
e.preventDefault();
add();
clear();
print();
deleteid();
})

function add(){
    var course={
        name:courseName.value,
        price:coursePrice.value,
        description:courseDescription.value,
        cap:courseCapacity.value
    }
    courses.push(course);
    console.log(course);
    }
    
function clear(){  //عشان يحذف القيم بعد ما اخلص منها 
     for(var i=0;i<inputs.lenght;i++){
        inputs[i].value="";
     }
}

function print(){
    var result=``;
    for(var i=0;i<courses.length;i++){
        result+=`
        <tr>
            <td> ${i}</td>
            <td> ${courses[i].name }</td>
            <td> ${courses[i].Price }</td>
            <td> ${courses[i].Description }</td>
            <td> ${courses[i].Capacity }</td>
            <td> <button class="btn-outline-info">update</button>
            </td>
            <td> <button class="btn-outline-info">delete</button>
            </td>
            

        </tr>
        `;
    }
    document.getElementById("data").innerHTML=result;

}
function deleteid(id){
console.log(id);

}

