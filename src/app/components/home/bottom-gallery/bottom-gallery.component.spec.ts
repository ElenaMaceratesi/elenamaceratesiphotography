import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGalleryComponent } from './bottom-gallery.component';

describe('BottomGalleryComponent', () => {
  let component: BottomGalleryComponent;
  let fixture: ComponentFixture<BottomGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
