
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailTo = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('comments').value;  
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "neri.agustin.es@gmail.com",
        Password : "89EEB206082703C419FD3D0825FF872FFD5F",
        To : 'neri.agustin.es@outlook.com',
        From : emailTo,
        Subject : subject,
        Body : body
    }).then(
        message => {
            if (message.toLowerCase().includes('mailbox name not allowed') || message.toLowerCase().includes('invalid character')) {
                Swal.fire({
                    icon: 'error',
                    title: '¡Un momento!',
                    text: 'El correo electronico no es válido',
                  })                
            } else {

                if (message.toLowerCase().includes('cannot be an empty')) {
                    Swal.fire({
                        icon: 'error',
                        title: '¡Un momento!',
                        text: 'Todos los campos son requeridos'
                      })                                    
                } else {                    
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                    Toast.fire({
                        icon: 'success',
                        title: 'El mensaje ha sido enviado'
                    })  
                }

            }

        }
    );
})



