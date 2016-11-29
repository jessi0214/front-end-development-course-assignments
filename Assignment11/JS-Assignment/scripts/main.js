var messages= [  "A", "B",  "C"  ];
messages.shift( "First Name is Required");
messages.push( "Last Name is Required");
messages.shift.firstName( "First name is Required");
messages.push.lastName( "Last Name is Required");
messages.push.emailaddress(" Email is required")

for ( firstName; lastName ; emailaddress; ){
  document.getElementById("errorList").innnerHTMl=messages}

  var user = {
         firstName: "firstName",
         lastName: "lastName",
         email:" Email"
         fullName: function(){
             return this.firstName + " " + this.lastName;
         };
         var user = true;
    if (user === true){ alert("Submitted")

    }
