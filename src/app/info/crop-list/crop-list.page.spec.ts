import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropListPage } from './crop-list.page';

describe('CropListPage', () => {
  let component: CropListPage;
  let fixture: ComponentFixture<CropListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
