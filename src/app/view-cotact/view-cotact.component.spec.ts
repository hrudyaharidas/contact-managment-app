import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCotactComponent } from './view-cotact.component';

describe('ViewCotactComponent', () => {
  let component: ViewCotactComponent;
  let fixture: ComponentFixture<ViewCotactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCotactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCotactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
