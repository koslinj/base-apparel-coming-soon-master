let form = document.querySelector('.form');
let email = document.querySelector('#email');
let info = document.querySelector('.info');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let flag=0;

function valid(){
    if(flag==0)
    {
        let text = email.value;
        if(text.match(pattern))
        {
            info.innerText = "Good! We will send you an email!";
            info.classList.add("valid");
            document.getElementById('error').classList.add("hidden");
            document.getElementById('email').classList.remove("redborder");
            flag=1;
        }
        else
        {
            info.innerText = "Please provide a valid email";
            document.getElementById('error').classList.remove("hidden");
            document.getElementById('email').classList.add("redborder");
        }
    }
}

document.querySelector('.arrowbg').onclick = valid;
