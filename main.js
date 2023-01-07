'use strict';

(function() {
class CustomElement extends HTMLElement {
    constructor() {
      // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
      super();
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
      // Create a Div Element
    //   const color = this.color;

      const div = document.createElement('div');
      const style = document.createElement("style");
      shadow.appendChild(div).innerHTML ="Hi, Eelement!";
      shadow.appendChild(style).innerHTML = `div{ background-color: red; }`;
    }
  
    static get observedAttributes() {
      // 모니터링 할 속성 이름
      return ["color"];
    }
  
    connectedCallback() {
      // DOM에 추가되었다. 렌더링 등의 처리를 하자.
      this.setAttribute('color', 'blue')
    //   this.setColor('red')
    }
  
    disconnectedCallback() {
      // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      // 속성이 추가/제거/변경되었다.
      console.log(newVal)
      console.log(attrName)
      this[attrName] = newVal;
    }
  
    adoptedCallback(oldDoc, newDoc) {
      // 다른 Document에서 옮겨져 왔음
      // 자주 쓸 일은 없을 것.
    }

    // gathering data from element attributes
    get color() {
        return this.getAttribute('color') || '';
    }
    // get setColor() {
      
    //     return this.setAttribute('color') || '';
    // }
  }
  // <current-time> 태그가 CurrentTime 클래스를 사용하도록 한다.
  customElements.define("custom-element", CustomElement);
})();
