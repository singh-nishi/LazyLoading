import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModelComponent } from './service-model.component';

describe('ServiceModelComponent', () => {
  let component: ServiceModelComponent;
  let fixture: ComponentFixture<ServiceModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
