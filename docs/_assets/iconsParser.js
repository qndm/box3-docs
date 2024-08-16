const JOKE_MODE = new URL(location).searchParams.get('jokemode') === 'true';
/**@type {HTMLElement | null} */
var $JokeModeonly_element = null;
const defsMap = {
  any: ['type', 'js/type/any', 'type'],
  object: ['type', , 'type'],
  Record: ['type generic', , 'type'],
  Tuple: ['type generic', , 'type'],
  Promise: ["interface generic", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise", "interface"],
  Map: ["interface generic", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map", "interface"],
  ArrayBuffer: ["interface generic", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer", "interface"],
  ReadonlyArray: ["interface generic", , "interface"],
  URL: ["class", "js/type/URL", 'class'],
  Array: ["interface generic", "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array", "interface"],
  setTimeout: ["function", "https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout", "function"],
  setInterval: ["function", "https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval", "function"],
  clearTimeout: ["function", "https://developer.mozilla.org/zh-CN/docs/Web/API/clearTimeout", "function"],
  clearInterval: ["function", "https://developer.mozilla.org/zh-CN/docs/Web/API/clearInterval", "function"],

  resources: ["object private", 'api/resources', 'const'],
  Box3ResourceSystem: ["class private", 'api/resources', 'class'],
  GameResourceSystem: ["class private", 'api/resources', 'class'],
  Box3TickEvent: ["class", "api/event/TickEvent", 'class'],
  GameTickEvent: ["class", "api/event/TickEvent", 'class'],
  world: ["object protected", "api/world", 'constObject'],
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
  Box3ClickEvent: ["class", "api/event/ClickEvent", 'class'],
  GameClickEvent: ["class", "api/event/ClickEvent", 'class'],
  Box3EventChannel: ["type generic", "api/type/EventChannel", 'type'],
  GameEventChannel: ["type generic", "api/type/EventChannel", 'type'],
  Box3EventFuture: ["type generic", "api/type/EventFuture", 'type'],
  GameEventFuture: ["type generic", "api/type/EventFuture", 'type'],
  Box3RespawnEvent: ["class", "api/event/RespawnEvent", 'class'],
  GameRespawnEvent: ["class", "api/event/RespawnEvent", 'class'],
  Partial: ["type generic", "api/type/Partial", 'type'],
  Box3EntityConfig: ["interface", "api/type/EntityConfig", "interface"],
  GameEntityConfig: ["interface", "api/type/EntityConfig", "interface"],
  Box3Vector3: ["class", "api/class/Vector3", 'class'],
  GameVector3: ["class", "api/class/Vector3", 'class'],
  Box3SelectorString: ["type", "api/type/SelectorString", 'type'],
  GameSelectorString: ["type", "api/type/SelectorString", 'type'],
  Number: ["interface", "js/type/Number", 'interface'],
  number: ["type", "js/type/Number", 'type'],
  Boolean: ["interface", "js/type/Boolean", 'interface'],
  boolean: ["type", "js/type/Boolean", 'type'],
  Box3RaycastOptions: ["interface", "api/type/RaycastOptions", 'interface'],
  GameRaycastOptions: ["interface", "api/type/RaycastOptions", 'interface'],
  Box3RaycastResult: ["class", "api/type/RaycastResult", 'class'],
  GameRaycastResult: ["class", "api/type/RaycastResult", 'class'],
  String: ["interface", "js/type/String", 'interface'],
  string: ["type", "js/type/String", 'type'],
  void: ["type", "js/type/void", 'type'],
  never: ["type", "js/type/never", 'type'],
  null: ["static", "js/type/null", 'keyword'],
  undefined: ["static", "js/type/undefined", 'keyword'],
  Box3Bounds3: ["class", "api/class/Bounds3", 'class'],
  GameBounds3: ["class", "api/class/Bounds3", 'class'],
  Box3Quaternion: ["class", "api/class/Quaternion", 'class'],
  GameQuaternion: ["class", "api/class/Quaternion", 'class'],
  Box3ButtonType: ["enum", "api/enum/ButtonType", 'enum'],
  GameButtonType: ["enum", "api/enum/ButtonType", 'enum'],
  Box3AnimationPlaybackConfig: ["interface", "api/type/AnimationPlaybackConfig", 'interface'],
  GameAnimationPlaybackConfig: ["interface", "api/type/AnimationPlaybackConfig", 'interface'],
  Box3Animation: ["class generic", "api/class/Animation", 'class'],
  GameAnimation: ["class generic", "api/class/Animation", 'class'],
  Box3WorldKeyframe: ["interface", "api/type/WorldKeyframe", 'interface'],
  GameWorldKeyframe: ["interface", "api/type/WorldKeyframe", 'interface'],
  Box3EntityKeyframe: ["interface", "api/type/EntityKeyframe", 'interface'],
  GameEntityKeyframe: ["interface", "api/type/EntityKeyframe", 'interface'],
  Box3PlayerKeyframe: ["interface", "api/type/PlayerKeyframe", 'interface'],
  GamePlayerKeyframe: ["interface", "api/type/PlayerKeyframe", 'interface'],
  Box3AnimationPlaybackState: ["enum", "api/enum/AnimationPlaybackState", 'enum'],
  GameAnimationPlaybackState: ["enum", "api/enum/AnimationPlaybackState", 'enum'],
  Box3AnimationDirection: ["enum", "api/enum/AnimationDirection", 'enum'],
  GameAnimationDirection: ["enum", "api/enum/AnimationDirection", 'enum'],
  Box3Easing: ["enum", "api/enum/Easing", 'enum'],
  GameEasing: ["enum", "api/enum/Easing", 'enum'],
  Box3RGBColor: ["class", "api/class/RGBColor", 'class'],
  Box3RGBAColor: ["class", "api/class/RGBAColor", 'class'],
  GameRGBColor: ["class", "api/class/RGBColor", 'class'],
  GameRGBAColor: ["class", "api/class/RGBAColor", 'class'],
  Box3SoundEffect: ["interface", "api/type/SoundEffect", 'interface'],
  GameSoundEffect: ["interface", "api/type/SoundEffect", 'interface'],
  GameMotionController: ["class generic", "api/class/MotionController", 'class'],
  GameMotionConfig: ["interface", "api/type/MotionConfig", 'interface'],
  GameMotionClipConfig: ["interface", "api/type/MotionClipConfig", 'interface'],
  GameMotionHandler: ["class generic", "api/class/MotionHandler", 'class'],
  GameMotionEvent: ["class", "api/event/MotionEvent", 'class'],
  Box3CameraMode: ["enum", "api/enum/CameraMode", 'enum'],
  GameCameraMode: ["enum", "api/enum/CameraMode", 'enum'],
  Box3CameraFreezedAxis: ["enum private", "api/enum/CameraFreezedAxis", 'hiddenEnum'],
  GameCameraFreezedAxis: ["enum private", "api/enum/CameraFreezedAxis", 'hiddenEnum'],
  Box3DamageEvent: ["class", "api/event/DamageEvent", 'class'],
  GameDamageEvent: ["class", "api/event/DamageEvent", 'class'],
  Box3DieEvent: ["class", "api/event/DieEvent", 'class'],
  GameDieEvent: ["class", "api/event/DieEvent", 'class'],
  Box3PlayerEntityEvent: ["class", "api/event/PlayerEntityEvent", 'class'],
  GamePlayerEntityEvent: ["class", "api/event/PlayerEntityEvent", 'class'],
  Box3EntityEvent: ["class", "api/event/EntityEvent", 'class'],
  GameEntityEvent: ["class", "api/event/EntityEvent", 'class'],
  Box3ChatEvent: ["class", "api/event/ChatEvent", 'class'],
  GameChatEvent: ["class", "api/event/ChatEvent", 'class'],
  Box3InputEvent: ["class", "api/event/InputEvent", 'class'],
  GameInputEvent: ["class", "api/event/InputEvent", 'class'],
  GameKeyBoardEvent: ["class", "api/event/KeyBoardEvent", 'class'],
  Box3EntityContactEvent: ["class", "api/event/EntityContactEvent", 'class'],
  GameEntityContactEvent: ["class", "api/event/EntityContactEvent", 'class'],
  Box3VoxelContactEvent: ["class", "api/event/VoxelContactEvent", 'class'],
  GameVoxelContactEvent: ["class", "api/event/VoxelContactEvent", 'class'],
  Box3InteractEvent: ["class", "api/event/InteractEvent", 'class'],
  GameInteractEvent: ["class", "api/event/InteractEvent", 'class'],
  Box3FluidContactEvent: ["class", "api/event/FluidContactEvent", 'class'],
  GameFluidContactEvent: ["class", "api/event/FluidContactEvent", 'class'],
  Box3TriggerEvent: ["class", "api/event/TriggerEvent", 'class'],
  GameTriggerEvent: ["class", "api/event/TriggerEvent", 'class'],
  Box3AnimationEvent: ["class", "api/event/AnimationEvent", 'class'],
  GameAnimationEvent: ["class", "api/event/AnimationEvent", 'class'],
  GamePurchaseSuccessEvent: ["class", "api/event/PurchaseSuccessEvent", 'class'],
  GameSkin: ["type private", "api/type/Skin", 'type'],
  GameSkinValue: ["type private", "api/type/SkinValue", 'hiddenType'],
  Box3SkinInvisible: ["type", "api/type/SkinInvisible", 'type'],
  GameSkinInvisible: ["type", "api/type/SkinInvisible", 'type'],
  Box3InputDirection: ["enum", "api/enum/InputDirection", 'enum'],
  GameInputDirection: ["enum", "api/enum/InputDirection", 'enum'],
  Box3PlayerMoveState: ["enum", "api/enum/PlayerMoveState", 'enum'],
  GamePlayerMoveState: ["enum", "api/enum/PlayerMoveState", 'enum'],
  Box3PlayerWalkState: ["enum", "api/enum/PlayerWalkState", 'enum'],
  GamePlayerWalkState: ["enum", "api/enum/PlayerWalkState", 'enum'],
  Box3DialogType: ["enum", "api/enum/DialogType", 'enum'],
  GameDialogType: ["enum", "api/enum/DialogType", 'enum'],
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
  Box3AssetListEntry: ["type private", "api/class/AssetListEntry", 'hiddenType'],
  GameAssetListEntry: ["type private", "api/class/AssetListEntry", 'hiddenType'],
  Box3AssetType: ["enum private", "api/enum/AssetType", 'hiddenEnum'],
  GameAssetType: ["enum private", "api/enum/AssetType", 'hiddenEnum'],
  Box3ZoneConfig: ["type", "api/type/ZoneConfig", 'type'],
  GameZoneConfig: ["type", "api/type/ZoneConfig", 'type'],
  Box3EventHandlerToken: ["class", "api/class/EventHandlerToken", 'class'],
  GameEventHandlerToken: ["class", "api/class/EventHandlerToken", 'class'],
  Box3Database: ["class", "api/db", 'class'],
  GameDatabase: ["class", "api/db", 'class'],
  Box3QueryResult: ["class", 'api/class/QueryResult', 'class'],
  GameQueryResult: ["class", 'api/class/QueryResult', 'class'],
  GameStorage: ["class", "api/storage", 'class'],
  GameDataStorage: ["class", "api/class/DataStorage", 'class'],
  QueryList: ["class", "api/class/QueryList", 'class'],
  ListPageOptions: ["type", "api/type/ListPageOptions", 'type'],
  ReturnValue: ["type", "api/type/ReturnValue", 'type'],
  JSONValue: ["type", "api/type/JSONValue", 'type'],
  db: ["object protected", "api/db", 'const'],
  storage: ["object protected", "api/storage", 'const'],
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
  console: ["object protected", 'api/console', "const"],
  GameConsole: ["class private", 'api/console', "hiddenClass"],
  Box3LoggerMethod: ["type private", 'api/type/LoggerMethod', "hiddenType"],
  GameLoggerMethod: ["type private", 'api/type/LoggerMethod', "hiddenType"],
  Box3EntityContact: ["class", "api/class/EntityContact", "class"],
  GameEntityContact: ["class", "api/class/EntityContact", "class"],
  Box3VoxelContact: ["class", "api/class/VoxelContact", "class"],
  GameVoxelContact: ["class", "api/class/VoxelContact", "class"],
  Box3FluidContact: ["class", "api/class/FluidContact", "class"],
  GameFluidContact: ["class", "api/class/FluidContact", "class"],
  Box3HurtOptions: ["interface", "api/type/HurtOptions", "interface"],
  GameHurtOptions: ["interface", "api/type/HurtOptions", "interface"],
  Box3Wearable: ["class", "api/class/Wearable", "class"],
  GameWearable: ["class", "api/class/Wearable", "class"],
  Box3Voxels: ["class", "api/voxels", "class"],
  GameVoxels: ["class", "api/voxels", "class"],
  voxels: ["object protected", "api/voxels", "const"],
  Box3BodyPart: ["enum", "api/enum/BodyPart", "enum"],
  GameBodyPart: ["enum", "api/enum/BodyPart", "enum"],
  ServerRemoteChannel: ["class", "api/remoteChannel", "class"],
  ClientRemoteChannel: ["class", "api_client/remoteChannel", "class"],
  SendClientEventType: ["type", "api/remoteChannel#sendclienteventtype", "type"],
  ServerEvent: ["class", "api/event/ServerEvent", "class"],
  PlayerNavigator: ["class private", "api/class/PlayerNavigator", "hiddenClass"],
  SocialType: ["enum", "api/enum/SocialType", "enum"],
  NavigatorEventType: ["enum private", , "hiddenEnum"],
  Sound: ["class private", "api/class/Sound", "hiddenClass"],

  UiNode: ["class", "api_client/class/UiNode", "class"],
  UiRenderable: ["class", "api_client/class/UiRenderable", "class"],
  UiBox: ["class", "api_client/class/UiRenderable", "class"],
  UiImage: ["class", "api_client/class/UiRenderable", "class"],
  UiText: ["class", "api_client/class/UiRenderable", "class"],
  UiInput: ["class", "api_client/class/UiRenderable", "class"],
  ui: ["object", "api_client/ui", "constObject"],
  input: ["object", "api_client/input", "constObject"],
  InputSystem: ["class", "api_client/input", "class"],
  UiScale: ["class", "api_client/class/UiScale", "class"],
  Vec2: ["class", "api_client/class/Vec2", "class"],
  Vec3: ["class", "api_client/class/Vec3", "class"],
  Coord2: ["class", "api_client/class/Coord2", "class"],
  PointerEventBehavior: ["enum", "api_client/enum/PointerEventBehavior", "enum"],
  screenWidth: ["variable protected", "api_client/screen", "const"],
  screenHeight: ["variable protected", "api_client/screen", "const"],
  EventEmitter: ["class generic", "api_client/class/EventEmitter", "class"],
  ClientRemoteChannel: ["class", "api_client/class/remoteChannel", "class"],
  UiComponent: ["class private", "api_client/class/UiComponent", "class"],
  UiNodeEvents: ["type private", "api_client/type/UiNodeEvents", "type"],
  PointerLockEvents: ["type private", "api_client/type/event/PointerLockEvents", "type"],
  PointerLockChangeEvent: ["type", "api_client/type/PointerLockChangeEvent", "type"],
  ClientRemoteChannel: ["class", "api_client/remoteChannel", "class"],
  UiEvent: ["interface private", "api_client/interface/UiEvent", "hiddenInterface"],
  UiInputEvent: ["interface private", "api_client/interface/UiInputEvent", "hiddenInterface"],
  UiInputEvents: ["type private", "api_client/type/UiInputEvents", "hiddenType"],
  ClientRemoteChannelEvents: ["type private", "api_client/type/ClientRemoteChannelEvents", "hiddenType"],
};
const keywordDefsMap = {
  this: [],
  extends: ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends"],
  keyof: [],
  async: ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"],
  await: ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await"],
}
const iconTagMap = {
  method: ["method parent-class", "#c2c262"],
  genericMethod: ["method generic parent-class", "#c2c262"],
  readonlyMethod: ["method parent-class protected", "#c2c262"],
  inheritedMethod: ["method parent-class inherited", "#c2c262"],
  eventArg: ["event parent-enum", "#00bfa5"],
  function: ["function", "#c2c262"],
  arg: ["variable parent-enum", "#00b0ff"],
  hiddenArg: ["variable parent-enum private", "#00b0ff"],
  property: ["property parent-class", "#00b0ff"],
  readonly: ["property parent-class protected", "#448aff"],
  inherited: ["property parent-class inherited", "#00b0ff"],
  hiddenProperty: ["property parent-class private", "#00b0ff"],
  hiddenReadonly: ["property parent-class private", "#448aff"],
  readonlyInherited: ["property parent-class protected inherited", "#448aff"],
  hiddenInherited: ["property parent-class private", "#00b0ff"],
  hiddenMethod: ["method parent-class private", "#c2c262"],
  object: ["object", "#00b0ff"],
  hiddenObject: ["object", "#00b0ff"],
  constructor: ["constructor parent-class", "#508fe0"],
  hiddenConstructor: ["constructor parent-class private", "#508fe0"],
  interface: ["interface", "#00bfa5"],
  hiddenInterface: ["interface private", "#00bfa5"],
  class: ["class", "#00bfa5"],
  hiddenClass: ["class", "#00bfa5"],
  const: ["variable protected", "#448aff"],
  constObject: ["object protected", "#448aff"],
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
  index: ["index", "#00b0ff"],
  indexArg: ["index parent-enum", "#00b0ff"],
};
function createIconElement(text, id, color) {
  const list = id.split(" ");
  const i = document.createElement("span");
  i.classList.add("kind-icon", ...list.filter((s) => !!s));
  i.innerText = text.trim();
  i.style.display = "inline-block";
  if (color)
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
    let notLink = false;
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
        notLink = true;
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
          if (keywordDefsMap[innerHTML][0].startsWith('http://') || keywordDefsMap[innerHTML][0].startsWith('https://')) {
            el.href = keywordDefsMap[innerHTML][0] + search;
            el.target = "_blank";
          } else
            el.href = prefix + keywordDefsMap[innerHTML][0] + search;
        } else {
          el.href = `javascript:alert$.next("❌ 找不到对应页面")`;
          notLink = true;
        }
        el.style.color = iconTagMap.keyword[1];

        return;
      }
      iconId = iconTagMap[def]?.[0];
      el.parentElement.replaceChild(createIconElement(innerHTML, iconId, iconTagMap?.[def]?.[1]), el);
      return;
    } else return;
    a.href = href;
    const i = createIconElement(def, iconId, iconTagMap[defsMap[def]?.[2]]?.[1]);
    if (notLink)
      i.classList.add('notLink');
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
    let notLink = false;
    if (Object.keys(defsMap).includes(def)) {
      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/"
        : "/";
      const search = JOKE_MODE ? '?jokemode=true' : '';
      if (defsMap[def][1]) {
        if (defsMap[def][1].startsWith('http://') || defsMap[def][1].startsWith('https://')) {
          href = defsMap[def][1] + search;
          a.target = "_blank";
        }
        else
          href = prefix + defsMap[def][1] + search;
      } else {
        href = `javascript:alert$.next("❌ 找不到对应页面")`;
        notLink = true;
      }
    } else {
      isError = true;
      console.error("def标签未定义", def);
      href = "javascript:alert$.next('⚠ 此标识未定义')";
    }
    a.href = href;
    const i = createIconElement(def, iconId, iconTagMap?.[defsMap[def]?.[2]]?.[1]);
    if (notLink)
      i.classList.add('notLink')
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