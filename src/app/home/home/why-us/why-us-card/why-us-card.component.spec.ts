/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyUsCardComponent } from './why-us-card.component';

describe('WhyUsCardComponent', () => {
  let component: WhyUsCardComponent;
  let fixture: ComponentFixture<WhyUsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyUsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
