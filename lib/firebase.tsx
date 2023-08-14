import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB4kMEj0l4lwFobfGFx1vDQRq1iS-VIHZI",
	authDomain: "rapitienda-efae5.firebaseapp.com",
	projectId: "rapitienda-efae5",
	storageBucket: "rapitienda-efae5.appspot.com",
	messagingSenderId: "185650041612",
	appId: "1:185650041612:web:b7d6746f894bda83746f29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
