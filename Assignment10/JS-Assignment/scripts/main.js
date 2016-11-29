function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    var name ='FirstName'+ 'lastName';
    document.getValue(p1_fullname).innerHtml= name;




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    var email= 'Both Fields Are Filled Out:';
    document.getValue('p1_valid').innerHtml=email;


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    var random= 'FullName.length';
    document.getValue('P1_fullNameLength').innnerHtml=random;




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    











    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
