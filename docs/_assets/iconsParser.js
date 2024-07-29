const JOKE_MODE = new URL(location).searchParams.get('jokemode') === 'true';
/**@type {HTMLElement | null} */
var $JokeModeonly_element = null;
const defsMap = {
  any: ['type generic', 'type/any'],
  object: ['type generic'],
  resources: ["object private", 'resources'],
  Box3TickEvent: ["event", "event/TickEvent"],
  GameTickEvent: ["event", "event/TickEvent"],
  Box3World: ["class", "world"],
  world: ["object", "world"],
  GameWorld: ["class", "world"],
  Box3Entity: ["class", "class/Entity"],
  GameEntity: ["class", "class/Entity"],
  Box3PlayerEntity: ["type private", "type/PlayerEntity"],
  GamePlayerEntity: ["type private", "type/PlayerEntity"],
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
  Box3ButtonType: ["enum", "type/enum/ButtonType"],
  GameButtonType: ["enum", "type/enum/ButtonType"],
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
  Box3CameraMode: ["enum", "type/enum/CameraMode"],
  GameCameraMode: ["enum", "type/enum/CameraMode"],
  Box3CameraFreezedAxis: ["enum private", "type/enum/CameraFreezedAxis"],
  GameCameraFreezedAxis: ["enum private", "type/enum/CameraFreezedAxis"],
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
  Box3InputDirection: ["enum", "type/enum/InputDirection"],
  GameInputDirection: ["enum", "type/enum/InputDirection"],
  Box3PlayerMoveState: ["enum", "type/enum/PlayerMoveState"],
  GamePlayerMoveState: ["enum", "type/enum/PlayerMoveState"],
  Box3PlayerWalkState: ["enum", "type/enum/PlayerWalkState"],
  GamePlayerWalkState: ["enum", "type/enum/PlayerWalkState"],
  Box3DialogType: ["enum", "type/enum/DialogType"],
  GameDialogType: ["enum", "type/enum/DialogType"],
  Box3DialogSelectResponse: ["type", "type/DialogSelectResponse"],
  GameDialogSelectResponse: ["type", "type/DialogSelectResponse"],
  Box3TextDialogParams: ["type", "type/TextDialogParams"],
  GameTextDialogParams: ["type", "type/TextDialogParams"],
  Box3SelectDialogParams: ["type", "type/SelectDialogParams"],
  GameSelectDialogParams: ["type", "type/SelectDialogParams"],
  Box3InputDialogParams: ["type", "type/InputDialogParams"],
  GameInputDialogParams: ["type", "type/InputDialogParams"],
  Box3DialogCancelOption: ["type", "type/DialogCancelOption"],
  GameDialogCancelOption: ["type", "type/DialogCancelOption"],
  Box3DialogCall: ["type", "type/DialogCall"],
  GameDialogCall: ["type", "type/DialogCall"],
  Box3AssetListEntry: ["type", "type/DialogCall"],
  GameAssetListEntry: ["type", "type/DialogCall"],

  Box3DataBase: ["class", "db"],
  Box3QueryResult: ["class", 'class/QueryResult'],
  GameStorage: ["class", "storage"],
  GameDataStorage: ["class", "class/DataStorage"],
  db: ["object", "db"],
  storage: ["object", "storage"],
  gui: ["object private", "gui"],
  GameGUI: ["class private", "gui"],
  GameGUIEventListener: ["interface private", "type/GUIEventListener"],
  GUIConfig: ["type private"],
  GUIConfigItem: ["interface private"],
  GameGUIEvent: ["event private"],
  rtc: ["object private", "rtc"],
  GameRTC: ["class private", "rtc"],
  GameRTCChannel: ["class private", "class/RTCChannel"],
  http: ["object private", "http"],
  GameHttpAPI: ["class private", "http"],

  Box3Voxels: ["class", "voxels"],
  GameVoxels: ["class", "voxels"],
  voxels: ["object", "voxels"],

  Box3BodyPart: ["enum", "type/enum/BodyPart"],
  GameBodyPart: ["enum", "type/enum/BodyPart"],

  ServerRemoteChannel: ["class", "class/ServerRemoteChannel"],
  PlayerNavigator: ["class private", "class/PlayerNavigator"],
  SocialType: ["enum", "enum/SocialType"],

  Promise: ["object", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"],
  NavigatorEventType: ["enum private"],
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
  hiddenArg: "variable parent-enum private",
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
  hiddenEnumMember: "enum-member private",
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
        ? "/box3-docs/api/"
        : "/api/";
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
          ? "/box3-docs/api/"
          : "/api/";
        const search = JOKE_MODE ? '?jokemode=true' : '';
        if (keywordDefsMap[innerHTML][0]) {
          if (keywordDefsMap[innerHTML][0].startsWith('http://') || keywordDefsMap[innerHTML][0].startsWith('https://'))
            el.href = keywordDefsMap[innerHTML][0] + search;
          else
            el.href = prefix + keywordDefsMap[innerHTML][0] + search;
        } else {
          el.href = `javascript:alert$.next("❌ 找不到对应页面")`;
        }
        return;
      }
      iconId = iconTagMap[def];
      el.parentElement.replaceChild(createIconElement(innerHTML, iconId), el);
      return;
    } else return;
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
    const a = document.createElement("a");
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