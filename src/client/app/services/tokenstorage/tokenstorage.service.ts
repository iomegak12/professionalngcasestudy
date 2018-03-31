import { ITokenStorageService } from "./itokenstorage.service";

const AUTH_TOKEN_KEY = 'pwcatk';

class TokenStorageService implements ITokenStorageService {
    setAuthToken(token: string): void {
        if (token) {
            window.localStorage.setItem(AUTH_TOKEN_KEY, token);
        }
    }

    getAuthToken(): string {
        let authToken = window.localStorage.getItem(AUTH_TOKEN_KEY);

        return authToken;
    }

    resetAuthToken() {
        window.localStorage.removeItem(AUTH_TOKEN_KEY);
    }
}

export default TokenStorageService;
