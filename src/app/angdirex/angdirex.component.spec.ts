import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngdirexComponent } from './angdirex.component';

describe('AngdirexComponent', () => {
  let component: AngdirexComponent;
  let fixture: ComponentFixture<AngdirexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngdirexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngdirexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
