import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeHomePage } from './trade-home.page';

describe('TradeHomePage', () => {
  let component: TradeHomePage;
  let fixture: ComponentFixture<TradeHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
