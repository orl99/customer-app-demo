import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedimentsPage } from './pediments.page';

describe('PedimentsPage', () => {
  let component: PedimentsPage;
  let fixture: ComponentFixture<PedimentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedimentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
