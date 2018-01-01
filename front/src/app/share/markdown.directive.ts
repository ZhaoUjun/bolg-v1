import { Directive, ElementRef, Input,HostListener  } from '@angular/core';
import marked from 'marked';
import highlight from 'highlight.js'


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

@Directive({
  selector: '[withMarkdown]'
})
export class MarkdownDirective {

  @Input('withMarkdown') content:string;

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.classList.add('article-viewer')
  }

  renderMdContent(){
    this.el.nativeElement.innerHTML = marked(this.content);
  }


  ngOnChanges(){
    this.renderMdContent()
  }

}
