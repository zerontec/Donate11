import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaDetailsComponent } from './campa-details.component';

describe('CampaDetailsComponent', () => {
  let component: CampaDetailsComponent;
  let fixture: ComponentFixture<CampaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
