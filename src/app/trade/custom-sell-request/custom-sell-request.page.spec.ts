import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSellRequestPage } from './custom-sell-request.page';

describe('CustomSellRequestPage', () => {
  let component: CustomSellRequestPage;
  let fixture: ComponentFixture<CustomSellRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSellRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSellRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
