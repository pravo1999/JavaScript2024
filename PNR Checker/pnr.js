///event or pl
var rapidApiKey='7f38cd26bbmshf06c2b68323dbf9p127595jsnad2cfe4c9e44'
function checkPnr_click(){
    var pnr=document.getElementById('txtPnr').value
    getPnrStatus(pnr)   
}
///bll
function afterResponseCallback(){
    document.getElementById('h1_loading').innerText="Done...."
    var data=this.responseText 
    var jsObject=JSON.parse(data)
    var htmlString=`<h1>Details of PNR No ${jsObject.data.Pnr}</h1><br>
    Train No.${jsObject.data.TrainNo}<br>
    Train Name${jsObject.data.TrainName}<br>
    Date of Journey${jsObject.data.Doj}<br>
    Start Station${jsObject.data.From}<br>
    End Station${jsObject.data.To}<br> `
    document.getElementById('divData').innerHTML=htmlString
}
function  getPnrStatus(pnrno){
    var r=new XMLHttpRequest()
    r.open('GET',`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrno}`)
    r.setRequestHeader('X-RapidAPI-Key', '7f38cd26bbmshf06c2b68323dbf9p127595jsnad2cfe4c9e44');
    r.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
    r.onload=afterResponseCallback
    r.send()
    document.getElementById('h1_loading').innerText='Loading....'
}