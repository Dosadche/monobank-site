import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryIngComponent } from './entry-ing.component';

describe('EntryIngComponent', () => {
  let component: EntryIngComponent;
  let fixture: ComponentFixture<EntryIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryIngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
