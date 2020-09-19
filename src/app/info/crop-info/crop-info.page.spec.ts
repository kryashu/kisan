import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropInfoPage } from './crop-info.page';

describe('CropInfoPage', () => {
  let component: CropInfoPage;
  let fixture: ComponentFixture<CropInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
