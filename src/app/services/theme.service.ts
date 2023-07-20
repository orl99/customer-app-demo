import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngxs/store';
import { SetThemeMode } from '../state/actions/appState.actions';


const THEME_KEY = 'selected-app-theme';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false;
  constructor(private plat: Platform,
              private storage: Storage,
              private statusBar: StatusBar,
              private store: Store) {
    this.plat.ready().then(() => {
      this.storage.get(THEME_KEY).then( theme => {
        console.log('Default Theme', theme);
        this.setAppTheme(theme);
      });
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      // Prefers Dark mode
      prefersDark.addListener(e => {
        console.log('Dark Mode', e);
        this.setAppTheme(e.matches);
      });
    });
  }

  public getDarkModeStatus(): boolean {
    return this.darkMode;
  }

  /**
   * toggeAppTheme
   */
  public toggeAppTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  /**
   * setAppTheme
   */
  public setAppTheme(dark) {
      this.darkMode = dark;
      this.storage.set(THEME_KEY, this.darkMode);
      if (this.darkMode) {
        this.store.dispatch(new SetThemeMode('dark')); // Set theme state
        document.body.classList.add('dark');
        console.log('Dark mode active');
        this.statusBar.styleBlackOpaque();
        this.statusBar.backgroundColorByHexString('#000000');
      } else {
        this.store.dispatch(new SetThemeMode('light')); // Set theme state
        document.body.classList.remove('dark');
        console.log('Dark mode disactive;');
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
  }
}
