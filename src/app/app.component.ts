import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Services
import { ThemeService } from 'src/app/services/theme.service';

// Ngxs
import { Select } from '@ngxs/store';
import { ThemeState } from 'src/app/state/states/theme.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'bar-chart'
    },
    {
      title: 'Trafico',
      url: 'trafic',
      icon: 'pulse'
    },
    {
      title: 'Pedimentos',
      url: 'pediments',
      icon: 'boat'
    },
    {
      title: 'Administracion',
      url: 'administration',
      icon: 'person'
    },
    {
      title: 'Descargables',
      url: 'cloud-search',
      icon: 'cloud-download'
    },
  ];
  public labels = ['Opcion-1', 'Opcion-2', 'Opcion-3', 'Opcion-4'];

  public darkModeStatus: boolean;
  public activeToggle =  false;
  public isDarkMode;

  @ViewChild('darkModeToggle', { static: true }) darkModeToggle: ElementRef;
  @Select(ThemeState.getThemeMode) themeModeStatus$: Observable<'dark' | 'light'>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.themeModeStatus$
      .pipe()
      .subscribe((status) => {
        console.log('OBS DARK');
        if (this.isDarkMode === undefined) {
          console.log('just Ones');
          if ( status === 'dark' ) {
              this.isDarkMode = true;
          } else {
                this.isDarkMode =  false;
          }
          this.activeToggle = true;
        }
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  forceDarkMode($event) {
    console.log($event);
    this.themeService.toggeAppTheme();
  }
}
