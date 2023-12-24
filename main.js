document.write("36.to create a specified number of elements and numeric value filled array"+"<br>");
function test36(l,e){
    var x=[];
    for(let i=0;i<l;i++){
        x.push(e);
    }
    return x;
}
document.write(test36(6,0)+"<br>");
document.write(test36(4,11)+"<br><br>");