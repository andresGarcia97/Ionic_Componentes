import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincipioPage } from './principio.page';

describe('PrincipioPage', () => {
  let component: PrincipioPage;
  let fixture: ComponentFixture<PrincipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
