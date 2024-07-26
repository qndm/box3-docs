const JOKE_MODE = new URL(location).searchParams.get('jokemode') === 'true';
/**@type {HTMLElement | null} */
var $JokeModeonly_element = null;
const defsMap = {
  any: ['type generic', 'type/any'],
  Box3TickEvent: ["event", "event/TickEvent"],
  GameTickEvent: ["event", "event/TickEvent"],
  Box3World: ["class", "world"],
  world: ["object", "world"],
  GameWorld: ["class", "world"],
  Box3Entity: ["class", "class/Entity"],
  GameEntity: ["class", "class/Entity"],
  Box3Player: ["class", "class/Player"],
  GamePlayer: ["class", "class/Player"],
  URL: ["class", "type/base/URL"],
  Box3ClickEvent: ["event", "event/ClickEvent"],
  GameClickEvent: ["event", "event/ClickEvent"],
  Box3EventChannel: ["type generic", "type/EventChannel"],
  GameEventChannel: ["type generic", "event/ClickEvent"],
  Box3EventFuture: ["type generic", "type/EventFuture"],
  GameEventFuture: ["type generic", "type/EventFuture"],
  Box3RespawnEvent: ["event", "event/RespawnEvent"],
  GameRespawnEvent: ["event", "event/RespawnEvent"],
  Partial: ["type parent-interface generic", "type/base/Partial"],
  Box3EntityConfig: ["interface", "type/EntityConfig"],
  GameEntityConfig: ["interface", "type/EntityConfig"],
  Box3Vector3: ["class", "type/Vector3"],
  GameVector3: ["class", "type/Vector3"],
  null: ["property parent-interface", "type/base/null"],
  Box3SelectorString: ["type", "type/SelectorString"],
  GameSelectorString: ["type", "type/SelectorString"],
  Number: ["object", "type/base/Number"],
  number: ["type generic", "type/base/Number"],
  Boolean: ["object", "type/base/Boolean"],
  boolean: ["type generic", "type/base/Boolean"],
  Box3RaycastOptions: ["interface", "type/RaycastOptions"],
  GameRaycastOptions: ["interface", "type/RaycastOptions"],
  Box3RaycastResult: ["class", "type/RaycastResult"],
  GameRaycastResult: ["class", "type/RaycastResult"],
  String: ["object", "type/base/String"],
  string: ["type generic", "type/base/String"],
  void: ["type generic", "type/base/void"],
  never: ["type generic", "type/base/never"],
  null: ["static", "type/base/null"],
  undefined: ["static", "type/base/undefined"],
  Box3Bounds3: ["class", "type/Bounds3"],
  GameBounds3: ["class", "type/Bounds3"],
  Box3Quaternion: ["class", "type/Quaternion"],
  GameQuaternion: ["class", "type/Quaternion"],
  Box3ButtonType: ["enum", "type/ButtonType"],
  GameButtonType: ["enum", "type/ButtonType"],
  Box3AnimationPlaybackConfig: ["interface", "type/AnimationPlaybackConfig"],
  GameAnimationPlaybackConfig: ["interface", "type/AnimationPlaybackConfig"],
  Box3Animation: ["class", "type/Animation"],
  GameAnimation: ["class", "type/Animation"],
  Box3WorldKeyframe: ["class", "type/WorldKeyframe"],
  GameWorldKeyframe: ["class", "type/WorldKeyframe"],
  Box3EntityKeyframe: ["class", "type/EntityKeyframe"],
  GameEntityKeyframe: ["class", "type/EntityKeyframe"],
  Box3PlayerKeyframe: ["class", "type/PlayerKeyframe"],
  GamePlayerKeyframe: ["class", "type/PlayerKeyframe"],
  Box3RGBColor: ["class", "type/RGBColor"],
  Box3RGBAColor: ["class", "type/RGBAColor"],
  GameRGBColor: ["class", "type/RGBColor"],
  GameRGBAColor: ["class", "type/RGBAColor"],
  Box3SoundEffect: ["interface", "type/SoundEffect"],
  GameSoundEffect: ["interface", "type/SoundEffect"],
  GameMotionController: ["class", "class/MotionController"],


  Box3DamageEvent: ["event", "event/DamageEvent"],
  GameDamageEvent: ["event", "event/DamageEvent"],
  Box3DieEvent: ["event", "event/DieEvent"],
  GameDieEvent: ["event", "event/DieEvent"],
  Box3PlayerEntityEvent: ["event parent-class inherited", "event/PlayerEntityEvent"],
  GamePlayerEntityEvent: ["event parent-class inherited", "event/PlayerEntityEvent"],
  Box3EntityEvent: ["event", "event/EntityEvent"],
  GameEntityEvent: ["event", "event/EntityEvent"],
  Box3ChatEvent: ["event", "event/ChatEvent"],
  GameChatEvent: ["event", "event/ChatEvent"],
  Box3InputEvent: ["event", "event/InputEvent"],
  GameInputEvent: ["event", "event/InputEvent"],
  Box3EntityContactEvent: ["event", "event/EntityContactEvent"],
  GameEntityContactEvent: ["event", "event/EntityContactEvent"],
  Box3VoxelContactEvent: ["event", "event/VoxelContactEvent"],
  GameVoxelContactEvent: ["event", "event/VoxelContactEvent"],
  Box3InteractEvent: ["event", "event/InteractEvent"],
  GameInteractEvent: ["event", "event/InteractEvent"],
  Box3FluidContactEvent: ["event", "event/FluidContactEvent"],
  GameFluidContactEvent: ["event", "event/FluidContactEvent"],
  GamePurchaseSuccessEvent: ["event", "event/PurchaseSuccessEvent"],
  GameSkin: ["type private", "type/Skin"],
  GameSkinValue: ["type private", "type/SkinValue"],
  Box3SkinInvisible: ["type", "type/SkinInvisible"],
  GameSkinInvisible: ["type", "type/SkinInvisible"],

  Box3DataBase: ["class", "database"],
  Box3QueryResult: ["class", 'class/QueryResult'],
  GameStorage: ["class", "storage"],
  GameDataStorage: ["class", "class/DataStorage"],
  db: ["object", "database"],
  storage: ["object", "storage"],

  Box3Voxels: ["class", "voxels"],
  GameVoxels: ["class", "voxels"],
  voxels: ["object", "voxels"],

  Box3BodyPart: ["enum", "type/BodyPart"],
  GameBodyPart: ["enum", "type/BodyPart"],

  ServerRemoteChannel: ["class", "class/ServerRemoteChannel"],

  Promise: ["object"]
};
const keywordDefsMap = {
  this: [],
}
const iconTagMap = {
  method: "method parent-class",
  listener: "event parent-class",
  promiseEvent: "event parent-interface",
  event: "event",
  function: "function",
  arg: "variable parent-enum",
  property: "property parent-class",
  readonly: "property parent-class protected",
  hiddenProperty: "property parent-class private",
  hiddenReadonly: "property parent-class private",
  hiddenMethod: "method parent-class private",
  object: "object",
  constructor: "constructor parent-class",
  interface: "interface",
  class: "class",
  staticMethod: "static method parent-class",
  hiddenStaticMethod: "static function parent-class private",
  inheritedEvent: "event parent-class inherited",
  enumMember: "enum-member",
  variable: "variable",
  type: "type",
  keyword: "",
  callback: "callback",
  callbackArg: "callable parent-enum",
};
function createIconElement(text, id) {
  const list = id.split(" ");
  const i = document.createElement("span");
  i.classList.add("kind-icon", ...list.filter((s) => !!s));
  i.innerText = text.trim();
  i.style.display = "inline-block";
  i.setAttribute("title", "右键单击可复制此处内容");
  i.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text.trim());
    alert$.next("复制成功：" + text);
  });
  if(JOKE_MODE){
    i.addEventListener('mouseenter', (event) => {
      $JokeModeonly_element = i;
      if(i.classList.contains('jokeElement'))
        return;
      i.style.position = 'fixed';
      i.style.left = event.pageX + 'px';
      i.style.top = event.pageY + 'px';
      i.classList.add('jokeElement');
      i.dataset['x'] = event.screenX;
      i.dataset['y'] = event.screenY;
    });
  
  }
  return i;
}
function parse() {
  document.querySelectorAll("a").forEach((el) => {
    const def = el.href.trim().slice(el.href.trim().lastIndexOf('/') + 1);
    let href = "";
    let iconId = "property";
    if (el.innerHTML.trim() === '' && (Object.keys(defsMap).includes(def))) {
      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/api/"
        : "/api/";
      const search = JOKE_MODE ? '?jokemode=true' : '';
      if (defsMap[def][1]) {
        href = prefix + defsMap[def][1] + search;
      } else {
        href = `javascript:alert$.next("❌ 找不到对应页面")`;
      }
    } else if (Object.keys(iconTagMap).includes(def) && el.innerHTML.trim()) {
      const innerHTML = el.innerHTML.trim();
      if (def === 'keyword' && Object.keys(keywordDefsMap).includes(innerHTML)) {
        el.style.fontWeight = 'bold';
        const prefix = location.href.includes("github.io")
          ? "/box3-docs/api/"
          : "/api/";
        const search = JOKE_MODE ? '?jokemode=true' : '';
        if (keywordDefsMap[innerHTML][0]) {
          el.href = prefix + keywordDefsMap[innerHTML][0] + search;
        } else {
          el.href = `javascript:alert$.next("❌ 找不到对应页面")`;
        }
        return;
      }
      iconId = iconTagMap[def];
      el.parentElement.replaceChild(createIconElement(JOKE_MODE ? def : innerHTML, iconId), el);
      return;
    } else return;
    const a = document.createElement("a");
    a.href = href;
    const i = createIconElement(def, iconId);
    a.appendChild(i);
    el.parentElement.replaceChild(a, el);
  });
  document.querySelectorAll("span").forEach((el) => {
    if (el.hasAttribute('anchor')) {
      let a = document.createElement('a');
      a.id = el.getAttribute('anchor');
      el.appendChild(a);
    }
    if (el.hasAttribute('block')) {
      el.style.display = 'inline-block';
    }
  });
  Object.keys(iconTagMap).forEach((key) => {
    document.querySelectorAll(key).forEach((el) => {
      const text = el.getAttribute("label") || el.innerHTML;
      el.parentElement.replaceChild(
        createIconElement(text, iconTagMap[key]),
        el
      );
    });
  });
  document.querySelectorAll("def").forEach((el) => {
    const def = el.innerHTML.trim();
    let href = "";
    let isError = false;
    let iconId = "property";
    if (Object.keys(defsMap).includes(def)) {
      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/api/"
        : "/api/";
        const search = JOKE_MODE ? '?jokemode=true' : '';
      if (defsMap[def][1]) {
        href = prefix + defsMap[def][1] + search;
      } else {
        href = `javascript:alert$.next("❌ 找不到对应页面")`;
      }
    } else {
      isError = true;
      console.error("def标签未定义", def);
      href = "javascript:alert$.next('⚠ 此标识未定义')";
    }
    const a = document.createElement("a");
    a.href = href;
    const i = createIconElement(def, iconId);
    a.appendChild(i);
    el.parentElement.replaceChild(a, el);
    if (isError) {
      i.style.pointerEvents = "none"; //禁用icon交互
      a.style.color = "#f00";
      a.style.border = "1px dashed #f00";
      a.style.cursor = "not-allowed";
      a.title = "未定义的标识符";
    }
  });
  document.querySelectorAll("icon").forEach((el) => {
    try {
      el.parentElement.replaceChild(
        createIconElement(el.innerHTML, el.getAttribute("name") || "property"),
        el
      );
    } catch (e) {
      console.error("Cannot parse icon label", e, el);
      debugger;
    }
  });
}
document$.subscribe(parse);

if(JOKE_MODE){
  console.log('Joke Mode enabled');
  alert$.next('Joke Mode enabled');
  window.addEventListener('mousemove', (ev) => {
    if($JokeModeonly_element instanceof HTMLElement){
      let x = Number($JokeModeonly_element.dataset['x']), y = Number($JokeModeonly_element.dataset['y']);
      if(Math.abs(x - ev.screenX) > 150 || Math.abs(y - ev.screenY) > 150)
        return;
      x += (x - ev.screenX) / 4;
      y += (y - ev.screenY) / 4;
      if(x < 25)
          x += screen.availWidth - 100;
      if(y < 25)
        y += screen.availHeight - 100;
      if(x > screen.availWidth - 25)
        x -= screen.availWidth - 100;
      if(y > screen.availHeight - 25)
        y -= screen.availHeight - 100;
      $JokeModeonly_element.dataset['x'] = x;
      $JokeModeonly_element.dataset['y'] = y;
      $JokeModeonly_element.style.left = x + 'px';
      $JokeModeonly_element.style.top = y + 'px';
    }
  });
  for(const element of document.getElementsByClassName('admonition bug')){
    element.title = '我是一只虫子';
  }
}