import { NgxMarkjsModule } from './ngx-markjs.module';
import { MarkjsHighlightDirective } from './markjs-highlight.directive';

describe('NgxMarkjsModule', () => {
  let module: NgxMarkjsModule;

  beforeEach(() => {
    module = new NgxMarkjsModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });

  it('should export MarkjsHighlightDirective', () => {
    expect(MarkjsHighlightDirective).toBeTruthy();
  });
});