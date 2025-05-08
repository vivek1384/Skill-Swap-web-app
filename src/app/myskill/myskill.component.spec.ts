import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskillComponent } from './myskill.component';

describe('MyskillComponent', () => {
  let component: MyskillComponent;
  let fixture: ComponentFixture<MyskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyskillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
