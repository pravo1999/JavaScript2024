///global declaration
var varNo1=document.getElementById('txtNo1')
var varNo2=document.getElementById('txtNo2')
var varResult=document.getElementById('txtResult')

///PL code
function plus_click(){
var no1=parseInt(varNo1.value)
var no2=parseInt(varNo2.value)
var msg=sum(no1,no2)
}
function minus_click(){
var no1=parseInt(varNo1.value)
var no2=parseInt(varNo2.value)
var msg2=minus(no1,no2)
}
function mul_click(){
var no1=parseInt(varNo1.value)
var no2=parseInt(varNo2.value)
var msg3=mul(no1,no2)
}
function divide_click(){
var no1=parseInt(varNo1.value)
var no2=parseInt(varNo2.value)
var msg4=divide(no1,no2)
}
///BLL code
function sum(n1,n2){
var res=n1+n2;
varResult.value=res
return res
}
function minus(n1,n2){
var res=n1-n2;
varResult.value=res
return res
}
function mul(n1,n2){
var res=n1*n2;
varResult.value=res
return res
}
function divide(n1,n2){
var res=n1/n2;
varResult.value=res
return res
}

