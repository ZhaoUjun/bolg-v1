import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'

@Component({
  selector: 'admin-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleContent="### `Button.js`\n" +
    "\n" +
    "```js\n" +
    "import React, { Component } from 'react';\n" +
    "import './Button.css'; // Tell Webpack that Button.js uses these styles\n" +
    "\n" +
    "class Button extends Component {\n" +
    "  render() {\n" +
    "    // You can use them as regular CSS styles\n" +
    "    return <div className=\"Button\" />;\n" +
    "  }\n" +
    "}\n" +
    "```\n" +
    "\n" +
    "**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than Webpack.\n" +
    "\n" +
    "In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.\n" +
    "\n" +
    "If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.\n" +
    "\n" +
    "## Post-Processing CSS\n" +
    "\n" +
    "This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.\n" +
    "\n" +
    "For example, this:\n" +
    "\n" +
    "```css\n" +
    ".App {\n" +
    "  display: flex;\n" +
    "  flex-direction: row;\n" +
    "  align-items: center;\n" +
    "}\n" +
    "```";

  constructor(
    private articleService:ArticleService
  ) { }

  ngOnInit() {
  }

  handleArticleChange(event:string){
    this.articleContent=event
  }

}
