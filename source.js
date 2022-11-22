let name2 = localStorage.getItem("name") ? localStorage.getItem("name") : "guest";

const para = document.querySelector("#para");
const input = document.querySelector("#name_input");

para.innerHTML = `Hello ! ${name2}`;

const save_btn = document.querySelector("#save_btn");
const reset_btn = document.querySelector("#reset_btn");

reset_btn.addEventListener("click" , ()=> {
    localStorage.clear();
    location.reload();
})

save_btn.addEventListener("click", ()=> {
    if (input.value.length < 1){
        alert("please enter name before saving")
    }

    else {
        localStorage.setItem("name" , input.value);
        location.reload();
    }

})

