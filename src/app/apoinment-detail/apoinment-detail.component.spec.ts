import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApoinmentDetailComponent } from './apoinment-detail.component';
describe('ApoinmentDetailComponent', () => {
  let component: ApoinmentDetailComponent;
  let fixture: ComponentFixture<ApoinmentDetailComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoinmentDetailComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ApoinmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
