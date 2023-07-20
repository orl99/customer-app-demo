import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraficPage } from './trafic.page';

describe('TraficPage', () => {
  let component: TraficPage;
  let fixture: ComponentFixture<TraficPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
