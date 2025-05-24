const API = 'https://01.gritlab.ax/api/auth/signin';

// What would happen if the user has to refresh their token
// Need to implement a refreshToken logic.

// switch to from localStorage to sessionStorage
export async function loginHandler(event) {
    event.preventDefault();

    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    if (!loginInput.value || !passwordInput.value) {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    const credentials = `${loginInput.value}:${passwordInput.value}`;
    const encodedCredentials = btoa(credentials);

    await sendLoginRequest(encodedCredentials, errorMessage);
}

// Send login request to the API
async function sendLoginRequest(encodedCredentials, errorMessage) {
    try { 
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json', // Removed cuz no body request
                'Authorization': `Basic ${encodedCredentials}`,
                'Accept': 'application/json' // added security
            },
        });

        // More specificed error
        if (!response.ok) {
            if (response.status === 401) {
                errorMessage.textContent = 'Invalid credentials. Please try again.';
            } else if (response.status >= 500) {
                errorMessage.textContent = 'Server error. Please try again later.';
            } else {
                errorMessage.textContent = `Login failed (Error ${response.status}).`;
            }
            return false; // Stop further processing
        }

        // const token = await response.json();
        // console.log("Token:",token)
        let token = await response.json();
        if (typeof token === 'object' && token.token) {
            token = token.token;
        }
        console.log("Token:", token);

        if (!token) {
            errorMessage.textContent = 'No token received from server.';
            return false;
        }
        // Store JWT token securely in sessionStorage
        sessionStorage.setItem('jwtToken', token);

        errorMessage.textContent = ''; 
        return true;

    } catch (error) {
        console.error('Error logging in:', error);
        errorMessage.textContent = 'Network error. Please check your connection.';
        return false;
    }
}

// Logout

export function handleLogout() {
    sessionStorage.removeItem('jwtToken'); 
    sessionStorage.clear(); // clear token when logout
    switchToLoginView(); 
}


export function switchToMainView() {
    console.log("Switching to MAIN view");
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('nav-bar').style.display = 'flex';
    document.getElementById('mainView').style.display = 'flex';
    document.getElementById('footer').hidden = false;
}

export function switchToLoginView() {
    console.log("Switching to LOGIN page");
    document.getElementById('loginView').style.display = 'flex';
    document.getElementById('nav-bar').style.display = 'none';
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('footer').hidden = true;
}