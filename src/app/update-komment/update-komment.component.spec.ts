import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKommentComponent } from './update-komment.component';

describe('UpdateKommentComponent', () => {
  let component: UpdateKommentComponent;
  let fixture: ComponentFixture<UpdateKommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateKommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
