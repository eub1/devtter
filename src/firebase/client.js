import { initializeApp } from "@firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDERING_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const auth = getAuth();

const mapUserFromFirebaseAuthToUser = (user) => {
	// console.log(user);
	const { displayName, photoUrl, email } = user.reloadUserInfo;
	return {
		avatar: photoUrl,
		userName: displayName,
		url: `https://github.com/${displayName}`,
		email,
	};
};

// este callback es de firebase, se ejecuta cuando cambia el estado
// login o logout
export const onAuthStateChanged = (onChange) => {
	return auth.onAuthStateChanged((user) => {
		const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
		onChange(normalizedUser);
	});
};

export const loginWithGitHub = () => {
	const githubProvider = new GithubAuthProvider();
	githubProvider.setCustomParameters(firebaseConfig);
	return signInWithPopup(auth, githubProvider);
};

// .then(mapUserFromFirebaseAuthToUser)
// es lo mismo que hacer:
// .then((usuario) => {return mapUserFromFirebaseAuth(usuario)};
