export class SetThemeMode {
    static readonly type = '[appState] SetThemeMode]';
    constructor(public readonly payload?: 'dark' | 'light') {}
}
