import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSkillComponent } from './modal-add-skill.component';

describe('ModalAddSkillComponent', () => {
  let component: ModalAddSkillComponent;
  let fixture: ComponentFixture<ModalAddSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
