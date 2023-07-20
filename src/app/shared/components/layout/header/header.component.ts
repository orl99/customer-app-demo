import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

import { ThemeState } from 'src/app/state/states/theme.state';
import { Select } from '@ngxs/store';
// Rxjs
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageNameTem: string;
  isDarkMode = true;
  @Input() pageName: string;
  @Select(ThemeState.getThemeMode) themeModeStatus$: Observable<'dark' | 'light'>;
  constructor(themeService: ThemeService) {
    this.themeModeStatus$
    .pipe()
    .subscribe((status) => {
      if (status === 'dark') {
        this.isDarkMode = true;
      } else {
        this.isDarkMode = false;
      }
    });
    // const status = themeService.getDarkModeStatus();
    // console.log('Menu', status);
  }

  ngOnInit() {
    this.pageNameTem = this.pageName;
  }

}
