const form = document.querySelector("#form-new")
let name1 = form.elements.namedItem("firstName");
let name2 = form.elements.namedItem("lastName");
let msg1 = document.getElementById("err-msg1");
let msg2 = document.getElementById("err-msg2");

let name = [name1, name2];
let msg = [msg1, msg2];
let i, j;
for (i = 0; i <= name.length - 1; i++) {

    name[i].addEventListener("input", function validate(e) {

        let target = e.target;
        for (j = i; j <= msg.length - 1; j++) {
            if (target.value == "") {
                msg[j].innerHTML += 'This field is required';
                return false;
            } else if (target.value.length <= 3 || target.value.length >= 15) {
                msg[j].innerHTML += "Name should be within 3-15 characters";
                return false;
            } else if (target.value.length > 3 || target.value.length < 15) {
                msg[j].innerHTML += "";
                return true;
            }
        }
    });

}