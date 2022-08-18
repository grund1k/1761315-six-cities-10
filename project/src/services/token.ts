const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type TokenType = string;

export class Token {
  static getToken(): TokenType {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  }

  static saveToken(token: TokenType): void {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  }

  static dropToken(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  }
}
