import { InjectionToken } from "@angular/core";

interface ITokenStorageService {
    getAuthToken(): string;
    setAuthToken(token: string): void;
    resetAuthToken(): void;
}

const TOKEN_STORAGE_SERVICE_TOKEN = new InjectionToken<ITokenStorageService>('tokenStorageService');

export {
    TOKEN_STORAGE_SERVICE_TOKEN,
    ITokenStorageService
};
