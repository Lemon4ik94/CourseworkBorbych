var token = '6926757237:AAF2PiXfLNSV53zfmrQanRjiUWvDm9fEWoM'
var chat_id = '948384331';
var subscribe = 'Just some text';
var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();