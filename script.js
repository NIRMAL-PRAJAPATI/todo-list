let tbody = document.querySelector('tbody');
let input = document.querySelector('#myText');
let addbutton = document.querySelector('#addbtn');
let deleter = document.querySelector('#alldelete');

deleter.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
})

        addbutton.addEventListener('click', async() => {
                let tasker = input.value;
                let status = "pending";

                if (tasker == "") {
                        console.log("null value");
                }

                else {
                        localStorage.setItem(tasker, status);

                        input.value = "";
                        tbody.innerHTML = tbody.innerHTML + `<tr id="trs">
                        <td id="task">${tasker}</td>
                        <td style="text-align: center;"><button type="submit" id="statusbtn" onclick="statusbuttonchanger()">${status}</button></td>
                        <td style="text-align: center;"><img onclick="closer()" id="close" src="img/delete.png" height="33"></td>
                        </tr>`;
                }
        });

        let statusbuttonchanger = () => {
                let statusbutton = document.querySelector('#statusbtn');

                statusbutton.addEventListener('click', (e) => {
                e.target.innerHTML = "completed";
                console.log(e)
                });
        }

        let closer = () => {
                let close = document.querySelector('#close');
                let tr = document.querySelector('#trs');

                tr.innerHTML = "";
                // localStorage.clear();
        }

        for(let i = 0; localStorage.length >= i; i++) {
                tbody.innerHTML = tbody.innerHTML + `<tr id="trs">
                        <td id="task">${localStorage.key(i)}</td>
                        <td style="text-align: center;"><button type="submit" id="statusbtn" onclick="statusbuttonchanger()">${localStorage.getItem(localStorage.key(i))}</button></td>
                        <td style="text-align: center;"><img onclick="closer()" id="close" src="img/delete.png" height="33"></td>
                        </tr>`;
        }