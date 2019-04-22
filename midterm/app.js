//JSON DATA
data=[
    {
        "ID":"1",
        "NAME":"Samsung S7",
        "PRICE":"2500",
    },
    {
        "ID":"2",
        "NAME":"Samsung S8",
        "PRICE":"3000",
    },
    {
        "ID":"3",
        "NAME":"Samsung S9",
        "PRICE":"4500",
    },
    {
        "ID":"4",
        "NAME":"LG Optimus 6",
        "PRICE":"3400",
    },
    {
        "ID":"5",
        "NAME":"Samsung Note 8",
        "PRICE":"4000",
    },
    
];

sortingID= 1;
sortingNAME= 1;
sortingPRICE= 1;


window.onload = init;


function init(){
    //alert("check");
    document.querySelector("#save").onclick = saveee;
    document.querySelector("#idbutton").onclick = sortID;
    document.querySelector("#namebutton").onclick = sortNAME;
    document.querySelector("#pricebutton").onclick = sortPRICE;


    showData();
}

/*=============================================================================================*/
function saveee(){
    //alert("check");
    savename = document.querySelector("#name").value;
    saveprice = document.querySelector("#price").value;

    let contact = new Object();
    contact.NAME = savename;
    contact.PRICE = saveprice;
    contact.ID = data.length+1;

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";


    data.push(contact);  //배열에 새로운 값추가 

    showData();

}

/*=============================================================================================*/
function showData(){
        tb = document.querySelector("#tbodydata");
        tb.innerHTML = "";

        for (i = 0; i < data.length; i++){
            mtr = document.createElement("tr"); // 테이블 만들기

            td1 = document.createElement("td");    
            td2 = document.createElement("td"); // 셸
            td3 = document.createElement("td"); // 가로

            input1 = document.createElement("input");
            input2 = document.createElement("input");
        
            td1.innerText = data[i].ID;
            input1.value = data[i].NAME;
            input2.value = data[i].PRICE;

            td2.append(input1);
            td3.append(input2);

            mtr.append(td1);
            mtr.append(td2);
            mtr.append(td3);

            tb.append(mtr);
        }
    }
/*=============================================================================================*/

function sortID() {
        if(sortingID == 1){
            sortingID = 0;
            idbutton.innerText = "▲ ID";
            data.sort(function(a,b){return a.ID - b.ID});
        }
        else{
            sortingID = 1;
            idbutton.innerText = "▼ ID";
            data.sort(function(a,b){return b.ID- a.ID});
        }    
        showData();
    }


function sortNAME(){
        if(sortingNAME == 1){
            sortingNAME = 0;
            namebutton.innerText = "▲ NAME";
            data.sort(function(a, b){
                var x = a.NAME.toString();
                var y = b.NAME.toString();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0; });   
        }
        else{
            sortingNAME = 1;
            namebutton.innerText= "▼ NAME";
            data.sort(function(a, b){
                var x = b.NAME.toString();
                var y = a.NAME.toString();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0; });
        }
        showData();
}


function sortPRICE() {
        if(sortingPRICE == 1){
            sortingPRICE = 0;
            pricebutton.innerText = "▲ PRICE";
            data.sort(function(a,b){return a.PRICE - b.PRICE});
        }
        else{
            sortingPRICE = 1;
            pricebutton.innerText = "▼ price";
            data.sort(function(a,b){return b.PRICE- a.PRICE});
        }    
        showData();
}
/*=============================================================================================*/

function PressKey(event){

    if(event.keyCode == 13){ /*enter*/
        editData();
    }
    if(event.keyCode == 27){/*esc*/
        showData();
    }
    }
    


    function editData(){
        for(i = 0; i < data.length; i++){

            nameNode = document.querySelector(
                "#tableData tr:nth-child("+(i+1)+") td:nth-child(2) input");
            priceNode = document.querySelector(
                "#tableData tr:nth-child("+(i+1)+") td:nth-child(3) input");
            
            data[i].NAME = nameNode.value;
            data[i].PRICE = priceNode.value;
        }
    }
    
