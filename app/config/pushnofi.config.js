var FCM = require('fcm-node')

var serverKey = 'AAAAueR-DeA:APA91bExp4Y6Olol0ZuJQJJ2lt6kutBlixokaYJpEPYRRvmrkTHtGmxrHNLKtqSlVHLxftl5DrWPkmbNEs-StMYm4vnU4ObGBHKE8zf0DyAX86pJYfwmq01masp9nCJ7xqvYYKlqxyvz';
var fcm = new FCM(serverKey);


module.exports = fcm