const my_mail = prompt();
const my_mail_list = ["utente@mail.it","miamail@mail.it","","giovanni@gmail.com","mario@mail.it","luca@mail.it"];
let accesso = 0;



for (let i = 0; i < my_mail_list.length ; i++) {


    const mail_da_controllare = my_mail_list[i];


    if(mail_da_controllare == my_mail){
        accesso=1;
    }

}

if (accesso == 1){
    alert("puoi accedere!");
}
else{
    alert("non puoi accedere");
}