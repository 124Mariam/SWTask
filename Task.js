import express from 'express';
const task= express();
const arr=["Ahmed","Mariam","Menna","Alaa","Mohamed"];

const studentsFunction =(request,response)=>{
let output ="<ul>";
for(let i=0;i<arr.length;i++){
    output +="<h1>"+"<li>"+arr[i]+"</li>"+"</h1>";

}

 output +="</ul>";
 response.send(output);
}
task.get('/students',studentsFunction);

task.listen(5000);