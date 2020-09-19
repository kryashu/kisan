import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MandiPage } from './mandi.page';

describe('MandiPage', () => {
  let component: MandiPage;
  let fixture: ComponentFixture<MandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
