function SendMail() {
    var params = {
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
        
    }
    emailjs.send("service_c06vmjb", "template_k07yrpd", params).then(function (res) {
        if(res.status == 200){
            $('#button').val('Submitted')
            $('#mail_success').css('display', 'block')
        }else{
            $('#mail_fail').css('display', 'block')
            $('#button').val('Submit')
        }
    })
}

$('#contact_form').submit(function(e){
    e.preventDefault()
    $('#button').val('Sending...')
    SendMail()
})
