let elForm = document.querySelector(".form");
let elInputLink = document.querySelector("#link");
let elInpuName = document.querySelector("#name");
let elInputPrice = document.querySelector("#price");
let elBtn = document.querySelector("#btn");
let elWrapper = document.querySelector(".wrapper");

let data = [
    {
        imgLink: "",
        title:"",
        price:""
        
    }
];

elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    
    let newBox = document.createElement("div");
    let newImg = document.createElement("img");
    let newname = document.createElement("h3");
    let newprice = document.createElement("p");
    let newBtn = document.createElement("button");
    
    newBox.setAttribute("class" , "box");
    newImg.setAttribute("class" , "img");
    newImg.setAttribute("src" , elInputLink.value );
    newname.setAttribute("class" , "name");
    newprice.setAttribute("class" , "price");
    newBtn.setAttribute("class" , "btn-buy");
    
    newname.textContent = elInpuName.value;
    newprice.textContent = elInputPrice.value + " $";
    newBtn.textContent = "BUY";
    
    elWrapper.appendChild(newBox);
    newBox.appendChild(newImg);
    newBox.appendChild(newname);
    newBox.appendChild(newprice);
    newBox.appendChild(newBtn);
    
    data.imgLink = elInputLink.value;
    data.title = elInpuName.value;
    data.price = elInputPrice.value;
    console.log(data);
    
    elInputLink.value = "";
    elInpuName.value = "";
    elInputPrice.value = "";
    
    
})