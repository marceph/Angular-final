import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSkillComponent } from './modal-edit-skill.component';

describe('ModalEditSkillComponent', () => {
  let component: ModalEditSkillComponent;
  let fixture: ComponentFixture<ModalEditSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
