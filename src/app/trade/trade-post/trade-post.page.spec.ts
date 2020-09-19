import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradePostPage } from './trade-post.page';

describe('TradePostPage', () => {
  let component: TradePostPage;
  let fixture: ComponentFixture<TradePostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradePostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
