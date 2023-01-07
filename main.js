class CustomElement extends HTMLElement {
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["color"];
  }  

  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    super();
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    // Create a Div Element
    const div = document.createElement('div')
    const style = document.createElement('style')
    
    shadow.appendChild(div)
    shadow.appendChild(style)
    this._color = shadow.querySelector('div');
  }
  
    connectedCallback() {
      // DOM에 추가되었다. 렌더링 등의 처리를 하자.
      const style = document.querySelector('style');
      style.innerHTML = `div { width:25%; margin: 0 auto; text-align: center; background-color: ${this.getAttribute('color')} }`
    }
  
    disconnectedCallback() {
      // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    }
    
    // 해당 태그에서 등록된 속성 변경을 감지합니다.
    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName == 'color') {
        this._color.innerText = `color is ${newVal}`;
        if(oldVal !== newVal){
          const style = document.querySelector('style');
          style.innerHTML = `div { width:25%; margin: 0 auto; text-align: center; background-color: ${newVal} }`
        }
      }
    }
}
customElements.define("custom-element", CustomElement);
