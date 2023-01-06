# custom-element-project

```
<custom-element color="red"> HELLO </custom-element>
```

```
CustomElements의 생명주기
위 예제를 보셨다면 connectedCallback()이라는 콜백 메소드가 있는 것을 볼 수 있습니다.

이는 생명주기(life-cycle) 콜백입니다. 우리가 커스텀 태그를 사용하고, 삭제하고, 옮길 때마다 이 생명주기 콜백이 자동 실행됩니다.

connectedCallback() : 위에서 보았던 메소드로, 문서에 해당 태그 사용이 감지되었고, 문서와 연결을 시도했을 때 호출됩니다.

disconnectedCallback() : 눈치가 빠르시다면 대번에 아실 것입니다. 반대로 요소가 문서에서 연결이 해제 되었을 때, 즉 삭제되었을 때 호출되는 콜백입니다.

adoptedCallback() : 잘 쓸일 없는 콜백일지도 모릅니다. frame과 같은 다른 문서로 커스텀 요소가 이동되었을 때 호출되는 콜백 메소드입니다.

attributeChangedCallback(AttributeName, OldValue, NewValue) : 
해당 태그에서 등록된 속성 변경을 감지합니다. 감시할 속성을 등록하기 위해서는 
static get observedAttributes(){ return [‘attr1’,‘attr2’] }
과 같이 등록해야 합니다.

```