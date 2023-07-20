import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackingTimeLineSimpleComponent } from './tracking-time-line-simple.component';

describe('TrackingTimeLineSimpleComponent', () => {
  let component: TrackingTimeLineSimpleComponent;
  let fixture: ComponentFixture<TrackingTimeLineSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingTimeLineSimpleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingTimeLineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
