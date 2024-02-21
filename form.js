let form=document.querySelector('#form')
let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let cpassword=document.querySelector('#cpassword')

// form.addEventListener('submit',validate())

// function validate(){

// }
// form.addEventListener('submit',function(){

// code 
    
// })

form.addEventListener('submit',(obj)=>{

    if(ValidateInputs()==false)
    {
        obj.preventDefault();
    }
    if(ValidateInputs())
    {
        Swal.fire({
            icon:"success",
            title:"Success",
            text:"Form Submitted Successfully!"
        })
    }
    else
    {
        Swal.fire({
            icon:"error",
            title:"Oops....",
            text:"Please Provide Valid Inputs"
        })
    }

})

function ValidateInputs(){

    let username_value=username.value.trim();
    let email_value=email.value.trim();
    let password_value=password.value.trim();
    let cpassword_value=cpassword.value.trim();

    let success=true;

    if(username_value==="")
    {
        success=false
        SetError(username,"User name required")
    }
    else{
        SetSuccess(username)
    }

    if(email_value==="")
    {
        success=false
        SetError(email,"Email Id required")
    }
    else if(ValidateEmail(email_value)===false)
    {
        success=false
        SetError(email,"Invalid Email Id")
    }
    else{
        SetSuccess(email)
    }
    if(password_value==="")
    {
        success=false
        SetError(password,"Password required")
    }
    else if(password_value.length<8)
    {
        success=false
        SetError(password,"Password must be atleast 8 digit characters")
    }
    else{
        SetSuccess(password)
    }
    if(cpassword_value==="")
    {
        success=false
        SetError(cpassword,"Confirm Password required")
    }
    else if(password_value !==  cpassword_value)
    {
        success=false
        SetError(cpassword,"Password does not match")
    }
    else{
        SetSuccess(cpassword)
    }

    return success;

}