const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");
const input3El = document.querySelector("#input3");
const input4El = document.querySelector("#input4");
const input5El = document.querySelector("#input5");
const formEl = document.querySelector("#form");
const listEl = document.querySelector("#input-list");


formEl.addEventListener("submit" , (a) =>{
    a.preventDefault();
    let list = document.createElement("div");
    let text = document.createElement("div");
    let button = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("img-link")
    
    list.classList.add("list");
    text.classList.add("list_text" , "child-1") ;
    img.classList.add("list_img" , "child-2");
    button.classList.add("list_btn" , "child-3");
    
    let val = input3El.value
    
    img.src = val;
    listEl.prepend(list);  
    listEl.appendChild = "list";
    list.className = "new__box";
    list.appendChild(img);
    list.appendChild(text);
    list.appendChild(button);

    console.log(list);
    let p1 =document.createElement("p")
    let p2 =document.createElement("p")
    let p3 =document.createElement("p")
    let p4 =document.createElement("p")

    text.appendChild(p1)
    text.appendChild(p2)
    text.appendChild(p3)
    text.appendChild(p4)

    p1.innerHTML = `TAom nomi: ${input1El.value}.`
    p2.innerHTML = ` taom narxi: $${input2El.value}.`
    p3.innerHTML = `taom oshpaz: ${input4El.value}.`
    p4.innerHTML = `Taom restoran:${input5El.value}.`



    let udalit = document.createElement("button");
    let data = document.createElement("button");
    let tayor = document.createElement("button");

    button.appendChild(udalit);
    button.appendChild(data);
    button.appendChild(tayor);


    tayor.addEventListener ("click", () => {
        list.style.background = "red"
    })
    
    // const d = new Date().getDay;
    //  console.log(d);
    udalit.addEventListener("click", () => {
        list.remove();
    })

    udalit.classList.add("delet");
    data.classList.add("data");
    tayor.classList.add("tomom");

    udalit.innerHTML = "delete"
    data.innerHTML = ""
    tayor.innerHTML = "tamom"
})
