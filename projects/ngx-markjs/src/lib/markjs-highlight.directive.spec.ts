import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MarkjsHighlightDirective } from './markjs-highlight.directive';

@Component({
  template: `<div [markjsHighlight]="searchTerm">This is test content to highlight</div>`,
  standalone: false
})
class TestComponent {
  searchTerm = 'test';
}

describe('MarkjsHighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: MarkjsHighlightDirective;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, MarkjsHighlightDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(MarkjsHighlightDirective));
    directive = debugElement.injector.get(MarkjsHighlightDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply markjsHighlight input', () => {
    component.searchTerm = 'content';
    fixture.detectChanges();
    expect(directive.markjsHighlight).toBe('content');
  });

  it('should emit getInstance event', () => {
    spyOn(directive.getInstance, 'emit');
    fixture.detectChanges();
    expect(directive.getInstance.emit).toHaveBeenCalled();
  });
});