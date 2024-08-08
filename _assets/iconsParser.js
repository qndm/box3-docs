const JOKE_MODE = new URL(location).searchParams.get('jokemode') === 'true';
/**@type {HTMLElement | null} */
var $JokeModeonly_element = null;
const defsMap = {
  any: ['type generic', 'api/type/any', 'type'],
  object: ['type generic', 'type'],
  resources: ["object private", 'api/resources', 'const'],
  Box3TickEvent: ["event", "api/event/TickEvent", 'class'],
  GameTickEvent: ["event", "api/event/TickEvent", 'class'],
  world: ["object", "api/world", 'const'],
  Box3World: ["class", "api/world", 'class'],
  GameWorld: ["class", "/api/world", 'class'],
  Box3Entity: ["class", "api/class/Entity", 'class'],
  GameEntity: ["class", "api/class/Entity", 'class'],
  Box3PlayerEntity: ["type private", "api/type/PlayerEntity", 'type'],
  GamePlayerEntity: ["type private", "api/type/PlayerEntity", 'type'],
  Box3Player: ["class", "api/class/Player", 'class'],
  GamePlayer: ["class", "api/class/Player", 'class'],
  Box3Zone: ["class", "api/class/Zone", 'class'],
  GameZone: ["class", "api/class/Zone", 'class'],
  URL: ["class", "api/type/base/URL", 'class'],
  Box3ClickEvent: ["event", "api/event/ClickEvent", 'class'],
  GameClickEvent: ["event", "api/event/ClickEvent", 'class'],
  Box3EventChannel: ["type generic", "api/type/EventChannel", 'type'],
  GameEventChannel: ["type generic", "api/type/EventChannel", 'type'],
  Box3EventFuture: ["type generic", "api/type/EventFuture", 'type'],
  GameEventFuture: ["type generic", "api/type/EventFuture", 'type'],
  Box3RespawnEvent: ["event", "api/event/RespawnEvent", 'class'],
  GameRespawnEvent: ["event", "api/event/RespawnEvent", 'class'],
  Partial: ["type parent-interface generic", "api/type/base/Partial", 'type'],
  Box3EntityConfig: ["interface", "api/type/EntityConfig", "interface"],
  GameEntityConfig: ["interface", "api/type/EntityConfig", "interface"],
  Box3Vector3: ["class", "api/type/Vector3", 'class'],
  GameVector3: ["class", "api/type/Vector3", 'class'],
  Box3SelectorString: ["type", "api/type/SelectorString", 'type'],
  GameSelectorString: ["type", "api/type/SelectorString", 'type'],
  Number: ["interface", "api/type/base/Number", 'interface'],
  number: ["type generic", "api/type/base/Number", 'type'],
  Boolean: ["interface", "api/type/base/Boolean", 'interface'],
  boolean: ["type generic", "api/type/base/Boolean", 'type'],
  Box3RaycastOptions: ["interface", "api/type/RaycastOptions", 'interface'],
  GameRaycastOptions: ["interface", "api/type/RaycastOptions", 'interface'],
  Box3RaycastResult: ["class", "api/type/RaycastResult", 'class'],
  GameRaycastResult: ["class", "api/type/RaycastResult", 'class'],
  String: ["interface", "api/type/base/String", 'interface'],
  string: ["type generic", "api/type/base/String", 'type'],
  void: ["type generic", "api/type/base/void", 'type'],
  never: ["type generic", "api/type/base/never", 'type'],
  null: ["static", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/null", 'keyword'],
  undefined: ["static", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined", 'keyword'],
  Box3Bounds3: ["class", "api/type/Bounds3", 'class'],
  GameBounds3: ["class", "api/type/Bounds3", 'class'],
  Box3Quaternion: ["class", "api/type/Quaternion", 'class'],
  GameQuaternion: ["class", "api/type/Quaternion", 'class'],
  Box3ButtonType: ["enum", "api/type/enum/ButtonType", 'enum'],
  GameButtonType: ["enum", "api/type/enum/ButtonType", 'enum'],
  Box3AnimationPlaybackConfig: ["interface", "api/type/AnimationPlaybackConfig", 'interface'],
  GameAnimationPlaybackConfig: ["interface", "api/type/AnimationPlaybackConfig", 'interface'],
  Box3Animation: ["class", "api/class/Animation", 'class'],
  GameAnimation: ["class", "api/class/Animation", 'class'],
  Box3WorldKeyframe: ["interface", "api/type/WorldKeyframe", 'interface'],
  GameWorldKeyframe: ["interface", "api/type/WorldKeyframe", 'interface'],
  Box3EntityKeyframe: ["interface", "api/type/EntityKeyframe", 'interface'],
  GameEntityKeyframe: ["interface", "api/type/EntityKeyframe", 'interface'],
  Box3PlayerKeyframe: ["interface", "api/type/PlayerKeyframe", 'interface'],
  GamePlayerKeyframe: ["interface", "api/type/PlayerKeyframe", 'interface'],
  Box3AnimationPlaybackState: ["enum", "api/type/enum/AnimationPlaybackState", 'enum'],
  GameAnimationPlaybackState: ["enum", "api/type/enum/AnimationPlaybackState", 'enum'],
  Box3AnimationDirection: ["enum", "api/type/enum/AnimationDirection", 'enum'],
  GameAnimationDirection: ["enum", "api/type/enum/AnimationDirection", 'enum'],
  Box3Easing: ["enum", "api/type/enum/Easing", 'enum'],
  GameEasing: ["enum", "api/type/enum/Easing", 'enum'],
  Box3RGBColor: ["class", "api/type/RGBColor", 'class'],
  Box3RGBAColor: ["class", "api/type/RGBAColor", 'class'],
  GameRGBColor: ["class", "api/type/RGBColor", 'class'],
  GameRGBAColor: ["class", "api/type/RGBAColor", 'class'],
  Box3SoundEffect: ["interface", "api/type/SoundEffect", 'interface'],
  GameSoundEffect: ["interface", "api/type/SoundEffect", 'interface'],
  GameMotionController: ["class", "api/class/MotionController", 'class'],
  Box3CameraMode: ["enum", "api/type/enum/CameraMode", 'enum'],
  GameCameraMode: ["enum", "api/type/enum/CameraMode", 'enum'],
  Box3CameraFreezedAxis: ["enum private", "api/type/enum/CameraFreezedAxis", 'hiddenEnum'],
  GameCameraFreezedAxis: ["enum private", "api/type/enum/CameraFreezedAxis", 'hiddenEnum'],
  Box3DamageEvent: ["event", "api/event/DamageEvent", 'class'],
  GameDamageEvent: ["event", "api/event/DamageEvent", 'class'],
  Box3DieEvent: ["event", "api/event/DieEvent", 'class'],
  GameDieEvent: ["event", "api/event/DieEvent", 'class'],
  Box3PlayerEntityEvent: ["event parent-class inherited", "api/event/PlayerEntityEvent", 'class'],
  GamePlayerEntityEvent: ["event parent-class inherited", "api/event/PlayerEntityEvent", 'class'],
  Box3EntityEvent: ["event", "api/event/EntityEvent", 'class'],
  GameEntityEvent: ["event", "api/event/EntityEvent", 'class'],
  Box3ChatEvent: ["event", "api/event/ChatEvent", 'class'],
  GameChatEvent: ["event", "api/event/ChatEvent", 'class'],
  Box3InputEvent: ["event", "api/event/InputEvent", 'class'],
  GameInputEvent: ["event", "api/event/InputEvent", 'class'],
  GameKeyBoardEvent: ["event", "api/event/KeyBoardEvent", 'class'],
  Box3EntityContactEvent: ["event", "api/event/EntityContactEvent", 'class'],
  GameEntityContactEvent: ["event", "api/event/EntityContactEvent", 'class'],
  Box3VoxelContactEvent: ["event", "api/event/VoxelContactEvent", 'class'],
  GameVoxelContactEvent: ["event", "api/event/VoxelContactEvent", 'class'],
  Box3InteractEvent: ["event", "api/event/InteractEvent", 'class'],
  GameInteractEvent: ["event", "api/event/InteractEvent", 'class'],
  Box3FluidContactEvent: ["event", "api/event/FluidContactEvent", 'class'],
  GameFluidContactEvent: ["event", "api/event/FluidContactEvent", 'class'],
  Box3TriggerEvent: ["event", "api/event/TriggerEvent", 'class'],
  GameTriggerEvent: ["event", "api/event/TriggerEvent", 'class'],
  Box3AnimationEvent: ["event", "api/event/AnimationEvent", 'class'],
  GameAnimationEvent: ["event", "api/event/AnimationEvent", 'class'],
  GamePurchaseSuccessEvent: ["event", "api/event/PurchaseSuccessEvent", 'class'],
  GameSkin: ["type private", "api/type/Skin", 'type'],
  GameSkinValue: ["type private", "api/type/SkinValue", 'hiddenType'],
  Box3SkinInvisible: ["type", "api/type/SkinInvisible", 'type'],
  GameSkinInvisible: ["type", "api/type/SkinInvisible", 'type'],
  Box3InputDirection: ["enum", "api/type/enum/InputDirection", 'enum'],
  GameInputDirection: ["enum", "api/type/enum/InputDirection", 'enum'],
  Box3PlayerMoveState: ["enum", "api/type/enum/PlayerMoveState", 'enum'],
  GamePlayerMoveState: ["enum", "api/type/enum/PlayerMoveState", 'enum'],
  Box3PlayerWalkState: ["enum", "api/type/enum/PlayerWalkState", 'enum'],
  GamePlayerWalkState: ["enum", "api/type/enum/PlayerWalkState", 'enum'],
  Box3DialogType: ["enum", "api/type/enum/DialogType", 'enum'],
  GameDialogType: ["enum", "api/type/enum/DialogType", 'enum'],
  Box3DialogSelectResponse: ["type", "api/type/DialogSelectResponse", 'type'],
  GameDialogSelectResponse: ["type", "api/type/DialogSelectResponse", 'type'],
  Box3DialogParams: ["type", "api/type/DialogParams", 'type'],
  GameDialogParams: ["type", "api/type/DialogParams", 'type'],
  Box3TextDialogParams: ["type", "api/type/DialogParams", 'type'],
  GameTextDialogParams: ["type", "api/type/DialogParams", 'type'],
  Box3SelectDialogParams: ["type", "api/type/DialogParams", 'type'],
  GameSelectDialogParams: ["type", "api/type/DialogParams", 'type'],
  Box3InputDialogParams: ["type", "api/type/DialogParams", 'type'],
  GameInputDialogParams: ["type", "api/type/DialogParams", 'type'],
  Box3DialogCancelOption: ["type", "api/type/DialogCancelOption", 'type'],
  GameDialogCancelOption: ["type", "api/type/DialogCancelOption", 'type'],
  Box3DialogCall: ["type", "api/class/Player/#Box3DialogCall", 'type'],
  GameDialogCall: ["type", "api/class/Player/#GameDialogCall", 'type'],
  Box3AssetListEntry: ["type", "api/type/DialogCall", 'type'],
  GameAssetListEntry: ["type", "api/type/DialogCall", 'type'],
  Box3ZoneConfig: ["type", "api/type/ZoneConfig", 'type'],
  GameZoneConfig: ["type", "api/type/ZoneConfig", 'type'],
  Box3EventHandlerToken: ["class", "api/class/EventHandlerToken", 'class'],
  GameEventHandlerToken: ["class", "api/class/EventHandlerToken", 'class'],

  Box3DataBase: ["class", "api/db", 'class'],
  Box3QueryResult: ["class", 'api/class/QueryResult', 'class'],
  GameStorage: ["class", "api/storage", 'class'],
  GameDataStorage: ["class", "api/class/DataStorage", 'class'],
  QueryList: ["class", "api/class/QueryList", 'class'],
  ListPageOptions: ["type", "api/type/ListPageOptions", 'type'],
  ReturnValue: ["type", "api/type/ReturnValue", 'type'],
  JSONValue: ["type", "api/type/JSONValue", 'type'],
  db: ["object", "api/db", 'const'],
  storage: ["object", "api/storage", 'const'],
  gui: ["object private", "api/gui", 'const'],
  GameGUI: ["class private", "api/gui", 'class'],
  GameGUIEventListener: ["interface private", "api/type/GUIEventListener", 'hiddenInterface'],
  GUIConfig: ["type private", "hiddenType"],
  GUIConfigItem: ["interface private", "hiddenInterface"],
  GameGUIEvent: ["event private", "hiddenClass"],
  rtc: ["object private", "api/rtc", 'hiddenConst'],
  GameRTC: ["class private", "api/rtc", "hiddenClass"],
  GameRTCChannel: ["class private", "api/class/RTCChannel", "hiddenClass"],
  http: ["object private", "api/http", 'hiddenConst'],
  Box3HttpAPI: ["class private", "api/http", "hiddenClass"],
  GameHttpAPI: ["class private", "api/http", "hiddenClass"],
  Box3HttpFetchParams: ["type private", "api/type/HttpFetchParams", "hiddenType"],
  GameHttpFetchRequestOptions: ["type private", "api/type/HttpFetchRequestOptions", "hiddenType"],
  Box3HttpFetchResponse: ["class private", "api/class/HttpFetchResponse", "hiddenClass"],
  GameHttpFetchResponse: ["class private", "api/class/HttpFetchResponse", "hiddenClass"],
  GameHttpFetchHeaders: ["type private", "api/type/HttpFetchHeaders", "hiddenType"],
  Box3HttpHandler: ["type private", "api/type/HttpHandler", 'type'],
  GameHttpHandler: ["type private", "api/type/HttpHandler", 'type'],
  Box3HttpRequest: ["class private", "api/class/HttpRequest", 'class'],
  GameHttpRequest: ["class private", "api/class/HttpRequest", 'class'],
  Box3HttpResponse: ["class private", "api/class/HttpResponse", 'class'],
  GameHttpResponse: ["class private", "api/class/HttpResponse", 'class'],
  console: ["object", 'api/console', "const"],
  GameConsole: ["class private", 'api/console', "hiddenClass"],
  Box3LoggerMethod: ["type private", 'api/type/LoggerMethod', "hiddenType"], 
  GameLoggerMethod: ["type private", 'api/type/LoggerMethod', "hiddenType"], 

  Box3Voxels: ["class", "api/voxels", "class"],
  GameVoxels: ["class", "api/voxels", "class"],
  voxels: ["object", "api/voxels", "const"],

  Box3BodyPart: ["enum", "api/type/enum/BodyPart", "enum"],
  GameBodyPart: ["enum", "api/type/enum/BodyPart", "enum"],

  ServerRemoteChannel: ["class", "api/class/ServerRemoteChannel", "class"],
  PlayerNavigator: ["class private", "api/class/PlayerNavigator", "hiddenClass"],
  SocialType: ["enum", "api/enum/SocialType", "enum"],
  Promise: ["interface", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise", "interface"],
  Map: ["interface", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map", "interface"],
  ArrayBuffer: ["interface", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer", "interface"],
  NavigatorEventType: ["enum private", , "hiddenEnum"],
  Sound: ["class private", "api/class/Sound" , "hiddenClass"],
};
const keywordDefsMap = {
  this: [],
}
const iconTagMap = {
  method: ["method parent-class", "#c2c262"],
  listener: ["method parent-class", "#c2c262"],
  promiseEvent: ["method parent-class", "#c2c262"],
  event: ["event", "#00bfa5"],
  eventArg: ["event parent-enum", "#00bfa5"],
  function: ["function", "#c2c262"],
  arg: ["variable parent-enum", "#00b0ff"],
  hiddenArg: ["variable parent-enum private", "#00b0ff"],
  property: ["property parent-class", "#00b0ff"],
  readonly: ["property parent-class protected", "#448aff"],
  hiddenProperty: ["property parent-class private", "#00b0ff"],
  hiddenReadonly: ["property parent-class private", "#448aff"],
  hiddenMethod: ["method parent-class private", "#c2c262"],
  object: ["object", "#00b0ff"],
  hiddenObject: ["object", "#00b0ff"],
  constructor: ["constructor parent-class", "#508fe0"],
  interface: ["interface", "#00bfa5"],
  hiddenInterface: ["interface private", "#00bfa5"],
  class: ["class", "#00bfa5"],
  hiddenClass: ["class", "#00bfa5"],
  const: ["variable protected", "#448aff"],
  hiddenConst: ["variable protected", "#448aff"],
  staticMethod: ["static method parent-class", "#c2c262"],
  hiddenStaticMethod: ["static function parent-class private", "#c2c262"],
  inheritedEvent: ["event parent-class inherited", "#00bfa5"],
  enumMember: ["enum-member", "#00b0ff"],
  hiddenEnumMember: ["enum-member private", "#00b0ff"],
  enum: ["enum", "#00bfa5"],
  hiddenEnum: ["enum private", "#00bfa5"],
  variable: ["variable", "#00b0ff"],
  type: ["type", "#00bfa5"],
  hiddenType: ["type private", "#00bfa5"],
  typeArg: ["type", "#00bfa5"],
  keyword: ["", "#508fe0"],
  callback: ["callback", "#c2c262"],
  callbackArg: ["callable parent-enum", "#c2c262"],
  getter: ["getter parent-class", "#448aff"],
  setter: ["setter parent-class", "#00b0ff"],
  accessor: ["accessor parent-class", "#00b0ff"],
};
function createIconElement(text, id, color) {
  const list = id.split(" ");
  const i = document.createElement("span");
  i.classList.add("kind-icon", ...list.filter((s) => !!s));
  i.innerText = text.trim();
  i.style.display = "inline-block";
  if(color)
    i.style.color = color;
  i.setAttribute("title", "右键单击可复制此处内容");
  i.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text.trim());
    alert$.next("复制成功：" + text);
  });
  if (JOKE_MODE) {
    i.addEventListener('mouseenter', (event) => {
      $JokeModeonly_element = i;
      if (i.classList.contains('jokeElement'))
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
    const a = document.createElement("a");
    const def = el.href.trim().slice(el.href.trim().lastIndexOf('/') + 1);
    let href = "";
    let iconId = "property";
    if (el.innerHTML.trim() === '' && (Object.keys(defsMap).includes(def))) {
      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/"
        : "/";
      const search = JOKE_MODE ? '?jokemode=true' : '';
      if (defsMap[def][1]) {
        if (defsMap[def][1].startsWith('http://') || defsMap[def][1].startsWith('https://')) {
          href = defsMap[def][1] + search;
          a.target = "_blank";
        } else
          href = prefix + defsMap[def][1] + search;
      } else {
        href = `javascript:alert$.next("❌ 找不到对应页面")`;
      }
    } else if (Object.keys(iconTagMap).includes(def) && el.innerHTML.trim()) {
      const innerHTML = el.innerHTML.trim();
      if (def === 'keyword' && Object.keys(keywordDefsMap).includes(innerHTML)) {
        el.style.fontWeight = 'bold';
        const prefix = location.href.includes("github.io")
          ? "/box3-docs/"
          : "/";
        const search = JOKE_MODE ? '?jokemode=true' : '';
        if (keywordDefsMap[innerHTML][0]) {
          if (keywordDefsMap[innerHTML][0].startsWith('http://') || keywordDefsMap[innerHTML][0].startsWith('https://'))
            el.href = keywordDefsMap[innerHTML][0] + search;
          else
            el.href = prefix + keywordDefsMap[innerHTML][0] + search;
        } else {
          el.href = `javascript:alert$.next("❌ 找不到对应页面")`;
        }
        el.style.color = iconTagMap.type[1];
        return;
      }
      iconId = iconTagMap[def]?.[0];
      el.parentElement.replaceChild(createIconElement(innerHTML, iconId, iconTagMap?.[def]?.[1]), el);
      return;
    } else return;
    a.href = href;
    const i = createIconElement(def, iconId, iconTagMap[defsMap[def]?.[2]]?.[1]);
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
        createIconElement(text, iconTagMap[key][0], iconTagMap?.[key][1]),
        el
      );
    });
  });
  document.querySelectorAll("def").forEach((el) => {
    const def = el.innerHTML.trim();
    const a = document.createElement("a");
    let href = "";
    let isError = false;
    let iconId = "property";
    if (Object.keys(defsMap).includes(def)) {
      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/"
        : "/";
      const search = JOKE_MODE ? '?jokemode=true' : '';
      if (defsMap[def][1]) {
        if (defsMap[def][1].startsWith('http://') || defsMap[def][1].startsWith('https://')){
          href = defsMap[def][1] + search;
          a.target = "_blank";
        }
        else
          href = prefix + defsMap[def][1] + search;
      } else {
        href = `javascript:alert$.next("❌ 找不到对应页面")`;
      }
    } else {
      isError = true;
      console.error("def标签未定义", def);
      href = "javascript:alert$.next('⚠ 此标识未定义')";
    }
    a.href = href;
    const i = createIconElement(def, iconId, iconTagMap?.[defsMap[def]?.[2]]?.[1]);
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

if (JOKE_MODE) {
  console.log('Joke Mode enabled');
  alert$.next('Joke Mode enabled');
  window.addEventListener('mousemove', (ev) => {
    if ($JokeModeonly_element instanceof HTMLElement) {
      let x = Number($JokeModeonly_element.dataset['x']), y = Number($JokeModeonly_element.dataset['y']);
      if (Math.abs(x - ev.screenX) > 150 || Math.abs(y - ev.screenY) > 150)
        return;
      x += (x - ev.screenX) / 4;
      y += (y - ev.screenY) / 4;
      if (x < 25)
        x += screen.availWidth - 100;
      if (y < 25)
        y += screen.availHeight - 100;
      if (x > screen.availWidth - 25)
        x -= screen.availWidth - 100;
      if (y > screen.availHeight - 25)
        y -= screen.availHeight - 100;
      $JokeModeonly_element.dataset['x'] = x;
      $JokeModeonly_element.dataset['y'] = y;
      $JokeModeonly_element.style.left = x + 'px';
      $JokeModeonly_element.style.top = y + 'px';
    }
  });
  for (const element of document.getElementsByClassName('admonition bug')) {
    element.title = '我是一只虫子';
  }
}