import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommentekComponent } from './kommentek.component';

describe('KommentekComponent', () => {
  let component: KommentekComponent;
  let fixture: ComponentFixture<KommentekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommentekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommentekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
