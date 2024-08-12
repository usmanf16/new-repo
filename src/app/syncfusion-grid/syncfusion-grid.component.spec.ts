import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionGridComponent } from './syncfusion-grid.component';

describe('SyncfusionGridComponent', () => {
  let component: SyncfusionGridComponent;
  let fixture: ComponentFixture<SyncfusionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncfusionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncfusionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
