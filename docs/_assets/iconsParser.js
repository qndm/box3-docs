const defsMap = {
  Box3TickEvent: ["event", "event/TickEvent"],
  GameTickEvent: ["event", "event/TickEvent"],
  Box3World: ["class", "world"],
  world: ["object", "world"],
  GameWorld: ["class", "world"],
  Box3Entity: ["class", "entity"],
  GameEntity: ["class", "entity"],
  Box3Player: ["class", "player"],
  GamePlayer: ["class", "player"],
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
  number: ["static", "type/base/Number"],
  Boolean: ["object", "type/base/Boolean"],
  boolean: ["static", "type/base/Boolean"],
  Box3RaycastOptions: ["interface", "type/RaycastOptions"],
  GameRaycastOptions: ["interface", "type/RaycastOptions"],
  Box3RaycastResult: ["class", "type/RaycastResult"],
  GameRaycastResult: ["class", "type/RaycastResult"],
  String: ["object", "type/base/String"],
  string: ["static", "type/base/String"],
  void: ["static"],
  Box3Bounds3: ["class", "type/Bounds3"],
  GameBounds3: ["class", "type/Bounds3"],
  Box3Quaternion: ["class", "type/Quaternion"],
  GameQuaternion: ["class", "type/Quaternion"],
  Box3WorldKeyframe: ["class", "type/WorldKeyframe"],
  GameWorldKeyframe: ["class", "type/WorldKeyframe"],
  Box3ButtonType: ["enum", "type/ButtonType"],
  GameButtonType: ["enum", "type/ButtonType"],
  Box3AnimationPlaybackConfig: ["interface", "type/AnimationPlaybackConfig"],
  GameAnimationPlaybackConfig: ["interface", "type/AnimationPlaybackConfig"],
  Box3Animation: ["class", "type/Animation"],
  GameAnimation: ["class", "type/Animation"],
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

  Box3DataBase: ["class", "database.md"],
  GameStorage: ["class", "storage.md"],
  GameDataStorage: ["class", "storage.md"],
  db: ["object", "database.md"],
  storage: ["object", "storage.md"],

  Box3Voxels: ["class", "voxels"],
  GameVoxels: ["class", "voxels"],
  voxels: ["object", "voxels"],

  Box3BodyPart: ["enum", "type/BodyPart"],
  GameBodyPart: ["enum", "type/BodyPart"],
};
const iconTagMap = {
  method: "method parent-class",
  listener: "event parent-class",
  promiseEvent: "event parent-interface",
  event: "event",
  function: "function",
  arg: "variable parent-enum",
  property: "property parent-class",
  readonly: "property parent-class protected",
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
  return i;
}
function parse() {
  document.querySelectorAll("a").forEach((el) => {
    const def = el.href.trim().slice(el.href.trim().lastIndexOf('/') + 1);
    let href = "";
    let isError = false;
    let iconId = "property";
    if (el.innerHTML.trim() === '' && Object.keys(defsMap).includes(def)) {

      iconId = defsMap[def][0];
      const prefix = location.href.includes("github.io")
        ? "/box3-docs/api/"
        : "/api/";
      if (defsMap[def][1]) {
        href = prefix + defsMap[def][1];
      } else {
        href = `javascript:alert("❌ 找不到对应页面")`;
      }
    } else if (Object.keys(iconTagMap).includes(def) && el.innerHTML.trim()) {
      iconId = iconTagMap[def];
      el.parentElement.replaceChild(createIconElement(el.innerHTML.trim() || def, iconId), el);
      return;
    } else return;
    const a = document.createElement("a");
    a.href = href;
    const i = createIconElement(el.innerHTML.trim() || def, iconId);
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
  document.querySelectorAll("span").forEach((el) => {
    if(false && el.hasAttribute('anchor')){
      let a = document.createElement('a');
      a.id = el.getAttribute('anchor');
      el.appendChild(a);
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
      if (defsMap[def][1]) {
        href = prefix + defsMap[def][1];
      } else {
        href = `javascript:alert("❌ 找不到对应页面")`;
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
