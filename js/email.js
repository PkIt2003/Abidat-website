<html>
    <head>
        <tite>email.js</tite>
    </head>
    <body>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        functionn sendGmail(){
                Gmail.send({
                    Host : "smtp.gmail.com",
                    Username : "Premkumar",
                    Password : "prem#2003#2123",
                    To : 'tgunaal@gmail.com',
                    From : "gunaaldon@gmail.com",
                    Subject : "This is the subject",
                    Body : "And this is the body"
                }).then(
                message => alert(message)
                )};
            &rbrace;
   </script>
</body>
</html>
