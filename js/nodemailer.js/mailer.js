fetch('./js/nodemailer.js/mail.json')
    .then(response => response.json())
    .then(data => console.log(data));


function showInfo(data) {
    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: data.login,
            pass: data.password
        }
    });

    let mailOptions = {
        from: data.login,
        to: 'olegborbych@gmail.com',
        subject: 'Тест',
        text: 'Тестове повідомлення для перевірки'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email відправлено: ' + info.response);
        }
    });

    console.log(data.login);
}

