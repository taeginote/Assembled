import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

//firebase SDK 추가
//여기있는 서버키들은 모두 환경변수로 설정하도록하자.

//그리고 백그라운드 알람을 받으려면 서버 워커 설정해야함
const firebaseConfig = {
	apiKey: 'AIzaSyDcke9CNyEUuiy8H7ovfSJDe-aftTZckBA',
	authDomain: 'assemble-notification.firebaseapp.com',
	projectId: 'assemble-notification',
	storageBucket: 'assemble-notification.appspot.com',
	messagingSenderId: '163880028666',
	appId: '1:163880028666:web:c494b96903ca668388bc43',
	measurementId: 'G-JPGXHPW5CQ',
}

function requestPermission() {
	const app = initializeApp(firebaseConfig)
	//onMessage를 통해 알람을 받을수있다.
	const messaging = getMessaging(app)
	getToken(messaging, {
		vapidKey:
			'BF-NXubsmJkLnmbSsQnbSUgRBMHu-HiGaxky5Niz2tJShRWq_HcZ2lhMC3Dbblb7L2cBJffbmeGmh-ovJ7m53vE',
	}).then(currentToken => {
		if (currentToken) {
			console.log('currentoken : ', currentToken) //등록 토큰 받
		} else {
			console.log('can not token ')
		}
	})

	console.log('Requesting permission...')
	Notification.requestPermission().then(permission => {
		if (permission === 'granted') {
			console.log('Notification permission granted.')
		} else {
			console.log('do not have premission!!')
		}
	})
}

requestPermission()
