import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SajatKommentComponent } from './sajat-komment.component';

describe('SajatKommentComponent', () => {
  let component: SajatKommentComponent;
  let fixture: ComponentFixture<SajatKommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SajatKommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SajatKommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
