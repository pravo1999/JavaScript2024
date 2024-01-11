///Global declaration for PL
var varId=document.getElementById('txtId')
var varName=document.getElementById('txtName')
var varAddress=document.getElementById('txtAddress')
var varMobileNo=document.getElementById('txtMobileNo')
var varDiv=document.getElementById('divCustomer')

///PL code

///add customer
function addCustomer_click(){
    var id=parseInt(varId.value)
    var name=varName.value
    var address=varAddress.value
    var mobileNo=varMobileNo.value
    addCustomer(id,name,address,mobileNo)
    alert('customer added successfully')
    var data=getAllCustomerInTableFormat()
    varDiv.innerHTML=data
    
}

///search customer
function searchCustomer_click(){
   var name=varName.value 
   var obj=searchCustomer(name)
   if(obj){
    varId.value=obj.id
    varAddress.value=obj.address
    varMobileNo.value=obj.mobileNo
   }
   else{
        alert('customer not found')
   }
}

///delete customer
function deleteCustomer_click(){
    var id=parseInt(varId.value)
    var obj=deleteCustomer(id)
    if(obj){
        var data=getAllCustomerInTableFormat()
        varDiv.innerHTML=data
    }
    else{
        alert('id not found')
    }
}

///modify customer
function modifyCustomer_click(){
    
}

///Global declaration for BLL
var cusArr=[]

///BLL code
function addCustomer(id,name,address,mobileNo){
    var cus={id:id, name:name, address:address, mobileNo:mobileNo}
    cusArr.push(cus)
}

function matchCustomerOnBasisOfName(cus){
    
}
function searchCustomer(name){
    // function matchCustomerOnBasisOfName(cus){
    //     return cus.name==name
    // }
    // var obj=cusArr.find(matchCustomerOnBasisOfName)
    // return obj
    var obj=cusArr.find(cus=>cus.name==name)
    return obj
}


function deleteCustomer(id){
    function matchCustomerOnBasisOfId(cus){
        return cus.id==id
    }
    var arrIndex=cusArr.findIndex(matchCustomerOnBasisOfId)
    if (arrIndex!=-1){
        cusArr.splice(arrIndex,1)
        return true
    }
    else{
        return false
    }
    
}

function getAllCustomerInTableFormat(){

    var data=`<table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Mobile No</th>
    </tr>`

    for (var i=0;i<cusArr.length;i++){
        var e=cusArr[i]
        data+=`<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.address}</td>
        <td>${e.mobileNo}</td>
    </tr>`
    }
    data+=`</table>`
    return data

}

