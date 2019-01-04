import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaListComponent } from './campa-list.component';

describe('CampaListComponent', () => {
  let component: CampaListComponent;
  let fixture: ComponentFixture<CampaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
