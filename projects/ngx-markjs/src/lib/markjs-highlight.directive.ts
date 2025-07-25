import {Directive, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2} from '@angular/core';

import Mark from 'mark.js';

let cancelAnimationId: number;

function animate({timing, draw, duration}: {timing: (x: number) => number, draw: (y: number) => void, duration: number}) {
  const start = performance.now();
  cancelAnimationId = requestAnimationFrame(function animate2(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }
    // calculate the current animation state
    const progress = timing(timeFraction);
    draw(progress); // draw it
    if (timeFraction < 1) {
      cancelAnimationId = requestAnimationFrame(animate2);
    }
  });
}

@Directive({
    selector: '[markjsHighlight]',
    standalone: false
})
export class MarkjsHighlightDirective implements OnChanges {

  @Input() markjsHighlight: string | null = '';
  @Input() markjsConfig: any = {};
  @Input() scrollToFirstMarked: boolean = false;

  @Output() getInstance = new EventEmitter<any>();

  markInstance: any;

  constructor(
    private contentElementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnChanges() {
    if (!this.markInstance) {
      this.markInstance = new Mark(this.contentElementRef.nativeElement);
      this.getInstance.emit(this.markInstance);
    }

    this.hightlightText();
    if (this.scrollToFirstMarked) {
      this.scrollToFirstMarkedText();
    }
  }

  hightlightText() {
    this.markjsHighlight = this.markjsHighlight || '';
    if (this.markjsHighlight && this.markjsHighlight.length <= 2) {
      this.markInstance.unmark();
      return;
    } else {
      this.markInstance.unmark({
        done: () => {
          this.markInstance.mark((this.markjsHighlight || ''), this.markjsConfig);
        }
      });
    }
  }

  scrollToFirstMarkedText() {
    const content = this.contentElementRef.nativeElement;
    const firstOffsetTop = (content.querySelector('mark') || {}).offsetTop || 0;

    this.scrollSmooth(content, firstOffsetTop);
  }

  scrollSmooth(scrollElement: Element, firstOffsetTop: number) {
    const renderer = this.renderer;

    if (cancelAnimationId) {
      cancelAnimationFrame(cancelAnimationId);
    }
    const currentScrollTop = scrollElement.scrollTop;
    const delta = firstOffsetTop - currentScrollTop;

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        const nextStep = currentScrollTop + progress * delta;
        renderer.setProperty(scrollElement, 'scrollTop', nextStep);
      }
    });
  }
}

