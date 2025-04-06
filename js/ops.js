"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.Vars=Ops.Vars || {};
Ops.Array=Ops.Array || {};
Ops.Local=Ops.Local || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Devices=Ops.Devices || {};
Ops.Gl.GLTF=Ops.Gl.GLTF || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Extension=Ops.Extension || {};
Ops.Gl.Matrix=Ops.Gl.Matrix || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.CubeMap=Ops.Gl.CubeMap || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.Devices.Mouse=Ops.Devices.Mouse || {};
Ops.Devices.Browser=Ops.Devices.Browser || {};
Ops.Gl.ImageCompose=Ops.Gl.ImageCompose || {};
Ops.Extension.AmmoPhysics=Ops.Extension.AmmoPhysics || {};
Ops.Gl.ImageCompose.Noise=Ops.Gl.ImageCompose.Noise || {};



// **************************************************************
// 
// Ops.Local.RotLFO
// 
// **************************************************************

Ops.Local.RotLFO= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"op.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"2yq98bl8z\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"r6v7cdmnm\",\"objOut\":\"2yq98bl8z\"}]}],\"storage\":{\"ref\":\"2yq98bl8z\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"mqqonta5z\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"value\",\"value\":20}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"4p7qlzazz\",\"objOut\":\"mqqonta5z\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"2yq98bl8z\",\"objOut\":\"mqqonta5z\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"j0r40bjqt\",\"objOut\":\"mqqonta5z\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"5aebro044\",\"objOut\":\"mqqonta5z\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"tbi5f8ups\",\"objOut\":\"mqqonta5z\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"7aclkex5j\",\"objOut\":\"mqqonta5z\"}]}],\"storage\":{\"ref\":\"mqqonta5z\"},\"objName\":\"Ops.Number.Number\"},{\"id\":\"4p7qlzazz\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"2yq98bl8z\",\"objOut\":\"4p7qlzazz\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"j0r40bjqt\",\"objOut\":\"4p7qlzazz\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"5aebro044\",\"objOut\":\"4p7qlzazz\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"tbi5f8ups\",\"objOut\":\"4p7qlzazz\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"7aclkex5j\",\"objOut\":\"4p7qlzazz\"}]}],\"storage\":{\"ref\":\"4p7qlzazz\"},\"objName\":\"Ops.Math.FlipSign\"},{\"id\":\"j0r40bjqt\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":1.23}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"na1k9iz63\",\"objOut\":\"j0r40bjqt\"}]}],\"storage\":{\"ref\":\"j0r40bjqt\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"5aebro044\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0.35}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"8j5lred51\",\"objOut\":\"5aebro044\"}]}],\"storage\":{\"ref\":\"5aebro044\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"tbi5f8ups\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":2.18}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"shmnszrkg\",\"objOut\":\"tbi5f8ups\"}]}],\"storage\":{\"ref\":\"tbi5f8ups\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"7aclkex5j\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0.32}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"wu845wzsu\",\"objOut\":\"7aclkex5j\"}]}],\"storage\":{\"ref\":\"7aclkex5j\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"r6v7cdmnm\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_0\"}],\"storage\":{\"ref\":\"r6v7cdmnm\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"na1k9iz63\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_1\"}],\"storage\":{\"ref\":\"na1k9iz63\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"8j5lred51\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_2\"}],\"storage\":{\"ref\":\"8j5lred51\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"shmnszrkg\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_3\"}],\"storage\":{\"ref\":\"shmnszrkg\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"wu845wzsu\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_4\"}],\"storage\":{\"ref\":\"wu845wzsu\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"ujwdt1bz9\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"TIME\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"2yq98bl8z\",\"objOut\":\"ujwdt1bz9\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"j0r40bjqt\",\"objOut\":\"ujwdt1bz9\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"5aebro044\",\"objOut\":\"ujwdt1bz9\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"tbi5f8ups\",\"objOut\":\"ujwdt1bz9\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"7aclkex5j\",\"objOut\":\"ujwdt1bz9\"}]}],\"storage\":{\"ref\":\"ujwdt1bz9\"},\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"pqtuyoaks\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"storage\":{\"ref\":\"pqtuyoaks\"},\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"6urecmegy\",\"uiAttribs\":{\"subPatch\":\"wjo7s60kz\"},\"storage\":{\"ref\":\"6urecmegy\"},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["ba6a823e-593d-43ba-b551-4ccd3b26e1c2"]={f:Ops.Local.RotLFO,objName:"Ops.Local.RotLFO"};




// **************************************************************
// 
// Ops.Local.VertLFO
// 
// **************************************************************

Ops.Local.VertLFO= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"op.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"bhsz30a33\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"0drevf0m8\",\"objOut\":\"bhsz30a33\"}]}],\"storage\":{\"ref\":\"bhsz30a33\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"76vbcobjx\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"value\",\"value\":0.1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"iyhm0ckqv\",\"objOut\":\"76vbcobjx\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"bhsz30a33\",\"objOut\":\"76vbcobjx\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"c4q8mv3q4\",\"objOut\":\"76vbcobjx\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"82jo4cmg3\",\"objOut\":\"76vbcobjx\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"84ifr2oa1\",\"objOut\":\"76vbcobjx\"},{\"portIn\":\"Range Max\",\"portOut\":\"result\",\"objIn\":\"laoa0uonv\",\"objOut\":\"76vbcobjx\"}]}],\"storage\":{\"ref\":\"76vbcobjx\"},\"objName\":\"Ops.Number.Number\"},{\"id\":\"iyhm0ckqv\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"bhsz30a33\",\"objOut\":\"iyhm0ckqv\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"c4q8mv3q4\",\"objOut\":\"iyhm0ckqv\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"82jo4cmg3\",\"objOut\":\"iyhm0ckqv\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"84ifr2oa1\",\"objOut\":\"iyhm0ckqv\"},{\"portIn\":\"Range Min\",\"portOut\":\"Result\",\"objIn\":\"laoa0uonv\",\"objOut\":\"iyhm0ckqv\"}]}],\"storage\":{\"ref\":\"iyhm0ckqv\"},\"objName\":\"Ops.Math.FlipSign\"},{\"id\":\"c4q8mv3q4\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":1.23}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"6gvnnaky1\",\"objOut\":\"c4q8mv3q4\"}]}],\"storage\":{\"ref\":\"c4q8mv3q4\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"82jo4cmg3\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0.35}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"nljjyzu8s\",\"objOut\":\"82jo4cmg3\"}]}],\"storage\":{\"ref\":\"82jo4cmg3\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"84ifr2oa1\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":2.18}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"dn0jddoei\",\"objOut\":\"84ifr2oa1\"}]}],\"storage\":{\"ref\":\"84ifr2oa1\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"laoa0uonv\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Frequency\",\"value\":0.2},{\"name\":\"Type index\",\"value\":0},{\"name\":\"Type\",\"value\":\"sine\"},{\"name\":\"Phase\",\"value\":0.32}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"Result\",\"objIn\":\"qywqadjjo\",\"objOut\":\"laoa0uonv\"}]}],\"storage\":{\"ref\":\"laoa0uonv\"},\"objName\":\"Ops.Anim.LFO_v3\"},{\"id\":\"nvqidm38c\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"TIME\"}],\"portsOut\":[{\"name\":\"Value\",\"links\":[{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"bhsz30a33\",\"objOut\":\"nvqidm38c\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"c4q8mv3q4\",\"objOut\":\"nvqidm38c\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"82jo4cmg3\",\"objOut\":\"nvqidm38c\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"84ifr2oa1\",\"objOut\":\"nvqidm38c\"},{\"portIn\":\"Time\",\"portOut\":\"Value\",\"objIn\":\"laoa0uonv\",\"objOut\":\"nvqidm38c\"}]}],\"storage\":{\"ref\":\"nvqidm38c\"},\"objName\":\"Ops.Vars.VarGetNumber_v2\"},{\"id\":\"0drevf0m8\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_5\"}],\"storage\":{\"ref\":\"0drevf0m8\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"6gvnnaky1\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_6\"}],\"storage\":{\"ref\":\"6gvnnaky1\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"nljjyzu8s\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_7\"}],\"storage\":{\"ref\":\"nljjyzu8s\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"dn0jddoei\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_8\"}],\"storage\":{\"ref\":\"dn0jddoei\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"qywqadjjo\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"portsIn\":[{\"name\":\"Variable\",\"value\":\"lfo_9\"}],\"storage\":{\"ref\":\"qywqadjjo\"},\"objName\":\"Ops.Vars.VarSetNumber_v2\"},{\"id\":\"hxgq1awsd\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"storage\":{\"ref\":\"hxgq1awsd\"},\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"shngqo6yv\",\"uiAttribs\":{\"subPatch\":\"lzwyefhmc\"},\"storage\":{\"ref\":\"shngqo6yv\"},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["3523d11d-71a7-4756-bbcb-2f71599d2c7a"]={f:Ops.Local.VertLFO,objName:"Ops.Local.VertLFO"};




// **************************************************************
// 
// Ops.Anim.LFO_v3
// 
// **************************************************************

Ops.Anim.LFO_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    time = op.inValue("Time"),
    speed = op.inFloat("Frequency", 1),
    type = op.inValueSelect("Type", ["sine", "triangle", "ramp up", "ramp down", "square"], "sine"),
    phase = op.inValue("Phase", 0),
    rangeMin = op.inValue("Range Min", -1),
    rangeMax = op.inValue("Range Max", 1),
    result = op.outNumber("Result");

let v = 0;
type.onChange = updateType;

updateType();

const PI2 = Math.PI / 2;

function updateType()
{
    if (type.get() == "sine") time.onChange = sine;
    if (type.get() == "ramp up") time.onChange = rampUp;
    if (type.get() == "ramp down") time.onChange = rampDown;
    if (type.get() == "square") time.onChange = square;
    if (type.get() == "triangle") time.onChange = triangle;
}

function updateTime()
{
    return (time.get() * speed.get()) + phase.get();
}

function square()
{
    let t = updateTime() + 0.5;
    v = t % 2.0;
    if (v <= 1.0)v = -1;
    else v = 1;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampUp()
{
    let t = (updateTime() + 1);
    v = t % 1.0;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampDown()
{
    let t = updateTime();
    v = t % 1.0;
    v -= 0.5;
    v *= -2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function triangle()
{
    let t = updateTime();
    v = t % 2.0;
    if (v > 1) v = 2.0 - v;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function sine()
{
    let t = updateTime() * Math.PI - (PI2);
    v = Math.sin((t));
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

}
};

CABLES.OPS["5bdbe26b-dea3-4266-850c-1b66ed29936e"]={f:Ops.Anim.LFO_v3,objName:"Ops.Anim.LFO_v3"};




// **************************************************************
// 
// Ops.Number.Number
// 
// **************************************************************

Ops.Number.Number= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

function exec()
{
    if (CABLES.UI) op.setUiAttribs({ "extendTitle": v.get() });

    result.set(Number(v.get()));
}

}
};

CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};




// **************************************************************
// 
// Ops.Math.FlipSign
// 
// **************************************************************

Ops.Math.FlipSign= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inValueFloat("Value", 1),
    result = op.outNumber("Result");

inval.onChange = update;
update();

function update()
{
    result.set(inval.get() * -1);
}

}
};

CABLES.OPS["f5c858a2-2654-4108-86fe-319efa70ecec"]={f:Ops.Math.FlipSign,objName:"Ops.Math.FlipSign"};




// **************************************************************
// 
// Ops.Vars.VarSetNumber_v2
// 
// **************************************************************

Ops.Vars.VarSetNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inValueFloat("Value", 0);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName);

}
};

CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};




// **************************************************************
// 
// Ops.Vars.VarGetNumber_v2
// 
// **************************************************************

Ops.Vars.VarGetNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outNumber("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "number", op.varName, val);

}
};

CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};

}
};

CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;

}
};

CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.Gl.MainLoop_v2
// 
// **************************************************************

Ops.Gl.MainLoop_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    hdpi = op.inFloat("Max Pixel Density (DPR)", 2),
    fpsLimit = op.inValue("FPS Limit", 0),
    reduceFocusFPS = op.inValueBool("Reduce FPS unfocussed", false),
    clear = op.inValueBool("Transparent", false),
    active = op.inValueBool("Active", 1),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    outPixel = op.outNumber("Pixel Density");

op.onAnimFrame = render;
hdpi.onChange = updateHdpi;

const cgl = op.patch.cg = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;
if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

let fsElement = null;
let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });

testMultiMainloop();

op.patch.tempData.mainloopOp = this;

function updateHdpi()
{
    setPixelDensity();

    if (CABLES.UI)
    {
        if (hdpi.get() < 1)
            op.patch.cgl.canvas.style.imageRendering = "pixelated";
    }

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
}

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

function getFpsLimit()
{
    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0.0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function setPixelDensity()
{
    if (hdpi.get() != 0) op.patch.cgl.pixelDensity = Math.min(hdpi.get(), window.devicePixelRatio);
    else op.patch.cgl.pixelDensity = window.devicePixelRatio;
}

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    setPixelDensity();

    // if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        width.set(cgl.canvasWidth / 1);
        height.set(cgl.canvasHeight / 1);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (!clear.get()) cgl.gl.clearColor(0, 0, 0, 1);
    else cgl.gl.clearColor(0, 0, 0, 0);

    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (!clear.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.tempData.phong)cgl.tempData.phong = {};
    rframes++;

    outPixel.set(op.patch.cgl.pixelDensity);
    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}

}
};

CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};




// **************************************************************
// 
// Ops.Trigger.Sequence
// 
// **************************************************************

Ops.Trigger.Sequence= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });
const
    exes = [],
    triggers = [],
    num = 16;

let
    updateTimeout = null,
    connectedOuts = [];

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hideParam": true, "hidePort": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;

    if (i < num - 1)
    {
        let newExe = op.inTrigger("exe " + i);
        newExe.onTriggered = triggerAll;
        exes.push(newExe);
    }
}

updateConnected();

function updateConnected()
{
    connectedOuts.length = 0;
    for (let i = 0; i < triggers.length; i++)
        if (triggers[i].links.length > 0) connectedOuts.push(triggers[i]);
}

function updateButton()
{
    updateConnected();
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    // for (let i = 0; i < triggers.length; i++) triggers[i].trigger();
    for (let i = 0; i < connectedOuts.length; i++) connectedOuts[i].trigger();
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
    updateConnected();
}

}
};

CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfScene_v4
// 
// **************************************************************

Ops.Gl.GLTF.GltfScene_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_camera_js":"const gltfCamera = class\r\n{\r\n    constructor(gltf, node)\r\n    {\r\n        this.node = node;\r\n        this.name = node.name;\r\n        // console.log(gltf);\r\n        this.config = gltf.json.cameras[node.camera];\r\n\r\n        this.pos = vec3.create();\r\n        this.quat = quat.create();\r\n        this.vCenter = vec3.create();\r\n        this.vUp = vec3.create();\r\n        this.vMat = mat4.create();\r\n    }\r\n\r\n    updateAnim(time)\r\n    {\r\n        if (this.node && this.node._animTrans)\r\n        {\r\n            vec3.set(this.pos,\r\n                this.node._animTrans[0].getValue(time),\r\n                this.node._animTrans[1].getValue(time),\r\n                this.node._animTrans[2].getValue(time));\r\n\r\n            quat.set(this.quat,\r\n                this.node._animRot[0].getValue(time),\r\n                this.node._animRot[1].getValue(time),\r\n                this.node._animRot[2].getValue(time),\r\n                this.node._animRot[3].getValue(time));\r\n        }\r\n    }\r\n\r\n    start(time)\r\n    {\r\n        if (cgl.tempData.shadowPass) return;\r\n\r\n        this.updateAnim(time);\r\n        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];\r\n\r\n        cgl.pushPMatrix();\r\n        // mat4.perspective(\r\n        //     cgl.pMatrix,\r\n        //     this.config.perspective.yfov*0.5,\r\n        //     asp,\r\n        //     this.config.perspective.znear,\r\n        //     this.config.perspective.zfar);\r\n\r\n        cgl.pushViewMatrix();\r\n        // mat4.identity(cgl.vMatrix);\r\n\r\n        // if(this.node && this.node.parent)\r\n        // {\r\n        //     console.log(this.node.parent)\r\n        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);\r\n        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);\r\n        // mat4.translate(cgl.vMatrix,cgl.vMatrix,\r\n        // [\r\n        //     -this.node.parent._node.translation[0],\r\n        //     -this.node.parent._node.translation[1],\r\n        //     -this.node.parent._node.translation[2]\r\n        // ])\r\n        // }\r\n\r\n        // vec3.set(this.vUp, 0, 1, 0);\r\n        // vec3.set(this.vCenter, 0, -1, 0);\r\n        // // vec3.set(this.vCenter, 0, 1, 0);\r\n        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);\r\n        // vec3.normalize(this.vCenter, this.vCenter);\r\n        // vec3.add(this.vCenter, this.vCenter, this.pos);\r\n\r\n        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);\r\n\r\n        let mv = mat4.create();\r\n        mat4.invert(mv, this.node.modelMatAbs());\r\n\r\n        // console.log(this.node.modelMatAbs());\r\n\r\n        this.vMat = mv;\r\n\r\n        mat4.identity(cgl.vMatrix);\r\n        // console.log(mv);\r\n        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);\r\n    }\r\n\r\n    end()\r\n    {\r\n        if (cgl.tempData.shadowPass) return;\r\n        cgl.popPMatrix();\r\n        cgl.popViewMatrix();\r\n    }\r\n};\r\n","inc_gltf_js":"const le = true; // little endian\r\n\r\nconst Gltf = class\r\n{\r\n    constructor()\r\n    {\r\n        this.json = {};\r\n        this.accBuffers = [];\r\n        this.meshes = [];\r\n        this.nodes = [];\r\n        this.shaders = [];\r\n        this.timing = [];\r\n        this.cams = [];\r\n        this.startTime = performance.now();\r\n        this.bounds = new CABLES.CG.BoundingBox();\r\n        this.loaded = Date.now();\r\n        this.accBuffersDelete = [];\r\n    }\r\n\r\n    getNode(n)\r\n    {\r\n        for (let i = 0; i < this.nodes.length; i++)\r\n        {\r\n            if (this.nodes[i].name == n) return this.nodes[i];\r\n        }\r\n    }\r\n\r\n    unHideAll()\r\n    {\r\n        for (let i = 0; i < this.nodes.length; i++)\r\n        {\r\n            this.nodes[i].unHide();\r\n        }\r\n    }\r\n};\r\n\r\nfunction Utf8ArrayToStr(array)\r\n{\r\n    if (window.TextDecoder) return new TextDecoder(\"utf-8\").decode(array);\r\n\r\n    let out, i, len, c;\r\n    let char2, char3;\r\n\r\n    out = \"\";\r\n    len = array.length;\r\n    i = 0;\r\n    while (i < len)\r\n    {\r\n        c = array[i++];\r\n        switch (c >> 4)\r\n        {\r\n        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:\r\n            // 0xxxxxxx\r\n            out += String.fromCharCode(c);\r\n            break;\r\n        case 12: case 13:\r\n            // 110x xxxx   10xx xxxx\r\n            char2 = array[i++];\r\n            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));\r\n            break;\r\n        case 14:\r\n            // 1110 xxxx  10xx xxxx  10xx xxxx\r\n            char2 = array[i++];\r\n            char3 = array[i++];\r\n            out += String.fromCharCode(((c & 0x0F) << 12) |\r\n                    ((char2 & 0x3F) << 6) |\r\n                    ((char3 & 0x3F) << 0));\r\n            break;\r\n        }\r\n    }\r\n\r\n    return out;\r\n}\r\n\r\nfunction readChunk(dv, bArr, arrayBuffer, offset)\r\n{\r\n    const chunk = {};\r\n\r\n    if (offset >= dv.byteLength)\r\n    {\r\n        // op.log(\"could not read chunk...\");\r\n        return;\r\n    }\r\n    chunk.size = dv.getUint32(offset + 0, le);\r\n\r\n    // chunk.type = new TextDecoder(\"utf-8\").decode(bArr.subarray(offset+4, offset+4+4));\r\n    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));\r\n\r\n    if (chunk.type == \"BIN\\0\")\r\n    {\r\n        // console.log(chunk.size,arrayBuffer.length,offset);\r\n        // try\r\n        // {\r\n        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);\r\n        // }\r\n        // catch(e)\r\n        // {\r\n        //     chunk.dataView = null;\r\n        //     console.log(e);\r\n        // }\r\n    }\r\n    else\r\n    if (chunk.type == \"JSON\")\r\n    {\r\n        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));\r\n\r\n        try\r\n        {\r\n            const obj = JSON.parse(json);\r\n            chunk.data = obj;\r\n            outGenerator.set(obj.asset.generator);\r\n        }\r\n        catch (e)\r\n        {\r\n        }\r\n    }\r\n    else\r\n    {\r\n        op.warn(\"unknown type\", chunk.type);\r\n    }\r\n\r\n    return chunk;\r\n}\r\n\r\nfunction loadAnims(gltf)\r\n{\r\n    const uniqueAnimNames = {};\r\n\r\n    for (let i = 0; i < gltf.json.animations.length; i++)\r\n    {\r\n        const an = gltf.json.animations[i];\r\n\r\n        an.name = an.name || \"unknown\";\r\n\r\n        for (let ia = 0; ia < an.channels.length; ia++)\r\n        {\r\n            const chan = an.channels[ia];\r\n\r\n            const node = gltf.nodes[chan.target.node];\r\n            const sampler = an.samplers[chan.sampler];\r\n\r\n            const acc = gltf.json.accessors[sampler.input];\r\n            const bufferIn = gltf.accBuffers[sampler.input];\r\n\r\n            const accOut = gltf.json.accessors[sampler.output];\r\n            const bufferOut = gltf.accBuffers[sampler.output];\r\n\r\n            gltf.accBuffersDelete.push(sampler.output, sampler.input);\r\n\r\n            if (bufferIn && bufferOut)\r\n            {\r\n                let numComps = 1;\r\n                if (accOut.type === \"VEC2\")numComps = 2;\r\n                else if (accOut.type === \"VEC3\")numComps = 3;\r\n                else if (accOut.type === \"VEC4\")numComps = 4;\r\n                else if (accOut.type === \"SCALAR\")\r\n                {\r\n                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...\r\n                }\r\n                else op.log(\"[] UNKNOWN accOut.type\", accOut.type);\r\n\r\n                const anims = [];\r\n\r\n                uniqueAnimNames[an.name] = true;\r\n\r\n                for (let k = 0; k < numComps; k++)\r\n                {\r\n                    const newAnim = new CABLES.Anim();\r\n                    // newAnim.name=an.name;\r\n                    anims.push(newAnim);\r\n                }\r\n\r\n                if (sampler.interpolation === \"LINEAR\") {}\r\n                else if (sampler.interpolation === \"STEP\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;\r\n                else if (sampler.interpolation === \"CUBICSPLINE\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;\r\n                else op.warn(\"unknown interpolation\", sampler.interpolation);\r\n\r\n                // console.log(bufferOut)\r\n\r\n                // if there is no keyframe for time 0 copy value of first keyframe at time 0\r\n                if (bufferIn[0] !== 0.0)\r\n                    for (let k = 0; k < numComps; k++)\r\n                        anims[k].setValue(0, bufferOut[0 * numComps + k]);\r\n\r\n                for (let j = 0; j < bufferIn.length; j++)\r\n                {\r\n                    maxTime = Math.max(bufferIn[j], maxTime);\r\n\r\n                    for (let k = 0; k < numComps; k++)\r\n                    {\r\n                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)\r\n                        {\r\n                            const idx = ((j * numComps) * 3 + k);\r\n\r\n                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);\r\n                            key.bezTangIn = bufferOut[idx];\r\n                            key.bezTangOut = bufferOut[idx + (numComps * 2)];\r\n\r\n                            // console.log(an.name,k,bufferOut[idx+1]);\r\n                        }\r\n                        else\r\n                        {\r\n                            // console.log(an.name,k,bufferOut[j * numComps + k]);\r\n                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);\r\n                        }\r\n                    }\r\n                }\r\n\r\n                node.setAnim(chan.target.path, an.name, anims);\r\n            }\r\n            else\r\n            {\r\n                op.warn(\"loadAmins bufferIn undefined \", bufferIn === undefined);\r\n                op.warn(\"loadAmins bufferOut undefined \", bufferOut === undefined);\r\n                op.warn(\"loadAmins \", an.name, sampler, accOut);\r\n                op.warn(\"loadAmins num accBuffers\", gltf.accBuffers.length);\r\n                op.warn(\"loadAmins num accessors\", gltf.json.accessors.length);\r\n            }\r\n        }\r\n    }\r\n\r\n    gltf.uniqueAnimNames = uniqueAnimNames;\r\n\r\n    outAnims.setRef(Object.keys(uniqueAnimNames));\r\n}\r\n\r\nfunction loadCams(gltf)\r\n{\r\n    if (!gltf || !gltf.json.cameras) return;\r\n\r\n    gltf.cameras = gltf.cameras || [];\r\n\r\n    for (let i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        if (gltf.nodes[i].hasOwnProperty(\"camera\"))\r\n        {\r\n            const cam = new gltfCamera(gltf, gltf.nodes[i]);\r\n            gltf.cameras.push(cam);\r\n        }\r\n    }\r\n}\r\n\r\nfunction loadAfterDraco()\r\n{\r\n    if (!window.DracoDecoder)\r\n    {\r\n        setTimeout(() =>\r\n        {\r\n            loadAfterDraco();\r\n        }, 100);\r\n    }\r\n\r\n    reloadSoon();\r\n}\r\n\r\nfunction parseGltf(arrayBuffer)\r\n{\r\n    const CHUNK_HEADER_SIZE = 8;\r\n\r\n    let j = 0, i = 0;\r\n\r\n    const gltf = new Gltf();\r\n    gltf.timing.push([\"Start parsing\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (!arrayBuffer) return;\r\n    const byteArray = new Uint8Array(arrayBuffer);\r\n    let pos = 0;\r\n\r\n    // var string = new TextDecoder(\"utf-8\").decode(byteArray.subarray(pos, 4));\r\n    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));\r\n    pos += 4;\r\n    if (string != \"glTF\") return;\r\n\r\n    gltf.timing.push([\"dataview\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    const dv = new DataView(arrayBuffer);\r\n    const version = dv.getUint32(pos, le);\r\n    pos += 4;\r\n    const size = dv.getUint32(pos, le);\r\n    pos += 4;\r\n\r\n    outVersion.set(version);\r\n\r\n    const chunks = [];\r\n    gltf.chunks = chunks;\r\n\r\n    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));\r\n    pos += chunks[0].size + CHUNK_HEADER_SIZE;\r\n    gltf.json = chunks[0].data;\r\n\r\n    gltf.cables = {\r\n        \"fileUrl\": inFile.get(),\r\n        \"shortFileName\": CABLES.basename(inFile.get())\r\n    };\r\n\r\n    outJson.setRef(gltf.json);\r\n    outExtensions.setRef(gltf.json.extensionsUsed || []);\r\n\r\n    let ch = readChunk(dv, byteArray, arrayBuffer, pos);\r\n    while (ch)\r\n    {\r\n        chunks.push(ch);\r\n        pos += ch.size + CHUNK_HEADER_SIZE;\r\n        ch = readChunk(dv, byteArray, arrayBuffer, pos);\r\n    }\r\n\r\n    gltf.chunks = chunks;\r\n\r\n    const views = chunks[0].data.bufferViews;\r\n    const accessors = chunks[0].data.accessors;\r\n\r\n    gltf.timing.push([\"Parse buffers\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf(\"KHR_draco_mesh_compression\") > -1)\r\n    {\r\n        if (!window.DracoDecoder)\r\n        {\r\n            op.setUiError(\"gltfdraco\", \"GLTF draco compression lib not found / add draco op to your patch!\");\r\n\r\n            loadAfterDraco();\r\n            return gltf;\r\n        }\r\n        else\r\n        {\r\n            gltf.useDraco = true;\r\n        }\r\n    }\r\n\r\n    op.setUiError(\"gltfdraco\", null);\r\n    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\r\n\r\n    if (views)\r\n    {\r\n        for (i = 0; i < accessors.length; i++)\r\n        {\r\n            const acc = accessors[i];\r\n            const view = views[acc.bufferView];\r\n\r\n            let numComps = 0;\r\n            if (acc.type == \"SCALAR\")numComps = 1;\r\n            else if (acc.type == \"VEC2\")numComps = 2;\r\n            else if (acc.type == \"VEC3\")numComps = 3;\r\n            else if (acc.type == \"VEC4\")numComps = 4;\r\n            else if (acc.type == \"MAT4\")numComps = 16;\r\n            else console.error(\"unknown accessor type\", acc.type);\r\n\r\n            //   const decoder = new decoderModule.Decoder();\r\n            //   const decodedGeometry = decodeDracoData(data, decoder);\r\n            //   // Encode mesh\r\n            //   encodeMeshToFile(decodedGeometry, decoder);\r\n\r\n            //   decoderModule.destroy(decoder);\r\n            //   decoderModule.destroy(decodedGeometry);\r\n\r\n            // 5120 (BYTE)\t1\r\n            // 5121 (UNSIGNED_BYTE)\t1\r\n            // 5122 (SHORT)\t2\r\n\r\n            if (chunks[1].dataView)\r\n            {\r\n                if (view)\r\n                {\r\n                    const num = acc.count * numComps;\r\n                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\r\n                    let stride = view.byteStride || 0;\r\n                    let dataBuff = null;\r\n\r\n                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT\r\n                    {\r\n                        stride = stride || 4;\r\n\r\n                        const isInt = acc.componentType == 5125;\r\n                        if (isInt)dataBuff = new Uint32Array(num);\r\n                        else dataBuff = new Float32Array(num);\r\n\r\n                        dataBuff.cblStride = numComps;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);\r\n                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);\r\n\r\n                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);\r\n                            accPos += 4;\r\n                        }\r\n                    }\r\n                    else if (acc.componentType == 5123) // UNSIGNED_SHORT\r\n                    {\r\n                        stride = stride || 2;\r\n\r\n                        dataBuff = new Uint16Array(num);\r\n                        dataBuff.cblStride = stride;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);\r\n\r\n                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);\r\n\r\n                            accPos += 2;\r\n                        }\r\n                    }\r\n                    else if (acc.componentType == 5121) // UNSIGNED_BYTE\r\n                    {\r\n                        stride = stride || 1;\r\n\r\n                        dataBuff = new Uint8Array(num);\r\n                        dataBuff.cblStride = stride;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);\r\n\r\n                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);\r\n\r\n                            accPos += 1;\r\n                        }\r\n                    }\r\n\r\n                    else\r\n                    {\r\n                        console.error(\"unknown component type\", acc.componentType);\r\n                    }\r\n\r\n                    gltf.accBuffers.push(dataBuff);\r\n                }\r\n                else\r\n                {\r\n                    // console.log(\"has no dataview\");\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    gltf.timing.push([\"Parse mesh groups\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    gltf.json.meshes = gltf.json.meshes || [];\r\n\r\n    if (gltf.json.meshes)\r\n    {\r\n        for (i = 0; i < gltf.json.meshes.length; i++)\r\n        {\r\n            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);\r\n            gltf.meshes.push(mesh);\r\n        }\r\n    }\r\n\r\n    gltf.timing.push([\"Parse nodes\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    for (i = 0; i < gltf.json.nodes.length; i++)\r\n    {\r\n        if (gltf.json.nodes[i].children)\r\n            for (j = 0; j < gltf.json.nodes[i].children.length; j++)\r\n            {\r\n                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;\r\n            }\r\n    }\r\n\r\n    for (i = 0; i < gltf.json.nodes.length; i++)\r\n    {\r\n        const node = new gltfNode(gltf.json.nodes[i], gltf);\r\n        gltf.nodes.push(node);\r\n    }\r\n\r\n    for (i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        const node = gltf.nodes[i];\r\n\r\n        if (!node.children) continue;\r\n        for (let j = 0; j < node.children.length; j++)\r\n        {\r\n            gltf.nodes[node.children[j]].parent = node;\r\n        }\r\n    }\r\n\r\n    for (i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        gltf.nodes[i].initSkin();\r\n    }\r\n\r\n    needsMatUpdate = true;\r\n\r\n    gltf.timing.push([\"load anims\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.animations) loadAnims(gltf);\r\n\r\n    gltf.timing.push([\"load cameras\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.cameras) loadCams(gltf);\r\n\r\n    gltf.timing.push([\"finished\", Math.round((performance.now() - gltf.startTime))]);\r\n    return gltf;\r\n}\r\n","inc_mesh_js":"let gltfMesh = class\r\n{\r\n    constructor(name, prim, gltf, finished)\r\n    {\r\n        this.POINTS = 0;\r\n        this.LINES = 1;\r\n        this.LINE_LOOP = 2;\r\n        this.LINE_STRIP = 3;\r\n        this.TRIANGLES = 4;\r\n        this.TRIANGLE_STRIP = 5;\r\n        this.TRIANGLE_FAN = 6;\r\n\r\n        this.test = 0;\r\n        this.name = name;\r\n        this.submeshIndex = 0;\r\n        this.material = prim.material;\r\n        this.mesh = null;\r\n        this.geom = new CGL.Geometry(\"gltf_\" + this.name);\r\n        this.geom.verticesIndices = [];\r\n        this.bounds = null;\r\n        this.primitive = 4;\r\n        this.morphTargetsRenderMod = null;\r\n        this.weights = prim.weights;\r\n\r\n        if (prim.hasOwnProperty(\"mode\")) this.primitive = prim.mode;\r\n\r\n        if (prim.hasOwnProperty(\"indices\")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];\r\n\r\n        gltf.loadingMeshes = gltf.loadingMeshes || 0;\r\n        gltf.loadingMeshes++;\r\n\r\n        this.materialJson =\r\n            this._matPbrMetalness =\r\n            this._matPbrRoughness =\r\n            this._matDiffuseColor = null;\r\n\r\n        if (gltf.json.materials)\r\n        {\r\n            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];\r\n\r\n            if (this.materialJson && this.materialJson.pbrMetallicRoughness)\r\n            {\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"baseColorFactor\"))\r\n                {\r\n                    this._matDiffuseColor = [1, 1, 1, 1];\r\n                }\r\n                else\r\n                {\r\n                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\r\n                }\r\n\r\n                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\r\n\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"metallicFactor\"))\r\n                {\r\n                    this._matPbrMetalness = 1.0;\r\n                }\r\n                else\r\n                {\r\n                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;\r\n                }\r\n\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"roughnessFactor\"))\r\n                {\r\n                    this._matPbrRoughness = 1.0;\r\n                }\r\n                else\r\n                {\r\n                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;\r\n                }\r\n            }\r\n        }\r\n\r\n        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)\r\n        {\r\n            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];\r\n            const num = view.byteLength;\r\n            const dataBuff = new Int8Array(num);\r\n            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);\r\n            for (let j = 0; j < num; j++)\r\n            {\r\n                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);\r\n                accPos++;\r\n            }\r\n\r\n            const dracoDecoder = window.DracoDecoder;\r\n            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>\r\n            {\r\n                const geom = new CGL.Geometry(\"draco mesh \" + name);\r\n\r\n                for (let i = 0; i < geometry.attributes.length; i++)\r\n                {\r\n                    const attr = geometry.attributes[i];\r\n\r\n                    if (attr.name === \"position\") geom.vertices = attr.array;\r\n                    else if (attr.name === \"normal\") geom.vertexNormals = attr.array;\r\n                    else if (attr.name === \"uv\") geom.texCoords = attr.array;\r\n                    else if (attr.name === \"color\") geom.vertexColors = this.calcVertexColors(attr.array);\r\n                    else if (attr.name === \"joints\") geom.setAttribute(\"attrJoints\", Array.from(attr.array), 4);\r\n                    else if (attr.name === \"weights\")\r\n                    {\r\n                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);\r\n\r\n                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)\r\n                        {\r\n                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;\r\n                            for (let j = 0; j < attr.itemSize; j++)\r\n                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];\r\n                        }\r\n                        geom.setAttribute(\"attrWeights\", arr4, 4);\r\n                    }\r\n                    else op.logWarn(\"unknown draco attrib\", attr);\r\n                }\r\n\r\n                geometry.attributes = null;\r\n                geom.verticesIndices = geometry.index.array;\r\n\r\n                this.setGeom(geom);\r\n\r\n                this.mesh = null;\r\n                gltf.loadingMeshes--;\r\n                gltf.timing.push([\"draco decode\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n                if (finished)finished(this);\r\n            }, (error) => { op.logError(error); });\r\n        }\r\n        else\r\n        {\r\n            gltf.loadingMeshes--;\r\n            this.fillGeomAttribs(gltf, this.geom, prim.attributes);\r\n\r\n            if (prim.targets)\r\n            {\r\n                for (let j = 0; j < prim.targets.length; j++)\r\n                {\r\n                    const tgeom = new CGL.Geometry(\"gltf_target_\" + j);\r\n\r\n                    // if (prim.hasOwnProperty(\"indices\")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];\r\n\r\n                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);\r\n\r\n                    // { // calculate normals for final position of morphtarget for later...\r\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];\r\n                    //     tgeom.calculateNormals();\r\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];\r\n                    // }\r\n\r\n                    this.geom.morphTargets.push(tgeom);\r\n                }\r\n            }\r\n            if (finished)finished(this);\r\n        }\r\n    }\r\n\r\n    _linearToSrgb(x)\r\n    {\r\n        if (x <= 0)\r\n            return 0;\r\n        else if (x >= 1)\r\n            return 1;\r\n        else if (x < 0.0031308)\r\n            return x * 12.92;\r\n        else\r\n            return x ** (1 / 2.2) * 1.055 - 0.055;\r\n    }\r\n\r\n    calcVertexColors(arr, type)\r\n    {\r\n        let vertexColors = null;\r\n        if (arr instanceof Float32Array)\r\n        {\r\n            let div = false;\r\n            for (let i = 0; i < arr.length; i++)\r\n            {\r\n                if (arr[i] > 1)\r\n                {\r\n                    div = true;\r\n                    continue;\r\n                }\r\n            }\r\n\r\n            if (div)\r\n                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;\r\n\r\n            vertexColors = arr;\r\n        }\r\n\r\n        else if (arr instanceof Uint16Array)\r\n        {\r\n            const fb = new Float32Array(arr.length);\r\n            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;\r\n\r\n            vertexColors = fb;\r\n        }\r\n        else vertexColors = arr;\r\n\r\n        for (let i = 0; i < vertexColors.length; i++)\r\n        {\r\n            vertexColors[i] = this._linearToSrgb(vertexColors[i]);\r\n        }\r\n\r\n        if (arr.cblStride == 3)\r\n        {\r\n            const nc = new Float32Array(vertexColors.length / 3 * 4);\r\n            for (let i = 0; i < vertexColors.length / 3; i++)\r\n            {\r\n                nc[i * 4 + 0] = vertexColors[i * 3 + 0];\r\n                nc[i * 4 + 1] = vertexColors[i * 3 + 1];\r\n                nc[i * 4 + 2] = vertexColors[i * 3 + 2];\r\n                nc[i * 4 + 3] = 1;\r\n            }\r\n            vertexColors = nc;\r\n        }\r\n\r\n        return vertexColors;\r\n    }\r\n\r\n    fillGeomAttribs(gltf, tgeom, attribs, setGeom)\r\n    {\r\n        if (attribs.hasOwnProperty(\"POSITION\")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];\r\n        if (attribs.hasOwnProperty(\"NORMAL\")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];\r\n        if (attribs.hasOwnProperty(\"TANGENT\")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];\r\n\r\n        // // console.log(gltf.accBuffers[attribs.COLOR_0])\r\n        // console.log(gltf);\r\n\r\n        if (attribs.hasOwnProperty(\"COLOR_0\")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_1\")) tgeom.setAttribute(\"attrVertColor1\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_2\")) tgeom.setAttribute(\"attrVertColor2\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_3\")) tgeom.setAttribute(\"attrVertColor3\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_4\")) tgeom.setAttribute(\"attrVertColor4\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);\r\n\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) tgeom.setAttribute(\"attrTexCoord1\", gltf.accBuffers[attribs.TEXCOORD_1], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) tgeom.setAttribute(\"attrTexCoord2\", gltf.accBuffers[attribs.TEXCOORD_2], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) tgeom.setAttribute(\"attrTexCoord3\", gltf.accBuffers[attribs.TEXCOORD_3], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) tgeom.setAttribute(\"attrTexCoord4\", gltf.accBuffers[attribs.TEXCOORD_4], 2);\r\n\r\n        if (attribs.hasOwnProperty(\"WEIGHTS_0\"))\r\n        {\r\n            tgeom.setAttribute(\"attrWeights\", gltf.accBuffers[attribs.WEIGHTS_0], 4);\r\n        }\r\n        if (attribs.hasOwnProperty(\"JOINTS_0\"))\r\n        {\r\n            if (!gltf.accBuffers[attribs.JOINTS_0])console.log(\"no !gltf.accBuffers[attribs.JOINTS_0]\");\r\n            tgeom.setAttribute(\"attrJoints\", gltf.accBuffers[attribs.JOINTS_0], 4);\r\n        }\r\n\r\n        if (attribs.hasOwnProperty(\"POSITION\")) gltf.accBuffersDelete.push(attribs.POSITION);\r\n        if (attribs.hasOwnProperty(\"NORMAL\")) gltf.accBuffersDelete.push(attribs.NORMAL);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);\r\n        if (attribs.hasOwnProperty(\"TANGENT\")) gltf.accBuffersDelete.push(attribs.TANGENT);\r\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\r\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\r\n        if (attribs.hasOwnProperty(\"COLOR_1\"))gltf.accBuffersDelete.push(attribs.COLOR_1);\r\n        if (attribs.hasOwnProperty(\"COLOR_2\"))gltf.accBuffersDelete.push(attribs.COLOR_2);\r\n        if (attribs.hasOwnProperty(\"COLOR_3\"))gltf.accBuffersDelete.push(attribs.COLOR_3);\r\n\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);\r\n\r\n        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);\r\n    }\r\n\r\n    setGeom(geom)\r\n    {\r\n        if (inNormFormat.get() == \"X-ZY\")\r\n        {\r\n            for (let i = 0; i < geom.vertexNormals.length; i += 3)\r\n            {\r\n                let t = geom.vertexNormals[i + 2];\r\n                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];\r\n                geom.vertexNormals[i + 1] = -t;\r\n            }\r\n        }\r\n\r\n        if (inVertFormat.get() == \"XZ-Y\")\r\n        {\r\n            for (let i = 0; i < geom.vertices.length; i += 3)\r\n            {\r\n                let t = geom.vertices[i + 2];\r\n                geom.vertices[i + 2] = -geom.vertices[i + 1];\r\n                geom.vertices[i + 1] = t;\r\n            }\r\n        }\r\n\r\n        if (this.primitive == this.TRIANGLES)\r\n        {\r\n            if (inCalcNormals.get() == \"Force Smooth\" || inCalcNormals.get() == false) geom.calculateNormals();\r\n            else if (!geom.vertexNormals.length && inCalcNormals.get() == \"Auto\") geom.calculateNormals({ \"smooth\": false });\r\n\r\n            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)\r\n            {\r\n                const bitan = vec3.create();\r\n                const tan = vec3.create();\r\n\r\n                const tangents = geom.tangents;\r\n                geom.tangents = new Float32Array(tangents.length / 4 * 3);\r\n                geom.biTangents = new Float32Array(tangents.length / 4 * 3);\r\n\r\n                for (let i = 0; i < tangents.length; i += 4)\r\n                {\r\n                    const idx = i / 4 * 3;\r\n\r\n                    vec3.cross(\r\n                        bitan,\r\n                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],\r\n                        [tangents[i], tangents[i + 1], tangents[i + 2]]\r\n                    );\r\n\r\n                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);\r\n                    vec3.normalize(bitan, bitan);\r\n\r\n                    geom.biTangents[idx + 0] = bitan[0];\r\n                    geom.biTangents[idx + 1] = bitan[1];\r\n                    geom.biTangents[idx + 2] = bitan[2];\r\n\r\n                    geom.tangents[idx + 0] = tangents[i + 0];\r\n                    geom.tangents[idx + 1] = tangents[i + 1];\r\n                    geom.tangents[idx + 2] = tangents[i + 2];\r\n                }\r\n            }\r\n\r\n            if (geom.tangents.length === 0 || inCalcNormals.get() != \"Never\")\r\n            {\r\n                // console.log(\"[gltf ]no tangents... calculating tangents...\");\r\n                geom.calcTangentsBitangents();\r\n            }\r\n        }\r\n\r\n        this.geom = geom;\r\n\r\n        this.bounds = geom.getBounds();\r\n    }\r\n\r\n    render(cgl, ignoreMaterial, skinRenderer)\r\n    {\r\n        if (!this.mesh && this.geom && this.geom.verticesIndices)\r\n        {\r\n            let g = this.geom;\r\n            if (this.geom.vertices.length / 3 > 64000 && this.geom.verticesIndices.length > 0)\r\n            {\r\n                g = this.geom.copy();\r\n                g.unIndex(false, true);\r\n            }\r\n\r\n            let glprim;\r\n\r\n            if (cgl.gl)\r\n            {\r\n                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;\r\n                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;\r\n                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;\r\n                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;\r\n                else\r\n                {\r\n                    op.logWarn(\"unknown primitive type\", this);\r\n                }\r\n            }\r\n\r\n            this.mesh = op.patch.cg.createMesh(g, { \"glPrimitive\": glprim });\r\n        }\r\n\r\n        if (this.mesh)\r\n        {\r\n            // update morphTargets\r\n            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)\r\n            {\r\n                this.mesh.addVertexNumbers = true;\r\n                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);\r\n            }\r\n\r\n            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];\r\n            if (skinRenderer)useMat = false;\r\n\r\n            if (useMat) cgl.pushShader(gltf.shaders[this.material]);\r\n\r\n            const currentShader = cgl.getShader() || {};\r\n            const uniDiff = currentShader.uniformColorDiffuse;\r\n\r\n            const uniPbrMetalness = currentShader.uniformPbrMetalness;\r\n            const uniPbrRoughness = currentShader.uniformPbrRoughness;\r\n\r\n            // if (gltf.shaders[this.material] && !inUseMatProps.get())\r\n            // {\r\n            //     gltf.shaders[this.material]=null;\r\n            // }\r\n\r\n            if (!gltf.shaders[this.material] && inUseMatProps.get())\r\n            {\r\n                if (uniDiff && this._matDiffuseColor)\r\n                {\r\n                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];\r\n                    uniDiff.setValue(this._matDiffuseColor);\r\n                }\r\n\r\n                if (uniPbrMetalness)\r\n                    if (this._matPbrMetalness != null)\r\n                    {\r\n                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();\r\n                        uniPbrMetalness.setValue(this._matPbrMetalness);\r\n                    }\r\n                    else\r\n                        uniPbrMetalness.setValue(0);\r\n\r\n                if (uniPbrRoughness)\r\n                    if (this._matPbrRoughness != null)\r\n                    {\r\n                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();\r\n                        uniPbrRoughness.setValue(this._matPbrRoughness);\r\n                    }\r\n                    else\r\n                    {\r\n                        uniPbrRoughness.setValue(0);\r\n                    }\r\n            }\r\n\r\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);\r\n            if (this.mesh)\r\n            {\r\n                this.mesh.render(cgl.getShader(), ignoreMaterial);\r\n            }\r\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);\r\n\r\n            if (inUseMatProps.get())\r\n            {\r\n                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);\r\n                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);\r\n                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);\r\n            }\r\n\r\n            if (useMat) cgl.popShader();\r\n        }\r\n        else\r\n        {\r\n            console.log(\"no mesh......\");\r\n        }\r\n    }\r\n};\r\n","inc_meshGroup_js":"const gltfMeshGroup = class\r\n{\r\n    constructor(gltf, m)\r\n    {\r\n        this.bounds = new CABLES.CG.BoundingBox();\r\n        this.meshes = [];\r\n\r\n        m.name = m.name || (\"unknown mesh \" + CABLES.simpleId());\r\n\r\n        this.name = m.name;\r\n        const prims = m.primitives;\r\n\r\n        for (let i = 0; i < prims.length; i++)\r\n        {\r\n            const mesh = new gltfMesh(this.name, prims[i], gltf,\r\n                (mesh) =>\r\n                {\r\n                    mesh.extras = m.extras;\r\n                    this.bounds.apply(mesh.bounds);\r\n                });\r\n\r\n            mesh.submeshIndex = i;\r\n            this.meshes.push(mesh);\r\n        }\r\n    }\r\n\r\n    render(cgl, ignoreMat, skinRenderer, _time, weights)\r\n    {\r\n        for (let i = 0; i < this.meshes.length; i++)\r\n        {\r\n            const useMat = gltf.shaders[this.meshes[i].material];\r\n\r\n            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);\r\n            if (skinRenderer)skinRenderer.renderStart(cgl, _time);\r\n            if (weights) this.meshes[i].weights = weights;\r\n            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);\r\n            if (skinRenderer)skinRenderer.renderFinish(cgl);\r\n            if (!ignoreMat && useMat) cgl.popShader();\r\n        }\r\n    }\r\n};\r\n","inc_node_js":"const gltfNode = class\r\n{\r\n    constructor(node, gltf)\r\n    {\r\n        this.isChild = node.isChild || false;\r\n        node.name = node.name || \"unknown node \" + CABLES.simpleId();\r\n        this.name = node.name;\r\n        if (node.hasOwnProperty(\"camera\")) this.camera = node.camera;\r\n        this.hidden = false;\r\n        this.mat = mat4.create();\r\n        this._animActions = {};\r\n        this.animWeights = [];\r\n        this._animMat = mat4.create();\r\n        this._tempMat = mat4.create();\r\n        this._tempQuat = quat.create();\r\n        this._tempRotmat = mat4.create();\r\n        this.mesh = null;\r\n        this.children = [];\r\n        this._node = node;\r\n        this._gltf = gltf;\r\n        this.absMat = mat4.create();\r\n        this.addTranslate = null;\r\n        this._tempAnimScale = null;\r\n        this.addMulMat = null;\r\n        this.updateMatrix();\r\n        this.skinRenderer = null;\r\n        this.copies = [];\r\n    }\r\n\r\n    get skin()\r\n    {\r\n        if (this._node.hasOwnProperty(\"skin\")) return this._node.skin;\r\n        else return -1;\r\n    }\r\n\r\n    copy()\r\n    {\r\n        this.isCopy = true;\r\n        const n = new gltfNode(this._node, this._gltf);\r\n        n.copyOf = this;\r\n\r\n        n._animActions = this._animActions;\r\n        n.children = this.children;\r\n        if (this.skin) n.skinRenderer = new GltfSkin(this);\r\n\r\n        this.updateMatrix();\r\n        return n;\r\n    }\r\n\r\n    hasSkin()\r\n    {\r\n        if (this._node.hasOwnProperty(\"skin\")) return this._gltf.json.skins[this._node.skin].name || \"unknown\";\r\n        return false;\r\n    }\r\n\r\n    initSkin()\r\n    {\r\n        if (this.skin > -1)\r\n        {\r\n            this.skinRenderer = new GltfSkin(this);\r\n        }\r\n    }\r\n\r\n    updateMatrix()\r\n    {\r\n        mat4.identity(this.mat);\r\n        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);\r\n\r\n        if (this._node.rotation)\r\n        {\r\n            const rotmat = mat4.create();\r\n            this._rot = this._node.rotation;\r\n\r\n            mat4.fromQuat(rotmat, this._node.rotation);\r\n            mat4.mul(this.mat, this.mat, rotmat);\r\n        }\r\n\r\n        if (this._node.scale)\r\n        {\r\n            this._scale = this._node.scale;\r\n            mat4.scale(this.mat, this.mat, this._scale);\r\n        }\r\n\r\n        if (this._node.hasOwnProperty(\"mesh\"))\r\n        {\r\n            this.mesh = this._gltf.meshes[this._node.mesh];\r\n            if (this.isCopy)\r\n            {\r\n            }\r\n        }\r\n\r\n        if (this._node.children)\r\n        {\r\n            for (let i = 0; i < this._node.children.length; i++)\r\n            {\r\n                this._gltf.json.nodes[i].isChild = true;\r\n                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;\r\n                this.children.push(this._node.children[i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    unHide()\r\n    {\r\n        this.hidden = false;\r\n        for (let i = 0; i < this.children.length; i++)\r\n            if (this.children[i].unHide) this.children[i].unHide();\r\n    }\r\n\r\n    calcBounds(gltf, mat, bounds)\r\n    {\r\n        const localMat = mat4.create();\r\n\r\n        if (mat) mat4.copy(localMat, mat);\r\n        if (this.mat) mat4.mul(localMat, localMat, this.mat);\r\n\r\n        if (this.mesh)\r\n        {\r\n            const bb = this.mesh.bounds.copy();\r\n            bb.mulMat4(localMat);\r\n            bounds.apply(bb);\r\n\r\n            if (bounds.changed)\r\n            {\r\n                boundingPoints.push(\r\n                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,\r\n                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < this.children.length; i++)\r\n        {\r\n            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)\r\n            {\r\n                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);\r\n\r\n                bounds.apply(b);\r\n            }\r\n        }\r\n\r\n        if (bounds.changed) return bounds;\r\n        else return null;\r\n    }\r\n\r\n    setAnimAction(name)\r\n    {\r\n        if (!name) return;\r\n\r\n        this._currentAnimaction = name;\r\n\r\n        if (name && !this._animActions[name]) return null;\r\n\r\n        for (let path in this._animActions[name])\r\n        {\r\n            if (path == \"translation\") this._animTrans = this._animActions[name][path];\r\n            else if (path == \"rotation\") this._animRot = this._animActions[name][path];\r\n            else if (path == \"scale\") this._animScale = this._animActions[name][path];\r\n            else if (path == \"weights\") this.animWeights = this._animActions[name][path];\r\n        }\r\n    }\r\n\r\n    setAnim(path, name, anims)\r\n    {\r\n        if (!path || !name || !anims) return;\r\n\r\n        this._animActions[name] = this._animActions[name] || {};\r\n\r\n        // debugger;\r\n\r\n        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;\r\n\r\n        if (this._animActions[name][path]) op.log(\"[gltfNode] animation action path already exists\", name, path, this._animActions[name][path]);\r\n\r\n        this._animActions[name][path] = anims;\r\n\r\n        if (path == \"translation\") this._animTrans = anims;\r\n        else if (path == \"rotation\") this._animRot = anims;\r\n        else if (path == \"scale\") this._animScale = anims;\r\n        else if (path == \"weights\") this.animWeights = this._animActions[name][path];\r\n    }\r\n\r\n    modelMatLocal()\r\n    {\r\n        return this._animMat || this.mat;\r\n    }\r\n\r\n    modelMatAbs()\r\n    {\r\n        return this.absMat;\r\n    }\r\n\r\n    transform(cgl, _time)\r\n    {\r\n        if (!_time && _time != 0)_time = time;\r\n\r\n        this._lastTimeTrans = _time;\r\n\r\n        gltfTransforms++;\r\n\r\n        if (!this._animTrans && !this._animRot && !this._animScale)\r\n        {\r\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);\r\n            this._animMat = null;\r\n        }\r\n        else\r\n        {\r\n            this._animMat = this._animMat || mat4.create();\r\n            mat4.identity(this._animMat);\r\n\r\n            const playAnims = true;\r\n\r\n            if (playAnims && this._animTrans)\r\n            {\r\n                mat4.translate(this._animMat, this._animMat, [\r\n                    this._animTrans[0].getValue(_time),\r\n                    this._animTrans[1].getValue(_time),\r\n                    this._animTrans[2].getValue(_time)]);\r\n            }\r\n            else\r\n            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);\r\n\r\n            if (playAnims && this._animRot)\r\n            {\r\n                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\r\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)\r\n                {\r\n                    this._tempQuat[0] = this._animRot[0].getValue(_time);\r\n                    this._tempQuat[1] = this._animRot[1].getValue(_time);\r\n                    this._tempQuat[2] = this._animRot[2].getValue(_time);\r\n                    this._tempQuat[3] = this._animRot[3].getValue(_time);\r\n                }\r\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)\r\n                {\r\n                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\r\n                }\r\n\r\n                mat4.fromQuat(this._tempMat, this._tempQuat);\r\n                mat4.mul(this._animMat, this._animMat, this._tempMat);\r\n            }\r\n            else if (this._rot)\r\n            {\r\n                mat4.fromQuat(this._tempRotmat, this._rot);\r\n                mat4.mul(this._animMat, this._animMat, this._tempRotmat);\r\n            }\r\n\r\n            if (playAnims && this._animScale)\r\n            {\r\n                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];\r\n                this._tempAnimScale[0] = this._animScale[0].getValue(_time);\r\n                this._tempAnimScale[1] = this._animScale[1].getValue(_time);\r\n                this._tempAnimScale[2] = this._animScale[2].getValue(_time);\r\n                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);\r\n            }\r\n            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);\r\n\r\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);\r\n        }\r\n\r\n        if (this.animWeights)\r\n        {\r\n            this.weights = this.weights || [];\r\n\r\n            let str = \"\";\r\n            for (let i = 0; i < this.animWeights.length; i++)\r\n            {\r\n                this.weights[i] = this.animWeights[i].getValue(_time);\r\n                str += this.weights[i] + \"/\";\r\n            }\r\n\r\n            // this.mesh.weights=this.animWeights.get(_time);\r\n        }\r\n\r\n        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);\r\n\r\n        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);\r\n\r\n        mat4.copy(this.absMat, cgl.mMatrix);\r\n    }\r\n\r\n    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)\r\n    {\r\n        if (!dontTransform) cgl.pushModelMatrix();\r\n\r\n        if (_time === undefined) _time = gltf.time;\r\n\r\n        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);\r\n\r\n        if (this.hidden && !drawHidden)\r\n        {\r\n        }\r\n        else\r\n        {\r\n            if (this.skinRenderer)\r\n            {\r\n                this.skinRenderer.time = _time;\r\n                if (!dontDrawMesh)\r\n                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);\r\n            }\r\n            else\r\n            {\r\n                if (this.mesh && !dontDrawMesh)\r\n                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);\r\n            }\r\n        }\r\n\r\n        if (!ignoreChilds && !this.hidden)\r\n            for (let i = 0; i < this.children.length; i++)\r\n                if (gltf.nodes[this.children[i]])\r\n                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);\r\n\r\n        if (!dontTransform)cgl.popModelMatrix();\r\n    }\r\n};\r\n","inc_print_js":"let tab = null;\r\n\r\nfunction closeTab()\r\n{\r\n    if (tab)gui.mainTabs.closeTab(tab.id);\r\n    tab = null;\r\n}\r\n\r\nfunction formatVec(arr)\r\n{\r\n    const nums = [];\r\n    for (let i = 0; i < arr.length; i++)\r\n    {\r\n        nums.push(Math.round(arr[i] * 1000) / 1000);\r\n    }\r\n\r\n    return nums.join(\",\");\r\n}\r\n\r\nfunction printNode(html, node, level)\r\n{\r\n    if (!gltf) return;\r\n\r\n    html += \"<tr class=\\\"row\\\">\";\r\n\r\n    let ident = \"\";\r\n    let identSpace = \"\";\r\n\r\n    for (let i = 1; i < level; i++)\r\n    {\r\n        identSpace += \"&nbsp;&nbsp;&nbsp;\";\r\n        let identClass = \"identBg\";\r\n        if (i == 1)identClass = \"identBgLevel0\";\r\n        ident += \"<td class=\\\"ident \" + identClass + \"\\\" ><div style=\\\"\\\"></div></td>\";\r\n    }\r\n    let id = CABLES.uuid();\r\n    html += ident;\r\n    html += \"<td colspan=\\\"\" + (21 - level) + \"\\\">\";\r\n\r\n    if (node.mesh && node.mesh.meshes.length)html += \"<span class=\\\"icon icon-cube\\\"></span>&nbsp;\";\r\n    else html += \"<span class=\\\"icon icon-box-select\\\"></span> &nbsp;\";\r\n\r\n    html += node.name + \"</td><td></td>\";\r\n\r\n    if (node.mesh)\r\n    {\r\n        html += \"<td>\";\r\n        for (let i = 0; i < node.mesh.meshes.length; i++)\r\n        {\r\n            if (i > 0)html += \", \";\r\n            html += node.mesh.meshes[i].name;\r\n        }\r\n\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        html += node.hasSkin() || \"-\";\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let countMats = 0;\r\n        for (let i = 0; i < node.mesh.meshes.length; i++)\r\n        {\r\n            if (countMats > 0)html += \", \";\r\n            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty(\"material\"))\r\n            {\r\n                if (gltf.json.materials[node.mesh.meshes[i].material])\r\n                {\r\n                    html += gltf.json.materials[node.mesh.meshes[i].material].name;\r\n                    countMats++;\r\n                }\r\n            }\r\n        }\r\n        if (countMats == 0)html += \"none\";\r\n        html += \"</td>\";\r\n    }\r\n    else\r\n    {\r\n        html += \"<td>-</td><td>-</td><td>-</td>\";\r\n    }\r\n\r\n    html += \"<td>\";\r\n\r\n    if (node._node.translation || node._node.rotation || node._node.scale)\r\n    {\r\n        let info = \"\";\r\n\r\n        if (node._node.translation)info += \"Translate: `\" + formatVec(node._node.translation) + \"` || \";\r\n        if (node._node.rotation)info += \"Rotation: `\" + formatVec(node._node.rotation) + \"` || \";\r\n        if (node._node.scale)info += \"Scale: `\" + formatVec(node._node.scale) + \"` || \";\r\n\r\n        html += \"<span class=\\\"icon icon-gizmo info\\\" data-info=\\\"\" + info + \"\\\"></span> &nbsp;\";\r\n    }\r\n\r\n    if (node._animRot || node._animScale || node._animTrans)\r\n    {\r\n        let info = \"Animated: \";\r\n        if (node._animRot) info += \"Rot \";\r\n        if (node._animScale) info += \"Scale \";\r\n        if (node._animTrans) info += \"Trans \";\r\n\r\n        html += \"<span class=\\\"icon icon-clock info\\\" data-info=\\\"\" + info + \"\\\"></span>&nbsp;\";\r\n    }\r\n\r\n    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += \"-\";\r\n\r\n    html += \"</td>\";\r\n\r\n    html += \"<td>\";\r\n    let hideclass = \"\";\r\n    if (node.hidden)hideclass = \"node-hidden\";\r\n\r\n    // html+='';\r\n    html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','transform')\\\" class=\\\"treebutton\\\">Transform</a>\";\r\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','hierarchy')\\\" class=\\\"treebutton\\\">Hierarchy</a>\";\r\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"')\\\" class=\\\"treebutton\\\">Node</a>\";\r\n\r\n    if (node.hasSkin())\r\n        html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"',false,{skin:true});\\\" class=\\\"treebutton\\\">Skin</a>\";\r\n\r\n    html += \"</td><td>\";\r\n    html += \"&nbsp;<span class=\\\"icon iconhover icon-eye \" + hideclass + \"\\\" onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').toggleNodeVisibility('\" + node.name + \"');this.classList.toggle('node-hidden');\\\"></span>\";\r\n    html += \"</td>\";\r\n\r\n    html += \"</tr>\";\r\n\r\n    if (node.children)\r\n    {\r\n        for (let i = 0; i < node.children.length; i++)\r\n            html = printNode(html, gltf.nodes[node.children[i]], level + 1);\r\n    }\r\n\r\n    return html;\r\n}\r\n\r\nfunction printMaterial(mat, idx)\r\n{\r\n    let html = \"<tr>\";\r\n    html += \" <td>\" + idx + \"</td>\";\r\n    html += \" <td>\" + mat.name + \"</td>\";\r\n\r\n    html += \" <td>\";\r\n\r\n    const info = JSON.stringify(mat, null, 4).replaceAll(\"\\\"\", \"\").replaceAll(\"\\n\", \"<br/>\");\r\n\r\n    html += \"<span class=\\\"icon icon-info\\\" onclick=\\\"new CABLES.UI.ModalDialog({ 'html': '<pre>\" + info + \"</pre>', 'title': '\" + mat.name + \"' });\\\"></span>&nbsp;\";\r\n\r\n    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)\r\n    {\r\n        let rgb = \"\";\r\n        rgb += \"\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);\r\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);\r\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);\r\n\r\n        html += \"<div style=\\\"width:15px;height:15px;background-color:rgb(\" + rgb + \");display:inline-block\\\">&nbsp;</a>\";\r\n    }\r\n    html += \" <td style=\\\"\\\">\" + (gltf.shaders[idx] ? \"-\" : \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').assignMaterial('\" + mat.name + \"')\\\" class=\\\"treebutton\\\">Assign</a>\") + \"<td>\";\r\n    html += \"<td>\";\r\n\r\n    html += \"</tr>\";\r\n    return html;\r\n}\r\n\r\nfunction printInfo()\r\n{\r\n    if (!gltf) return;\r\n\r\n    const startTime = performance.now();\r\n    const sizes = {};\r\n    let html = \"<div style=\\\"overflow:scroll;width:100%;height:100%\\\">\";\r\n\r\n    html += \"File: <a href=\\\"\" + CABLES.platform.getCablesUrl() + \"/asset/patches/?filename=\" + inFile.get() + \"\\\" target=\\\"_blank\\\">\" + CABLES.basename(inFile.get()) + \"</a><br/>\";\r\n\r\n    html += \"Generator:\" + gltf.json.asset.generator;\r\n\r\n    let numNodes = 0;\r\n    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;\r\n    html += \"<div id=\\\"groupNodes\\\">Nodes (\" + numNodes + \")</div>\";\r\n\r\n    html += \"<table id=\\\"sectionNodes\\\" class=\\\"table treetable\\\">\";\r\n\r\n    html += \"<tr>\";\r\n    html += \" <th colspan=\\\"21\\\">Name</th>\";\r\n    html += \" <th>Mesh</th>\";\r\n    html += \" <th>Skin</th>\";\r\n    html += \" <th>Material</th>\";\r\n    html += \" <th>Transform</th>\";\r\n    html += \" <th>Expose</th>\";\r\n    html += \" <th></th>\";\r\n    html += \"</tr>\";\r\n\r\n    for (let i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        if (!gltf.nodes[i].isChild)\r\n            html = printNode(html, gltf.nodes[i], 1);\r\n    }\r\n    html += \"</table>\";\r\n\r\n    // / //////////////////\r\n\r\n    let numMaterials = 0;\r\n    if (gltf.json.materials)numMaterials = gltf.json.materials.length;\r\n    html += \"<div id=\\\"groupMaterials\\\">Materials (\" + numMaterials + \")</div>\";\r\n\r\n    if (!gltf.json.materials || gltf.json.materials.length == 0)\r\n    {\r\n    }\r\n    else\r\n    {\r\n        html += \"<table id=\\\"materialtable\\\"  class=\\\"table treetable\\\">\";\r\n        html += \"<tr>\";\r\n        html += \" <th>Index</th>\";\r\n        html += \" <th>Name</th>\";\r\n        html += \" <th>Color</th>\";\r\n        html += \" <th>Function</th>\";\r\n        html += \" <th></th>\";\r\n        html += \"</tr>\";\r\n        for (let i = 0; i < gltf.json.materials.length; i++)\r\n        {\r\n            html += printMaterial(gltf.json.materials[i], i);\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ///////////////////////\r\n\r\n    html += \"<div id=\\\"groupMeshes\\\">Meshes (\" + gltf.json.meshes.length + \")</div>\";\r\n\r\n    html += \"<table id=\\\"meshestable\\\"  class=\\\"table treetable\\\">\";\r\n    html += \"<tr>\";\r\n    html += \" <th>Name</th>\";\r\n    html += \" <th>Node</th>\";\r\n    html += \" <th>Material</th>\";\r\n    html += \" <th>Vertices</th>\";\r\n    html += \" <th>Attributes</th>\";\r\n    html += \"</tr>\";\r\n\r\n    let sizeBufferViews = [];\r\n    sizes.meshes = 0;\r\n    sizes.meshTargets = 0;\r\n\r\n    for (let i = 0; i < gltf.json.meshes.length; i++)\r\n    {\r\n        html += \"<tr>\";\r\n        html += \"<td>\" + gltf.json.meshes[i].name + \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let count = 0;\r\n        let nodename = \"\";\r\n        if (gltf.json.nodes)\r\n            for (let j = 0; j < gltf.json.nodes.length; j++)\r\n            {\r\n                if (gltf.json.nodes[j].mesh == i)\r\n                {\r\n                    count++;\r\n                    if (count == 1)\r\n                    {\r\n                        nodename = gltf.json.nodes[j].name;\r\n                    }\r\n                }\r\n            }\r\n        if (count > 1) html += (count) + \" nodes (\" + nodename + \" ...)\";\r\n        else html += nodename;\r\n        html += \"</td>\";\r\n\r\n        // -------\r\n\r\n        html += \"<td>\";\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            if (gltf.json.meshes[i].primitives[j].hasOwnProperty(\"material\"))\r\n            {\r\n                if (gltf.json.materials[gltf.json.meshes[i]])\r\n                {\r\n                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + \" \";\r\n                }\r\n            }\r\n            else html += \"None\";\r\n        }\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let numVerts = 0;\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)\r\n            {\r\n                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);\r\n                numVerts += v;\r\n                html += \"\" + v + \"<br/>\";\r\n            }\r\n            else html += \"-<br/>\";\r\n        }\r\n\r\n        if (gltf.json.meshes[i].primitives.length > 1)\r\n            html += \"=\" + numVerts;\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);\r\n            html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeGeom('\" + gltf.json.meshes[i].name + \"',\" + j + \")\\\" class=\\\"treebutton\\\">Geometry</a>\";\r\n            html += \"<br/>\";\r\n\r\n            if (gltf.json.meshes[i].primitives[j].targets)\r\n            {\r\n                html += gltf.json.meshes[i].primitives[j].targets.length + \" targets<br/>\";\r\n\r\n                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)\r\n                    html += \"Targetnames:<br/>\" + gltf.json.meshes[i].extras.targetNames.join(\"<br/>\");\r\n\r\n                html += \"<br/>\";\r\n            }\r\n        }\r\n\r\n        html += \"</td>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];\r\n            if (accessor)\r\n            {\r\n                let bufView = accessor.bufferView;\r\n\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n            }\r\n\r\n            for (let k in gltf.json.meshes[i].primitives[j].attributes)\r\n            {\r\n                const attr = gltf.json.meshes[i].primitives[j].attributes[k];\r\n                const bufView2 = gltf.json.accessors[attr].bufferView;\r\n\r\n                if (sizeBufferViews.indexOf(bufView2) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView2);\r\n                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;\r\n                }\r\n            }\r\n\r\n            if (gltf.json.meshes[i].primitives[j].targets)\r\n                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)\r\n                {\r\n                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])\r\n                    {\r\n                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];\r\n                        const accessor = gltf.json.accessors[accessorIdx];\r\n                        const bufView2 = accessor.bufferView;\r\n                        console.log(\"accessor\", accessor);\r\n                        if (sizeBufferViews.indexOf(bufView2) == -1)\r\n                            if (gltf.json.bufferViews[bufView2])\r\n                            {\r\n                                sizeBufferViews.push(bufView2);\r\n                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;\r\n                            }\r\n                    }\r\n                }\r\n        }\r\n    }\r\n    html += \"</table>\";\r\n\r\n    // / //////////////////////////////////\r\n\r\n    let numSamplers = 0;\r\n    let numAnims = 0;\r\n    let numKeyframes = 0;\r\n\r\n    if (gltf.json.animations)\r\n    {\r\n        numAnims = gltf.json.animations.length;\r\n        for (let i = 0; i < gltf.json.animations.length; i++)\r\n        {\r\n            numSamplers += gltf.json.animations[i].samplers.length;\r\n        }\r\n    }\r\n\r\n    html += \"<div id=\\\"groupAnims\\\">Animations (\" + numAnims + \"/\" + numSamplers + \")</div>\";\r\n\r\n    if (gltf.json.animations)\r\n    {\r\n        html += \"<table id=\\\"sectionAnim\\\" class=\\\"table treetable\\\">\";\r\n        html += \"<tr>\";\r\n        html += \"  <th>Name</th>\";\r\n        html += \"  <th>Target node</th>\";\r\n        html += \"  <th>Path</th>\";\r\n        html += \"  <th>Interpolation</th>\";\r\n        html += \"  <th>Keys</th>\";\r\n        html += \"</tr>\";\r\n\r\n\r\n        sizes.animations = 0;\r\n\r\n        for (let i = 0; i < gltf.json.animations.length; i++)\r\n        {\r\n            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)\r\n            {\r\n                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n\r\n                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n            }\r\n\r\n            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)\r\n            {\r\n                html += \"<tr>\";\r\n                html += \"  <td> Anim \" + i + \": \" + gltf.json.animations[i].name + \"</td>\";\r\n\r\n                html += \"  <td>\" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + \"</td>\";\r\n                html += \"  <td>\";\r\n                html += gltf.json.animations[i].channels[j].target.path + \" \";\r\n                html += \"  </td>\";\r\n\r\n                const smplidx = gltf.json.animations[i].channels[j].sampler;\r\n                const smplr = gltf.json.animations[i].samplers[smplidx];\r\n\r\n                html += \"  <td>\" + smplr.interpolation + \"</td>\";\r\n\r\n                html += \"  <td>\" + gltf.json.accessors[smplr.output].count;\r\n                numKeyframes += gltf.json.accessors[smplr.output].count;\r\n\r\n                // html += \"&nbsp;&nbsp;<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').showAnim('\" + i + \"','\" + j + \"')\\\" class=\\\"icon icon-search\\\"></a>\";\r\n\r\n                html += \"</td>\";\r\n\r\n                html += \"</tr>\";\r\n            }\r\n        }\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td>\" + numKeyframes + \" total</td>\";\r\n        html += \"</tr>\";\r\n        html += \"</table>\";\r\n    }\r\n    else\r\n    {\r\n\r\n    }\r\n\r\n    // / ///////////////////\r\n\r\n    let numImages = 0;\r\n    if (gltf.json.images)numImages = gltf.json.images.length;\r\n    html += \"<div id=\\\"groupImages\\\">Images (\" + numImages + \")</div>\";\r\n\r\n    if (gltf.json.images)\r\n    {\r\n        html += \"<table id=\\\"sectionImages\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th>type</th>\";\r\n        html += \"  <th>func</th>\";\r\n        html += \"</tr>\";\r\n\r\n        sizes.images = 0;\r\n\r\n        for (let i = 0; i < gltf.json.images.length; i++)\r\n        {\r\n            if (gltf.json.images[i].hasOwnProperty(\"bufferView\"))\r\n            {\r\n                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty(\"bufferView\")) == -1)console.log(\"image bufferview already there?!\");\r\n                // else\r\n                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;\r\n            }\r\n            else console.log(\"image has no bufferview?!\");\r\n\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.images[i].name + \"</td>\";\r\n            html += \"<td>\" + gltf.json.images[i].mimeType + \"</td>\";\r\n            html += \"<td>\";\r\n\r\n            let name = gltf.json.images[i].name;\r\n            if (name === undefined)name = gltf.json.images[i].bufferView;\r\n\r\n            html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeTexture('\" + name + \"')\\\" class=\\\"treebutton\\\">Expose</a>\";\r\n            html += \"</td>\";\r\n\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ///////////////////////\r\n\r\n    let numCameras = 0;\r\n    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;\r\n    html += \"<div id=\\\"groupCameras\\\">Cameras (\" + numCameras + \")</div>\";\r\n\r\n    if (gltf.json.cameras)\r\n    {\r\n        html += \"<table id=\\\"sectionCameras\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th>type</th>\";\r\n        html += \"  <th>info</th>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let i = 0; i < gltf.json.cameras.length; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.cameras[i].name + \"</td>\";\r\n            html += \"<td>\" + gltf.json.cameras[i].type + \"</td>\";\r\n            html += \"<td>\";\r\n\r\n            if (gltf.json.cameras[i].perspective)\r\n            {\r\n                html += \"yfov: \" + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;\r\n                html += \", \";\r\n                html += \"zfar: \" + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;\r\n                html += \", \";\r\n                html += \"znear: \" + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;\r\n            }\r\n            html += \"</td>\";\r\n\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ////////////////////////////////////\r\n\r\n    let numSkins = 0;\r\n    if (gltf.json.skins)numSkins = gltf.json.skins.length;\r\n    html += \"<div id=\\\"groupSkins\\\">Skins (\" + numSkins + \")</div>\";\r\n\r\n    if (gltf.json.skins)\r\n    {\r\n        // html += \"<h3>Skins (\" + gltf.json.skins.length + \")</h3>\";\r\n        html += \"<table id=\\\"sectionSkins\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th></th>\";\r\n        html += \"  <th>total joints</th>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let i = 0; i < gltf.json.skins.length; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.skins[i].name + \"</td>\";\r\n            html += \"<td>\" + \"</td>\";\r\n            html += \"<td>\" + gltf.json.skins[i].joints.length + \"</td>\";\r\n            html += \"<td>\";\r\n            html += \"</td>\";\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ////////////////////////////////////\r\n\r\n    if (gltf.timing)\r\n    {\r\n        html += \"<div id=\\\"groupTiming\\\">Debug Loading Timing </div>\";\r\n\r\n        html += \"<table id=\\\"sectionTiming\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>task</th>\";\r\n        html += \"  <th>time used</th>\";\r\n        html += \"</tr>\";\r\n\r\n        let lt = 0;\r\n        for (let i = 0; i < gltf.timing.length - 1; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"  <td>\" + gltf.timing[i][0] + \"</td>\";\r\n            html += \"  <td>\" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + \" ms</td>\";\r\n            html += \"</tr>\";\r\n            // lt = gltf.timing[i][1];\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / //////////////////////////\r\n\r\n    let sizeBin = 0;\r\n    if (gltf.json.buffers)\r\n        sizeBin = gltf.json.buffers[0].byteLength;\r\n\r\n    html += \"<div id=\\\"groupBinary\\\">File Size Allocation (\" + Math.round(sizeBin / 1024) + \"k )</div>\";\r\n\r\n    html += \"<table id=\\\"sectionBinary\\\" class=\\\"table treetable\\\">\";\r\n    html += \"<tr>\";\r\n    html += \"  <th>name</th>\";\r\n    html += \"  <th>size</th>\";\r\n    html += \"  <th>%</th>\";\r\n    html += \"</tr>\";\r\n    let sizeUnknown = sizeBin;\r\n    for (let i in sizes)\r\n    {\r\n        // html+=i+':'+Math.round(sizes[i]/1024);\r\n        html += \"<tr>\";\r\n        html += \"<td>\" + i + \"</td>\";\r\n        html += \"<td>\" + readableSize(sizes[i]) + \" </td>\";\r\n        html += \"<td>\" + Math.round(sizes[i] / sizeBin * 100) + \"% </td>\";\r\n        html += \"<tr>\";\r\n        sizeUnknown -= sizes[i];\r\n    }\r\n\r\n    if (sizeUnknown != 0)\r\n    {\r\n        html += \"<tr>\";\r\n        html += \"<td>unknown</td>\";\r\n        html += \"<td>\" + readableSize(sizeUnknown) + \" </td>\";\r\n        html += \"<td>\" + Math.round(sizeUnknown / sizeBin * 100) + \"% </td>\";\r\n        html += \"<tr>\";\r\n    }\r\n\r\n    html += \"</table>\";\r\n    html += \"</div>\";\r\n\r\n    tab = new CABLES.UI.Tab(\"GLTF \" + CABLES.basename(inFile.get()), { \"icon\": \"cube\", \"infotext\": \"tab_gltf\", \"padding\": true, \"singleton\": true });\r\n    gui.mainTabs.addTab(tab, true);\r\n\r\n    tab.addEventListener(\"close\", closeTab);\r\n    tab.html(html);\r\n\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupNodes\"), ele.byId(\"sectionNodes\"), false);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMaterials\"), ele.byId(\"materialtable\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupAnims\"), ele.byId(\"sectionAnim\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMeshes\"), ele.byId(\"meshestable\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupCameras\"), ele.byId(\"sectionCameras\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupImages\"), ele.byId(\"sectionImages\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupSkins\"), ele.byId(\"sectionSkins\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupBinary\"), ele.byId(\"sectionBinary\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupTiming\"), ele.byId(\"sectionTiming\"), true);\r\n\r\n    gui.maintabPanel.show(true);\r\n}\r\n\r\nfunction readableSize(n)\r\n{\r\n    if (n > 1024) return Math.round(n / 1024) + \" kb\";\r\n    if (n > 1024 * 500) return Math.round(n / 1024) + \" mb\";\r\n    else return n + \" bytes\";\r\n}\r\n","inc_skin_js":"const GltfSkin = class\r\n{\r\n    constructor(node)\r\n    {\r\n        this._mod = null;\r\n        this._node = node;\r\n        this._lastTime = 0;\r\n        this._matArr = [];\r\n        this._m = mat4.create();\r\n        this._invBindMatrix = mat4.create();\r\n        this.identity = true;\r\n    }\r\n\r\n    renderFinish(cgl)\r\n    {\r\n        cgl.popModelMatrix();\r\n        this._mod.unbind();\r\n    }\r\n\r\n    renderStart(cgl, time)\r\n    {\r\n        if (!this._mod)\r\n        {\r\n            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);\r\n\r\n            this._mod.addModule({\r\n                \"priority\": -2,\r\n                \"name\": \"MODULE_VERTEX_POSITION\",\r\n                \"srcHeadVert\": attachments.skin_head_vert || \"\",\r\n                \"srcBodyVert\": attachments.skin_vert || \"\"\r\n            });\r\n\r\n            this._mod.addUniformVert(\"m4[]\", \"MOD_boneMats\", []);// bohnenmatze\r\n            const tr = vec3.create();\r\n        }\r\n\r\n        const skinIdx = this._node.skin;\r\n        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;\r\n\r\n        // if (this._lastTime != time || !time)\r\n        {\r\n            // this._lastTime=inTime.get();\r\n            if (this._matArr.length != arrLength) this._matArr.length = arrLength;\r\n\r\n            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)\r\n            {\r\n                const i16 = i * 16;\r\n                const jointIdx = gltf.json.skins[skinIdx].joints[i];\r\n                const nodeJoint = gltf.nodes[jointIdx];\r\n\r\n                for (let j = 0; j < 16; j++)\r\n                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];\r\n\r\n                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);\r\n\r\n                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];\r\n            }\r\n\r\n            this._mod.setUniformValue(\"MOD_boneMats\", this._matArr);\r\n            this._lastTime = time;\r\n        }\r\n\r\n        this._mod.define(\"SKIN_NUM_BONES\", gltf.json.skins[skinIdx].joints.length);\r\n        this._mod.bind();\r\n\r\n        // draw mesh...\r\n        cgl.pushModelMatrix();\r\n        if (this.identity)mat4.identity(cgl.mMatrix);\r\n    }\r\n};\r\n","inc_targets_js":"const GltfTargetsRenderer = class\r\n{\r\n    constructor(mesh)\r\n    {\r\n        this.mesh = mesh;\r\n        this.tex = null;\r\n        this.numRowsPerTarget = 0;\r\n\r\n        this.makeTex(mesh.geom);\r\n    }\r\n\r\n    renderFinish(cgl)\r\n    {\r\n        if (!cgl.gl) return;\r\n        cgl.popModelMatrix();\r\n        this._mod.unbind();\r\n    }\r\n\r\n    renderStart(cgl, time)\r\n    {\r\n        if (!cgl.gl) return;\r\n        if (!this._mod)\r\n        {\r\n            this._mod = new CGL.ShaderModifier(cgl, \"gltftarget\");\r\n\r\n            this._mod.addModule({\r\n                \"priority\": -2,\r\n                \"name\": \"MODULE_VERTEX_POSITION\",\r\n                \"srcHeadVert\": attachments.targets_head_vert || \"\",\r\n                \"srcBodyVert\": attachments.targets_vert || \"\"\r\n            });\r\n\r\n            this._mod.addUniformVert(\"4f\", \"MOD_targetTexInfo\", [0, 0, 0, 0]);\r\n            this._mod.addUniformVert(\"t\", \"MOD_targetTex\", 1);\r\n            this._mod.addUniformVert(\"f[]\", \"MOD_weights\", []);\r\n\r\n            const tr = vec3.create();\r\n        }\r\n\r\n        this._mod.pushTexture(\"MOD_targetTex\", this.tex);\r\n        if (this.tex && this.mesh.weights)\r\n        {\r\n            this._mod.setUniformValue(\"MOD_weights\", this.mesh.weights);\r\n            this._mod.setUniformValue(\"MOD_targetTexInfo\", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);\r\n\r\n            this._mod.define(\"MOD_NUM_WEIGHTS\", Math.max(1, this.mesh.weights.length));\r\n        }\r\n        else\r\n        {\r\n            this._mod.define(\"MOD_NUM_WEIGHTS\", 1);\r\n        }\r\n        this._mod.bind();\r\n\r\n        // draw mesh...\r\n        cgl.pushModelMatrix();\r\n        if (this.identity)mat4.identity(cgl.mMatrix);\r\n    }\r\n\r\n    makeTex(geom)\r\n    {\r\n        if (!cgl.gl) return;\r\n\r\n        if (!geom.morphTargets || !geom.morphTargets.length) return;\r\n\r\n        let w = geom.morphTargets[0].vertices.length / 3;\r\n        let h = 0;\r\n        this.numRowsPerTarget = 0;\r\n\r\n        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;\r\n\r\n        h = geom.morphTargets.length * this.numRowsPerTarget;\r\n\r\n        // console.log(\"this.numRowsPerTarget\", this.numRowsPerTarget);\r\n\r\n        const pixels = new Float32Array(w * h * 4);\r\n        let row = 0;\r\n\r\n        for (let i = 0; i < geom.morphTargets.length; i++)\r\n        {\r\n            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)\r\n                {\r\n                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n        }\r\n\r\n        this.tex = new CGL.Texture(cgl, { \"isFloatingPointTexture\": true, \"name\": \"targetsTexture\" });\r\n\r\n        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);\r\n\r\n        // console.log(\"morphTargets generated texture\", w, h);\r\n    }\r\n};\r\n","skin_vert":"int index=int(attrJoints.x);\r\nvec4 newPos = (MOD_boneMats[index] * pos) * attrWeights.x;\r\nvec3 newNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.x).xyz);\r\n\r\nindex=int(attrJoints.y);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.y;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.y).xyz)+newNorm;\r\n\r\nindex=int(attrJoints.z);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.z;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.z).xyz)+newNorm;\r\n\r\nindex=int(attrJoints.w);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.w ;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.w).xyz)+newNorm;\r\n\r\npos=newPos;\r\n\r\nnorm=normalize(newNorm.xyz);\r\n\r\n\r\n","skin_head_vert":"\r\nIN vec4 attrWeights;\r\nIN vec4 attrJoints;\r\nUNI mat4 MOD_boneMats[SKIN_NUM_BONES];\r\n","targets_vert":"\r\n\r\nfloat MOD_width=MOD_targetTexInfo.x;\r\nfloat MOD_height=MOD_targetTexInfo.y;\r\nfloat MOD_numTargets=MOD_targetTexInfo.w;\r\nfloat MOD_numLinesPerTarget=MOD_height/MOD_numTargets;\r\n\r\nfloat halfpix=(1.0/MOD_width)*0.5;\r\nfloat halfpixy=(1.0/MOD_height)*0.5;\r\n\r\nfloat x=(attrVertIndex)/MOD_width+halfpix;\r\n\r\nvec3 off=vec3(0.0);\r\n\r\nfor(float i=0.0;i<MOD_numTargets;i+=1.0)\r\n{\r\n    float y=1.0-((MOD_numLinesPerTarget*i)/MOD_height+halfpixy);\r\n    vec2 coord=vec2(x,y);\r\n    vec3 targetXYZ = texture(MOD_targetTex,coord).xyz;\r\n\r\n    off+=(targetXYZ*MOD_weights[int(i)]);\r\n\r\n\r\n\r\n    coord.y+=1.0/MOD_height; // normals are in next row\r\n    vec3 targetNormal = texture(MOD_targetTex,coord).xyz;\r\n    norm+=targetNormal*MOD_weights[int(i)];\r\n\r\n\r\n}\r\n\r\n// norm=normalize(norm);\r\npos.xyz+=off;\r\n","targets_head_vert":"\r\nUNI float MOD_weights[MOD_NUM_WEIGHTS];\r\n",};
const gltfCamera = class
{
    constructor(gltf, node)
    {
        this.node = node;
        this.name = node.name;
        // console.log(gltf);
        this.config = gltf.json.cameras[node.camera];

        this.pos = vec3.create();
        this.quat = quat.create();
        this.vCenter = vec3.create();
        this.vUp = vec3.create();
        this.vMat = mat4.create();
    }

    updateAnim(time)
    {
        if (this.node && this.node._animTrans)
        {
            vec3.set(this.pos,
                this.node._animTrans[0].getValue(time),
                this.node._animTrans[1].getValue(time),
                this.node._animTrans[2].getValue(time));

            quat.set(this.quat,
                this.node._animRot[0].getValue(time),
                this.node._animRot[1].getValue(time),
                this.node._animRot[2].getValue(time),
                this.node._animRot[3].getValue(time));
        }
    }

    start(time)
    {
        if (cgl.tempData.shadowPass) return;

        this.updateAnim(time);
        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];

        cgl.pushPMatrix();
        // mat4.perspective(
        //     cgl.pMatrix,
        //     this.config.perspective.yfov*0.5,
        //     asp,
        //     this.config.perspective.znear,
        //     this.config.perspective.zfar);

        cgl.pushViewMatrix();
        // mat4.identity(cgl.vMatrix);

        // if(this.node && this.node.parent)
        // {
        //     console.log(this.node.parent)
        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);
        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);
        // mat4.translate(cgl.vMatrix,cgl.vMatrix,
        // [
        //     -this.node.parent._node.translation[0],
        //     -this.node.parent._node.translation[1],
        //     -this.node.parent._node.translation[2]
        // ])
        // }

        // vec3.set(this.vUp, 0, 1, 0);
        // vec3.set(this.vCenter, 0, -1, 0);
        // // vec3.set(this.vCenter, 0, 1, 0);
        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);
        // vec3.normalize(this.vCenter, this.vCenter);
        // vec3.add(this.vCenter, this.vCenter, this.pos);

        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);

        let mv = mat4.create();
        mat4.invert(mv, this.node.modelMatAbs());

        // console.log(this.node.modelMatAbs());

        this.vMat = mv;

        mat4.identity(cgl.vMatrix);
        // console.log(mv);
        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);
    }

    end()
    {
        if (cgl.tempData.shadowPass) return;
        cgl.popPMatrix();
        cgl.popViewMatrix();
    }
};
const le = true; // little endian

const Gltf = class
{
    constructor()
    {
        this.json = {};
        this.accBuffers = [];
        this.meshes = [];
        this.nodes = [];
        this.shaders = [];
        this.timing = [];
        this.cams = [];
        this.startTime = performance.now();
        this.bounds = new CABLES.CG.BoundingBox();
        this.loaded = Date.now();
        this.accBuffersDelete = [];
    }

    getNode(n)
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            if (this.nodes[i].name == n) return this.nodes[i];
        }
    }

    unHideAll()
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].unHide();
        }
    }
};

function Utf8ArrayToStr(array)
{
    if (window.TextDecoder) return new TextDecoder("utf-8").decode(array);

    let out, i, len, c;
    let char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len)
    {
        c = array[i++];
        switch (c >> 4)
        {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
        case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
        case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
            break;
        }
    }

    return out;
}

function readChunk(dv, bArr, arrayBuffer, offset)
{
    const chunk = {};

    if (offset >= dv.byteLength)
    {
        // op.log("could not read chunk...");
        return;
    }
    chunk.size = dv.getUint32(offset + 0, le);

    // chunk.type = new TextDecoder("utf-8").decode(bArr.subarray(offset+4, offset+4+4));
    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));

    if (chunk.type == "BIN\0")
    {
        // console.log(chunk.size,arrayBuffer.length,offset);
        // try
        // {
        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);
        // }
        // catch(e)
        // {
        //     chunk.dataView = null;
        //     console.log(e);
        // }
    }
    else
    if (chunk.type == "JSON")
    {
        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));

        try
        {
            const obj = JSON.parse(json);
            chunk.data = obj;
            outGenerator.set(obj.asset.generator);
        }
        catch (e)
        {
        }
    }
    else
    {
        op.warn("unknown type", chunk.type);
    }

    return chunk;
}

function loadAnims(gltf)
{
    const uniqueAnimNames = {};

    for (let i = 0; i < gltf.json.animations.length; i++)
    {
        const an = gltf.json.animations[i];

        an.name = an.name || "unknown";

        for (let ia = 0; ia < an.channels.length; ia++)
        {
            const chan = an.channels[ia];

            const node = gltf.nodes[chan.target.node];
            const sampler = an.samplers[chan.sampler];

            const acc = gltf.json.accessors[sampler.input];
            const bufferIn = gltf.accBuffers[sampler.input];

            const accOut = gltf.json.accessors[sampler.output];
            const bufferOut = gltf.accBuffers[sampler.output];

            gltf.accBuffersDelete.push(sampler.output, sampler.input);

            if (bufferIn && bufferOut)
            {
                let numComps = 1;
                if (accOut.type === "VEC2")numComps = 2;
                else if (accOut.type === "VEC3")numComps = 3;
                else if (accOut.type === "VEC4")numComps = 4;
                else if (accOut.type === "SCALAR")
                {
                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...
                }
                else op.log("[] UNKNOWN accOut.type", accOut.type);

                const anims = [];

                uniqueAnimNames[an.name] = true;

                for (let k = 0; k < numComps; k++)
                {
                    const newAnim = new CABLES.Anim();
                    // newAnim.name=an.name;
                    anims.push(newAnim);
                }

                if (sampler.interpolation === "LINEAR") {}
                else if (sampler.interpolation === "STEP") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;
                else if (sampler.interpolation === "CUBICSPLINE") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;
                else op.warn("unknown interpolation", sampler.interpolation);

                // console.log(bufferOut)

                // if there is no keyframe for time 0 copy value of first keyframe at time 0
                if (bufferIn[0] !== 0.0)
                    for (let k = 0; k < numComps; k++)
                        anims[k].setValue(0, bufferOut[0 * numComps + k]);

                for (let j = 0; j < bufferIn.length; j++)
                {
                    maxTime = Math.max(bufferIn[j], maxTime);

                    for (let k = 0; k < numComps; k++)
                    {
                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)
                        {
                            const idx = ((j * numComps) * 3 + k);

                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);
                            key.bezTangIn = bufferOut[idx];
                            key.bezTangOut = bufferOut[idx + (numComps * 2)];

                            // console.log(an.name,k,bufferOut[idx+1]);
                        }
                        else
                        {
                            // console.log(an.name,k,bufferOut[j * numComps + k]);
                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);
                        }
                    }
                }

                node.setAnim(chan.target.path, an.name, anims);
            }
            else
            {
                op.warn("loadAmins bufferIn undefined ", bufferIn === undefined);
                op.warn("loadAmins bufferOut undefined ", bufferOut === undefined);
                op.warn("loadAmins ", an.name, sampler, accOut);
                op.warn("loadAmins num accBuffers", gltf.accBuffers.length);
                op.warn("loadAmins num accessors", gltf.json.accessors.length);
            }
        }
    }

    gltf.uniqueAnimNames = uniqueAnimNames;

    outAnims.setRef(Object.keys(uniqueAnimNames));
}

function loadCams(gltf)
{
    if (!gltf || !gltf.json.cameras) return;

    gltf.cameras = gltf.cameras || [];

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].hasOwnProperty("camera"))
        {
            const cam = new gltfCamera(gltf, gltf.nodes[i]);
            gltf.cameras.push(cam);
        }
    }
}

function loadAfterDraco()
{
    if (!window.DracoDecoder)
    {
        setTimeout(() =>
        {
            loadAfterDraco();
        }, 100);
    }

    reloadSoon();
}

function parseGltf(arrayBuffer)
{
    const CHUNK_HEADER_SIZE = 8;

    let j = 0, i = 0;

    const gltf = new Gltf();
    gltf.timing.push(["Start parsing", Math.round((performance.now() - gltf.startTime))]);

    if (!arrayBuffer) return;
    const byteArray = new Uint8Array(arrayBuffer);
    let pos = 0;

    // var string = new TextDecoder("utf-8").decode(byteArray.subarray(pos, 4));
    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));
    pos += 4;
    if (string != "glTF") return;

    gltf.timing.push(["dataview", Math.round((performance.now() - gltf.startTime))]);

    const dv = new DataView(arrayBuffer);
    const version = dv.getUint32(pos, le);
    pos += 4;
    const size = dv.getUint32(pos, le);
    pos += 4;

    outVersion.set(version);

    const chunks = [];
    gltf.chunks = chunks;

    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));
    pos += chunks[0].size + CHUNK_HEADER_SIZE;
    gltf.json = chunks[0].data;

    gltf.cables = {
        "fileUrl": inFile.get(),
        "shortFileName": CABLES.basename(inFile.get())
    };

    outJson.setRef(gltf.json);
    outExtensions.setRef(gltf.json.extensionsUsed || []);

    let ch = readChunk(dv, byteArray, arrayBuffer, pos);
    while (ch)
    {
        chunks.push(ch);
        pos += ch.size + CHUNK_HEADER_SIZE;
        ch = readChunk(dv, byteArray, arrayBuffer, pos);
    }

    gltf.chunks = chunks;

    const views = chunks[0].data.bufferViews;
    const accessors = chunks[0].data.accessors;

    gltf.timing.push(["Parse buffers", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf("KHR_draco_mesh_compression") > -1)
    {
        if (!window.DracoDecoder)
        {
            op.setUiError("gltfdraco", "GLTF draco compression lib not found / add draco op to your patch!");

            loadAfterDraco();
            return gltf;
        }
        else
        {
            gltf.useDraco = true;
        }
    }

    op.setUiError("gltfdraco", null);
    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);

    if (views)
    {
        for (i = 0; i < accessors.length; i++)
        {
            const acc = accessors[i];
            const view = views[acc.bufferView];

            let numComps = 0;
            if (acc.type == "SCALAR")numComps = 1;
            else if (acc.type == "VEC2")numComps = 2;
            else if (acc.type == "VEC3")numComps = 3;
            else if (acc.type == "VEC4")numComps = 4;
            else if (acc.type == "MAT4")numComps = 16;
            else console.error("unknown accessor type", acc.type);

            //   const decoder = new decoderModule.Decoder();
            //   const decodedGeometry = decodeDracoData(data, decoder);
            //   // Encode mesh
            //   encodeMeshToFile(decodedGeometry, decoder);

            //   decoderModule.destroy(decoder);
            //   decoderModule.destroy(decodedGeometry);

            // 5120 (BYTE)	1
            // 5121 (UNSIGNED_BYTE)	1
            // 5122 (SHORT)	2

            if (chunks[1].dataView)
            {
                if (view)
                {
                    const num = acc.count * numComps;
                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);
                    let stride = view.byteStride || 0;
                    let dataBuff = null;

                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT
                    {
                        stride = stride || 4;

                        const isInt = acc.componentType == 5125;
                        if (isInt)dataBuff = new Uint32Array(num);
                        else dataBuff = new Float32Array(num);

                        dataBuff.cblStride = numComps;

                        for (j = 0; j < num; j++)
                        {
                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);
                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);

                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);
                            accPos += 4;
                        }
                    }
                    else if (acc.componentType == 5123) // UNSIGNED_SHORT
                    {
                        stride = stride || 2;

                        dataBuff = new Uint16Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);

                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);

                            accPos += 2;
                        }
                    }
                    else if (acc.componentType == 5121) // UNSIGNED_BYTE
                    {
                        stride = stride || 1;

                        dataBuff = new Uint8Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);

                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);

                            accPos += 1;
                        }
                    }

                    else
                    {
                        console.error("unknown component type", acc.componentType);
                    }

                    gltf.accBuffers.push(dataBuff);
                }
                else
                {
                    // console.log("has no dataview");
                }
            }
        }
    }

    gltf.timing.push(["Parse mesh groups", Math.round((performance.now() - gltf.startTime))]);

    gltf.json.meshes = gltf.json.meshes || [];

    if (gltf.json.meshes)
    {
        for (i = 0; i < gltf.json.meshes.length; i++)
        {
            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);
            gltf.meshes.push(mesh);
        }
    }

    gltf.timing.push(["Parse nodes", Math.round((performance.now() - gltf.startTime))]);

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        if (gltf.json.nodes[i].children)
            for (j = 0; j < gltf.json.nodes[i].children.length; j++)
            {
                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;
            }
    }

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        const node = new gltfNode(gltf.json.nodes[i], gltf);
        gltf.nodes.push(node);
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];

        if (!node.children) continue;
        for (let j = 0; j < node.children.length; j++)
        {
            gltf.nodes[node.children[j]].parent = node;
        }
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        gltf.nodes[i].initSkin();
    }

    needsMatUpdate = true;

    gltf.timing.push(["load anims", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.animations) loadAnims(gltf);

    gltf.timing.push(["load cameras", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.cameras) loadCams(gltf);

    gltf.timing.push(["finished", Math.round((performance.now() - gltf.startTime))]);
    return gltf;
}
let gltfMesh = class
{
    constructor(name, prim, gltf, finished)
    {
        this.POINTS = 0;
        this.LINES = 1;
        this.LINE_LOOP = 2;
        this.LINE_STRIP = 3;
        this.TRIANGLES = 4;
        this.TRIANGLE_STRIP = 5;
        this.TRIANGLE_FAN = 6;

        this.test = 0;
        this.name = name;
        this.submeshIndex = 0;
        this.material = prim.material;
        this.mesh = null;
        this.geom = new CGL.Geometry("gltf_" + this.name);
        this.geom.verticesIndices = [];
        this.bounds = null;
        this.primitive = 4;
        this.morphTargetsRenderMod = null;
        this.weights = prim.weights;

        if (prim.hasOwnProperty("mode")) this.primitive = prim.mode;

        if (prim.hasOwnProperty("indices")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];

        gltf.loadingMeshes = gltf.loadingMeshes || 0;
        gltf.loadingMeshes++;

        this.materialJson =
            this._matPbrMetalness =
            this._matPbrRoughness =
            this._matDiffuseColor = null;

        if (gltf.json.materials)
        {
            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];

            if (this.materialJson && this.materialJson.pbrMetallicRoughness)
            {
                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("baseColorFactor"))
                {
                    this._matDiffuseColor = [1, 1, 1, 1];
                }
                else
                {
                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;
                }

                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("metallicFactor"))
                {
                    this._matPbrMetalness = 1.0;
                }
                else
                {
                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;
                }

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("roughnessFactor"))
                {
                    this._matPbrRoughness = 1.0;
                }
                else
                {
                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;
                }
            }
        }

        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)
        {
            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];
            const num = view.byteLength;
            const dataBuff = new Int8Array(num);
            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);
            for (let j = 0; j < num; j++)
            {
                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);
                accPos++;
            }

            const dracoDecoder = window.DracoDecoder;
            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>
            {
                const geom = new CGL.Geometry("draco mesh " + name);

                for (let i = 0; i < geometry.attributes.length; i++)
                {
                    const attr = geometry.attributes[i];

                    if (attr.name === "position") geom.vertices = attr.array;
                    else if (attr.name === "normal") geom.vertexNormals = attr.array;
                    else if (attr.name === "uv") geom.texCoords = attr.array;
                    else if (attr.name === "color") geom.vertexColors = this.calcVertexColors(attr.array);
                    else if (attr.name === "joints") geom.setAttribute("attrJoints", Array.from(attr.array), 4);
                    else if (attr.name === "weights")
                    {
                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);

                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)
                        {
                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;
                            for (let j = 0; j < attr.itemSize; j++)
                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];
                        }
                        geom.setAttribute("attrWeights", arr4, 4);
                    }
                    else op.logWarn("unknown draco attrib", attr);
                }

                geometry.attributes = null;
                geom.verticesIndices = geometry.index.array;

                this.setGeom(geom);

                this.mesh = null;
                gltf.loadingMeshes--;
                gltf.timing.push(["draco decode", Math.round((performance.now() - gltf.startTime))]);

                if (finished)finished(this);
            }, (error) => { op.logError(error); });
        }
        else
        {
            gltf.loadingMeshes--;
            this.fillGeomAttribs(gltf, this.geom, prim.attributes);

            if (prim.targets)
            {
                for (let j = 0; j < prim.targets.length; j++)
                {
                    const tgeom = new CGL.Geometry("gltf_target_" + j);

                    // if (prim.hasOwnProperty("indices")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];

                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);

                    // { // calculate normals for final position of morphtarget for later...
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];
                    //     tgeom.calculateNormals();
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];
                    // }

                    this.geom.morphTargets.push(tgeom);
                }
            }
            if (finished)finished(this);
        }
    }

    _linearToSrgb(x)
    {
        if (x <= 0)
            return 0;
        else if (x >= 1)
            return 1;
        else if (x < 0.0031308)
            return x * 12.92;
        else
            return x ** (1 / 2.2) * 1.055 - 0.055;
    }

    calcVertexColors(arr, type)
    {
        let vertexColors = null;
        if (arr instanceof Float32Array)
        {
            let div = false;
            for (let i = 0; i < arr.length; i++)
            {
                if (arr[i] > 1)
                {
                    div = true;
                    continue;
                }
            }

            if (div)
                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;

            vertexColors = arr;
        }

        else if (arr instanceof Uint16Array)
        {
            const fb = new Float32Array(arr.length);
            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;

            vertexColors = fb;
        }
        else vertexColors = arr;

        for (let i = 0; i < vertexColors.length; i++)
        {
            vertexColors[i] = this._linearToSrgb(vertexColors[i]);
        }

        if (arr.cblStride == 3)
        {
            const nc = new Float32Array(vertexColors.length / 3 * 4);
            for (let i = 0; i < vertexColors.length / 3; i++)
            {
                nc[i * 4 + 0] = vertexColors[i * 3 + 0];
                nc[i * 4 + 1] = vertexColors[i * 3 + 1];
                nc[i * 4 + 2] = vertexColors[i * 3 + 2];
                nc[i * 4 + 3] = 1;
            }
            vertexColors = nc;
        }

        return vertexColors;
    }

    fillGeomAttribs(gltf, tgeom, attribs, setGeom)
    {
        if (attribs.hasOwnProperty("POSITION")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];
        if (attribs.hasOwnProperty("NORMAL")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];
        if (attribs.hasOwnProperty("TANGENT")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];

        // // console.log(gltf.accBuffers[attribs.COLOR_0])
        // console.log(gltf);

        if (attribs.hasOwnProperty("COLOR_0")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);
        if (attribs.hasOwnProperty("COLOR_1")) tgeom.setAttribute("attrVertColor1", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);
        if (attribs.hasOwnProperty("COLOR_2")) tgeom.setAttribute("attrVertColor2", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);
        if (attribs.hasOwnProperty("COLOR_3")) tgeom.setAttribute("attrVertColor3", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);
        if (attribs.hasOwnProperty("COLOR_4")) tgeom.setAttribute("attrVertColor4", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);

        if (attribs.hasOwnProperty("TEXCOORD_0")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];
        if (attribs.hasOwnProperty("TEXCOORD_1")) tgeom.setAttribute("attrTexCoord1", gltf.accBuffers[attribs.TEXCOORD_1], 2);
        if (attribs.hasOwnProperty("TEXCOORD_2")) tgeom.setAttribute("attrTexCoord2", gltf.accBuffers[attribs.TEXCOORD_2], 2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) tgeom.setAttribute("attrTexCoord3", gltf.accBuffers[attribs.TEXCOORD_3], 2);
        if (attribs.hasOwnProperty("TEXCOORD_4")) tgeom.setAttribute("attrTexCoord4", gltf.accBuffers[attribs.TEXCOORD_4], 2);

        if (attribs.hasOwnProperty("WEIGHTS_0"))
        {
            tgeom.setAttribute("attrWeights", gltf.accBuffers[attribs.WEIGHTS_0], 4);
        }
        if (attribs.hasOwnProperty("JOINTS_0"))
        {
            if (!gltf.accBuffers[attribs.JOINTS_0])console.log("no !gltf.accBuffers[attribs.JOINTS_0]");
            tgeom.setAttribute("attrJoints", gltf.accBuffers[attribs.JOINTS_0], 4);
        }

        if (attribs.hasOwnProperty("POSITION")) gltf.accBuffersDelete.push(attribs.POSITION);
        if (attribs.hasOwnProperty("NORMAL")) gltf.accBuffersDelete.push(attribs.NORMAL);
        if (attribs.hasOwnProperty("TEXCOORD_0")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);
        if (attribs.hasOwnProperty("TANGENT")) gltf.accBuffersDelete.push(attribs.TANGENT);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_1"))gltf.accBuffersDelete.push(attribs.COLOR_1);
        if (attribs.hasOwnProperty("COLOR_2"))gltf.accBuffersDelete.push(attribs.COLOR_2);
        if (attribs.hasOwnProperty("COLOR_3"))gltf.accBuffersDelete.push(attribs.COLOR_3);

        if (attribs.hasOwnProperty("TEXCOORD_1")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);
        if (attribs.hasOwnProperty("TEXCOORD_2")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);
        if (attribs.hasOwnProperty("TEXCOORD_4")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);

        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);
    }

    setGeom(geom)
    {
        if (inNormFormat.get() == "X-ZY")
        {
            for (let i = 0; i < geom.vertexNormals.length; i += 3)
            {
                let t = geom.vertexNormals[i + 2];
                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];
                geom.vertexNormals[i + 1] = -t;
            }
        }

        if (inVertFormat.get() == "XZ-Y")
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
            {
                let t = geom.vertices[i + 2];
                geom.vertices[i + 2] = -geom.vertices[i + 1];
                geom.vertices[i + 1] = t;
            }
        }

        if (this.primitive == this.TRIANGLES)
        {
            if (inCalcNormals.get() == "Force Smooth" || inCalcNormals.get() == false) geom.calculateNormals();
            else if (!geom.vertexNormals.length && inCalcNormals.get() == "Auto") geom.calculateNormals({ "smooth": false });

            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)
            {
                const bitan = vec3.create();
                const tan = vec3.create();

                const tangents = geom.tangents;
                geom.tangents = new Float32Array(tangents.length / 4 * 3);
                geom.biTangents = new Float32Array(tangents.length / 4 * 3);

                for (let i = 0; i < tangents.length; i += 4)
                {
                    const idx = i / 4 * 3;

                    vec3.cross(
                        bitan,
                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],
                        [tangents[i], tangents[i + 1], tangents[i + 2]]
                    );

                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);
                    vec3.normalize(bitan, bitan);

                    geom.biTangents[idx + 0] = bitan[0];
                    geom.biTangents[idx + 1] = bitan[1];
                    geom.biTangents[idx + 2] = bitan[2];

                    geom.tangents[idx + 0] = tangents[i + 0];
                    geom.tangents[idx + 1] = tangents[i + 1];
                    geom.tangents[idx + 2] = tangents[i + 2];
                }
            }

            if (geom.tangents.length === 0 || inCalcNormals.get() != "Never")
            {
                // console.log("[gltf ]no tangents... calculating tangents...");
                geom.calcTangentsBitangents();
            }
        }

        this.geom = geom;

        this.bounds = geom.getBounds();
    }

    render(cgl, ignoreMaterial, skinRenderer)
    {
        if (!this.mesh && this.geom && this.geom.verticesIndices)
        {
            let g = this.geom;
            if (this.geom.vertices.length / 3 > 64000 && this.geom.verticesIndices.length > 0)
            {
                g = this.geom.copy();
                g.unIndex(false, true);
            }

            let glprim;

            if (cgl.gl)
            {
                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;
                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;
                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;
                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;
                else
                {
                    op.logWarn("unknown primitive type", this);
                }
            }

            this.mesh = op.patch.cg.createMesh(g, { "glPrimitive": glprim });
        }

        if (this.mesh)
        {
            // update morphTargets
            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)
            {
                this.mesh.addVertexNumbers = true;
                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);
            }

            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];
            if (skinRenderer)useMat = false;

            if (useMat) cgl.pushShader(gltf.shaders[this.material]);

            const currentShader = cgl.getShader() || {};
            const uniDiff = currentShader.uniformColorDiffuse;

            const uniPbrMetalness = currentShader.uniformPbrMetalness;
            const uniPbrRoughness = currentShader.uniformPbrRoughness;

            // if (gltf.shaders[this.material] && !inUseMatProps.get())
            // {
            //     gltf.shaders[this.material]=null;
            // }

            if (!gltf.shaders[this.material] && inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor)
                {
                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];
                    uniDiff.setValue(this._matDiffuseColor);
                }

                if (uniPbrMetalness)
                    if (this._matPbrMetalness != null)
                    {
                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();
                        uniPbrMetalness.setValue(this._matPbrMetalness);
                    }
                    else
                        uniPbrMetalness.setValue(0);

                if (uniPbrRoughness)
                    if (this._matPbrRoughness != null)
                    {
                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();
                        uniPbrRoughness.setValue(this._matPbrRoughness);
                    }
                    else
                    {
                        uniPbrRoughness.setValue(0);
                    }
            }

            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);
            if (this.mesh)
            {
                this.mesh.render(cgl.getShader(), ignoreMaterial);
            }
            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);

            if (inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);
                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);
                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);
            }

            if (useMat) cgl.popShader();
        }
        else
        {
            console.log("no mesh......");
        }
    }
};
const gltfMeshGroup = class
{
    constructor(gltf, m)
    {
        this.bounds = new CABLES.CG.BoundingBox();
        this.meshes = [];

        m.name = m.name || ("unknown mesh " + CABLES.simpleId());

        this.name = m.name;
        const prims = m.primitives;

        for (let i = 0; i < prims.length; i++)
        {
            const mesh = new gltfMesh(this.name, prims[i], gltf,
                (mesh) =>
                {
                    mesh.extras = m.extras;
                    this.bounds.apply(mesh.bounds);
                });

            mesh.submeshIndex = i;
            this.meshes.push(mesh);
        }
    }

    render(cgl, ignoreMat, skinRenderer, _time, weights)
    {
        for (let i = 0; i < this.meshes.length; i++)
        {
            const useMat = gltf.shaders[this.meshes[i].material];

            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);
            if (skinRenderer)skinRenderer.renderStart(cgl, _time);
            if (weights) this.meshes[i].weights = weights;
            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);
            if (skinRenderer)skinRenderer.renderFinish(cgl);
            if (!ignoreMat && useMat) cgl.popShader();
        }
    }
};
const gltfNode = class
{
    constructor(node, gltf)
    {
        this.isChild = node.isChild || false;
        node.name = node.name || "unknown node " + CABLES.simpleId();
        this.name = node.name;
        if (node.hasOwnProperty("camera")) this.camera = node.camera;
        this.hidden = false;
        this.mat = mat4.create();
        this._animActions = {};
        this.animWeights = [];
        this._animMat = mat4.create();
        this._tempMat = mat4.create();
        this._tempQuat = quat.create();
        this._tempRotmat = mat4.create();
        this.mesh = null;
        this.children = [];
        this._node = node;
        this._gltf = gltf;
        this.absMat = mat4.create();
        this.addTranslate = null;
        this._tempAnimScale = null;
        this.addMulMat = null;
        this.updateMatrix();
        this.skinRenderer = null;
        this.copies = [];
    }

    get skin()
    {
        if (this._node.hasOwnProperty("skin")) return this._node.skin;
        else return -1;
    }

    copy()
    {
        this.isCopy = true;
        const n = new gltfNode(this._node, this._gltf);
        n.copyOf = this;

        n._animActions = this._animActions;
        n.children = this.children;
        if (this.skin) n.skinRenderer = new GltfSkin(this);

        this.updateMatrix();
        return n;
    }

    hasSkin()
    {
        if (this._node.hasOwnProperty("skin")) return this._gltf.json.skins[this._node.skin].name || "unknown";
        return false;
    }

    initSkin()
    {
        if (this.skin > -1)
        {
            this.skinRenderer = new GltfSkin(this);
        }
    }

    updateMatrix()
    {
        mat4.identity(this.mat);
        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);

        if (this._node.rotation)
        {
            const rotmat = mat4.create();
            this._rot = this._node.rotation;

            mat4.fromQuat(rotmat, this._node.rotation);
            mat4.mul(this.mat, this.mat, rotmat);
        }

        if (this._node.scale)
        {
            this._scale = this._node.scale;
            mat4.scale(this.mat, this.mat, this._scale);
        }

        if (this._node.hasOwnProperty("mesh"))
        {
            this.mesh = this._gltf.meshes[this._node.mesh];
            if (this.isCopy)
            {
            }
        }

        if (this._node.children)
        {
            for (let i = 0; i < this._node.children.length; i++)
            {
                this._gltf.json.nodes[i].isChild = true;
                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;
                this.children.push(this._node.children[i]);
            }
        }
    }

    unHide()
    {
        this.hidden = false;
        for (let i = 0; i < this.children.length; i++)
            if (this.children[i].unHide) this.children[i].unHide();
    }

    calcBounds(gltf, mat, bounds)
    {
        const localMat = mat4.create();

        if (mat) mat4.copy(localMat, mat);
        if (this.mat) mat4.mul(localMat, localMat, this.mat);

        if (this.mesh)
        {
            const bb = this.mesh.bounds.copy();
            bb.mulMat4(localMat);
            bounds.apply(bb);

            if (bounds.changed)
            {
                boundingPoints.push(
                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,
                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);
            }
        }

        for (let i = 0; i < this.children.length; i++)
        {
            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)
            {
                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);

                bounds.apply(b);
            }
        }

        if (bounds.changed) return bounds;
        else return null;
    }

    setAnimAction(name)
    {
        if (!name) return;

        this._currentAnimaction = name;

        if (name && !this._animActions[name]) return null;

        for (let path in this._animActions[name])
        {
            if (path == "translation") this._animTrans = this._animActions[name][path];
            else if (path == "rotation") this._animRot = this._animActions[name][path];
            else if (path == "scale") this._animScale = this._animActions[name][path];
            else if (path == "weights") this.animWeights = this._animActions[name][path];
        }
    }

    setAnim(path, name, anims)
    {
        if (!path || !name || !anims) return;

        this._animActions[name] = this._animActions[name] || {};

        // debugger;

        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;

        if (this._animActions[name][path]) op.log("[gltfNode] animation action path already exists", name, path, this._animActions[name][path]);

        this._animActions[name][path] = anims;

        if (path == "translation") this._animTrans = anims;
        else if (path == "rotation") this._animRot = anims;
        else if (path == "scale") this._animScale = anims;
        else if (path == "weights") this.animWeights = this._animActions[name][path];
    }

    modelMatLocal()
    {
        return this._animMat || this.mat;
    }

    modelMatAbs()
    {
        return this.absMat;
    }

    transform(cgl, _time)
    {
        if (!_time && _time != 0)_time = time;

        this._lastTimeTrans = _time;

        gltfTransforms++;

        if (!this._animTrans && !this._animRot && !this._animScale)
        {
            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);
            this._animMat = null;
        }
        else
        {
            this._animMat = this._animMat || mat4.create();
            mat4.identity(this._animMat);

            const playAnims = true;

            if (playAnims && this._animTrans)
            {
                mat4.translate(this._animMat, this._animMat, [
                    this._animTrans[0].getValue(_time),
                    this._animTrans[1].getValue(_time),
                    this._animTrans[2].getValue(_time)]);
            }
            else
            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);

            if (playAnims && this._animRot)
            {
                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)
                {
                    this._tempQuat[0] = this._animRot[0].getValue(_time);
                    this._tempQuat[1] = this._animRot[1].getValue(_time);
                    this._tempQuat[2] = this._animRot[2].getValue(_time);
                    this._tempQuat[3] = this._animRot[3].getValue(_time);
                }
                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)
                {
                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                }

                mat4.fromQuat(this._tempMat, this._tempQuat);
                mat4.mul(this._animMat, this._animMat, this._tempMat);
            }
            else if (this._rot)
            {
                mat4.fromQuat(this._tempRotmat, this._rot);
                mat4.mul(this._animMat, this._animMat, this._tempRotmat);
            }

            if (playAnims && this._animScale)
            {
                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];
                this._tempAnimScale[0] = this._animScale[0].getValue(_time);
                this._tempAnimScale[1] = this._animScale[1].getValue(_time);
                this._tempAnimScale[2] = this._animScale[2].getValue(_time);
                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);
            }
            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);

            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);
        }

        if (this.animWeights)
        {
            this.weights = this.weights || [];

            let str = "";
            for (let i = 0; i < this.animWeights.length; i++)
            {
                this.weights[i] = this.animWeights[i].getValue(_time);
                str += this.weights[i] + "/";
            }

            // this.mesh.weights=this.animWeights.get(_time);
        }

        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);

        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);

        mat4.copy(this.absMat, cgl.mMatrix);
    }

    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)
    {
        if (!dontTransform) cgl.pushModelMatrix();

        if (_time === undefined) _time = gltf.time;

        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);

        if (this.hidden && !drawHidden)
        {
        }
        else
        {
            if (this.skinRenderer)
            {
                this.skinRenderer.time = _time;
                if (!dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);
            }
            else
            {
                if (this.mesh && !dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);
            }
        }

        if (!ignoreChilds && !this.hidden)
            for (let i = 0; i < this.children.length; i++)
                if (gltf.nodes[this.children[i]])
                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);

        if (!dontTransform)cgl.popModelMatrix();
    }
};
let tab = null;

function closeTab()
{
    if (tab)gui.mainTabs.closeTab(tab.id);
    tab = null;
}

function formatVec(arr)
{
    const nums = [];
    for (let i = 0; i < arr.length; i++)
    {
        nums.push(Math.round(arr[i] * 1000) / 1000);
    }

    return nums.join(",");
}

function printNode(html, node, level)
{
    if (!gltf) return;

    html += "<tr class=\"row\">";

    let ident = "";
    let identSpace = "";

    for (let i = 1; i < level; i++)
    {
        identSpace += "&nbsp;&nbsp;&nbsp;";
        let identClass = "identBg";
        if (i == 1)identClass = "identBgLevel0";
        ident += "<td class=\"ident " + identClass + "\" ><div style=\"\"></div></td>";
    }
    let id = CABLES.uuid();
    html += ident;
    html += "<td colspan=\"" + (21 - level) + "\">";

    if (node.mesh && node.mesh.meshes.length)html += "<span class=\"icon icon-cube\"></span>&nbsp;";
    else html += "<span class=\"icon icon-box-select\"></span> &nbsp;";

    html += node.name + "</td><td></td>";

    if (node.mesh)
    {
        html += "<td>";
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (i > 0)html += ", ";
            html += node.mesh.meshes[i].name;
        }

        html += "</td>";

        html += "<td>";
        html += node.hasSkin() || "-";
        html += "</td>";

        html += "<td>";
        let countMats = 0;
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (countMats > 0)html += ", ";
            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty("material"))
            {
                if (gltf.json.materials[node.mesh.meshes[i].material])
                {
                    html += gltf.json.materials[node.mesh.meshes[i].material].name;
                    countMats++;
                }
            }
        }
        if (countMats == 0)html += "none";
        html += "</td>";
    }
    else
    {
        html += "<td>-</td><td>-</td><td>-</td>";
    }

    html += "<td>";

    if (node._node.translation || node._node.rotation || node._node.scale)
    {
        let info = "";

        if (node._node.translation)info += "Translate: `" + formatVec(node._node.translation) + "` || ";
        if (node._node.rotation)info += "Rotation: `" + formatVec(node._node.rotation) + "` || ";
        if (node._node.scale)info += "Scale: `" + formatVec(node._node.scale) + "` || ";

        html += "<span class=\"icon icon-gizmo info\" data-info=\"" + info + "\"></span> &nbsp;";
    }

    if (node._animRot || node._animScale || node._animTrans)
    {
        let info = "Animated: ";
        if (node._animRot) info += "Rot ";
        if (node._animScale) info += "Scale ";
        if (node._animTrans) info += "Trans ";

        html += "<span class=\"icon icon-clock info\" data-info=\"" + info + "\"></span>&nbsp;";
    }

    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += "-";

    html += "</td>";

    html += "<td>";
    let hideclass = "";
    if (node.hidden)hideclass = "node-hidden";

    // html+='';
    html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','transform')\" class=\"treebutton\">Transform</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','hierarchy')\" class=\"treebutton\">Hierarchy</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "')\" class=\"treebutton\">Node</a>";

    if (node.hasSkin())
        html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "',false,{skin:true});\" class=\"treebutton\">Skin</a>";

    html += "</td><td>";
    html += "&nbsp;<span class=\"icon iconhover icon-eye " + hideclass + "\" onclick=\"gui.corePatch().getOpById('" + op.id + "').toggleNodeVisibility('" + node.name + "');this.classList.toggle('node-hidden');\"></span>";
    html += "</td>";

    html += "</tr>";

    if (node.children)
    {
        for (let i = 0; i < node.children.length; i++)
            html = printNode(html, gltf.nodes[node.children[i]], level + 1);
    }

    return html;
}

function printMaterial(mat, idx)
{
    let html = "<tr>";
    html += " <td>" + idx + "</td>";
    html += " <td>" + mat.name + "</td>";

    html += " <td>";

    const info = JSON.stringify(mat, null, 4).replaceAll("\"", "").replaceAll("\n", "<br/>");

    html += "<span class=\"icon icon-info\" onclick=\"new CABLES.UI.ModalDialog({ 'html': '<pre>" + info + "</pre>', 'title': '" + mat.name + "' });\"></span>&nbsp;";

    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)
    {
        let rgb = "";
        rgb += "" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);

        html += "<div style=\"width:15px;height:15px;background-color:rgb(" + rgb + ");display:inline-block\">&nbsp;</a>";
    }
    html += " <td style=\"\">" + (gltf.shaders[idx] ? "-" : "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').assignMaterial('" + mat.name + "')\" class=\"treebutton\">Assign</a>") + "<td>";
    html += "<td>";

    html += "</tr>";
    return html;
}

function printInfo()
{
    if (!gltf) return;

    const startTime = performance.now();
    const sizes = {};
    let html = "<div style=\"overflow:scroll;width:100%;height:100%\">";

    html += "File: <a href=\"" + CABLES.platform.getCablesUrl() + "/asset/patches/?filename=" + inFile.get() + "\" target=\"_blank\">" + CABLES.basename(inFile.get()) + "</a><br/>";

    html += "Generator:" + gltf.json.asset.generator;

    let numNodes = 0;
    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;
    html += "<div id=\"groupNodes\">Nodes (" + numNodes + ")</div>";

    html += "<table id=\"sectionNodes\" class=\"table treetable\">";

    html += "<tr>";
    html += " <th colspan=\"21\">Name</th>";
    html += " <th>Mesh</th>";
    html += " <th>Skin</th>";
    html += " <th>Material</th>";
    html += " <th>Transform</th>";
    html += " <th>Expose</th>";
    html += " <th></th>";
    html += "</tr>";

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (!gltf.nodes[i].isChild)
            html = printNode(html, gltf.nodes[i], 1);
    }
    html += "</table>";

    // / //////////////////

    let numMaterials = 0;
    if (gltf.json.materials)numMaterials = gltf.json.materials.length;
    html += "<div id=\"groupMaterials\">Materials (" + numMaterials + ")</div>";

    if (!gltf.json.materials || gltf.json.materials.length == 0)
    {
    }
    else
    {
        html += "<table id=\"materialtable\"  class=\"table treetable\">";
        html += "<tr>";
        html += " <th>Index</th>";
        html += " <th>Name</th>";
        html += " <th>Color</th>";
        html += " <th>Function</th>";
        html += " <th></th>";
        html += "</tr>";
        for (let i = 0; i < gltf.json.materials.length; i++)
        {
            html += printMaterial(gltf.json.materials[i], i);
        }
        html += "</table>";
    }

    // / ///////////////////////

    html += "<div id=\"groupMeshes\">Meshes (" + gltf.json.meshes.length + ")</div>";

    html += "<table id=\"meshestable\"  class=\"table treetable\">";
    html += "<tr>";
    html += " <th>Name</th>";
    html += " <th>Node</th>";
    html += " <th>Material</th>";
    html += " <th>Vertices</th>";
    html += " <th>Attributes</th>";
    html += "</tr>";

    let sizeBufferViews = [];
    sizes.meshes = 0;
    sizes.meshTargets = 0;

    for (let i = 0; i < gltf.json.meshes.length; i++)
    {
        html += "<tr>";
        html += "<td>" + gltf.json.meshes[i].name + "</td>";

        html += "<td>";
        let count = 0;
        let nodename = "";
        if (gltf.json.nodes)
            for (let j = 0; j < gltf.json.nodes.length; j++)
            {
                if (gltf.json.nodes[j].mesh == i)
                {
                    count++;
                    if (count == 1)
                    {
                        nodename = gltf.json.nodes[j].name;
                    }
                }
            }
        if (count > 1) html += (count) + " nodes (" + nodename + " ...)";
        else html += nodename;
        html += "</td>";

        // -------

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].hasOwnProperty("material"))
            {
                if (gltf.json.materials[gltf.json.meshes[i]])
                {
                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + " ";
                }
            }
            else html += "None";
        }
        html += "</td>";

        html += "<td>";
        let numVerts = 0;
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)
            {
                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);
                numVerts += v;
                html += "" + v + "<br/>";
            }
            else html += "-<br/>";
        }

        if (gltf.json.meshes[i].primitives.length > 1)
            html += "=" + numVerts;
        html += "</td>";

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);
            html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeGeom('" + gltf.json.meshes[i].name + "'," + j + ")\" class=\"treebutton\">Geometry</a>";
            html += "<br/>";

            if (gltf.json.meshes[i].primitives[j].targets)
            {
                html += gltf.json.meshes[i].primitives[j].targets.length + " targets<br/>";

                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)
                    html += "Targetnames:<br/>" + gltf.json.meshes[i].extras.targetNames.join("<br/>");

                html += "<br/>";
            }
        }

        html += "</td>";
        html += "</tr>";

        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];
            if (accessor)
            {
                let bufView = accessor.bufferView;

                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let k in gltf.json.meshes[i].primitives[j].attributes)
            {
                const attr = gltf.json.meshes[i].primitives[j].attributes[k];
                const bufView2 = gltf.json.accessors[attr].bufferView;

                if (sizeBufferViews.indexOf(bufView2) == -1)
                {
                    sizeBufferViews.push(bufView2);
                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;
                }
            }

            if (gltf.json.meshes[i].primitives[j].targets)
                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)
                {
                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])
                    {
                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];
                        const accessor = gltf.json.accessors[accessorIdx];
                        const bufView2 = accessor.bufferView;
                        console.log("accessor", accessor);
                        if (sizeBufferViews.indexOf(bufView2) == -1)
                            if (gltf.json.bufferViews[bufView2])
                            {
                                sizeBufferViews.push(bufView2);
                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;
                            }
                    }
                }
        }
    }
    html += "</table>";

    // / //////////////////////////////////

    let numSamplers = 0;
    let numAnims = 0;
    let numKeyframes = 0;

    if (gltf.json.animations)
    {
        numAnims = gltf.json.animations.length;
        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            numSamplers += gltf.json.animations[i].samplers.length;
        }
    }

    html += "<div id=\"groupAnims\">Animations (" + numAnims + "/" + numSamplers + ")</div>";

    if (gltf.json.animations)
    {
        html += "<table id=\"sectionAnim\" class=\"table treetable\">";
        html += "<tr>";
        html += "  <th>Name</th>";
        html += "  <th>Target node</th>";
        html += "  <th>Path</th>";
        html += "  <th>Interpolation</th>";
        html += "  <th>Keys</th>";
        html += "</tr>";


        sizes.animations = 0;

        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)
            {
                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }

                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)
            {
                html += "<tr>";
                html += "  <td> Anim " + i + ": " + gltf.json.animations[i].name + "</td>";

                html += "  <td>" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + "</td>";
                html += "  <td>";
                html += gltf.json.animations[i].channels[j].target.path + " ";
                html += "  </td>";

                const smplidx = gltf.json.animations[i].channels[j].sampler;
                const smplr = gltf.json.animations[i].samplers[smplidx];

                html += "  <td>" + smplr.interpolation + "</td>";

                html += "  <td>" + gltf.json.accessors[smplr.output].count;
                numKeyframes += gltf.json.accessors[smplr.output].count;

                // html += "&nbsp;&nbsp;<a onclick=\"gui.corePatch().getOpById('" + op.id + "').showAnim('" + i + "','" + j + "')\" class=\"icon icon-search\"></a>";

                html += "</td>";

                html += "</tr>";
            }
        }

        html += "<tr>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td>" + numKeyframes + " total</td>";
        html += "</tr>";
        html += "</table>";
    }
    else
    {

    }

    // / ///////////////////

    let numImages = 0;
    if (gltf.json.images)numImages = gltf.json.images.length;
    html += "<div id=\"groupImages\">Images (" + numImages + ")</div>";

    if (gltf.json.images)
    {
        html += "<table id=\"sectionImages\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>func</th>";
        html += "</tr>";

        sizes.images = 0;

        for (let i = 0; i < gltf.json.images.length; i++)
        {
            if (gltf.json.images[i].hasOwnProperty("bufferView"))
            {
                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty("bufferView")) == -1)console.log("image bufferview already there?!");
                // else
                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;
            }
            else console.log("image has no bufferview?!");

            html += "<tr>";
            html += "<td>" + gltf.json.images[i].name + "</td>";
            html += "<td>" + gltf.json.images[i].mimeType + "</td>";
            html += "<td>";

            let name = gltf.json.images[i].name;
            if (name === undefined)name = gltf.json.images[i].bufferView;

            html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeTexture('" + name + "')\" class=\"treebutton\">Expose</a>";
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ///////////////////////

    let numCameras = 0;
    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;
    html += "<div id=\"groupCameras\">Cameras (" + numCameras + ")</div>";

    if (gltf.json.cameras)
    {
        html += "<table id=\"sectionCameras\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>info</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.cameras.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.cameras[i].name + "</td>";
            html += "<td>" + gltf.json.cameras[i].type + "</td>";
            html += "<td>";

            if (gltf.json.cameras[i].perspective)
            {
                html += "yfov: " + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;
                html += ", ";
                html += "zfar: " + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;
                html += ", ";
                html += "znear: " + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;
            }
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    let numSkins = 0;
    if (gltf.json.skins)numSkins = gltf.json.skins.length;
    html += "<div id=\"groupSkins\">Skins (" + numSkins + ")</div>";

    if (gltf.json.skins)
    {
        // html += "<h3>Skins (" + gltf.json.skins.length + ")</h3>";
        html += "<table id=\"sectionSkins\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th></th>";
        html += "  <th>total joints</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.skins.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.skins[i].name + "</td>";
            html += "<td>" + "</td>";
            html += "<td>" + gltf.json.skins[i].joints.length + "</td>";
            html += "<td>";
            html += "</td>";
            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    if (gltf.timing)
    {
        html += "<div id=\"groupTiming\">Debug Loading Timing </div>";

        html += "<table id=\"sectionTiming\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>task</th>";
        html += "  <th>time used</th>";
        html += "</tr>";

        let lt = 0;
        for (let i = 0; i < gltf.timing.length - 1; i++)
        {
            html += "<tr>";
            html += "  <td>" + gltf.timing[i][0] + "</td>";
            html += "  <td>" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + " ms</td>";
            html += "</tr>";
            // lt = gltf.timing[i][1];
        }
        html += "</table>";
    }

    // / //////////////////////////

    let sizeBin = 0;
    if (gltf.json.buffers)
        sizeBin = gltf.json.buffers[0].byteLength;

    html += "<div id=\"groupBinary\">File Size Allocation (" + Math.round(sizeBin / 1024) + "k )</div>";

    html += "<table id=\"sectionBinary\" class=\"table treetable\">";
    html += "<tr>";
    html += "  <th>name</th>";
    html += "  <th>size</th>";
    html += "  <th>%</th>";
    html += "</tr>";
    let sizeUnknown = sizeBin;
    for (let i in sizes)
    {
        // html+=i+':'+Math.round(sizes[i]/1024);
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + readableSize(sizes[i]) + " </td>";
        html += "<td>" + Math.round(sizes[i] / sizeBin * 100) + "% </td>";
        html += "<tr>";
        sizeUnknown -= sizes[i];
    }

    if (sizeUnknown != 0)
    {
        html += "<tr>";
        html += "<td>unknown</td>";
        html += "<td>" + readableSize(sizeUnknown) + " </td>";
        html += "<td>" + Math.round(sizeUnknown / sizeBin * 100) + "% </td>";
        html += "<tr>";
    }

    html += "</table>";
    html += "</div>";

    tab = new CABLES.UI.Tab("GLTF " + CABLES.basename(inFile.get()), { "icon": "cube", "infotext": "tab_gltf", "padding": true, "singleton": true });
    gui.mainTabs.addTab(tab, true);

    tab.addEventListener("close", closeTab);
    tab.html(html);

    CABLES.UI.Collapsable.setup(ele.byId("groupNodes"), ele.byId("sectionNodes"), false);
    CABLES.UI.Collapsable.setup(ele.byId("groupMaterials"), ele.byId("materialtable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupAnims"), ele.byId("sectionAnim"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupMeshes"), ele.byId("meshestable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupCameras"), ele.byId("sectionCameras"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupImages"), ele.byId("sectionImages"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupSkins"), ele.byId("sectionSkins"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupBinary"), ele.byId("sectionBinary"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupTiming"), ele.byId("sectionTiming"), true);

    gui.maintabPanel.show(true);
}

function readableSize(n)
{
    if (n > 1024) return Math.round(n / 1024) + " kb";
    if (n > 1024 * 500) return Math.round(n / 1024) + " mb";
    else return n + " bytes";
}
const GltfSkin = class
{
    constructor(node)
    {
        this._mod = null;
        this._node = node;
        this._lastTime = 0;
        this._matArr = [];
        this._m = mat4.create();
        this._invBindMatrix = mat4.create();
        this.identity = true;
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.skin_head_vert || "",
                "srcBodyVert": attachments.skin_vert || ""
            });

            this._mod.addUniformVert("m4[]", "MOD_boneMats", []);// bohnenmatze
            const tr = vec3.create();
        }

        const skinIdx = this._node.skin;
        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;

        // if (this._lastTime != time || !time)
        {
            // this._lastTime=inTime.get();
            if (this._matArr.length != arrLength) this._matArr.length = arrLength;

            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)
            {
                const i16 = i * 16;
                const jointIdx = gltf.json.skins[skinIdx].joints[i];
                const nodeJoint = gltf.nodes[jointIdx];

                for (let j = 0; j < 16; j++)
                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];

                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);

                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];
            }

            this._mod.setUniformValue("MOD_boneMats", this._matArr);
            this._lastTime = time;
        }

        this._mod.define("SKIN_NUM_BONES", gltf.json.skins[skinIdx].joints.length);
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }
};
const GltfTargetsRenderer = class
{
    constructor(mesh)
    {
        this.mesh = mesh;
        this.tex = null;
        this.numRowsPerTarget = 0;

        this.makeTex(mesh.geom);
    }

    renderFinish(cgl)
    {
        if (!cgl.gl) return;
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!cgl.gl) return;
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, "gltftarget");

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.targets_head_vert || "",
                "srcBodyVert": attachments.targets_vert || ""
            });

            this._mod.addUniformVert("4f", "MOD_targetTexInfo", [0, 0, 0, 0]);
            this._mod.addUniformVert("t", "MOD_targetTex", 1);
            this._mod.addUniformVert("f[]", "MOD_weights", []);

            const tr = vec3.create();
        }

        this._mod.pushTexture("MOD_targetTex", this.tex);
        if (this.tex && this.mesh.weights)
        {
            this._mod.setUniformValue("MOD_weights", this.mesh.weights);
            this._mod.setUniformValue("MOD_targetTexInfo", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);

            this._mod.define("MOD_NUM_WEIGHTS", Math.max(1, this.mesh.weights.length));
        }
        else
        {
            this._mod.define("MOD_NUM_WEIGHTS", 1);
        }
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }

    makeTex(geom)
    {
        if (!cgl.gl) return;

        if (!geom.morphTargets || !geom.morphTargets.length) return;

        let w = geom.morphTargets[0].vertices.length / 3;
        let h = 0;
        this.numRowsPerTarget = 0;

        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;

        h = geom.morphTargets.length * this.numRowsPerTarget;

        // console.log("this.numRowsPerTarget", this.numRowsPerTarget);

        const pixels = new Float32Array(w * h * 4);
        let row = 0;

        for (let i = 0; i < geom.morphTargets.length; i++)
        {
            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)
                {
                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];
                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];
                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];
                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }

                row++;
            }

            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }
        }

        this.tex = new CGL.Texture(cgl, { "isFloatingPointTexture": true, "name": "targetsTexture" });

        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);

        // console.log("morphTargets generated texture", w, h);
    }
};
// https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/2.0/figures/gltfOverview-2.0.0b.png

const
    inExec = op.inTrigger("Render"),
    dataPort = op.inString("data"),
    inFile = op.inUrl("glb File", [".glb"]),
    inRender = op.inBool("Draw", true),
    inCamera = op.inDropDown("Camera", ["None"], "None"),
    inAnimation = op.inString("Animation", ""),
    inShow = op.inTriggerButton("Show Structure"),
    inCenter = op.inSwitch("Center", ["None", "XYZ", "XZ"], "XYZ"),
    inRescale = op.inBool("Rescale", true),
    inRescaleSize = op.inFloat("Rescale Size", 2.5),

    inTime = op.inFloat("Time"),
    inTimeLine = op.inBool("Sync to timeline", false),
    inLoop = op.inBool("Loop", true),

    inNormFormat = op.inSwitch("Normals Format", ["XYZ", "X-ZY"], "XYZ"),
    inVertFormat = op.inSwitch("Vertices Format", ["XYZ", "XZ-Y"], "XYZ"),
    inCalcNormals = op.inSwitch("Calc Normals", ["Auto", "Force Smooth", "Never"], "Auto"),

    inMaterials = op.inObject("Materials"),
    inHideNodes = op.inArray("Hide Nodes"),
    inUseMatProps = op.inBool("Use Material Properties", false),

    inActive = op.inBool("Active", true),

    nextBefore = op.outTrigger("Render Before"),
    next = op.outTrigger("Next"),
    outGenerator = op.outString("Generator"),

    outVersion = op.outNumber("GLTF Version"),
    outExtensions = op.outArray("GLTF Extensions Used"),
    outAnimLength = op.outNumber("Anim Length", 0),
    outAnimTime = op.outNumber("Anim Time", 0),
    outJson = op.outObject("Json"),
    outAnims = op.outArray("Anims"),
    outPoints = op.outArray("BoundingPoints"),
    outBounds = op.outObject("Bounds"),
    outAnimFinished = op.outTrigger("Finished"),
    outLoading = op.outBool("Loading");

op.setPortGroup("Timing", [inTime, inTimeLine, inLoop]);

let cgl = op.patch.cg || op.patch.cgl;
let gltfLoadingErrorMesh = null;
let gltfLoadingError = false;
let gltfTransforms = 0;
let finishedLoading = false;
let cam = null;
let boundingPoints = [];
let gltf = null;
let maxTime = 0;
let time = 0;
let needsMatUpdate = true;
let timedLoader = null;
let loadingId = null;
let data = null;
const scale = vec3.create();
let lastTime = 0;
let doCenter = false;
const boundsCenter = vec3.create();

inFile.onChange =
    inVertFormat.onChange =
    inCalcNormals.onChange =
    inNormFormat.onChange = reloadSoon;

inShow.onTriggered = printInfo;
dataPort.onChange = loadData;
inHideNodes.onChange = hideNodesFromData;
inAnimation.onChange = updateAnimation;
inCenter.onChange = updateCenter;
op.toWorkPortsNeedToBeLinked(inExec);

dataPort.setUiAttribs({ "hideParam": true, "hidePort": true });
op.setPortGroup("Transform", [inRescale, inRescaleSize, inCenter]);

function updateCamera()
{
    const arr = ["None"];
    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].camera >= 0)
            {
                arr.push(gltf.nodes[i].name);
            }
        }
    }
    inCamera.uiAttribs.values = arr;
}

function updateCenter()
{
    doCenter = inCenter.get() != "None";

    if (gltf && gltf.bounds)
    {
        boundsCenter.set(gltf.bounds.center);
        boundsCenter[0] = -boundsCenter[0];
        boundsCenter[1] = -boundsCenter[1];
        boundsCenter[2] = -boundsCenter[2];
        if (inCenter.get() == "XZ") boundsCenter[1] = -gltf.bounds.minY;
    }
}

inRescale.onChange = function ()
{
    inRescaleSize.setUiAttribs({ "greyout": !inRescale.get() });
};

inMaterials.onChange = function ()
{
    needsMatUpdate = true;
};

op.onDelete = function ()
{
    closeTab();
};

inTimeLine.onChange = function ()
{
    inTime.setUiAttribs({ "greyout": inTimeLine.get() });
};

inCamera.onChange = setCam;

function setCam()
{
    cam = null;
    if (!gltf) return;

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].name == inCamera.get())cam = new gltfCamera(gltf, gltf.nodes[i]);
    }
}

inExec.onTriggered = function ()
{
    cgl = op.patch.cg || op.patch.cgl;

    if (!finishedLoading) return;
    if (!inActive.get()) return;

    if (gltfLoadingError)
    {
        if (!gltfLoadingErrorMesh) gltfLoadingErrorMesh = CGL.MESHES.getSimpleCube(cgl, "ErrorCube");
        gltfLoadingErrorMesh.render(cgl.getShader());
    }

    gltfTransforms = 0;
    if (inTimeLine.get()) time = op.patch.timer.getTime();
    else time = Math.max(0, inTime.get());

    if (inLoop.get())
    {
        time %= maxTime;
        if (time < lastTime) outAnimFinished.trigger();
    }
    else
    {
        if (maxTime > 0 && time >= maxTime) outAnimFinished.trigger();
    }

    lastTime = time;

    cgl.pushModelMatrix();

    outAnimTime.set(time || 0);

    if (finishedLoading && gltf && gltf.bounds)
    {
        if (inRescale.get())
        {
            let sc = inRescaleSize.get() / gltf.bounds.maxAxis;
            gltf.scale = sc;
            vec3.set(scale, sc, sc, sc);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, scale);
        }
        if (doCenter)
        {
            mat4.translate(cgl.mMatrix, cgl.mMatrix, boundsCenter);
        }
    }

    let oldScene = cgl.tempData.currentScene || null;
    cgl.tempData.currentScene = gltf;

    nextBefore.trigger();

    if (finishedLoading)
    {
        if (needsMatUpdate) updateMaterials();

        if (cam) cam.start(time);

        if (gltf)
        {
            gltf.time = time;

            if (gltf.bounds && cgl.shouldDrawHelpers(op))
            {
                if (op.isCurrentUiOp()) cgl.pushShader(CABLES.GL_MARKER.getSelectedShader(cgl));
                else cgl.pushShader(CABLES.GL_MARKER.getDefaultShader(cgl));

                gltf.bounds.render(cgl, null, op);
                cgl.popShader();
            }

            if (inRender.get())
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl);
            }
            else
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl, false, true);
            }
        }
    }

    next.trigger();
    cgl.tempData.currentScene = oldScene;

    cgl.popModelMatrix();

    if (cam)cam.end();
};

function finishLoading()
{
    if (!gltf)
    {
        finishedLoading = true;
        gltfLoadingError = true;
        cgl.patch.loading.finished(loadingId);

        op.setUiError("nogltf", "GLTF File not found");
        return;
    }

    op.setUiError("nogltf", null);

    if (gltf.loadingMeshes > 0)
    {
        // op.log("waiting for async meshes...");
        setTimeout(finishLoading, 100);
        return;
    }

    gltf.timing.push(["finishLoading()", Math.round((performance.now() - gltf.startTime))]);

    needsMatUpdate = true;
    // op.refreshParams();
    outAnimLength.set(maxTime);

    gltf.bounds = new CABLES.CG.BoundingBox();
    // gltf.bounds.applyPos(0, 0, 0);

    // if (!gltf)op.setUiError("urlerror", "could not load gltf:<br/>\"" + inFile.get() + "\"", 2);
    // else op.setUiError("urlerror", null);

    gltf.timing.push(["start calc bounds", Math.round((performance.now() - gltf.startTime))]);

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];
        node.updateMatrix();
        if (!node.isChild) node.calcBounds(gltf, null, gltf.bounds);
    }

    if (gltf.bounds)outBounds.setRef(gltf.bounds);

    gltf.timing.push(["calced bounds", Math.round((performance.now() - gltf.startTime))]);

    hideNodesFromData();

    gltf.timing.push(["hideNodesFromData", Math.round((performance.now() - gltf.startTime))]);

    if (tab)printInfo();

    gltf.timing.push(["printinfo", Math.round((performance.now() - gltf.startTime))]);

    updateCamera();
    setCam();
    outPoints.set(boundingPoints);

    if (gltf)
    {
        if (inFile.get() && !inFile.get().startsWith("data:"))
        {
            op.setUiAttrib({ "extendTitle": CABLES.basename(inFile.get()) });
        }

        gltf.loaded = Date.now();
    }

    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (!gltf.nodes[i].isChild)
            {
                gltf.nodes[i].render(cgl, false, true, true, false, true, 0);
            }
        }

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            const node = gltf.nodes[i];
            node.children = CABLES.uniqueArray(node.children); // stupid fix why are there too many children ?!
        }
    }

    updateCenter();
    updateAnimation();

    outLoading.set(false);

    cgl.patch.loading.finished(loadingId);
    loadingId = null;

    // if (gltf.chunks.length > 1) gltf.chunks[1] = null;
    // if (gltf.chunks.length > 2) gltf.chunks[2] = null;

    // op.setUiAttrib({ "accBuffersDelete": CABLES.basename(inFile.get()) });

    if (gltf.accBuffersDelete)
    {
        for (let i = 0; i < gltf.accBuffersDelete.length; i++)
        {
            gltf.accBuffers[gltf.accBuffersDelete[i]] = null;
        }
    }

    // setTimeout(() =>
    // {
    //     for (let i = 0; i < gltf.nodes.length; i++)
    //     {
    //     // console.log(gltf.nodes[i]);

    //         if (gltf.nodes[i].mesh && gltf.nodes[i].mesh.meshes)
    //         {
    //         // console.log(gltf.nodes[i].mesh.meshes.length);
    //             for (let j = 0; j < gltf.nodes[i].mesh.meshes.length; j++)
    //             {
    //                 console.log(gltf.nodes[i].mesh.meshes[j]);

    //                 // for (let k = 0; k < gltf.nodes[i].mesh.meshes.length; k++)
    //                 {
    //                     if (gltf.nodes[i].mesh.meshes[j].mesh)
    //                     {
    //                         gltf.nodes[i].mesh.meshes[j].mesh.freeMem();
    //                         // console.log(gltf.nodes[i].mesh.meshes[j].mesh);
    //                         // for (let l = 0; l < gltf.nodes[i].mesh.meshes[j].mesh._attributes.length; l++)
    //                         //     gltf.nodes[i].mesh.meshes[j].mesh._attributes[l] = null;
    //                     }
    //                 }

    //                 gltf.nodes[i].mesh.meshes[j].geom.clear();
    //                 console.log("clear!");
    //             }
    //         }
    //     }
    // }, 1000);

    if (!(gltf.json.images && gltf.json.images.length)) gltf.chunks = null;

    finishedLoading = true;
}

function loadBin(addCacheBuster)
{
    if (!inActive.get()) return;

    if (!loadingId)loadingId = cgl.patch.loading.start("gltfScene", inFile.get(), op);

    let fileToLoad = inFile.get();

    if (!fileToLoad || fileToLoad == "null") return;
    let url = op.patch.getFilePath(String(inFile.get()));
    if (!url) return;
    if (inFile.get() && !inFile.get().startsWith("data:"))
    {
        if (addCacheBuster === true)url += "?rnd=" + CABLES.generateUUID();
    }
    needsMatUpdate = true;
    outLoading.set(true);
    fetch(url)
        .then((res) => { return res.arrayBuffer(); })
        .then((arrayBuffer) =>
        {
            if (inFile.get() != fileToLoad)
            {
                cgl.patch.loading.finished(loadingId);
                loadingId = null;
                return;
            }

            boundingPoints = [];
            maxTime = 0;
            gltf = parseGltf(arrayBuffer);
            arrayBuffer = null;
            finishLoading();
        }).catch((e) =>
        {
            if (loadingId)cgl.patch.loading.finished(loadingId);
            loadingId = null;
            finishLoading();

            op.logError("gltf fetch error", e);
        });
    closeTab();

    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    cgl.patch.loading.addAssetLoadingTask(() =>
    {

    });
}

// op.onFileChanged = function (fn)
// {
//     gltf.accBuffersDelete[i];
//     if (fn && fn.length > 3 && inFile.get() && inFile.get().indexOf(fn) > -1) reloadSoon(true);
// };

op.onFileChanged = function (fn)
{
    if (inFile.get() && inFile.get().indexOf(fn) > -1)
    {
        reloadSoon(true);
    }
};

inActive.onChange = () =>
{
    if (inActive.get()) reloadSoon();

    if (!inActive.get())
    {
        gltf = null;
    }
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function () { loadBin(nocache); }, 30);
}

function updateMaterials()
{
    if (!gltf) return;

    gltf.shaders = {};

    if (inMaterials.links.length == 1 && inMaterials.get())
    {
        // just accept a associative object with s
        needsMatUpdate = true;
        const op = inMaterials.links[0].portOut.op;

        const portShader = op.getPort("Shader");
        const portName = op.getPort("Material Name");

        if (!portShader && !portName)
        {
            const inMats = inMaterials.get();
            for (let matname in inMats)
            {
                if (inMats[matname] && gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                    {
                        if (gltf.json.materials[i].name == matname)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = inMats[matname];
                        }
                    }
            }
        }
    }

    if (inMaterials.get())
    {
        for (let j = 0; j < inMaterials.links.length; j++)
        {
            const op = inMaterials.links[j].portOut.op;
            const portShader = op.getPort("Shader");
            const portName = op.getPort("Material Name");

            if (portShader && portName && portShader.get())
            {
                const name = portName.get();
                if (gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                        if (gltf.json.materials[i].name == name)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = portShader.get();
                        }
            }
        }
    }
    needsMatUpdate = false;
    if (tab)printInfo();
}

function hideNodesFromArray()
{
    const hideArr = inHideNodes.get();

    if (!gltf || !data || !data.hiddenNodes) return;
    if (!hideArr)
    {
        return;
    }

    for (let i = 0; i < hideArr.length; i++)
    {
        const n = gltf.getNode(hideArr[i]);
        if (n)n.hidden = true;
    }
}

function hideNodesFromData()
{
    if (!data)loadData();
    if (!gltf) return;

    gltf.unHideAll();

    if (data && data.hiddenNodes)
    {
        for (const i in data.hiddenNodes)
        {
            const n = gltf.getNode(i);
            if (n) n.hidden = true;
            else op.verbose("node to be hidden not found", i, n);
        }
    }
    hideNodesFromArray();
}

function loadData()
{
    data = dataPort.get();

    if (!data || data === "")data = {};
    else data = JSON.parse(data);

    if (gltf)hideNodesFromData();

    return data;
}

function saveData()
{
    dataPort.set(JSON.stringify(data));
}

function updateAnimation()
{
    if (gltf && gltf.nodes)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            gltf.nodes[i].setAnimAction(inAnimation.get());
        }
    }
}

function findParents(nodes, childNodeIndex)
{
    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].children.indexOf(childNodeIndex) >= 0)
        {
            nodes.push(gltf.nodes[i]);
            if (gltf.nodes[i].isChild) findParents(nodes, i);
        }
    }
}

op.exposeTexture = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfTexture");
    newop.getPort("Name").set(name);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Render");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

op.exposeGeom = function (name, idx)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfGeometry");
    newop.getPort("Name").set(name);
    newop.getPort("Submesh").set(idx);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Update");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

function setNewOpPosition(newOp, num)
{
    num = num || 1;

    newOp.setUiAttrib(
        {
            "subPatch": op.uiAttribs.subPatch,
            "translate": { "x": op.uiAttribs.translate.x, "y": op.uiAttribs.translate.y + num * CABLES.GLUI.glUiConfig.newOpDistanceY }
        });
}

op.exposeNode = function (name, type, options)
{
    let tree = type == "hierarchy";
    if (tree)
    {
        let ops = [];

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].name == name)
            {
                let arrHierarchy = [];
                const node = gltf.nodes[i];
                findParents(arrHierarchy, i);

                arrHierarchy = arrHierarchy.reverse();
                arrHierarchy.push(node, node);

                let prevPort = next.name;
                let prevOp = op;
                for (let j = 0; j < arrHierarchy.length; j++)
                {
                    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfNode_v2");
                    newop.getPort("Node Name").set(arrHierarchy[j].name);
                    op.patch.link(prevOp, prevPort, newop, "Render");
                    setNewOpPosition(newop, j);

                    if (j == arrHierarchy.length - 1)
                    {
                        newop.getPort("Transformation").set(false);
                    }
                    else
                    {
                        newop.getPort("Draw Mesh").set(false);
                        newop.getPort("Draw Childs").set(false);
                    }

                    prevPort = "Next";
                    prevOp = newop;
                    ops.push(newop);
                    gui.patchView.testCollision(newop);
                }
            }
        }

        for (let i = 0; i < ops.length; i++)
        {
            ops[i].selectChilds();
        }
    }
    else
    {
        let newopname = "Ops.Gl.GLTF.GltfNode_v2";
        if (options && options.skin)newopname = "Ops.Gl.GLTF.GltfSkin";
        if (type == "transform")newopname = "Ops.Gl.GLTF.GltfNodeTransform_v2";

        gui.serverOps.loadOpLibs(newopname, () =>
        {
            let newop = gui.corePatch().addOp(newopname);

            newop.getPort("Node Name").set(name);
            setNewOpPosition(newop);
            op.patch.link(op, next.name, newop, "Render");
            gui.patchView.testCollision(newop);
            gui.patchView.centerSelectOp(newop.id, true);
        });
    }
    gui.closeModal();
};

op.assignMaterial = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfSetMaterial");
    newop.getPort("Material Name").set(name);
    op.patch.link(op, inMaterials.name, newop, "Material");
    setNewOpPosition(newop);
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);

    gui.closeModal();
};

op.toggleNodeVisibility = function (name)
{
    const n = gltf.getNode(name);
    n.hidden = !n.hidden;
    data.hiddenNodes = data.hiddenNodes || {};

    if (n)
        if (n.hidden)data.hiddenNodes[name] = true;
        else delete data.hiddenNodes[name];

    saveData();
};

}
};

CABLES.OPS["c9cbb226-46f7-4ca6-8dab-a9d0bdca4331"]={f:Ops.Gl.GLTF.GltfScene_v4,objName:"Ops.Gl.GLTF.GltfScene_v4"};




// **************************************************************
// 
// Ops.Gl.Matrix.Transform
// 
// **************************************************************

Ops.Gl.Matrix.Transform= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI)
    {
        if (!posX.isLinked() && !posY.isLinked() && !posZ.isLinked())
        {
            gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

            if (op.isCurrentUiOp())
                gui.setTransformGizmo(
                    {
                        "posX": posX,
                        "posY": posY,
                        "posZ": posZ,
                    });
        }
    }
};

// op.transform3d = function ()
// {
//     return { "pos": [posX, posY, posZ] };
// };

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();

}
};

CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};




// **************************************************************
// 
// Ops.Gl.Matrix.Camera_v2
// 
// **************************************************************

Ops.Gl.Matrix.Camera_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const inIdentity = op.inBool("Identity", true);
/* Inputs */
// projection | prespective & ortogonal
const projectionMode = op.inValueSelect("projection mode", ["prespective", "ortogonal"], "prespective");
const zNear = op.inValue("frustum near", 0.01);
const zFar = op.inValue("frustum far", 5000.0);

const fov = op.inValue("fov", 45);
const autoAspect = op.inValueBool("Auto Aspect Ratio", true);
const aspect = op.inValue("Aspect Ratio", 1);

// look at camera
const eyeX = op.inValue("eye X", 0);
const eyeY = op.inValue("eye Y", 0);
const eyeZ = op.inValue("eye Z", 5);

const centerX = op.inValue("center X", 0);
const centerY = op.inValue("center Y", 0);
const centerZ = op.inValue("center Z", 0);

// camera transform and movements
const posX = op.inValue("truck", 0);
const posY = op.inValue("boom", 0);
const posZ = op.inValue("dolly", 0);

const rotX = op.inValue("tilt", 0);
const rotY = op.inValue("pan", 0);
const rotZ = op.inValue("roll", 0);

/* Outputs */
const outAsp = op.outNumber("Aspect");
const outArr = op.outArray("Look At Array");

/* logic */
const cgl = op.patch.cgl;

let asp = 0;

const vUp = vec3.create();
const vEye = vec3.create();
const vCenter = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

const arr = [];

// Transform and move
const vPos = vec3.create();
const transMatrixMove = mat4.create();
mat4.identity(transMatrixMove);

let updateCameraMovementMatrix = true;

render.onTriggered = function ()
{
    if (cgl.tempData.shadowPass) return trigger.trigger();

    // Aspect ration
    if (!autoAspect.get()) asp = aspect.get();
    else asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];
    outAsp.set(asp);

    // translation (truck, boom, dolly)
    cgl.pushViewMatrix();

    if (inIdentity.get())mat4.identity(cgl.vMatrix);

    if (updateCameraMovementMatrix)
    {
        mat4.identity(transMatrixMove);

        vec3.set(vPos, posX.get(), posY.get(), posZ.get());
        if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0)
            mat4.translate(transMatrixMove, transMatrixMove, vPos);

        if (rotX.get() !== 0)
            mat4.rotateX(transMatrixMove, transMatrixMove, rotX.get() * CGL.DEG2RAD);
        if (rotY.get() !== 0)
            mat4.rotateY(transMatrixMove, transMatrixMove, rotY.get() * CGL.DEG2RAD);
        if (rotZ.get() !== 0)
            mat4.rotateZ(transMatrixMove, transMatrixMove, rotZ.get() * CGL.DEG2RAD);

        updateCameraMovementMatrix = false;
    }

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrixMove);

    // projection (prespective / ortogonal)
    cgl.pushPMatrix();

    // look at
    cgl.pushViewMatrix();

    if (projectionMode.get() == "prespective")
    {
        mat4.perspective(
            cgl.pMatrix,
            fov.get() * 0.0174533,
            asp,
            zNear.get(),
            zFar.get()
        );
    }
    else if (projectionMode.get() == "ortogonal")
    {
        mat4.ortho(
            cgl.pMatrix,
            -1 * (fov.get() / 14),
            1 * (fov.get() / 14),
            -1 * (fov.get() / 14) / asp,
            1 * (fov.get() / 14) / asp,
            zNear.get(),
            zFar.get()
        );
    }

    arr[0] = eyeX.get();
    arr[1] = eyeY.get();
    arr[2] = eyeZ.get();

    arr[3] = centerX.get();
    arr[4] = centerY.get();
    arr[5] = centerZ.get();

    arr[6] = 0;
    arr[7] = 1;
    arr[8] = 0;

    outArr.setRef(arr);

    vec3.set(vUp, 0, 1, 0);
    vec3.set(vEye, eyeX.get(), eyeY.get(), eyeZ.get());
    vec3.set(vCenter, centerX.get(), centerY.get(), centerZ.get());

    mat4.lookAt(transMatrix, vEye, vCenter, vUp);

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrix);

    trigger.trigger();

    cgl.popViewMatrix();
    cgl.popPMatrix();

    cgl.popViewMatrix();

    // GUI for dolly, boom and truck
    if (op.isCurrentUiOp())
        gui.setTransformGizmo({
            "posX": posX,
            "posY": posY,
            "posZ": posZ
        });
};

const updateUI = function ()
{
    if (!autoAspect.get())
    {
        aspect.setUiAttribs({ "greyout": false });
    }
    else
    {
        aspect.setUiAttribs({ "greyout": true });
    }
};

const cameraMovementChanged = function ()
{
    updateCameraMovementMatrix = true;
};

// listeners
posX.onChange = cameraMovementChanged;
posY.onChange = cameraMovementChanged;
posZ.onChange = cameraMovementChanged;

rotX.onChange = cameraMovementChanged;
rotY.onChange = cameraMovementChanged;
rotZ.onChange = cameraMovementChanged;

autoAspect.onChange = updateUI;
updateUI();

}
};

CABLES.OPS["f7673a93-7772-4ade-9d3d-df7174f5258b"]={f:Ops.Gl.Matrix.Camera_v2,objName:"Ops.Gl.Matrix.Camera_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.Translate
// 
// **************************************************************

Ops.Gl.Matrix.Translate= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    x = op.inValue("x"),
    y = op.inValue("y"),
    z = op.inValue("z");

const vec = vec3.create();

render.onTriggered = function ()
{
    const cgl = op.patch.cg;

    vec3.set(vec, x.get(), y.get(), z.get());
    cgl.pushModelMatrix();
    mat4.translate(cgl.mMatrix, cgl.mMatrix, vec);
    trigger.trigger();
    cgl.popModelMatrix();
};

}
};

CABLES.OPS["1f89ba0e-e7eb-46d7-8c66-7814b7c528b9"]={f:Ops.Gl.Matrix.Translate,objName:"Ops.Gl.Matrix.Translate"};




// **************************************************************
// 
// Ops.Extension.AmmoPhysics.AmmoWorld
// 
// **************************************************************

Ops.Extension.AmmoPhysics.AmmoWorld= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inExec = op.inTrigger("Update"),
    inSim = op.inBool("Simulate", true),
    inAutoRemove = op.inBool("Auto Remove Inactive", true),

    inGravX = op.inFloat("Gravity X", 0),
    inGravY = op.inFloat("Gravity Y", -9.81),
    inGravZ = op.inFloat("Gravity Z", 0),

    inActivateAll = op.inTriggerButton("Activate All"),
    inReset = op.inTriggerButton("Reset"),

    next = op.outTrigger("next"),
    outNumBodies = op.outNumber("Total Bodies"),
    outPoints = op.outArray("debug points"),
    outBodiesMeta = op.outArray("Bodies Meta"),
    outCollisions = op.outArray("Collisions");

op.setPortGroup("Gravity", [inGravX, inGravZ, inGravY]);

inExec.onTriggered = update;

const cgl = op.patch.cgl;
let deltaTime, lastTime;
let ammoWorld = null;// new CABLES.AmmoWorld();
let loadingId = null;
let needsReset = true;
inReset.onTriggered = () =>
{
    needsReset = true;
};

inActivateAll.onTriggered = () =>
{
    if (ammoWorld) ammoWorld.activateAllBodies();
};

inGravX.onChange = inGravZ.onChange = inGravY.onChange = updateGravity;

function updateGravity()
{
    if (ammoWorld && ammoWorld.world)
        ammoWorld.world.setGravity(new Ammo.btVector3(inGravX.get(), inGravY.get(), inGravZ.get()));
}

function update()
{
    if (needsReset)
    {
        if (ammoWorld)ammoWorld.dispose();
        ammoWorld = null;
        needsReset = false;
    }

    if (!ammoWorld)
    {
        if (Ammo.cablesSetupDone)
        {
            ammoWorld = new CABLES.AmmoWorld();
            updateGravity();
            cgl.patch.loading.finished(loadingId);
            loadingId = null;
        }
        else
        {
            if (!loadingId) loadingId = cgl.patch.loading.start("ammoWorld", "ammoWASM", op);
            return;
        }
    }
    if (!ammoWorld.world) return;

    deltaTime = performance.now() - lastTime;

    if (inSim.get()) ammoWorld.frame();

    const old = cgl.frameStore.ammoWorld;
    cgl.frameStore.ammoWorld = ammoWorld;

    outNumBodies.set(ammoWorld.numBodies());
    outBodiesMeta.set(ammoWorld.getListBodies());
    outCollisions.set(ammoWorld.getCollisions());

    ammoWorld.autoRemove = inAutoRemove.get();

    next.trigger();

    lastTime = performance.now();
    cgl.frameStore.ammoWorld = old;
}

}
};

CABLES.OPS["1005fcd0-5f40-49c5-8d46-45e95fcecf37"]={f:Ops.Extension.AmmoPhysics.AmmoWorld,objName:"Ops.Extension.AmmoPhysics.AmmoWorld"};




// **************************************************************
// 
// Ops.Extension.AmmoPhysics.AmmoRaycast
// 
// **************************************************************

Ops.Extension.AmmoPhysics.AmmoRaycast= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inExec = op.inTrigger("Update"),
    inCoords = op.inSwitch("Ray Coordinates", ["Screen XY", "Points 3d"], "Screen XY"),
    inX = op.inValueFloat("Screen X"),
    inY = op.inValueFloat("Screen Y"),
    inRayPoints = op.inArray("Ray Points"),
    active = op.inBool("Active", true),
    inCursor = op.inBool("Change Cursor", true),
    next = op.outTrigger("next"),

    outHasHit = op.outBoolNum("Has Hit", false),
    outName = op.outString("Hit Body Name", ""),
    outX = op.outNumber("Hit X"),
    outY = op.outNumber("Hit Y"),
    outZ = op.outNumber("Hit Z");

inExec.onTriggered = update;

const cgl = op.patch.cgl;
let world = null;
let didsetCursor = false;
let mat = mat4.create();
let isScreenCoords = true;

inCoords.onChange = updateCoordsType;
updateCoordsType();

function updateCoordsType()
{
    isScreenCoords = inCoords.get() == "Screen XY";
    inX.setUiAttribs({ "greyout": !isScreenCoords });
    inY.setUiAttribs({ "greyout": !isScreenCoords });
    inRayPoints.setUiAttribs({ "greyout": isScreenCoords });
}

function update()
{
    world = cgl.frameStore.ammoWorld;

    // for(let i=0;i<world.bodies.length;i++)
    // console.log(world.bodies[i]);

    if (!world) return;

    if (active.get())
    {
        let afrom;
        let ato;

        if (isScreenCoords)
        {
            const x = inX.get();
            const y = inY.get();

            const origin = vec3.fromValues(x, y, -1);
            mat4.mul(mat, cgl.pMatrix, cgl.vMatrix);
            mat4.invert(mat, mat);

            vec3.transformMat4(origin, origin, mat);

            // -----------

            const to = vec3.fromValues(x, y, 1);
            mat4.mul(mat, cgl.pMatrix, cgl.vMatrix);
            mat4.invert(mat, mat);

            vec3.transformMat4(to, to, mat);

            afrom = new Ammo.btVector3(origin[0], origin[1], origin[2]);
            ato = new Ammo.btVector3(to[0], to[1], to[2]);
        }
        else
        {
            const arr = inRayPoints.get() || [0, 0, 0, 0, 0, 0];

            afrom = new Ammo.btVector3(arr[0], arr[1], arr[2]);
            ato = new Ammo.btVector3(arr[3], arr[4], arr[5]);
        }

        const rayCallback = new Ammo.ClosestRayResultCallback(afrom, ato);
        world.world.rayTest(afrom, ato, rayCallback);

        if (rayCallback.hasHit())
        {
            const meta = world.getBodyMeta(rayCallback.get_m_collisionObject());

            if (meta)
            {
                world.emitEvent("rayCastHit", meta.name);
                outName.set(meta.name);
            }

            outX.set(rayCallback.m_hitPointWorld.x());
            outY.set(rayCallback.m_hitPointWorld.y());
            outZ.set(rayCallback.m_hitPointWorld.z());
        }
        else
        {
            outX.set(0);
            outX.set(0);
            outX.set(0);

            world.emitEvent("rayCastHit", null);

            outName.set("");
        }
        outHasHit.set(rayCallback.hasHit());

        if (rayCallback.hasHit() && inCursor.get())
        {
            op.patch.cgl.setCursor("pointer");
            didsetCursor = true;
        }
        else if (didsetCursor)
        {
            op.patch.cgl.setCursor("auto");
            didsetCursor = false;
        }

        Ammo.destroy(rayCallback);
        if (afrom)Ammo.destroy(afrom);
        if (ato)Ammo.destroy(ato);
    }

    next.trigger();
}

}
};

CABLES.OPS["fa0418ee-ea51-446b-9be0-141f88d75e94"]={f:Ops.Extension.AmmoPhysics.AmmoRaycast,objName:"Ops.Extension.AmmoPhysics.AmmoRaycast"};




// **************************************************************
// 
// Ops.Extension.AmmoPhysics.AmmoDebugRenderer
// 
// **************************************************************

Ops.Extension.AmmoPhysics.AmmoDebugRenderer= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inRender = op.inTrigger("Render"),
    inDrawWireframe = op.inBool("Draw Wireframe", true),
    inDrawAABB = op.inBool("Draw AABB", false),
    inDrawContacts = op.inBool("Draw Contact Points", true),
    inDrawConstraints = op.inBool("Draw Constraints", false),

    inIgnClear = op.inBool("Depth", true),

    inActive = op.inBool("Active", true),

    outNext = op.outTrigger("Next");

op.setPortGroup("Options", [inDrawContacts, inDrawWireframe, inDrawAABB, inIgnClear]);

const cgl = op.patch.cgl;

let debugDrawer = null;
let oldWorld = null;

inRender.onTriggered = () =>
{
    if (cgl.frameStore.shadowPass) return outNext.trigger();

    const ammoWorld = cgl.frameStore.ammoWorld;
    if (!ammoWorld) return;

    if (!debugDrawer || oldWorld != ammoWorld.world)
    {
        debugDrawer = new CABLES.AmmoDebugDrawer(ammoWorld.world, { });
        debugDrawer.enable();
        oldWorld = ammoWorld.world;
    }

    if (!inActive.get())
    {
        outNext.trigger();
        return;
    }

    if (!ammoWorld) return;

    let debugmode = 0;
    if (inDrawWireframe.get())debugmode |= 1;
    if (inDrawAABB.get())debugmode |= 2;
    if (inDrawContacts.get())debugmode |= 8;
    if (inDrawConstraints.get())
    {
        debugmode |= 2048;
        debugmode |= 4096;
    }

    //       DrawConstraints: 1 << 11, //2048
    //   DrawConstraintLimits: 1 << 12, //4096
    //   FastWireframe: 1 << 13, //8192
    //   DrawNormals: 1 << 14, //16384

    outNext.trigger();

    debugmode |= 16384;

    if (debugmode)
    {
        cgl.pushModelMatrix();
        cgl.pushDepthTest(inIgnClear.get());
        cgl.pushDepthWrite(inIgnClear.get());

        mat4.identity(cgl.mMatrix);

        debugDrawer.setDebugMode(debugmode);
        debugDrawer.update();
        debugDrawer.render(cgl);
        // outPoints.set(debugDrawer.verts);

        cgl.popDepthTest();
        cgl.popDepthWrite();
        cgl.popModelMatrix();
    }
};

}
};

CABLES.OPS["e4b4f6c9-483b-486e-abbc-fbc4254a65d1"]={f:Ops.Extension.AmmoPhysics.AmmoDebugRenderer,objName:"Ops.Extension.AmmoPhysics.AmmoDebugRenderer"};




// **************************************************************
// 
// Ops.Devices.Mouse.Mouse_v4
// 
// **************************************************************

Ops.Devices.Mouse.Mouse_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inCoords = op.inSwitch("Coordinates", ["-1 to 1", "Pixel Display", "Pixel", "0 to 1"], "-1 to 1"),
    area = op.inValueSelect("Area", ["Canvas Area", "Canvas", "Document", "Parent Element"], "Canvas Area"),
    flipY = op.inValueBool("flip y", true),
    rightClickPrevDef = op.inBool("right click prevent default", true),
    inEventType = op.inSwitch("Events", ["Pointer", "Touch", "Mouse"]),
    inPassive = op.inValueBool("Passive Events", false),
    inEle = op.inObject("Element", "element"),
    active = op.inValueBool("Active", true),
    outMouseX = op.outNumber("x", 0),
    outMouseY = op.outNumber("y", 0),
    mouseClick = op.outTrigger("click"),
    mouseClickRight = op.outTrigger("click right"),
    mouseDown = op.outBoolNum("Button is down"),
    mouseOver = op.outBoolNum("Mouse is hovering"),
    outMovementX = op.outNumber("Movement X", 0),
    outMovementY = op.outNumber("Movement Y", 0),
    outEvent = op.outObject("Event");

const cgl = op.patch.cgl;
let normalize = 1;
let listenerElement = null;
let areaElement = null;

inPassive.onChange =
    area.onChange = addListeners;
inCoords.onChange = updateCoordNormalizing;
op.onDelete = removeListeners;

addListeners();

op.on("loadedValueSet", onStart);

function onStart()
{
    if (normalize == 0)
    {
        if (areaElement.clientWidth === 0) setTimeout(onStart, 50);

        outMouseX.set(areaElement.clientWidth / 2);
        outMouseY.set(areaElement.clientHeight / 2);
    }
    else if (normalize == 1)
    {
        outMouseX.set(0);
        outMouseY.set(0);
    }
    else if (normalize == 2)
    {
        outMouseX.set(0.5);
        outMouseY.set(0.5);
    }
    else if (normalize == 3)
    {
        if (areaElement.clientWidth === 0)
        {
            setTimeout(onStart, 50);
        }

        outMouseX.set(areaElement.clientWidth / 2 / cgl.pixelDensity);
        outMouseY.set(areaElement.clientHeight / 2 / cgl.pixelDensity);
    }
    else console.error("unknown normalize mouse", normalize);
}

function setValue(x, y)
{
    x = x || 0;
    y = y || 0;

    if (normalize == 0) // pixel
    {
        outMouseX.set(x);
        outMouseY.set(y);
    }
    else
    if (normalize == 3) // pixel css
    {
        outMouseX.set(x * cgl.pixelDensity);
        outMouseY.set(y * cgl.pixelDensity);
    }
    else
    {
        let w = areaElement.clientWidth / cgl.pixelDensity;
        let h = areaElement.clientHeight / cgl.pixelDensity;

        w = w || 1;
        h = h || 1;

        if (normalize == 1) // -1 to 1
        {
            let xx = (x / w * 2.0 - 1.0);
            let yy = (y / h * 2.0 - 1.0);
            xx = CABLES.clamp(xx, -1, 1);
            yy = CABLES.clamp(yy, -1, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
        else if (normalize == 2) // 0 to 1
        {
            let xx = x / w;
            let yy = y / h;

            xx = CABLES.clamp(xx, 0, 1);
            yy = CABLES.clamp(yy, 0, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
    }
}

function checkHovering(e)
{
    if (!areaElement) return;
    const r = areaElement.getBoundingClientRect();

    return (
        e.clientX > r.left &&
        e.clientX < r.left + r.width &&
        e.clientY > r.top &&
        e.clientY < r.top + r.height
    );
}

inEle.onChange =
inEventType.onChange = function ()
{
    area.setUiAttribs({ "greyout": inEle.isLinked() });
    removeListeners();
    addListeners();
};

active.onChange = function ()
{
    if (listenerElement)removeListeners();
    if (active.get())addListeners();
};

function updateCoordNormalizing()
{
    if (inCoords.get() == "Pixel") normalize = 0;
    else if (inCoords.get() == "-1 to 1") normalize = 1;
    else if (inCoords.get() == "0 to 1") normalize = 2;
    else if (inCoords.get() == "Pixel Display") normalize = 3;
}

/// ///

function onMouseEnter(e)
{
    outEvent.setRef(e);
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function onMouseDown(e)
{
    if (!checkHovering(e)) return;
    outEvent.setRef(e);
    mouseDown.set(true);
}

function onMouseUp(e)
{
    outEvent.setRef(e);
    mouseDown.set(false);
}

function onClickRight(e)
{
    if (!checkHovering(e)) return;
    outEvent.setRef(e);
    mouseClickRight.trigger();
    if (rightClickPrevDef.get()) e.preventDefault();
}

function onmouseclick(e)
{
    if (!checkHovering(e)) return;
    outEvent.setRef(e);
    mouseClick.trigger();
}

function onMouseLeave(e)
{
    outEvent.setRef(e);
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function onmousemove(e)
{
    mouseOver.set(checkHovering(e));
    if (area.get() === "Canvas Area")
    {
        const r = areaElement.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        if (x < 0 || x > r.width || y > r.height || y < 0) return;
    }

    outEvent.setRef(e);
    setCoords(e);

    outMovementX.set(e.movementX / cgl.pixelDensity);
    outMovementY.set(e.movementY / cgl.pixelDensity);
}

function ontouchmove(e)
{
    if (event.touches && event.touches.length > 0) setCoords(e.touches[0]);
    outEvent.setRef(e);
}

function ontouchstart(event)
{
    mouseDown.set(true);

    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
    outEvent.setRef(e);
}

function ontouchend(event)
{
    mouseDown.set(false);
    onMouseUp();
    outEvent.setRef(e);
}

/// ////

function setCoords(e)
{
    let x = e.clientX;
    let y = e.clientY;

    if (inEle.isLinked())
    {
        x = e.offsetX;
        y = e.offsetY;
    }
    else
    {
        if (area.get() != "Document")
        {
            x = e.offsetX;
            y = e.offsetY;
        }
        if (area.get() === "Canvas Area")
        {
            const r = areaElement.getBoundingClientRect();
            x = e.clientX - r.left;
            y = e.clientY - r.top;

            if (x < 0 || x > r.width || y > r.height || y < 0) return;
            x = CABLES.clamp(x, 0, r.width);
            y = CABLES.clamp(y, 0, r.height);
        }
    }

    if (flipY.get()) y = areaElement.clientHeight - y;

    setValue(x / cgl.pixelDensity, y / cgl.pixelDensity);
}

function removeListeners()
{
    if (!listenerElement) return;
    listenerElement.removeEventListener("touchend", ontouchend);
    listenerElement.removeEventListener("touchstart", ontouchstart);
    listenerElement.removeEventListener("touchmove", ontouchmove);

    listenerElement.removeEventListener("mousemove", onmousemove);
    listenerElement.removeEventListener("mouseleave", onMouseLeave);
    listenerElement.removeEventListener("mousedown", onMouseDown);
    listenerElement.removeEventListener("mouseup", onMouseUp);
    listenerElement.removeEventListener("mouseenter", onMouseEnter);

    listenerElement.removeEventListener("pointermove", onmousemove);
    listenerElement.removeEventListener("pointerleave", onMouseLeave);
    listenerElement.removeEventListener("pointerdown", onMouseDown);
    listenerElement.removeEventListener("pointerup", onMouseUp);
    listenerElement.removeEventListener("pointerenter", onMouseEnter);

    listenerElement.removeEventListener("click", onmouseclick);
    listenerElement.removeEventListener("contextmenu", onClickRight);
    listenerElement = null;
}

function addListeners()
{
    if (listenerElement || !active.get())removeListeners();
    if (!active.get()) return;

    listenerElement = areaElement = cgl.canvas;

    if (inEle.isLinked())
    {
        listenerElement = areaElement = inEle.get();
    }
    else
    {
        if (area.get() == "Canvas Area")
        {
            areaElement = cgl.canvas.parentElement;
            listenerElement = document.body;
        }
        if (area.get() == "Document") areaElement = listenerElement = document.body;
        if (area.get() == "Parent Element") listenerElement = areaElement = cgl.canvas.parentElement;
    }

    if (!areaElement)
    {
        op.setUiError("noarea", "could not find area element for mouse", 2);
        return;
    }
    op.setUiError("noarea", null);

    let passive = false;
    if (inPassive.get())passive = { "passive": true };

    if (inEventType.get() == "touch")
    {
        listenerElement.addEventListener("touchend", ontouchend, passive);
        listenerElement.addEventListener("touchstart", ontouchstart, passive);
        listenerElement.addEventListener("touchmove", ontouchmove, passive);
    }

    if (inEventType.get() == "Mouse")
    {
        listenerElement.addEventListener("mousemove", onmousemove, passive);
        listenerElement.addEventListener("mouseleave", onMouseLeave, passive);
        listenerElement.addEventListener("mousedown", onMouseDown, passive);
        listenerElement.addEventListener("mouseup", onMouseUp, passive);
        listenerElement.addEventListener("mouseenter", onMouseEnter, passive);
    }

    if (inEventType.get() == "Pointer")
    {
        listenerElement.addEventListener("pointermove", onmousemove, passive);
        listenerElement.addEventListener("pointerleave", onMouseLeave, passive);
        listenerElement.addEventListener("pointerdown", onMouseDown, passive);
        listenerElement.addEventListener("pointerup", onMouseUp, passive);
        listenerElement.addEventListener("pointerenter", onMouseEnter, passive);
    }

    listenerElement.addEventListener("contextmenu", onClickRight, passive);
    listenerElement.addEventListener("click", onmouseclick, passive);
}

//

}
};

CABLES.OPS["c86eb411-a996-47cd-a149-264903dc408c"]={f:Ops.Devices.Mouse.Mouse_v4,objName:"Ops.Devices.Mouse.Mouse_v4"};




// **************************************************************
// 
// Ops.Extension.AmmoPhysics.AmmoBody
// 
// **************************************************************

Ops.Extension.AmmoPhysics.AmmoBody= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// https://github.com/enable3d/enable3d/blob/master/packages/ammoPhysics/src/three-to-ammo.js

const
    inExec = op.inTrigger("Update"),
    inName = op.inString("Name", ""),
    inMass = op.inFloat("Mass", 0),
    inFriction = op.inFloat("Friction", 0.5),
    inRollingFriction = op.inFloat("Rolling Friction", 0.5),
    inRestitution = op.inFloat("Restitution", 0.5),

    inShape = op.inDropDown("Shape", ["Box", "Sphere", "Cylinder", "Capsule", "Cone", "Geom Convex Hull", "Triangle Shape"], "Box"),
    inGeom = op.inObject("Geometry", null, "geometry"),
    inGeomSimplify = op.inInt("Simplify Max Triangles", 50),
    inRadius = op.inFloat("Radius", 0.5),
    inSizeX = op.inFloat("Size X", 1),
    inSizeY = op.inFloat("Size Y", 1),
    inSizeZ = op.inFloat("Size Z", 1),

    inPositions = op.inArray("Positions", null, 3),
    inPosIndex = op.inBool("Append Index to name", true),

    inNeverDeactivate = op.inBool("Never Deactivate"),
    inGhostObject = op.inBool("Ghost Object"),
    inActive = op.inBool("Active", true),
    inReset = op.inTriggerButton("Reset"),
    inActivate = op.inTriggerButton("Activate"),

    next = op.outTrigger("next"),
    outRayHit = op.outBoolNum("Ray Hit"),
    transformed = op.outTrigger("Transformed");

op.setPortGroup("Array", [inPositions, inPosIndex]);

inExec.onTriggered = update;

const cgl = op.patch.cgl;
let bodies = [];
let world = null;
let tmpTrans = null;

const tmpOrigin = vec3.create();
const tmpQuat = quat.create();
const tmpScale = vec3.create();
let transMat = mat4.create();

let btOrigin = null;
let btQuat = null;
let doResetPos = false;
let colShape = null;

let doScale = true;
let needsRemove = false;
inName.onChange = updateBodyMeta;

op.setPortGroup("Parameters", [inRestitution, inFriction, inRollingFriction, inMass]);
op.setPortGroup("Shape", [inShape, inGeom, inGeomSimplify, inRadius, inSizeY, inSizeX, inSizeZ]);
op.setPortGroup("Flags", [inNeverDeactivate, inActive, inGhostObject]);

inExec.onLinkChanged =
    inFriction.onChange =
    inRestitution.onChange =
    inRollingFriction.onChange =
    inGeomSimplify.onChange =
    inGhostObject.onChange =
    inGeom.onChange =
    inShape.onChange =
    inMass.onChange =
    inRadius.onChange =
    inSizeY.onChange =
    inSizeZ.onChange =
    inPositions.onChange =
    inSizeX.onChange = () =>
    {
        needsRemove = true;
    };

inPosIndex.onChange = updateBodyMeta;
op.onDelete = removeBody;

inActive.onChange = () =>
{
    if (!inActive.get()) removeBody();
};

inActivate.onTriggered = () =>
{
    for (let i = 0; i < bodies.length; i++)
        bodies[i].activate();
};

function removeBody()
{
    if (world)
    {
        for (let i = 0; i < bodies.length; i++)
            world.removeRigidBody(bodies[i]);
    }

    bodies.length = 0;
    doResetPos = true;
}

inReset.onTriggered = () =>
{
    needsRemove = true;
};

function updateBodyMeta()
{
    const n = inName.get();
    const appendIndex = inPosIndex.get();
    const posArr = inPositions.get();

    if (world)
        for (let i = 0; i < bodies.length; i++)
        {
            let name = n;
            if (appendIndex && posArr)name = n + "." + i;

            world.setBodyMeta(bodies[i],
                {
                    "name": name,
                    "mass": inMass.get(),
                });
        }

    op.setUiAttribs({ "extendTitle": inName.get() });
}

function setup()
{
    if (!inActive.get()) return;
    if (needsRemove) return;
    doScale = true;
    doResetPos = true;

    removeBody();

    if (!tmpTrans)tmpTrans = new Ammo.btTransform();
    // if (!transform)transform = new Ammo.btTransform();

    if (colShape)Ammo.destroy(colShape);
    colShape = null;
    // transform.setIdentity();
    // CABLES.AmmoWorld.copyCglTransform(cgl, transform);

    op.setUiError("nogeom", null);
    if (inShape.get() == "Box") colShape = new Ammo.btBoxShape(new Ammo.btVector3(inSizeX.get() / 2, inSizeY.get() / 2, inSizeZ.get() / 2));
    else if (inShape.get() == "Sphere") colShape = new Ammo.btSphereShape(inRadius.get());
    else if (inShape.get() == "Cylinder") colShape = new Ammo.btCylinderShape(new Ammo.btVector3(inSizeX.get() / 2, inSizeY.get() / 2, inSizeZ.get() / 2));
    else if (inShape.get() == "Capsule") colShape = new Ammo.btCapsuleShape(inRadius.get(), inSizeY.get());
    else if (inShape.get() == "Cone") colShape = new Ammo.btConeShape(inRadius.get(), inSizeY.get());
    else if (inShape.get() == "Triangle Shape")
    {
        const geom = inGeom.get();
        if (!geom || !inGeom.isLinked())
        {
            op.setUiError("nogeom", "Shape needs geometry connected");
            return;
        }
        else op.setUiError("nogeom", null);
        if (!geom) return;

        let mesh = new Ammo.btTriangleMesh(true, true);

        for (let i = 0; i < geom.verticesIndices.length / 3; i++)
        {
            mesh.addTriangle(
                new Ammo.btVector3(
                    geom.vertices[geom.verticesIndices[i * 3] * 3 + 0],
                    geom.vertices[geom.verticesIndices[i * 3] * 3 + 1],
                    geom.vertices[geom.verticesIndices[i * 3] * 3 + 2]
                ),
                new Ammo.btVector3(
                    geom.vertices[geom.verticesIndices[i * 3 + 1] * 3 + 0],
                    geom.vertices[geom.verticesIndices[i * 3 + 1] * 3 + 1],
                    geom.vertices[geom.verticesIndices[i * 3 + 1] * 3 + 2]
                ),
                new Ammo.btVector3(
                    geom.vertices[geom.verticesIndices[i * 3 + 2] * 3 + 0],
                    geom.vertices[geom.verticesIndices[i * 3 + 2] * 3 + 1],
                    geom.vertices[geom.verticesIndices[i * 3 + 2] * 3 + 2]
                ),
                false);
        }

        colShape = new Ammo.btBvhTriangleMeshShape(mesh, true, true);
    }
    else if (inShape.get() == "Geom Convex Hull")
    {
        const geom = inGeom.get();
        if (!geom || !inGeom.isLinked())
        {
            op.setUiError("nogeom", "Shape needs geometry connected");
            return;
        }
        else op.setUiError("nogeom", null);
        if (!geom) return;

        colShape = CABLES.AmmoWorld.createConvexHullFromGeom(geom, inGeomSimplify.get());

        doScale = false;
    }
    else
    {
        inGeomSimplify.setUiAttribs({ "greyout": true });
        op.log("unknown shape type", inShape.get());
        return;
    }

    if (inShape.get() == "Geom Convex Hull")
    {
        inRadius.setUiAttribs({ "greyout": true });
        inSizeX.setUiAttribs({ "greyout": true });
        inSizeY.setUiAttribs({ "greyout": true });
        inSizeZ.setUiAttribs({ "greyout": true });
        inGeomSimplify.setUiAttribs({ "greyout": false });
    }
    else
    {
        inSizeX.setUiAttribs({ "greyout": inShape.get() == "Sphere" || inShape.get() == "Capsule" || inShape.get() == "Cone" });
        inSizeY.setUiAttribs({ "greyout": inShape.get() == "Sphere" });
        inSizeZ.setUiAttribs({ "greyout": inShape.get() == "Sphere" || inShape.get() == "Capsule" || inShape.get() == "Cone" });
        inRadius.setUiAttribs({ "greyout": inShape.get() == "Box" });
    }

    colShape.setMargin(0.05);

    let mass = inMass.get();
    let localInertia = new Ammo.btVector3(0, 0, 0);
    colShape.calculateLocalInertia(mass, localInertia);

    let num = 1;
    let posArr = null;
    if (inPositions.isLinked())
    {
        num = 0;
        posArr = inPositions.get();

        if (posArr && posArr.length)
        {
            num = Math.max(num, posArr.length / 3);
        }
    }

    for (let i = 0; i < num; i++)
    {
        let transform = new Ammo.btTransform();

        const motionState = new Ammo.btDefaultMotionState(transform);

        let rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, colShape, localInertia);
        const body = new Ammo.btRigidBody(rbInfo);
        world.addRigidBody(body);

        // 		CF_STATIC_OBJECT= 1,
        // 		CF_KINEMATIC_OBJECT= 2,
        // 		CF_NO_CONTACT_RESPONSE = 4,
        // 		CF_CUSTOM_MATERIAL_CALLBACK = 8,//this allows per-triangle material (friction/restitution)
        // 		CF_CHARACTER_OBJECT = 16,
        // 		CF_DISABLE_VISUALIZE_OBJECT = 32, //disable debug drawing
        // 		CF_DISABLE_SPU_COLLISION_PROCESSING = 64//disable parallel/SPU processing
        if (inGhostObject.get())
            body.setCollisionFlags(body.getCollisionFlags() | 4);

        bodies.push(body);
        // body.activate();
        // motionStates.push(motionState);
    }
    setPositions();

    world.on("rayCastHit", (name) =>
    {
        outRayHit.set(name == inName.get());
    });

    updateParams();
    updateBodyMeta();
}

function setPositions()
{
    let posArr = inPositions.get();

    for (let i = 0; i < bodies.length; i++)
    {
        bodies[i].getMotionState().getWorldTransform(tmpTrans);

        if (posArr)
        {
            cgl.pushModelMatrix();
            mat4.translate(cgl.mMatrix, cgl.mMatrix, [
                posArr[i * 3 + 0], posArr[i * 3 + 1], posArr[i * 3 + 2]]);
        }
        CABLES.AmmoWorld.copyCglTransform(cgl, tmpTrans);
        if (posArr)cgl.popModelMatrix();

        bodies[i].getMotionState().setWorldTransform(tmpTrans);
        bodies[i].setWorldTransform(tmpTrans);
    }
}

function updateParams()
{
    if (!world || bodies.length == 0) return;
    for (let i = 0; i < bodies.length; i++)
    {
        bodies[i].setFriction(inFriction.get());
        bodies[i].setRollingFriction(inRollingFriction.get());
        bodies[i].setRestitution(inRestitution.get());
    }
}

function renderTransformed()
{
    if (!bodies.length) return;
    if (!inActive.get()) return;
    if (!tmpTrans) return;

    ping();

    if (transformed.isLinked())
        for (let i = 0; i < bodies.length; i++)
        {
            const body = bodies[i];
            let ms = body.getMotionState();
            if (ms)
            {
                ms.getWorldTransform(tmpTrans);

                if (!tmpTrans) op.logWarn("no tmpTrans");
                let p = tmpTrans.getOrigin();
                let q = tmpTrans.getRotation();

                let scale = [inSizeX.get(), inSizeY.get(), inSizeZ.get()];

                if (inShape.get() == "Sphere") scale = [inRadius.get() * 2, inRadius.get() * 2, inRadius.get() * 2];
                if (inShape.get() == "Cone") scale = [inRadius.get() * 2, inSizeY.get(), inRadius.get() * 2];
                // if (inShape.get() == "Cylinder") scale = [inRadius.get() * 2, inSizeY.get(), inRadius.get() * 2];
                if (inShape.get() == "Capsule") scale = [inRadius.get() * 2, inSizeY.get() * 2, inRadius.get() * 2];

                if (isNaN(p.x()) || isNaN(q.x()))
                {
                    op.logWarn("ammobody: rot/pos is nan... ", inName.get());
                    needsRemove = true;
                    // mat4.fromRotationTranslationScale(transMat, [0, 0, 0, 1], [1, 2, 3], scale);
                    // doResetPos=true;
                    // setPositions();
                    return;
                }
                else
                {
                    mat4.fromRotationTranslationScale(transMat, [q.x(), q.y(), q.z(), q.w()], [p.x(), p.y(), p.z()], scale);
                }

                cgl.pushModelMatrix();
                mat4.identity(cgl.mMatrix);

                mat4.mul(cgl.mMatrix, cgl.mMatrix, transMat);

                transformed.trigger();

                cgl.popModelMatrix();
            }
        }
}

function ping()
{
    if (world)
        for (let i = 0; i < bodies.length; i++)
            world.pingBody(bodies[i]);
}

function update()
{
    if (world && bodies.length && bodies[0] && world.getBodyMeta(bodies[0]) == undefined)removeBody();
    if (world != cgl.frameStore.ammoWorld) removeBody();
    if (needsRemove)
    {
        removeBody();
        needsRemove = false;
    }

    world = cgl.frameStore.ammoWorld;
    if (!world)
    {
        outRayHit.set(false);
        return;
    }
    if (!bodies.length) setup();
    if (!bodies.length) return;
    if (bodies[0] && inNeverDeactivate.get()) bodies[0].activate(); // body.setActivationState(Ammo.DISABLE_DEACTIVATION); did not work.....

    if (inMass.get() == 0 || doResetPos)
    {
        setPositions();
        doResetPos = false;
    }

    renderTransformed();

    next.trigger();
}

}
};

CABLES.OPS["d9c57405-9cc0-475f-b81d-21401a7ab326"]={f:Ops.Extension.AmmoPhysics.AmmoBody,objName:"Ops.Extension.AmmoPhysics.AmmoBody"};




// **************************************************************
// 
// Ops.Anim.BoolAnim
// 
// **************************************************************

Ops.Anim.BoolAnim= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const anim = new CABLES.Anim();

const
    exe = op.inTrigger("exe"),
    bool = op.inValueBool("bool"),
    pease = anim.createPort(op, "easing"),
    duration = op.inValue("duration", 0.25),
    dir = op.inValueSelect("Direction", ["Both", "Only True", "Only False"], "Both"),
    valueFalse = op.inValue("value false", 0),
    valueTrue = op.inValue("value true", 1),
    next = op.outTrigger("trigger"),
    value = op.outNumber("value"),
    finished = op.outBoolNum("finished"),
    finishedTrigger = op.outTrigger("Finished Trigger");

const startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(exe);
op.setPortGroup("Animation", [duration, pease]);
op.setPortGroup("Values", [valueFalse, valueTrue]);

dir.onChange = bool.onChange = valueFalse.onChange = valueTrue.onChange = duration.onChange = setAnim;
setAnim();

function setAnim()
{
    if (dir.get() == "Animate Both")dir.set("Both");
    finished.set(false);
    const now = (CABLES.now() - startTime) / 1000;
    const oldValue = anim.getValue(now);
    anim.clear();

    anim.setValue(now, oldValue);

    if (!bool.get())
    {
        if (dir.get() != "Only True") anim.setValue(now + duration.get(), valueFalse.get());
        else anim.setValue(now, valueFalse.get());
    }
    else
    {
        if (dir.get() != "Only False") anim.setValue(now + duration.get(), valueTrue.get());
        else anim.setValue(now, valueTrue.get());
    }
}

exe.onTriggered = function ()
{
    const t = (CABLES.now() - startTime) / 1000;
    value.set(anim.getValue(t));

    if (anim.hasEnded(t))
    {
        if (!finished.get()) finishedTrigger.trigger();
        finished.set(true);
    }

    next.trigger();
};

}
};

CABLES.OPS["06ad9d35-ccf5-4d31-889c-e23fa062588a"]={f:Ops.Anim.BoolAnim,objName:"Ops.Anim.BoolAnim"};




// **************************************************************
// 
// Ops.Anim.Timer_v2
// 
// **************************************************************

Ops.Anim.Timer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inSpeed = op.inValue("Speed", 1),
    playPause = op.inValueBool("Play", true),
    reset = op.inTriggerButton("Reset"),
    inSyncTimeline = op.inValueBool("Sync to timeline", false),
    outTime = op.outNumber("Time");

op.setPortGroup("Controls", [playPause, reset, inSpeed]);

const timer = new CABLES.Timer();
let lastTime = null;
let time = 0;
let syncTimeline = false;

playPause.onChange = setState;
setState();

function setState()
{
    if (playPause.get())
    {
        timer.play();
        op.patch.addOnAnimFrame(op);
    }
    else
    {
        timer.pause();
        op.patch.removeOnAnimFrame(op);
    }
}

reset.onTriggered = doReset;

function doReset()
{
    time = 0;
    lastTime = null;
    timer.setTime(0);
    outTime.set(0);
}

inSyncTimeline.onChange = function ()
{
    syncTimeline = inSyncTimeline.get();
    playPause.setUiAttribs({ "greyout": syncTimeline });
    reset.setUiAttribs({ "greyout": syncTimeline });
};

op.onAnimFrame = function (tt, frameNum, deltaMs)
{
    if (timer.isPlaying())
    {
        if (CABLES.overwriteTime !== undefined)
        {
            outTime.set(CABLES.overwriteTime * inSpeed.get());
        }
        else

        if (syncTimeline)
        {
            outTime.set(tt * inSpeed.get());
        }
        else
        {
            timer.update();

            const timerVal = timer.get();

            if (lastTime === null)
            {
                lastTime = timerVal;
                return;
            }

            const t = Math.abs(timerVal - lastTime);
            lastTime = timerVal;

            time += t * inSpeed.get();
            if (time != time)time = 0;
            outTime.set(time);
        }
    }
};

}
};

CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};




// **************************************************************
// 
// Ops.Devices.Mouse.MouseWheel_v2
// 
// **************************************************************

Ops.Devices.Mouse.MouseWheel_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    speed = op.inValue("Speed", 1),
    preventScroll = op.inValueBool("prevent scroll", true),
    flip = op.inValueBool("Flip Direction"),
    inSimpleIncrement = op.inBool("Simple Delta", true),
    area = op.inSwitch("Area", ["Canvas", "Document", "Parent"], "Document"),
    active = op.inValueBool("active", true),
    delta = op.outNumber("delta", 0),
    deltaX = op.outNumber("delta X", 0),
    deltaOrig = op.outNumber("browser event delta", 0),
    trigger = op.outTrigger("Wheel Action");

const cgl = op.patch.cgl;
const value = 0;

const startTime = CABLES.now() / 1000.0;
const v = 0;

let dir = 1;

let listenerElement = null;

area.onChange = updateArea;
const vOut = 0;

addListener();

flip.onChange = function ()
{
    if (flip.get())dir = -1;
    else dir = 1;
};

function normalizeWheel(event)
{
    let sY = 0;

    if ("detail" in event) { sY = event.detail; }

    if ("deltaY" in event)
    {
        sY = event.deltaY;
        // if (deltaY < 1.0)deltaY *= 16;
        if (event.deltaY > 20)sY = 20;
        else if (event.deltaY < -20)sY = -20;
    }
    return sY * dir;
}

function normalizeWheelX(event)
{
    let sX = 0;

    if ("deltaX" in event)
    {
        sX = event.deltaX;
        if (event.deltaX > 20)sX = 20;
        else if (event.deltaX < -20)sX = -20;
    }
    return sX;
}

let lastEvent = 0;

function onMouseWheel(e)
{
    if (Date.now() - lastEvent < 10) return;
    lastEvent = Date.now();

    deltaOrig.set(e.wheelDelta || e.deltaY);

    if (e.deltaY)
    {
        let d = normalizeWheel(e);
        if (inSimpleIncrement.get())
        {
            if (d > 0)d = speed.get();
            else d = -speed.get();
        }
        else d *= 0.01 * speed.get();

        delta.set(0);
        delta.set(d);
    }

    if (e.deltaX)
    {
        let dX = normalizeWheelX(e);
        dX *= 0.01 * speed.get();

        deltaX.set(0);
        deltaX.set(dX);
    }

    if (preventScroll.get()) e.preventDefault();
    trigger.trigger();
}

function updateArea()
{
    removeListener();

    if (area.get() == "Document") listenerElement = document;
    if (area.get() == "Parent") listenerElement = cgl.canvas.parentElement;
    else listenerElement = cgl.canvas;

    if (active.get())addListener();
}

function addListener()
{
    if (!listenerElement)updateArea();
    listenerElement.addEventListener("wheel", onMouseWheel, { "passive": false });
}

function removeListener()
{
    if (listenerElement) listenerElement.removeEventListener("wheel", onMouseWheel);
}

active.onChange = function ()
{
    updateArea();
};

}
};

CABLES.OPS["7b9626db-536b-4bb4-85c3-95401bc60d1b"]={f:Ops.Devices.Mouse.MouseWheel_v2,objName:"Ops.Devices.Mouse.MouseWheel_v2"};




// **************************************************************
// 
// Ops.Ui.VizNumber
// 
// **************************************************************

Ops.Ui.VizNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inNum = op.inFloat("Number", 0);
const outNum = op.outNumber("Result");

op.setUiAttrib({ "widthOnlyGrow": true });

inNum.onChange = update;

update();

function update()
{
    let n = inNum.get();
    if (op.patch.isEditorMode())
    {
        let str = "";
        if (n === null)str = "null";
        else if (n === undefined)str = "undefined";
        else
        {
            str = "" + Math.round(n * 10000) / 10000;

            if (str[0] != "-")str = " " + str;
        }

        op.setUiAttribs({ "extendTitle": str });
    }

    outNum.set(n);
}

}
};

CABLES.OPS["2b60d12d-2884-4ad0-bda4-0caeb6882f5c"]={f:Ops.Ui.VizNumber,objName:"Ops.Ui.VizNumber"};




// **************************************************************
// 
// Ops.Math.AddUp
// 
// **************************************************************

Ops.Math.AddUp= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number = op.inValue("Number"),
    doAdd = op.inTriggerButton("Add"),
    doReset = op.inTriggerButton("Reset"),
    result = op.outNumber("Result");

let value = 0;

doAdd.onTriggered = function ()
{
    value += number.get();
    result.set(value);
};

doReset.onTriggered = function ()
{
    value = 0;
    result.set(value);
};

}
};

CABLES.OPS["f1c76976-4c8f-43a5-a9c7-6e4c7d21c749"]={f:Ops.Math.AddUp,objName:"Ops.Math.AddUp"};




// **************************************************************
// 
// Ops.Anim.Spring
// 
// **************************************************************

Ops.Anim.Spring= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrig = op.inTrigger("exe"),
    inValue = op.inFloat("value", 0.0),
    inDamping = op.inFloatSlider("damping", 0.20),
    inStiffness = op.inFloatSlider("stiffness", 0.7),
    outTrig = op.outTrigger("trigger"),
    outResult = op.outNumber("result");

let lastTime = CABLES.now();
let diff = 0;

let currentValue = 0.0;
let currentVelocity = 0.0;
let stiffness = inStiffness.get();
let damping = inDamping.get();
let valueThreshold = 0.001;
let velocityThreshold = 0.001;

inDamping.onChange = function ()
{
    damping = inDamping.get();
};

inStiffness.onChange = function ()
{
    stiffness = inStiffness.get();
};

inTrig.onTriggered = function ()
{
    diff = (CABLES.now() - lastTime);

    let dampingFactor = Math.max(0, 1 - damping * 50 * diff * 0.001);
    let acceleration = (inValue.get() - currentValue) * stiffness * 10 * diff * 0.01;
    currentVelocity = currentVelocity * dampingFactor + acceleration;
    currentValue += currentVelocity * diff * 0.01;

    if ((Math.abs(currentValue - inValue.get()) < valueThreshold) && (Math.abs(currentVelocity) < velocityThreshold))
    {
        currentValue = inValue.get();
        currentVelocity = 0;
    }

    outResult.set(currentValue);
    lastTime = CABLES.now();
    outTrig.trigger();
};

}
};

CABLES.OPS["3ef72802-f192-4955-b93f-800e642cb610"]={f:Ops.Anim.Spring,objName:"Ops.Anim.Spring"};




// **************************************************************
// 
// Ops.Math.Math
// 
// **************************************************************

Ops.Math.Math= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const num0 = op.inFloat("number 0", 0),
    num1 = op.inFloat("number 1", 0),
    mathDropDown = op.inSwitch("math mode", ["+", "-", "*", "/", "%", "min", "max"], "+"),
    result = op.outNumber("result");

let mathFunc;

num0.onChange = num1.onChange = update;
mathDropDown.onChange = onFilterChange;

let n0 = 0;
let n1 = 0;

const mathFuncAdd = function (a, b) { return a + b; };
const mathFuncSub = function (a, b) { return a - b; };
const mathFuncMul = function (a, b) { return a * b; };
const mathFuncDiv = function (a, b) { return a / b; };
const mathFuncMod = function (a, b) { return a % b; };
const mathFuncMin = function (a, b) { return Math.min(a, b); };
const mathFuncMax = function (a, b) { return Math.max(a, b); };

function onFilterChange()
{
    let mathSelectValue = mathDropDown.get();

    if (mathSelectValue == "+") mathFunc = mathFuncAdd;
    else if (mathSelectValue == "-") mathFunc = mathFuncSub;
    else if (mathSelectValue == "*") mathFunc = mathFuncMul;
    else if (mathSelectValue == "/") mathFunc = mathFuncDiv;
    else if (mathSelectValue == "%") mathFunc = mathFuncMod;
    else if (mathSelectValue == "min") mathFunc = mathFuncMin;
    else if (mathSelectValue == "max") mathFunc = mathFuncMax;
    update();
    op.setUiAttrib({ "extendTitle": mathSelectValue });
}

function update()
{
    n0 = num0.get();
    n1 = num1.get();

    result.set(mathFunc(n0, n1));
}

onFilterChange();

}
};

CABLES.OPS["e9fdcaca-a007-4563-8a4d-e94e08506e0f"]={f:Ops.Math.Math,objName:"Ops.Math.Math"};




// **************************************************************
// 
// Ops.Gl.Meshes.TextMesh_v2
// 
// **************************************************************

Ops.Gl.Meshes.TextMesh_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"textmesh_frag":"{{MODULES_HEAD}}\r\n\r\n#define INSTANCING\r\n\r\nUNI sampler2D tex;\r\n#ifdef DO_MULTEX\r\n    UNI sampler2D texMul;\r\n#endif\r\n#ifdef DO_MULTEX_MASK\r\n    UNI sampler2D texMulMask;\r\n#endif\r\nIN vec2 texCoord;\r\nIN vec2 texPos;\r\nUNI float r;\r\nUNI float g;\r\nUNI float b;\r\nUNI float a;\r\n\r\nflat IN float frag_instIndex;\r\n\r\nvoid main()\r\n{\r\n    {{MODULE_BEGIN_FRAG}}\r\n\r\n    vec4 col=texture(tex,texCoord);\r\n    col.a=col.r;\r\n    col.r*=r;\r\n    col.g*=g;\r\n    col.b*=b;\r\n    col*=a;\r\n\r\n    if(col.a==0.0)discard;\r\n\r\n    #ifdef DO_MULTEX\r\n        col*=texture(texMul,texPos);\r\n    #endif\r\n\r\n    #ifdef DO_MULTEX_MASK\r\n        col*=texture(texMulMask,texPos).r;\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    outColor=col;\r\n}","textmesh_vert":"{{MODULES_HEAD}}\r\n\r\nUNI sampler2D tex;\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI float scale;\r\nIN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN mat4 instMat;\r\nIN vec2 attrTexOffsets;\r\nIN vec2 attrTexSize;\r\nIN vec2 attrTexPos;\r\nIN float attrVertIndex;\r\nIN float instanceIndex;\r\nflat OUT float frag_instIndex;\r\n\r\nOUT vec2 texPos;\r\n\r\nOUT vec2 texCoord;\r\nOUT vec4 modelPos;\r\n\r\nvoid main()\r\n{\r\n\r\n    texCoord=(attrTexCoord*(attrTexSize)) + attrTexOffsets;\r\n    mat4 instMVMat=instMat;\r\n    instMVMat[3][0]*=scale;\r\n\r\n    texPos=attrTexPos;\r\n\r\n    vec4 pos=vec4( vPosition.x*(attrTexSize.x/attrTexSize.y)*scale,vPosition.y*scale,vPosition.z*scale, 1. );\r\n\r\n    mat4 mvMatrix=viewMatrix * modelMatrix * instMVMat;\r\n    frag_instIndex=instanceIndex;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    gl_Position = projMatrix * mvMatrix * pos;\r\n}\r\n\r\n",};
const
    render = op.inTrigger("Render"),
    str = op.inString("Text", "cables"),
    scaleText = op.inFloat("Scale Text", 1),
    scale = op.inValueFloat("Scale", 1),
    inFont = op.inString("Font", "Arial"),
    align = op.inValueSelect("align", ["left", "center", "right"], "center"),
    valign = op.inValueSelect("vertical align", ["Top", "Middle", "Bottom"], "Middle"),
    lineHeight = op.inValueFloat("Line Height", 1),
    letterSpace = op.inValueFloat("Letter Spacing"),

    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "mipmap"),
    aniso = op.inSwitch("Anisotropic", [0, 1, 2, 4, 8, 16], 0),

    inMulTex = op.inTexture("Texture Color"),
    inMulTexMask = op.inTexture("Texture Mask"),
    next = op.outTrigger("Next"),
    textureOut = op.outTexture("texture"),
    outLines = op.outNumber("Total Lines", 0),
    outWidth = op.outNumber("Width", 0),
    loaded = op.outBoolNum("Font Available", 0);

const cgl = op.patch.cgl;
const vScale = vec3.create();

vec3.set(vScale, 1, 1, 1);

op.toWorkPortsNeedToBeLinked(render);

op.setPortGroup("Masking", [inMulTex, inMulTexMask]);

scale.setUiAttribs({ "title": "Line Scale" });

textureOut.setUiAttribs({ "hidePort": true });

const textureSize = 1024;
let fontLoaded = false;
let needUpdate = true;

align.onChange =
    str.onChange =
    lineHeight.onChange = generateMeshLater;

function generateMeshLater()
{
    needUpdate = true;
}

let canvasid = null;
CABLES.OpTextureMeshCanvas = {};
let valignMode = 0;

const geom = null;
let mesh = null;

let createMesh = true;
let createTexture = true;

op.onDelete = function () { if (mesh)mesh.dispose(); };

scaleText.onChange = () =>
{
    vec3.set(vScale, scaleText.get(), scaleText.get(), scaleText.get());
};

aniso.onChange =
tfilter.onChange = () =>
{
    getFont().texture = null;
    createTexture = true;
};

inMulTexMask.onChange =
inMulTex.onChange = function ()
{
    shader.toggleDefine("DO_MULTEX", inMulTex.get());
    shader.toggleDefine("DO_MULTEX_MASK", inMulTexMask.get());
};

textureOut.set(null);
inFont.onChange = function ()
{
    createTexture = true;
    createMesh = true;
    checkFont();
};

op.patch.on("fontLoaded", (fontName) =>
{
    if (fontName == inFont.get())
    {
        createTexture = true;
        createMesh = true;
    }
});

function checkFont()
{
    const oldFontLoaded = fontLoaded;
    try
    {
        fontLoaded = document.fonts.check("20px \"" + inFont.get() + "\"");
    }
    catch (ex)
    {
        op.logError(ex);
    }

    if (!oldFontLoaded && fontLoaded)
    {
        loaded.set(true);
        createTexture = true;
        createMesh = true;
    }

    if (!fontLoaded) setTimeout(checkFont, 250);
}

valign.onChange = function ()
{
    if (valign.get() == "Middle")valignMode = 0;
    else if (valign.get() == "Top")valignMode = 1;
    else if (valign.get() == "Bottom")valignMode = 2;
};

function getFont()
{
    canvasid = "" + inFont.get();
    if (CABLES.OpTextureMeshCanvas.hasOwnProperty(canvasid))
        return CABLES.OpTextureMeshCanvas[canvasid];

    const fontImage = document.createElement("canvas");
    fontImage.dataset.font = inFont.get();
    fontImage.id = "texturetext_" + CABLES.generateUUID();
    fontImage.style.display = "none";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(fontImage);
    const _ctx = fontImage.getContext("2d");
    CABLES.OpTextureMeshCanvas[canvasid] =
        {
            "ctx": _ctx,
            "canvas": fontImage,
            "chars": {},
            "characters": "",
            "fontSize": 320
        };
    return CABLES.OpTextureMeshCanvas[canvasid];
}

op.onDelete = function ()
{
    if (canvasid && CABLES.OpTextureMeshCanvas[canvasid])
        CABLES.OpTextureMeshCanvas[canvasid].canvas.remove();
};

const shader = new CGL.Shader(cgl, "TextMesh", this);
shader.setSource(attachments.textmesh_vert, attachments.textmesh_frag);
const uniTex = new CGL.Uniform(shader, "t", "tex", 0);
const uniTexMul = new CGL.Uniform(shader, "t", "texMul", 1);
const uniTexMulMask = new CGL.Uniform(shader, "t", "texMulMask", 2);
const uniScale = new CGL.Uniform(shader, "f", "scale", scale);

const
    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    a = op.inValueSlider("a", 1),
    runiform = new CGL.Uniform(shader, "f", "r", r),
    guniform = new CGL.Uniform(shader, "f", "g", g),
    buniform = new CGL.Uniform(shader, "f", "b", b),
    auniform = new CGL.Uniform(shader, "f", "a", a);
r.setUiAttribs({ "colorPick": true });

op.setPortGroup("Display", [scale, inFont]);
op.setPortGroup("Alignment", [align, valign]);
op.setPortGroup("Color", [r, g, b, a]);

let height = 0;
const vec = vec3.create();
let lastTextureChange = -1;
let disabled = false;

render.onTriggered = function ()
{
    if (needUpdate)
    {
        generateMesh();
        needUpdate = false;
    }
    const font = getFont();
    if (font.lastChange != lastTextureChange)
    {
        createMesh = true;
        lastTextureChange = font.lastChange;
    }

    if (createTexture) generateTexture();
    if (createMesh) generateMesh();

    if (mesh && mesh.numInstances > 0)
    {
        cgl.pushBlendMode(CGL.BLEND_NORMAL, true);
        cgl.pushShader(shader);
        cgl.setTexture(0, textureOut.get().tex);

        const mulTex = inMulTex.get();
        if (mulTex)cgl.setTexture(1, mulTex.tex);

        const mulTexMask = inMulTexMask.get();
        if (mulTexMask)cgl.setTexture(2, mulTexMask.tex);

        if (valignMode === 2) vec3.set(vec, 0, height, 0);
        else if (valignMode === 1) vec3.set(vec, 0, 0, 0);
        else if (valignMode === 0) vec3.set(vec, 0, height / 2, 0);

        vec[1] -= lineHeight.get();
        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, vec);
        mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);

        if (!disabled)mesh.render(cgl.getShader());

        cgl.popModelMatrix();

        cgl.setTexture(0, null);
        cgl.popShader();
        cgl.popBlendMode();
    }

    next.trigger();
};

letterSpace.onChange = function ()
{
    createMesh = true;
};

function generateMesh()
{
    const theString = String(str.get() + "");
    if (!textureOut.get()) return;

    const font = getFont();
    if (!font.geom)
    {
        font.geom = new CGL.Geometry("textmesh");

        font.geom.vertices = [
            1.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 0.0, 0.0
        ];

        font.geom.texCoords = new Float32Array([
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0
        ]);

        font.geom.verticesIndices = [
            0, 1, 2,
            2, 1, 3
        ];
    }

    if (!mesh)mesh = new CGL.Mesh(cgl, font.geom);

    const strings = (theString).split("\n");
    outLines.set(strings.length);

    const transformations = [];
    const tcOffsets = [];
    const tcSize = [];
    const texPos = [];
    const m = mat4.create();
    let charCounter = 0;
    let maxWidth = 0;
    createTexture = false;

    for (let s = 0; s < strings.length; s++)
    {
        const txt = strings[s];
        const numChars = txt.length;

        let pos = 0;
        let offX = 0;
        let width = 0;

        for (let i = 0; i < numChars; i++)
        {
            const chStr = txt.substring(i, i + 1);
            const char = font.chars[String(chStr)];
            if (char)
            {
                width += (char.texCoordWidth / char.texCoordHeight);
                width += letterSpace.get();
            }
        }

        width -= letterSpace.get();

        height = 0;

        if (align.get() == "left") offX = 0;
        else if (align.get() == "right") offX = width;
        else if (align.get() == "center") offX = width / 2;

        height = (s + 1) * lineHeight.get();

        for (let i = 0; i < numChars; i++)
        {
            const chStr = txt.substring(i, i + 1);
            const char = font.chars[String(chStr)];

            if (!char)
            {
                createTexture = true;
                return;
            }
            else
            {
                texPos.push(pos / width * 0.99 + 0.005, (1.0 - (s / (strings.length - 1))) * 0.99 + 0.005);
                tcOffsets.push(char.texCoordX, 1 - char.texCoordY - char.texCoordHeight);
                tcSize.push(char.texCoordWidth, char.texCoordHeight);

                mat4.identity(m);
                mat4.translate(m, m, [pos - offX, 0 - s * lineHeight.get(), 0]);

                pos += (char.texCoordWidth / char.texCoordHeight) + letterSpace.get();
                maxWidth = Math.max(maxWidth, pos - offX);

                transformations.push(Array.prototype.slice.call(m));

                charCounter++;
            }
        }
    }

    const transMats = [].concat.apply([], transformations);

    disabled = false;
    if (transMats.length == 0)disabled = true;

    const n = transMats.length / 16;
    mesh.setNumInstances(n);

    if (mesh.numInstances == 0)
    {
        disabled = true;
        return;
    }

    outWidth.set(maxWidth * scale.get());
    mesh.setAttribute("instMat", new Float32Array(transMats), 16, { "instanced": true });
    mesh.setAttribute("attrTexOffsets", new Float32Array(tcOffsets), 2, { "instanced": true });
    mesh.setAttribute("attrTexSize", new Float32Array(tcSize), 2, { "instanced": true });
    mesh.setAttribute("attrTexPos", new Float32Array(texPos), 2, { "instanced": true });

    createMesh = false;

    if (createTexture) generateTexture();
}

function printChars(fontSize, simulate)
{
    const font = getFont();
    if (!simulate) font.chars = {};

    const ctx = font.ctx;

    ctx.font = fontSize + "px " + inFont.get();
    ctx.textAlign = "left";

    let posy = 0;
    let posx = 0;
    const lineHeight = fontSize * 1.4;
    const result =
        {
            "fits": true
        };

    for (let i = 0; i < font.characters.length; i++)
    {
        const chStr = String(font.characters.substring(i, i + 1));
        const chWidth = (ctx.measureText(chStr).width);

        if (posx + chWidth >= textureSize)
        {
            posy += lineHeight + 2;
            posx = 0;
        }

        if (!simulate)
        {
            font.chars[chStr] =
                {
                    "str": chStr,
                    "texCoordX": posx / textureSize,
                    "texCoordY": posy / textureSize,
                    "texCoordWidth": chWidth / textureSize,
                    "texCoordHeight": lineHeight / textureSize,
                };

            ctx.fillText(chStr, posx, posy + fontSize);
        }

        posx += chWidth + 12;
    }

    if (posy > textureSize - lineHeight)
    {
        result.fits = false;
    }

    result.spaceLeft = textureSize - posy;

    return result;
}

function generateTexture()
{
    let filter = CGL.Texture.FILTER_LINEAR;
    if (tfilter.get() == "nearest") filter = CGL.Texture.FILTER_NEAREST;
    if (tfilter.get() == "mipmap") filter = CGL.Texture.FILTER_MIPMAP;

    const font = getFont();
    let string = String(str.get());
    if (string == null || string == undefined)string = "";
    for (let i = 0; i < string.length; i++)
    {
        const ch = string.substring(i, i + 1);
        if (font.characters.indexOf(ch) == -1)
        {
            font.characters += ch;
            createTexture = true;
        }
    }

    const ctx = font.ctx;
    font.canvas.width = font.canvas.height = textureSize;

    if (!font.texture)
        font.texture = CGL.Texture.createFromImage(cgl, font.canvas, {
            "filter": filter,
            "anisotropic": parseFloat(aniso.get())
        });

    font.texture.setSize(textureSize, textureSize);

    ctx.fillStyle = "transparent";
    ctx.clearRect(0, 0, textureSize, textureSize);
    ctx.fillStyle = "rgba(255,255,255,255)";

    let fontSize = font.fontSize + 40;
    let simu = printChars(fontSize, true);

    while (!simu.fits)
    {
        fontSize -= 5;
        simu = printChars(fontSize, true);
    }

    printChars(fontSize, false);

    ctx.restore();

    font.texture.initTexture(font.canvas, filter);
    font.texture.unpackAlpha = true;
    textureOut.set(font.texture);

    font.lastChange = CABLES.now();

    createMesh = true;
    createTexture = false;
}

}
};

CABLES.OPS["2390f6b3-2122-412e-8c8d-5c2f574e8bd1"]={f:Ops.Gl.Meshes.TextMesh_v2,objName:"Ops.Gl.Meshes.TextMesh_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.Rectangle_v4
// 
// **************************************************************

Ops.Gl.Meshes.Rectangle_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    doRender = op.inValueBool("Render Mesh", true),
    width = op.inValue("width", 1),
    height = op.inValue("height", 1),
    pivotX = op.inSwitch("pivot x", ["left", "center", "right"], "center"),
    pivotY = op.inSwitch("pivot y", ["top", "center", "bottom"], "center"),
    axis = op.inSwitch("axis", ["xy", "xz"], "xy"),
    flipTcX = op.inBool("Flip TexCoord X", false),
    flipTcY = op.inBool("Flip TexCoord Y", true),
    nColumns = op.inValueInt("num columns", 1),
    nRows = op.inValueInt("num rows", 1),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

geomOut.ignoreValueSerialize = true;

const geom = new CGL.Geometry("rectangle");

doRender.setUiAttribs({ "title": "Render" });
render.setUiAttribs({ "title": "Trigger" });
trigger.setUiAttribs({ "title": "Next" });
op.setPortGroup("Pivot", [pivotX, pivotY, axis]);
op.setPortGroup("Size", [width, height]);
op.setPortGroup("Structure", [nColumns, nRows]);
op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_TRIGGER);

const AXIS_XY = 0;
const AXIS_XZ = 1;

let curAxis = AXIS_XY;
let mesh = null;
let needsRebuild = true;
let doScale = true;

const vScale = vec3.create();
vec3.set(vScale, 1, 1, 1);

axis.onChange =
    pivotX.onChange =
    pivotY.onChange =
    flipTcX.onChange =
    flipTcY.onChange =
    nRows.onChange =
    nColumns.onChange = rebuildLater;
updateScale();

width.onChange =
    height.onChange =
    () =>
    {
        if (doScale) updateScale();
        else needsRebuild = true;
    };

function updateScale()
{
    if (curAxis === AXIS_XY) vec3.set(vScale, width.get(), height.get(), 1);
    if (curAxis === AXIS_XZ) vec3.set(vScale, width.get(), 1, height.get());
}

geomOut.onLinkChanged = () =>
{
    doScale = !geomOut.isLinked();
    updateScale();
    needsRebuild = true;
};

function rebuildLater()
{
    needsRebuild = true;
}

render.onTriggered = () =>
{
    if (needsRebuild) rebuild();
    const cg = op.patch.cg;
    if (cg && mesh && doRender.get())
    {
        if (doScale)
        {
            cg.pushModelMatrix();
            mat4.scale(cg.mMatrix, cg.mMatrix, vScale);
        }

        mesh.render(cg.getShader());

        if (doScale) cg.popModelMatrix();
    }

    trigger.trigger();
};

op.onDelete = function () { if (mesh)mesh.dispose(); };

function rebuild()
{
    if (axis.get() == "xy") curAxis = AXIS_XY;
    if (axis.get() == "xz") curAxis = AXIS_XZ;

    updateScale();
    let w = width.get();
    let h = height.get();

    if (doScale) w = h = 1;

    let x = 0;
    let y = 0;

    if (pivotX.get() == "center") x = 0;
    else if (pivotX.get() == "right") x = -w / 2;
    else if (pivotX.get() == "left") x = +w / 2;

    if (pivotY.get() == "center") y = 0;
    else if (pivotY.get() == "top") y = -h / 2;
    else if (pivotY.get() == "bottom") y = +h / 2;

    const numRows = Math.max(1, Math.round(nRows.get()));
    const numColumns = Math.max(1, Math.round(nColumns.get()));

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    const indices = [];
    const tc = new Float32Array((numColumns + 1) * (numRows + 1) * 2);
    const verts = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const norms = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const tangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const biTangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);

    let idxTc = 0;
    let idxVert = 0;
    let idxNorms = 0;
    let idxTangent = 0;
    let idxBiTangent = 0;

    for (let r = 0; r <= numRows; r++)
    {
        for (let c = 0; c <= numColumns; c++)
        {
            verts[idxVert++] = c * stepColumn - w / 2 + x;
            if (curAxis == AXIS_XZ) verts[idxVert++] = 0;
            verts[idxVert++] = r * stepRow - h / 2 + y;

            if (curAxis == AXIS_XY)verts[idxVert++] = 0;

            tc[idxTc++] = c / numColumns;
            tc[idxTc++] = r / numRows;

            if (curAxis == AXIS_XY) // default
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;

                tangents[idxTangent++] = 1;
                tangents[idxTangent++] = 0;
                tangents[idxTangent++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
                biTangents[idxBiTangent++] = 0;
            }
            else if (curAxis == AXIS_XZ)
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;
                norms[idxNorms++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
            }
        }
    }

    indices.length = numColumns * numRows * 6;
    let idx = 0;

    for (let c = 0; c < numColumns; c++)
    {
        for (let r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            if (curAxis == AXIS_XY) // default
            {
                indices[idx++] = v1;
                indices[idx++] = v2;
                indices[idx++] = v3;

                indices[idx++] = v3;
                indices[idx++] = v2;
                indices[idx++] = v4;
            }
            else
            if (curAxis == AXIS_XZ)
            {
                indices[idx++] = v1;
                indices[idx++] = v3;
                indices[idx++] = v2;

                indices[idx++] = v2;
                indices[idx++] = v3;
                indices[idx++] = v4;
            }
        }
    }

    if (flipTcY.get()) for (let i = 0; i < tc.length; i += 2)tc[i + 1] = 1.0 - tc[i + 1];
    if (flipTcX.get()) for (let i = 0; i < tc.length; i += 2)tc[i] = 1.0 - tc[i];

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;
    geom.tangents = tangents;
    geom.biTangents = biTangents;

    if (op.patch.cg)
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    geomOut.setRef(geom);
    needsRebuild = false;
}

}
};

CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};




// **************************************************************
// 
// Ops.Ui.Area
// 
// **************************************************************

Ops.Ui.Area= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTitle = op.inString("Title", ""),
    inDelete = op.inTriggerButton("Delete");

inTitle.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "hasArea": true });

op.init =
    inTitle.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        gui.savedState.setUnSaved("areaOp", op.getSubPatch());
        op.uiAttr(
            {
                "comment_title": inTitle.get() || " "
            });

        op.name = inTitle.get();
    }
}

inDelete.onTriggered = () =>
{
    op.patch.deleteOp(op.id);
};

}
};

CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};




// **************************************************************
// 
// Ops.Gl.Shader.BasicMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.BasicMaterial_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"basicmaterial_frag":"{{MODULES_HEAD}}\r\n\r\nIN vec2 texCoord;\r\n\r\n#ifdef VERTEX_COLORS\r\nIN vec4 vertCol;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 texCoordOrig;\r\n    #ifdef HAS_TEXTURE_DIFFUSE\r\n        UNI sampler2D tex;\r\n    #endif\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        UNI sampler2D texOpacity;\r\n   #endif\r\n#endif\r\n\r\n\r\n\r\nvoid main()\r\n{\r\n    {{MODULE_BEGIN_FRAG}}\r\n    vec4 col=color;\r\n\r\n\r\n    #ifdef HAS_TEXTURES\r\n        vec2 uv=texCoord;\r\n\r\n        #ifdef CROP_TEXCOORDS\r\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\r\n        #endif\r\n\r\n        #ifdef HAS_TEXTURE_DIFFUSE\r\n            col=texture(tex,uv);\r\n\r\n            #ifdef COLORIZE_TEXTURE\r\n                col.r*=color.r;\r\n                col.g*=color.g;\r\n                col.b*=color.b;\r\n            #endif\r\n        #endif\r\n        col.a*=color.a;\r\n        #ifdef HAS_TEXTURE_OPACITY\r\n            #ifdef TRANSFORMALPHATEXCOORDS\r\n                uv=texCoordOrig;\r\n            #endif\r\n            #ifdef ALPHA_MASK_IR\r\n                col.a*=1.0-texture(texOpacity,uv).r;\r\n            #endif\r\n            #ifdef ALPHA_MASK_IALPHA\r\n                col.a*=1.0-texture(texOpacity,uv).a;\r\n            #endif\r\n            #ifdef ALPHA_MASK_ALPHA\r\n                col.a*=texture(texOpacity,uv).a;\r\n            #endif\r\n            #ifdef ALPHA_MASK_LUMI\r\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\r\n            #endif\r\n            #ifdef ALPHA_MASK_R\r\n                col.a*=texture(texOpacity,uv).r;\r\n            #endif\r\n            #ifdef ALPHA_MASK_G\r\n                col.a*=texture(texOpacity,uv).g;\r\n            #endif\r\n            #ifdef ALPHA_MASK_B\r\n                col.a*=texture(texOpacity,uv).b;\r\n            #endif\r\n            // #endif\r\n        #endif\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    #ifdef DISCARDTRANS\r\n        if(col.a<0.2) discard;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        col*=vertCol;\r\n    #endif\r\n\r\n    outColor = col;\r\n}\r\n","basicmaterial_vert":"\r\n{{MODULES_HEAD}}\r\n\r\nOUT vec2 texCoord;\r\nOUT vec2 texCoordOrig;\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\n#ifdef HAS_TEXTURES\r\n    UNI float diffuseRepeatX;\r\n    UNI float diffuseRepeatY;\r\n    UNI float texOffsetX;\r\n    UNI float texOffsetY;\r\n#endif\r\n\r\n#ifdef VERTEX_COLORS\r\n    in vec4 attrVertColor;\r\n    out vec4 vertCol;\r\n\r\n#endif\r\n\r\n\r\nvoid main()\r\n{\r\n    mat4 mMatrix=modelMatrix;\r\n    mat4 modelViewMatrix;\r\n\r\n    norm=attrVertNormal;\r\n    texCoordOrig=attrTexCoord;\r\n    texCoord=attrTexCoord;\r\n    #ifdef HAS_TEXTURES\r\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\r\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        vertCol=attrVertColor;\r\n    #endif\r\n\r\n    vec4 pos = vec4(vPosition, 1.0);\r\n\r\n    #ifdef BILLBOARD\r\n       vec3 position=vPosition;\r\n       modelViewMatrix=viewMatrix*modelMatrix;\r\n\r\n       gl_Position = projMatrix * modelViewMatrix * vec4((\r\n           position.x * vec3(\r\n               modelViewMatrix[0][0],\r\n               modelViewMatrix[1][0],\r\n               modelViewMatrix[2][0] ) +\r\n           position.y * vec3(\r\n               modelViewMatrix[0][1],\r\n               modelViewMatrix[1][1],\r\n               modelViewMatrix[2][1]) ), 1.0);\r\n    #endif\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    #ifndef BILLBOARD\r\n        modelViewMatrix=viewMatrix * mMatrix;\r\n\r\n        {{MODULE_VERTEX_MODELVIEW}}\r\n\r\n    #endif\r\n\r\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\r\n\r\n    #ifndef BILLBOARD\r\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\r\n        gl_Position = projMatrix * modelViewMatrix * pos;\r\n    #endif\r\n}\r\n",};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const shaderOut = op.outObject("shader", null, "shader");

shaderOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

const cgl = op.patch.cgl;

const shader = new CGL.Shader(cgl, "basicmaterial", this);
shader.addAttribute({ "type": "vec3", "name": "vPosition" });
shader.addAttribute({ "type": "vec2", "name": "attrTexCoord" });
shader.addAttribute({ "type": "vec3", "name": "attrVertNormal", "nameFrag": "norm" });
shader.addAttribute({ "type": "float", "name": "attrVertIndex" });

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);

shader.setSource(attachments.basicmaterial_vert, attachments.basicmaterial_frag);

shaderOut.setRef(shader);

render.onTriggered = doRender;

// rgba colors
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
const a = op.inValueSlider("a", 1);
r.setUiAttribs({ "colorPick": true });

// const uniColor=new CGL.Uniform(shader,'4f','color',r,g,b,a);
const colUni = shader.addUniformFrag("4f", "color", r, g, b, a);

shader.uniformColorDiffuse = colUni;

// diffuse outTexture

const diffuseTexture = op.inTexture("texture");
let diffuseTextureUniform = null;
diffuseTexture.onChange = updateDiffuseTexture;

const colorizeTexture = op.inValueBool("colorizeTexture", false);
const vertexColors = op.inValueBool("Vertex Colors", false);

// opacity texture
const textureOpacity = op.inTexture("textureOpacity");
let textureOpacityUniform = null;

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A", "1-A", "1-R"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });
textureOpacity.onChange = updateOpacity;

const texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false);
const discardTransPxl = op.inValueBool("Discard Transparent Pixels");

// texture coords
const
    diffuseRepeatX = op.inValue("diffuseRepeatX", 1),
    diffuseRepeatY = op.inValue("diffuseRepeatY", 1),
    diffuseOffsetX = op.inValue("Tex Offset X", 0),
    diffuseOffsetY = op.inValue("Tex Offset Y", 0),
    cropRepeat = op.inBool("Crop TexCoords", false);

shader.addUniformFrag("f", "diffuseRepeatX", diffuseRepeatX);
shader.addUniformFrag("f", "diffuseRepeatY", diffuseRepeatY);
shader.addUniformFrag("f", "texOffsetX", diffuseOffsetX);
shader.addUniformFrag("f", "texOffsetY", diffuseOffsetY);

const doBillboard = op.inValueBool("billboard", false);

alphaMaskSource.onChange =
    doBillboard.onChange =
    discardTransPxl.onChange =
    texCoordAlpha.onChange =
    cropRepeat.onChange =
    vertexColors.onChange =
    colorizeTexture.onChange = updateDefines;

op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Color Texture", [diffuseTexture, vertexColors, colorizeTexture]);
op.setPortGroup("Opacity", [textureOpacity, alphaMaskSource, discardTransPxl, texCoordAlpha]);
op.setPortGroup("Texture Transform", [diffuseRepeatX, diffuseRepeatY, diffuseOffsetX, diffuseOffsetY, cropRepeat]);

updateOpacity();
updateDiffuseTexture();

op.preRender = function ()
{
    shader.bind();
    doRender();
};

function doRender()
{
    if (!shader) return;

    cgl.pushShader(shader);
    shader.popTextures();

    if (diffuseTextureUniform && diffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, diffuseTexture.get());
    if (textureOpacityUniform && textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());

    trigger.trigger();

    cgl.popShader();
}

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform)textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;
    }

    updateDefines();
}

function updateDiffuseTexture()
{
    if (diffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))shader.define("HAS_TEXTURE_DIFFUSE");
        if (!diffuseTextureUniform)diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
    updateUi();
}

function updateUi()
{
    const hasTexture = diffuseTexture.isLinked() || textureOpacity.isLinked();
    diffuseRepeatX.setUiAttribs({ "greyout": !hasTexture });
    diffuseRepeatY.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetX.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetY.setUiAttribs({ "greyout": !hasTexture });
    colorizeTexture.setUiAttribs({ "greyout": !hasTexture });

    alphaMaskSource.setUiAttribs({ "greyout": !textureOpacity.get() });
    texCoordAlpha.setUiAttribs({ "greyout": !textureOpacity.get() });

    let notUsingColor = true;
    notUsingColor = diffuseTexture.get() && !colorizeTexture.get();
    r.setUiAttribs({ "greyout": notUsingColor });
    g.setUiAttribs({ "greyout": notUsingColor });
    b.setUiAttribs({ "greyout": notUsingColor });
}

function updateDefines()
{
    shader.toggleDefine("VERTEX_COLORS", vertexColors.get());
    shader.toggleDefine("CROP_TEXCOORDS", cropRepeat.get());
    shader.toggleDefine("COLORIZE_TEXTURE", colorizeTexture.get());
    shader.toggleDefine("TRANSFORMALPHATEXCOORDS", texCoordAlpha.get());
    shader.toggleDefine("DISCARDTRANS", discardTransPxl.get());
    shader.toggleDefine("BILLBOARD", doBillboard.get());

    shader.toggleDefine("ALPHA_MASK_ALPHA", alphaMaskSource.get() == "A");
    shader.toggleDefine("ALPHA_MASK_IALPHA", alphaMaskSource.get() == "1-A");
    shader.toggleDefine("ALPHA_MASK_IR", alphaMaskSource.get() == "1-R");
    shader.toggleDefine("ALPHA_MASK_LUMI", alphaMaskSource.get() == "Luminance");
    shader.toggleDefine("ALPHA_MASK_R", alphaMaskSource.get() == "R");
    shader.toggleDefine("ALPHA_MASK_G", alphaMaskSource.get() == "G");
    shader.toggleDefine("ALPHA_MASK_B", alphaMaskSource.get() == "B");
    updateUi();
}

}
};

CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};




// **************************************************************
// 
// Ops.Vars.VarGetTexture_v2
// 
// **************************************************************

Ops.Vars.VarGetTexture_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outTexture("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "texture", op.varName, val);

}
};

CABLES.OPS["5f8ce5fc-9787-45c9-9a83-0eebd2c6de15"]={f:Ops.Vars.VarGetTexture_v2,objName:"Ops.Vars.VarGetTexture_v2"};




// **************************************************************
// 
// Ops.Trigger.TriggerSend
// 
// **************************************************************

Ops.Trigger.TriggerSend= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    next = op.outTrigger("Next");

op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.onChange = updateName;

trigger.onTriggered = doTrigger;

op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

updateVarNamesDropdown();

op.varName.setUiAttribs({ "_triggerSelect": true });

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        const vars = op.patch.namedTriggers;
        varnames.push("+ create new one");
        for (const i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

function updateName()
{
    if (CABLES.UI)
    {
        if (op.varName.get() == "+ create new one")
        {
            new CABLES.UI.ModalDialog({
                "prompt": true,
                "title": "New Trigger",
                "text": "Enter a name for the new trigger",
                "promptValue": "",
                "promptOk": (str) =>
                {
                    op.varName.set(str);
                    op.patch.namedTriggers[str] = op.patch.namedTriggers[str] || [];
                    updateVarNamesDropdown();
                }
            });
            return;
        }

        op.refreshParams();
    }

    if (!op.patch.namedTriggers[op.varName.get()])
    {
        op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
        op.patch.emitEvent("namedTriggersChanged");
    }

    op.setTitle(">" + op.varName.get());

    op.refreshParams();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
}

function doTrigger()
{
    const arr = op.patch.namedTriggers[op.varName.get()];
    // fire an event even if noone is receiving this trigger
    // this way TriggerReceiveFilter can still handle it
    op.patch.emitEvent("namedTriggerSent", op.varName.get());

    if (!arr)
    {
        op.setUiError("unknowntrigger", "unknown trigger");
        return;
    }
    else op.setUiError("unknowntrigger", null);

    for (let i = 0; i < arr.length; i++)
    {
        arr[i]();
    }

    next.trigger();
}

}
};

CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};




// **************************************************************
// 
// Ops.Trigger.TriggerReceive
// 
// **************************************************************

Ops.Trigger.TriggerReceive= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const next = op.outTrigger("Triggered");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.setUiAttribs({ "_triggerSelect": true });

updateVarNamesDropdown();
op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

let oldName = null;

function doTrigger()
{
    next.trigger();
}

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        let vars = op.patch.namedTriggers;

        for (let i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

op.varName.onChange = function ()
{
    if (oldName)
    {
        let oldCbs = op.patch.namedTriggers[oldName];
        let a = oldCbs.indexOf(doTrigger);
        if (a != -1) oldCbs.splice(a, 1);
    }

    op.setTitle(">" + op.varName.get());
    op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
    let cbs = op.patch.namedTriggers[op.varName.get()];

    cbs.push(doTrigger);
    oldName = op.varName.get();
    updateError();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
};

op.on("uiParamPanel", updateError);

function updateError()
{
    if (!op.varName.get())
    {
        op.setUiError("unknowntrigger", "unknown trigger");
    }
    else op.setUiError("unknowntrigger", null);
}

}
};

CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};




// **************************************************************
// 
// Ops.Trigger.TriggerIfIncreased
// 
// **************************************************************

Ops.Trigger.TriggerIfIncreased= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    value = op.inFloat("Value"),
    trigger = op.outTrigger("Trigger");

let lastValue = -Number.MAX_VALUE;

value.onChange = function ()
{
    const v = value.get();
    if (v > lastValue)
    {
        trigger.trigger();
    }
    lastValue = v;
};

}
};

CABLES.OPS["bc820891-48c7-4287-9b5e-4196e192741b"]={f:Ops.Trigger.TriggerIfIncreased,objName:"Ops.Trigger.TriggerIfIncreased"};




// **************************************************************
// 
// Ops.Trigger.TriggerIfDecreased
// 
// **************************************************************

Ops.Trigger.TriggerIfDecreased= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    value = op.inValue("Value"),
    trigger = op.outTrigger("Trigger");

let lastValue = -Number.MAX_VALUE;

value.onChange = function ()
{
    const v = value.get();
    if (v < lastValue)
    {
        trigger.trigger();
    }
    lastValue = v;
};

}
};

CABLES.OPS["16ec4069-3682-461e-95ff-1d86e3f44512"]={f:Ops.Trigger.TriggerIfDecreased,objName:"Ops.Trigger.TriggerIfDecreased"};




// **************************************************************
// 
// Ops.Gl.Shader.MatCapMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.MatCapMaterial_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"matcap_frag":"{{MODULES_HEAD}}\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 texCoord;\r\n#endif\r\n\r\nIN vec3 transformedNormal;\r\nIN vec3 viewSpacePosition;\r\n\r\nUNI vec4 inColor;\r\n\r\nUNI sampler2D texMatcap;\r\n\r\n#ifdef HAS_DIFFUSE_TEXTURE\r\n   UNI sampler2D texDiffuse;\r\n#endif\r\n\r\n#ifdef USE_SPECULAR_TEXTURE\r\n   UNI sampler2D texSpec;\r\n   UNI sampler2D texSpecMatCap;\r\n#endif\r\n\r\n#ifdef HAS_AO_TEXTURE\r\n    UNI sampler2D texAo;\r\n    UNI float aoIntensity;\r\n#endif\r\n\r\n#ifdef HAS_NORMAL_TEXTURE\r\n    IN vec3 vBiTangent;\r\n    IN vec3 vTangent;\r\n    IN mat3 normalMatrix;\r\n\r\n    UNI sampler2D texNormal;\r\n    UNI float normalMapIntensity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    UNI sampler2D texOpacity;\r\n#endif\r\n\r\n#ifdef CALC_SSNORMALS\r\n    IN vec3 eye_relative_pos;\r\n\r\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\r\n    vec3 CalculateScreenSpaceNormals() {\r\n    \tvec3 dFdxPos = dFdx(eye_relative_pos);\r\n    \tvec3 dFdyPos = dFdy(eye_relative_pos);\r\n    \tvec3 screenSpaceNormal = normalize( cross(dFdxPos, dFdyPos));\r\n        return normalize(screenSpaceNormal);\r\n    }\r\n#endif\r\n\r\n// * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\r\nvec2 getMatCapUV(vec3 viewSpacePosition, vec3 normal) {\r\n    vec3 viewDir = normalize(-viewSpacePosition);\r\n\tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\r\n\tvec3 y = normalize(cross(viewDir, x));\r\n\tvec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\r\n\treturn uv;\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec3 normal = normalize(transformedNormal);\r\n    {{MODULE_NORMAL}}\r\n\r\n\r\n\r\n    #ifdef HAS_TEXTURES\r\n        vec2 texCoords = texCoord;\r\n        {{MODULE_BEGIN_FRAG}}\r\n    #endif\r\n\r\n\r\n\r\n    #ifdef DOUBLE_SIDED\r\n        if(!gl_FrontFacing) normal *= -1.0;\r\n    #endif\r\n\r\n    #ifdef CALC_SSNORMALS\r\n        normal = CalculateScreenSpaceNormals();\r\n    #endif\r\n\r\n\r\n\r\n   #ifdef HAS_NORMAL_TEXTURE\r\n        vec3 normalFromMap = texture( texNormal, texCoord ).xyz * 2.0 - 1.0;\r\n        normalFromMap = normalize(normalFromMap);\r\n\r\n        vec3 tangent;\r\n        vec3 binormal;\r\n\r\n        #ifdef CALC_TANGENT\r\n            vec3 c1 = cross(normalFromMap, vec3(0.0, 0.0, 1.0));\r\n            vec3 c2 = cross(normalFromMap, vec3(0.0, 1.0, 0.0));\r\n\r\n            tangent = c1;\r\n            tangent = normalize(tangent);\r\n            binormal = cross(normal, tangent);\r\n            binormal = normalize(binormal);\r\n        #endif\r\n\r\n        #ifndef CALC_TANGENT\r\n            tangent = normalize(normalMatrix * vTangent);\r\n            vec3 bitangent = normalize(normalMatrix * vBiTangent);\r\n            binormal = normalize(cross(normal, bitangent));\r\n        #endif\r\n\r\n        normalFromMap = normalize(\r\n            tangent * normalFromMap.x\r\n            + binormal * normalFromMap.y\r\n            + normal * normalFromMap.z\r\n        );\r\n\r\n        vec3 mixedNormal = normalize(normal + normalFromMap * normalMapIntensity);\r\n\r\n        normal = mixedNormal;\r\n    #endif\r\n\r\n    vec4 col = texture(texMatcap, getMatCapUV(viewSpacePosition, normal));\r\n\r\n    #ifdef HAS_DIFFUSE_TEXTURE\r\n        col = col*texture(texDiffuse, texCoords);\r\n    #endif\r\n\r\n    col.rgb *= inColor.rgb;\r\n\r\n\r\n    #ifdef HAS_AO_TEXTURE\r\n        col = col\r\n            * mix(\r\n                vec4(1.0,1.0,1.0,1.0),\r\n                texture(texAo, texCoords),\r\n                aoIntensity\r\n            );\r\n    #endif\r\n\r\n    #ifdef USE_SPECULAR_TEXTURE\r\n        vec4 spec = texture(texSpecMatCap, getMatCapUV(viewSpacePosition, normal));\r\n        spec *= texture(texSpec, texCoords);\r\n        col += spec;\r\n    #endif\r\n\r\n    col.a *= inColor.a;\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        #ifdef TRANSFORMALPHATEXCOORDS\r\n            texCoords=vec2(texCoord.s,1.0-texCoord.t);\r\n            texCoords.y = 1. - texCoords.y;\r\n        #endif\r\n        #ifdef ALPHA_MASK_ALPHA\r\n            col.a*=texture(texOpacity,texCoords).a;\r\n        #endif\r\n        #ifdef ALPHA_MASK_LUMI\r\n            col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,texCoords).rgb);\r\n        #endif\r\n        #ifdef ALPHA_MASK_R\r\n            col.a*=texture(texOpacity,texCoords).r;\r\n        #endif\r\n        #ifdef ALPHA_MASK_G\r\n            col.a*=texture(texOpacity,texCoords).g;\r\n        #endif\r\n        #ifdef ALPHA_MASK_B\r\n            col.a*=texture(texOpacity,texCoords).b;\r\n        #endif\r\n\r\n        #ifdef DISCARDTRANS\r\n            if(col.a < 0.2) discard;\r\n        #endif\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    outColor = col;\r\n}","matcap_vert":"IN vec3 vPosition;\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 attrTexCoord;\r\n#endif\r\n\r\nIN vec3 attrVertNormal;\r\nIN float attrVertIndex;\r\n\r\n#ifdef HAS_NORMAL_TEXTURE\r\n    IN vec3 attrTangent;\r\n    IN vec3 attrBiTangent;\r\n    OUT vec3 vBiTangent;\r\n    OUT vec3 vTangent;\r\n#endif\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI vec3 camPos;\r\n\r\n#ifdef HAS_TEXTURES\r\n    UNI vec2 texOffset;\r\n    UNI vec2 texRepeat;\r\n    OUT vec2 texCoord;\r\n#endif\r\n\r\nOUT mat3 normalMatrix;\r\nOUT vec3 viewSpacePosition;\r\nOUT vec3 transformedNormal;\r\n\r\n{{MODULES_HEAD}}\r\n\r\n#ifdef CALC_SSNORMALS\r\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\r\n    OUT vec3 eye_relative_pos;\r\n#endif\r\n\r\nmat3 transposeMat3(mat3 m) {\r\n    return mat3(m[0][0], m[1][0], m[2][0],\r\n        m[0][1], m[1][1], m[2][1],\r\n        m[0][2], m[1][2], m[2][2]);\r\n}\r\n\r\n mat3 inverseMat3(mat3 m) {\r\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\r\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\r\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\r\n\r\n    float b01 = a22 * a11 - a12 * a21;\r\n    float b11 = -a22 * a10 + a12 * a20;\r\n    float b21 = a21 * a10 - a11 * a20;\r\n\r\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\r\n\r\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\r\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\r\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\r\n}\r\n\r\nvoid main()\r\n{\r\n    #ifdef HAS_TEXTURES\r\n        texCoord = texRepeat * vec2(attrTexCoord.x, attrTexCoord.y) + texOffset;\r\n        texCoord.y = 1. - texCoord.y;\r\n    #endif\r\n\r\n    mat4 mMatrix = modelMatrix;\r\n    mat4 mvMatrix;\r\n\r\n    #ifdef HAS_NORMAL_TEXTURE\r\n        vec3 tangent = attrTangent;\r\n        vec3 bitangent = attrBiTangent;\r\n        vTangent = attrTangent;\r\n        vBiTangent = attrBiTangent;\r\n    #endif\r\n\r\n    vec4 pos = vec4(vPosition, 1.);\r\n    vec3 norm = attrVertNormal;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    mvMatrix = viewMatrix * mMatrix;\r\n    vec3 normal = norm;\r\n\r\n    normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\r\n\r\n    vec3 fragPos = vec3((mvMatrix) * pos);\r\n    viewSpacePosition = normalize(fragPos);\r\n\r\n    #ifdef CALC_SSNORMALS\r\n        eye_relative_pos = -(vec3(viewMatrix * vec4(camPos, 1.)) - fragPos);\r\n    #endif\r\n\r\n    transformedNormal = normalize(mat3(normalMatrix) * normal);\r\n\r\n    mat4 modelViewMatrix=mvMatrix;\r\n    {{MODULE_VERTEX_MODELVIEW}}\r\n\r\n    gl_Position = projMatrix * modelViewMatrix * pos;\r\n\r\n}\r\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("Render"),
    textureMatcap = op.inTexture("MatCap"),
    textureDiffuse = op.inTexture("Diffuse"),
    textureNormal = op.inTexture("Normal"),
    textureSpec = op.inTexture("Specular Mask"),
    textureSpecMatCap = op.inTexture("Specular MatCap"),
    textureAo = op.inTexture("AO Texture"),
    textureOpacity = op.inTexture("Opacity Texture"),
    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    pOpacity = op.inValueSlider("Opacity", 1),
    aoIntensity = op.inValueSlider("AO Intensity", 1.0),
    normalMapIntensity = op.inFloatSlider("Normal Map Intensity", 1),
    repeatX = op.inValue("Repeat X", 1),
    repeatY = op.inValue("Repeat Y", 1),
    offsetX = op.inValue("Offset X", 0),
    offsetY = op.inValue("Offset Y", 0),
    inDoubleSided = op.inValueBool("Double Sided"),
    ssNormals = op.inValueBool("Screen Space Normals"),
    calcTangents = op.inValueBool("Calc normal tangents", true),
    texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false),
    discardTransPxl = op.inValueBool("Discard Transparent Pixels"),

    next = op.outTrigger("Next"),
    shaderOut = op.outObject("Shader");

r.setUiAttribs({ "colorPick": true });

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });

op.setPortGroup("Normals", [calcTangents, ssNormals, inDoubleSided]);
op.setPortGroup("Texture Opacity", [alphaMaskSource, texCoordAlpha, discardTransPxl]);
op.setPortGroup("Texture Transforms", [aoIntensity, normalMapIntensity, repeatX, repeatY, offsetX, offsetY]);
op.setPortGroup("Texture Maps", [textureDiffuse, textureNormal, textureSpec, textureSpecMatCap, textureAo, textureOpacity]);
op.setPortGroup("Color", [r, g, b, pOpacity]);

const shader = new CGL.Shader(cgl, "MatCapMaterialNew3");
const uniOpacity = new CGL.Uniform(shader, "f", "opacity", pOpacity);

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_NORMAL", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
shader.setSource(attachments.matcap_vert, attachments.matcap_frag);
shaderOut.setRef(shader);

const textureMatcapUniform = new CGL.Uniform(shader, "t", "texMatcap");
let textureDiffuseUniform = null;
let textureNormalUniform = null;
let normalMapIntensityUniform = null;
let textureSpecUniform = null;
let textureSpecMatCapUniform = null;
let textureAoUniform = null;
const offsetUniform = new CGL.Uniform(shader, "2f", "texOffset", offsetX, offsetY);
const repeatUniform = new CGL.Uniform(shader, "2f", "texRepeat", repeatX, repeatY);

const aoIntensityUniform = new CGL.Uniform(shader, "f", "aoIntensity", aoIntensity);
const colorUniform = new CGL.Uniform(shader, "4f", "inColor", r, g, b, pOpacity);

inDoubleSided.onChange =
calcTangents.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("DOUBLE_SIDED", inDoubleSided.get());

    if (calcTangents.get()) shader.define("CALC_TANGENT");
    else shader.removeDefine("CALC_TANGENT");
}

ssNormals.onChange = function ()
{
    if (ssNormals.get())
    {
        if (cgl.glVersion < 2)
        {
            cgl.gl.getExtension("OES_standard_derivatives");
            shader.enableExtension("GL_OES_standard_derivatives");
        }

        shader.define("CALC_SSNORMALS");
    }
    else shader.removeDefine("CALC_SSNORMALS");
};

textureMatcap.onChange = updateMatcap;

function updateMatcap()
{
    if (!cgl.defaultMatcapTex3)
    {
        const pixels = new Uint8Array(256 * 4);
        for (let x = 0; x < 16; x++)
        {
            for (let y = 0; y < 16; y++)
            {
                let c = y * 16;
                c *= Math.min(1, (x + y / 3) / 8);
                pixels[(x + y * 16) * 4 + 0] = pixels[(x + y * 16) * 4 + 1] = pixels[(x + y * 16) * 4 + 2] = c;
                pixels[(x + y * 16) * 4 + 3] = 255;
            }
        }

        cgl.defaultMatcapTex3 = new CGL.Texture(cgl);
        cgl.defaultMatcapTex3.initFromData(pixels, 16, 16, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);
    }
}

textureDiffuse.onChange = function ()
{
    if (textureDiffuse.get())
    {
        if (textureDiffuseUniform !== null) return;
        shader.define("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeDefine("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = null;
    }
};

textureNormal.onChange = function ()
{
    if (textureNormal.get())
    {
        if (textureNormalUniform !== null) return;
        shader.define("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = new CGL.Uniform(shader, "t", "texNormal");
        if (!normalMapIntensityUniform) normalMapIntensityUniform = new CGL.Uniform(shader, "f", "normalMapIntensity", normalMapIntensity);
    }
    else
    {
        shader.removeDefine("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = null;
    }
};

textureAo.onChange = function ()
{
    if (textureAo.get())
    {
        if (textureAoUniform !== null) return;
        shader.define("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = new CGL.Uniform(shader, "t", "texAo");
    }
    else
    {
        shader.removeDefine("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = null;
    }
};

textureSpec.onChange = textureSpecMatCap.onChange = function ()
{
    if (textureSpec.get() && textureSpecMatCap.get())
    {
        if (textureSpecUniform !== null) return;
        shader.define("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = new CGL.Uniform(shader, "t", "texSpec");
        textureSpecMatCapUniform = new CGL.Uniform(shader, "t", "texSpecMatCap");
    }
    else
    {
        shader.removeDefine("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = null;
        textureSpecMatCapUniform = null;
    }
};

// TEX OPACITY

function updateAlphaMaskMethod()
{
    if (alphaMaskSource.get() == "Alpha Channel") shader.define("ALPHA_MASK_ALPHA");
    else shader.removeDefine("ALPHA_MASK_ALPHA");

    if (alphaMaskSource.get() == "Luminance") shader.define("ALPHA_MASK_LUMI");
    else shader.removeDefine("ALPHA_MASK_LUMI");

    if (alphaMaskSource.get() == "R") shader.define("ALPHA_MASK_R");
    else shader.removeDefine("ALPHA_MASK_R");

    if (alphaMaskSource.get() == "G") shader.define("ALPHA_MASK_G");
    else shader.removeDefine("ALPHA_MASK_G");

    if (alphaMaskSource.get() == "B") shader.define("ALPHA_MASK_B");
    else shader.removeDefine("ALPHA_MASK_B");
}

alphaMaskSource.onChange = updateAlphaMaskMethod;
textureOpacity.onChange = updateOpacity;

let textureOpacityUniform = null;

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform) textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");

        alphaMaskSource.setUiAttribs({ "greyout": false });
        discardTransPxl.setUiAttribs({ "greyout": false });
        texCoordAlpha.setUiAttribs({ "greyout": false });
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;

        alphaMaskSource.setUiAttribs({ "greyout": true });
        discardTransPxl.setUiAttribs({ "greyout": true });
        texCoordAlpha.setUiAttribs({ "greyout": true });
    }
    updateAlphaMaskMethod();
}

discardTransPxl.onChange = function ()
{
    if (discardTransPxl.get()) shader.define("DISCARDTRANS");
    else shader.removeDefine("DISCARDTRANS");
};

texCoordAlpha.onChange = function ()
{
    if (texCoordAlpha.get()) shader.define("TRANSFORMALPHATEXCOORDS");
    else shader.removeDefine("TRANSFORMALPHATEXCOORDS");
};

function checkUiErrors()
{
    if (textureSpec.get() && !textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", "You connected a specular texture but have not connected a specular matcap texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else if (!textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("noSpecMatCapSpec", "You connected a specular matcap texture but have not connected a specular texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("specNoMatCapSpec", null);
    }
    else if (textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
}

render.onTriggered = function ()
{
    checkUiErrors();

    if (!cgl.defaultMatcapTex3) updateMatcap();
    shader.popTextures();

    const tex = textureMatcap.get() || cgl.defaultMatcapTex3;
    shader.pushTexture(textureMatcapUniform, tex.tex);

    if (textureDiffuse.get() && textureDiffuseUniform) shader.pushTexture(textureDiffuseUniform, textureDiffuse.get().tex);
    if (textureNormal.get() && textureNormalUniform) shader.pushTexture(textureNormalUniform, textureNormal.get().tex);
    if (textureSpec.get() && textureSpecUniform) shader.pushTexture(textureSpecUniform, textureSpec.get().tex);
    if (textureSpecMatCap.get() && textureSpecMatCapUniform) shader.pushTexture(textureSpecMatCapUniform, textureSpecMatCap.get().tex);
    if (textureAo.get() && textureAoUniform) shader.pushTexture(textureAoUniform, textureAo.get().tex);
    if (textureOpacity.get() && textureOpacityUniform) shader.pushTexture(textureOpacityUniform, textureOpacity.get().tex);

    cgl.pushShader(shader);
    next.trigger();
    cgl.popShader();
};

}
};

CABLES.OPS["c1dd6e76-61b4-471a-b8d1-f550a5a9a4f4"]={f:Ops.Gl.Shader.MatCapMaterial_v3,objName:"Ops.Gl.Shader.MatCapMaterial_v3"};




// **************************************************************
// 
// Ops.Gl.Texture_v2
// 
// **************************************************************

Ops.Gl.Texture_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    filename = op.inUrl("File", [".jpg", ".png", ".webp", ".jpeg", ".avif"]),
    tfilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"]),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),
    dataFrmt = op.inSwitch("Data Format", ["R", "RG", "RGB", "RGBA", "SRGBA"], "RGBA"),
    flip = op.inValueBool("Flip", false),
    unpackAlpha = op.inValueBool("Pre Multiplied Alpha", false),
    active = op.inValueBool("Active", true),
    inFreeMemory = op.inBool("Save Memory", true),
    textureOut = op.outTexture("Texture"),
    addCacheBust = op.inBool("Add Cachebuster", false),
    inReload = op.inTriggerButton("Reload"),
    width = op.outNumber("Width"),
    height = op.outNumber("Height"),
    ratio = op.outNumber("Aspect Ratio"),
    loaded = op.outBoolNum("Loaded", 0),
    loading = op.outBoolNum("Loading", 0);

const cgl = op.patch.cgl;

op.toWorkPortsNeedToBeLinked(textureOut);
op.setPortGroup("Size", [width, height]);

let loadedFilename = null;
let loadingId = null;
let tex = null;
let cgl_filter = CGL.Texture.FILTER_MIPMAP;
let cgl_wrap = CGL.Texture.WRAP_REPEAT;
let cgl_aniso = 0;
let timedLoader = 0;

unpackAlpha.setUiAttribs({ "hidePort": true });
unpackAlpha.onChange =
    filename.onChange =
    dataFrmt.onChange =
    addCacheBust.onChange =
    flip.onChange = reloadSoon;
aniso.onChange = tfilter.onChange = onFilterChange;
wrap.onChange = onWrapChange;

tfilter.set("mipmap");
wrap.set("repeat");

textureOut.setRef(CGL.Texture.getEmptyTexture(cgl));

inReload.onTriggered = reloadSoon;

active.onChange = function ()
{
    if (active.get())
    {
        if (loadedFilename != filename.get() || !tex) reloadSoon();
        else textureOut.setRef(tex);
    }
    else
    {
        textureOut.setRef(CGL.Texture.getEmptyTexture(cgl));
        width.set(CGL.Texture.getEmptyTexture(cgl).width);
        height.set(CGL.Texture.getEmptyTexture(cgl).height);
        if (tex)tex.delete();
        op.setUiAttrib({ "extendTitle": "" });
        tex = null;
    }
};

const setTempTexture = function ()
{
    const t = CGL.Texture.getTempTexture(cgl);
    textureOut.setRef(t);
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function ()
    {
        realReload(nocache);
    }, 1);
}

function getPixelFormat()
{
    if (dataFrmt.get() == "R") return CGL.Texture.PFORMATSTR_R8UB;
    if (dataFrmt.get() == "RG") return CGL.Texture.PFORMATSTR_RG8UB;
    if (dataFrmt.get() == "RGB") return CGL.Texture.PFORMATSTR_RGB8UB;
    if (dataFrmt.get() == "SRGBA") return CGL.Texture.PFORMATSTR_SRGBA8;

    return CGL.Texture.PFORMATSTR_RGBA8UB;
}

function realReload(nocache)
{
    op.checkMainloopExists();
    if (!active.get()) return;
    if (loadingId)loadingId = cgl.patch.loading.finished(loadingId);

    loadingId = cgl.patch.loading.start(op.objName, filename.get(), op);

    let url = op.patch.getFilePath(String(filename.get()));

    if (addCacheBust.get() || nocache === true) url = CABLES.cacheBust(url);

    if (String(filename.get()).indexOf("data:") == 0) url = filename.get();

    let needsRefresh = false;
    loadedFilename = filename.get();

    if ((filename.get() && filename.get().length > 1))
    {
        loaded.set(false);
        loading.set(true);

        const fileToLoad = filename.get();

        op.setUiAttrib({ "extendTitle": CABLES.basename(url) });
        if (needsRefresh) op.refreshParams();

        cgl.patch.loading.addAssetLoadingTask(() =>
        {
            op.setUiError("urlerror", null);
            CGL.Texture.load(cgl, url, function (err, newTex)
            {
                cgl.checkFrameStarted("texture inittexture");

                if (filename.get() != fileToLoad)
                {
                    loadingId = cgl.patch.loading.finished(loadingId);
                    return;
                }

                if (tex)tex.delete();

                if (err)
                {
                    const t = CGL.Texture.getErrorTexture(cgl);
                    textureOut.setRef(t);

                    op.setUiError("urlerror", "could not load texture: \"" + filename.get() + "\"", 2);
                    loadingId = cgl.patch.loading.finished(loadingId);
                    return;
                }

                // textureOut.setRef(newTex);

                width.set(newTex.width);
                height.set(newTex.height);
                ratio.set(newTex.width / newTex.height);

                // if (!newTex.isPowerOfTwo()) op.setUiError("npot", "Texture dimensions not power of two! - Texture filtering will not work in WebGL 1.", 0);
                // else op.setUiError("npot", null);

                tex = newTex;
                // textureOut.setRef(null);
                textureOut.setRef(tex);

                loading.set(false);
                loaded.set(true);

                if (inFreeMemory.get()) tex.image = null;

                if (loadingId)
                {
                    loadingId = cgl.patch.loading.finished(loadingId);
                }
                op.checkMainloopExists();
            }, {
                "anisotropic": cgl_aniso,
                "wrap": cgl_wrap,
                "flip": flip.get(),
                "unpackAlpha": unpackAlpha.get(),
                "pixelFormat": getPixelFormat(),
                "filter": cgl_filter
            });

            op.checkMainloopExists();
        });
    }
    else
    {
        setTempTexture();
        loadingId = cgl.patch.loading.finished(loadingId);
    }
}

function onFilterChange()
{
    if (tfilter.get() == "nearest") cgl_filter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") cgl_filter = CGL.Texture.FILTER_MIPMAP;
    else if (tfilter.get() == "Anisotropic") cgl_filter = CGL.Texture.FILTER_ANISOTROPIC;
    aniso.setUiAttribs({ "greyout": cgl_filter != CGL.Texture.FILTER_MIPMAP });

    cgl_aniso = parseFloat(aniso.get());

    reloadSoon();
}

function onWrapChange()
{
    if (wrap.get() == "repeat") cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    reloadSoon();
}

op.onFileChanged = function (fn)
{
    if (filename.get() && filename.get().indexOf(fn) > -1)
    {
        textureOut.setRef(CGL.Texture.getEmptyTexture(op.patch.cgl));
        textureOut.setRef(CGL.Texture.getTempTexture(cgl));
        realReload(true);
    }
};

}
};

CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetTexture_v2
// 
// **************************************************************

Ops.Vars.VarSetTexture_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inTexture("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);

}
};

CABLES.OPS["4fbfc71e-1429-439f-8591-ad35961252ed"]={f:Ops.Vars.VarSetTexture_v2,objName:"Ops.Vars.VarSetTexture_v2"};




// **************************************************************
// 
// Ops.String.SwitchString
// 
// **************************************************************

Ops.String.SwitchString= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    idx=op.inValueInt("Index"),
    result=op.outString("Result");

const valuePorts=[];

idx.onChange=update;

for(var i=0;i<10;i++)
{
    var p=op.inString("String "+i);
    valuePorts.push( p );
    p.onChange=update;
}

function update()
{
    if(idx.get()>=0 && valuePorts[idx.get()])
    {
        result.set( valuePorts[idx.get()].get() );
    }
}
}
};

CABLES.OPS["2a7a0c68-f7c9-4249-b19a-d2de5cb4862c"]={f:Ops.String.SwitchString,objName:"Ops.String.SwitchString"};




// **************************************************************
// 
// Ops.Number.SwitchNumberOnTrigger
// 
// **************************************************************

Ops.Number.SwitchNumberOnTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    currentVal = op.outNumber("Value"),
    oldVal = op.outNumber("Last Value"),
    triggered = op.outTrigger("Triggered");

let triggers = [];
let inVals = [];
let inExes = [];

function onTrigger()
{
    oldVal.set(currentVal.get());
    currentVal.set(inVals[this.slot].get());
    triggered.trigger();
}

let num = 8;
for (let i = 0; i < num; i++)
{
    let newExe = op.addInPort(new CABLES.Port(op, "Trigger " + i, CABLES.OP_PORT_TYPE_FUNCTION));
    newExe.slot = i;
    newExe.onTriggered = onTrigger.bind(newExe);
    let newVal = op.addInPort(new CABLES.Port(op, "Value " + i, CABLES.OP_PORT_TYPE_VALUE));
    inVals.push(newVal);
}

let defaultVal = op.inValueString("Default Value");

currentVal.set(defaultVal.get());
oldVal.set(defaultVal.get());

defaultVal.onChange = function ()
{
    oldVal.set(currentVal.get());
    currentVal.set(defaultVal.get());
};

}
};

CABLES.OPS["338032c5-bf47-454b-8ae1-cd91f17e5c5b"]={f:Ops.Number.SwitchNumberOnTrigger,objName:"Ops.Number.SwitchNumberOnTrigger"};




// **************************************************************
// 
// Ops.Boolean.Or
// 
// **************************************************************

Ops.Boolean.Or= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    bool0 = op.inValueBool("bool 1"),
    bool1 = op.inValueBool("bool 2"),
    bool2 = op.inValueBool("bool 3"),
    bool3 = op.inValueBool("bool 4"),
    bool4 = op.inValueBool("bool 5"),
    bool5 = op.inValueBool("bool 6"),
    bool6 = op.inValueBool("bool 7"),
    bool7 = op.inValueBool("bool 8"),
    bool8 = op.inValueBool("bool 9"),
    bool9 = op.inValueBool("bool 10"),
    result = op.outBoolNum("result");

bool0.onChange =
    bool1.onChange =
    bool2.onChange =
    bool3.onChange =
    bool4.onChange =
    bool5.onChange =
    bool6.onChange =
    bool7.onChange =
    bool8.onChange =
    bool9.onChange = exec;

function exec()
{
    result.set(bool0.get() || bool1.get() || bool2.get() || bool3.get() || bool4.get() || bool5.get() || bool6.get() || bool7.get() || bool8.get() || bool9.get());
}

}
};

CABLES.OPS["b3b36238-4592-4e11-afe3-8361c4fd6be5"]={f:Ops.Boolean.Or,objName:"Ops.Boolean.Or"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ImageCompose_v4
// 
// **************************************************************

Ops.Gl.ImageCompose.ImageCompose_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"imgcomp_frag":"IN vec2 texCoord;\r\nUNI vec4 bgColor;\r\nUNI sampler2D tex;\r\n#ifdef USE_UVTEX\r\nUNI sampler2D UVTex;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\r\n    #ifndef USE_TEX\r\n        outColor=bgColor;\r\n    #endif\r\n    #ifdef USE_TEX\r\n        #ifndef USE_UVTEX\r\n        outColor=texture(tex,texCoord);\r\n        #else\r\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\r\n        #endif\r\n    #endif\r\n\r\n\r\n\r\n}\r\n",};
const
    cgl = op.patch.cgl,
    render = op.inTrigger("Render"),
    inTex = op.inTexture("Base Texture"),
    inUVTex = op.inTexture("UV Texture"),
    inSize = op.inSwitch("Size", ["Auto", "Canvas", "Manual"], "Auto"),
    width = op.inValueInt("Width", 640),
    height = op.inValueInt("Height", 480),
    inFilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
    inWrap = op.inValueSelect("Wrap", ["clamp to edge", "repeat", "mirrored repeat"], "repeat"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),

    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),

    inClear = op.inBool("Clear", true),
    r = op.inValueSlider("R", 0),
    g = op.inValueSlider("G", 0),
    b = op.inValueSlider("B", 0),
    a = op.inValueSlider("A", 0),

    trigger = op.outTrigger("Next"),
    texOut = op.outTexture("texture_out", CGL.Texture.getEmptyTexture(cgl)),
    outRatio = op.outNumber("Aspect Ratio"),
    outWidth = op.outNumber("Texture Width"),
    outHeight = op.outNumber("Texture Height");

op.setPortGroup("Texture Size", [inSize, width, height]);
op.setPortGroup("Texture Parameters", [inWrap, aniso, inFilter, inPixelFormat]);

r.setUiAttribs({ "colorPick": true });
op.setPortGroup("Color", [r, g, b, a, inClear]);

op.toWorkPortsNeedToBeLinked(render);

const prevViewPort = [0, 0, 0, 0];
let effect = null;
let tex = null;
let reInitEffect = true;
let isFloatTex = false;
let copyShader = null;
let copyShaderTexUni = null;
let copyShaderUVTexUni = null;
let copyShaderRGBAUni = null;

inWrap.onChange =
inFilter.onChange =
aniso.onChange =
inPixelFormat.onChange = reInitLater;

inTex.onLinkChanged =
inClear.onChange =
    inSize.onChange =
    inUVTex.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function initEffect()
{
    if (effect)effect.delete();
    if (tex)tex.delete();
    tex = null;
    effect = new CGL.TextureEffect(cgl, { "isFloatingPointTexture": CGL.Texture.isPixelFormatFloat(inPixelFormat.get()), "name": op.name });

    const cgl_aniso = Math.min(cgl.maxAnisotropic, parseFloat(aniso.get()));

    tex = new CGL.Texture(cgl,
        {
            "anisotropic": cgl_aniso,
            "name": "image_compose_v2_" + op.id,
            "pixelFormat": inPixelFormat.get(),
            "filter": getFilter(),
            "wrap": getWrap(),
            "width": getWidth(),
            "height": getHeight()
        });

    effect.setSourceTexture(tex);

    outWidth.set(getWidth());
    outHeight.set(getHeight());
    outRatio.set(getWidth() / getHeight());

    texOut.setRef(CGL.Texture.getEmptyTexture(cgl));

    reInitEffect = false;
    updateUi();
}

function getFilter()
{
    if (inFilter.get() == "nearest") return CGL.Texture.FILTER_NEAREST;
    else if (inFilter.get() == "linear") return CGL.Texture.FILTER_LINEAR;
    else if (inFilter.get() == "mipmap") return CGL.Texture.FILTER_MIPMAP;
}

function getWrap()
{
    if (inWrap.get() == "repeat") return CGL.Texture.WRAP_REPEAT;
    else if (inWrap.get() == "mirrored repeat") return CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (inWrap.get() == "clamp to edge") return CGL.Texture.WRAP_CLAMP_TO_EDGE;
}

function getWidth()
{
    let x = 0;
    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().width;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasWidth;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[2];
    else x = Math.ceil(width.get());
    return op.patch.cgl.checkTextureSize(x);
}

function getHeight()
{
    let x = 0;

    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().height;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasHeight;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[3];
    else x = Math.ceil(height.get());
    return op.patch.cgl.checkTextureSize(x);
}

function reInitLater()
{
    reInitEffect = true;
}

function updateResolution()
{
    if ((
        getWidth() != tex.width ||
        getHeight() != tex.height ||
        // tex.anisotropic != parseFloat(aniso.get()) ||
        // tex.isFloatingPoint() != CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) ||
        tex.pixelFormat != inPixelFormat.get() ||
        tex.filter != getFilter() ||
        tex.wrap != getWrap()
    ) && (getWidth() !== 0 && getHeight() !== 0))
    {
        initEffect();
        effect.setSourceTexture(tex);
        // texOut.set(CGL.Texture.getEmptyTexture(cgl));
        texOut.setRef(tex);
        updateResolutionInfo();
        checkTypes();
    }
}

function updateResolutionInfo()
{
    let info = null;

    if (inSize.get() == "Manual")
    {
        info = null;
    }
    else if (inSize.get() == "Auto")
    {
        if (inTex.get()) info = "Input Texture";
        else info = "Canvas Size";

        info += ": " + getWidth() + " x " + getHeight();
    }

    let changed = false;
    changed = inSize.uiAttribs.info != info;
    inSize.setUiAttribs({ "info": info });
    if (changed)op.refreshParams();
}

function updateDefines()
{
    if (copyShader)copyShader.toggleDefine("USE_TEX", inTex.isLinked() || !inClear.get());
    if (copyShader)copyShader.toggleDefine("USE_UVTEX", inUVTex.isLinked());
}

function updateUi()
{
    aniso.setUiAttribs({ "greyout": getFilter() != CGL.Texture.FILTER_MIPMAP });

    r.setUiAttribs({ "greyout": inTex.isLinked() });
    b.setUiAttribs({ "greyout": inTex.isLinked() });
    g.setUiAttribs({ "greyout": inTex.isLinked() });
    a.setUiAttribs({ "greyout": inTex.isLinked() });

    inClear.setUiAttribs({ "greyout": inTex.isLinked() });
    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });

    // width.setUiAttribs({ "hideParam": inSize.get() != "Manual" });
    // height.setUiAttribs({ "hideParam": inSize.get() != "Manual" });

    if (tex)
        if (CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) && getFilter() == CGL.Texture.FILTER_MIPMAP) op.setUiError("fpmipmap", "Don't use mipmap and 32bit at the same time, many systems do not support this.");
        else op.setUiError("fpmipmap", null);

    updateResolutionInfo();
    updateDefines();
    checkTypes();
}

function checkTypes()
{
    if (tex)
        if (inTex.isLinked() && inTex.get() && (tex.isFloatingPoint() < inTex.get().isFloatingPoint()))
            op.setUiError("textypediff", "Warning: Mixing floating point and non floating point texture can result in data/precision loss", 1);
        else
            op.setUiError("textypediff", null);
}

op.preRender = () =>
{
    doRender();
};

function copyTexture()
{
    if (!copyShader)
    {
        copyShader = new CGL.Shader(cgl, "copytextureshader");
        copyShader.setSource(copyShader.getDefaultVertexShader(), attachments.imgcomp_frag);
        copyShaderTexUni = new CGL.Uniform(copyShader, "t", "tex", 0);
        copyShaderUVTexUni = new CGL.Uniform(copyShader, "t", "UVTex", 1);
        copyShaderRGBAUni = new CGL.Uniform(copyShader, "4f", "bgColor", r, g, b, a);
        updateDefines();
    }

    cgl.pushShader(copyShader);
    cgl.currentTextureEffect.bind();

    if (inTex.get()) cgl.setTexture(0, inTex.get().tex);
    else if (!inClear.get() && texOut.get()) cgl.setTexture(0, texOut.get().tex);
    if (inUVTex.get()) cgl.setTexture(1, inUVTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();
}

function doRender()
{
    if (!effect || reInitEffect) initEffect();

    cgl.pushBlend(false);

    updateResolution();

    const oldEffect = cgl.currentTextureEffect;
    cgl.currentTextureEffect = effect;
    cgl.currentTextureEffect.imgCompVer = 3;
    cgl.currentTextureEffect.width = width.get();
    cgl.currentTextureEffect.height = height.get();
    effect.setSourceTexture(tex);

    effect.startEffect(inTex.get() || CGL.Texture.getEmptyTexture(cgl, isFloatTex), true);
    copyTexture();

    trigger.trigger();

    cgl.pushViewPort(0, 0, width.get(), height.get());

    effect.endEffect();
    texOut.setRef(effect.getCurrentSourceTexture());

    cgl.popViewPort();

    cgl.popBlend();
    cgl.currentTextureEffect = oldEffect;
}

}
};

CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ColorMap_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.ColorMap_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"colormap_frag":"IN vec2 texCoord;\r\nUNI sampler2D tex;\r\nUNI sampler2D gradient;\r\nUNI float pos;\r\nUNI float amount;\r\nUNI float vmin;\r\nUNI float vmax;\r\n\r\n{{CGL.BLENDMODES3}}\r\n\r\n\r\nfloat lumi(vec3 color)\r\n{\r\n   return vec3(dot(vec3(0.2126,0.7152,0.0722), color)).r;\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec4 base=texture(tex,texCoord);\r\n    float a=base.a;\r\n\r\n    base=clamp(base,vmin,vmax);\r\n\r\n    #ifdef METH_LUMI\r\n        vec4 color=texture(gradient,vec2(lumi(base.rgb),pos));\r\n    #endif\r\n\r\n    #ifdef METH_CHANNELS\r\n        vec4 color=vec4(1.0);\r\n        color.r=texture(gradient,vec2(base.r,pos)).r;\r\n        color.g=texture(gradient,vec2(base.g,pos)).g;\r\n        color.b=texture(gradient,vec2(base.b,pos)).b;\r\n    #endif\r\n\r\n    base.a=color.a=a;\r\n\r\n\r\n    outColor=cgl_blendPixel(base,color,amount);\r\n\r\n}\r\n",};
let render = op.inTrigger("render");
let trigger = op.outTrigger("trigger");

const blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal");
const amount = op.inValueSlider("Amount", 1);

let inGradient = op.inTexture("Gradient");
let inMethod = op.inSwitch("Method", ["Luminance", "Channels"], "Luminance");

let inMin = op.inFloatSlider("Min", 0);
let inMax = op.inFloatSlider("Max", 1);

let inPos = op.inValueSlider("Position", 0.5);

op.setPortGroup("Vertical Position", [inMin, inMax, inPos]);

let cgl = op.patch.cgl;
let shader = new CGL.Shader(cgl, op.name, op);
shader.define("METH_LUMI");

shader.setSource(shader.getDefaultVertexShader(), attachments.colormap_frag);
let textureUniform = new CGL.Uniform(shader, "t", "tex", 0);
let textureUniform2 = new CGL.Uniform(shader, "t", "gradient", 1);
let uniPos = new CGL.Uniform(shader, "f", "pos", inPos);
let uniMin = new CGL.Uniform(shader, "f", "vmin", inMin);
let uniMax = new CGL.Uniform(shader, "f", "vmax", inMax);
let uniAmount = new CGL.Uniform(shader, "f", "amount", amount);

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

inMethod.onChange = () =>
{
    shader.toggleDefine("METH_LUMI", inMethod.get() == "Luminance");
    shader.toggleDefine("METH_CHANNELS", inMethod.get() == "Channels");
};

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;
    if (!inGradient.get()) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    cgl.setTexture(1, inGradient.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};

}
};

CABLES.OPS["440c1675-122d-411f-b848-16c60b677120"]={f:Ops.Gl.ImageCompose.ColorMap_v2,objName:"Ops.Gl.ImageCompose.ColorMap_v2"};




// **************************************************************
// 
// Ops.Gl.CubeMap.Skybox
// 
// **************************************************************

Ops.Gl.CubeMap.Skybox= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"skybox_frag":"#define PI 3.14159265358 //97932384626433832795\r\n#define PI_TWO 2. * PI\r\n#define RECIPROCAL_PI 1./PI\r\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\r\n\r\nUNI vec2 expGamma;\r\n\r\n\r\n#ifdef TEX_FORMAT_CUBEMAP\r\n    UNI samplerCube skybox;\r\n    #ifndef WEBGL1\r\n        #define SAMPLETEX texture\r\n    #endif\r\n    #ifdef WEBGL1\r\n        #define SAMPLETEX textureCubeLodEXT\r\n    #endif\r\n#endif\r\n\r\n#ifndef TEX_FORMAT_CUBEMAP\r\n    #define TEX_FORMAT_EQUIRECT\r\n    UNI sampler2D skybox;\r\n    #ifdef WEBGL1\r\n        #ifdef GL_EXT_shader_texture_lod\r\n            #define textureLod texture2DLodEXT\r\n        #endif\r\n    #endif\r\n    #define SAMPLETEX sampleEquirect\r\n\r\n#endif\r\n\r\nIN vec3 worldPos;\r\n\r\nvec4 sampleEquirect(sampler2D tex, vec3 direction,float lod) {\r\n    vec2 sampleUV;\r\n    vec3 newDirection = normalize(direction);\r\n\r\n    sampleUV.x = atan( newDirection.z, newDirection.x ) * RECIPROCAL_PI2 + 0.75;\r\n    sampleUV.y = asin( clamp(newDirection.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\r\n\r\n    return texture(tex, sampleUV);\r\n}\r\n\r\nvec4 sampleEquirect(sampler2D tex, vec3 direction) {\r\n    return sampleEquirect(tex,direction,0.0);\r\n}\r\n\r\nhighp vec3 DecodeRGBE8(highp vec4 rgbe)\r\n{\r\n    highp vec3 vDecoded = rgbe.rgb * pow(2.0, rgbe.a * 255.0-128.0);\r\n    return vDecoded;\r\n}\r\n\r\nvoid main() {\r\n    {{MODULE_BEGIN_FRAG}}\r\n    vec4 col = vec4(1.);\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    vec3 newPos = worldPos;\r\n\r\n    vec4 finalColor;\r\n    #ifndef RGBE\r\n        finalColor = vec4(SAMPLETEX(skybox, newPos,0.0));\r\n    #endif\r\n\r\n    #ifdef RGBE\r\n        finalColor.rgb=DecodeRGBE8(SAMPLETEX(skybox, newPos));\r\n    #endif\r\n\r\n    float gamma=expGamma.x;\r\n    float exposure=expGamma.y;\r\n    finalColor.rgb = vec3(1.0) - exp(-finalColor.rgb * exposure);\r\n\r\n    finalColor.rgb = pow(finalColor.rgb, vec3(1.0 / gamma));\r\n    outColor=vec4(finalColor.rgb,1.0);\r\n\r\n}\r\n","skybox_vert":"{{MODULES_HEAD}}\r\nIN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN vec3 attrVertNormal;\r\nIN float attrVertIndex;\r\n\r\nOUT vec2 texCoord;\r\nOUT vec3 norm;\r\nOUT vec3 worldPos;\r\nUNI mat4 projMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI mat4 modelMatrix;\r\n\r\nvoid main()\r\n{\r\n    texCoord=attrTexCoord;\r\n    norm=attrVertNormal;\r\n    vec4 pos=vec4(vPosition,  1.0);\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    mat4 mMatrix=modelMatrix;\r\n    worldPos = vec3(mMatrix * pos);\r\n    mat4 rotView = mat4(mat3(viewMatrix)); // remove translation from the view matrix\r\n    vec4 clipPos = projMatrix * rotView * pos;\r\n\r\n    gl_Position = clipPos.xyww;\r\n}",};
const
    cgl = op.patch.cgl,
    inTrigger = op.inTrigger("Trigger In"),
    inRender = op.inBool("Render", true),
    inTexture = op.inTexture("Skybox"),
    inRot = op.inFloat("Rotate", 0),

    inRGBE = op.inBool("RGBE Format", false),
    inExposure = op.inFloat("Exposure", 1),
    inGamma = op.inFloat("Gamma", 2.2),

    outTrigger = op.outTrigger("Trigger Out");

const geometry = new CGL.Geometry("unit cube");

geometry.vertices = new Float32Array([
    // * NOTE: tex coords not needed for cubemapping
    -1.0, 1.0, -1.0,
    -1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,
    1.0, 1.0, -1.0,
    -1.0, 1.0, -1.0,

    -1.0, -1.0, 1.0,
    -1.0, -1.0, -1.0,
    -1.0, 1.0, -1.0,
    -1.0, 1.0, -1.0,
    -1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0,

    1.0, -1.0, -1.0,
    1.0, -1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, -1.0,
    1.0, -1.0, -1.0,

    -1.0, -1.0, 1.0,
    -1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, -1.0, 1.0,
    -1.0, -1.0, 1.0,

    -1.0, 1.0, -1.0,
    1.0, 1.0, -1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    -1.0, 1.0, -1.0,

    -1.0, -1.0, -1.0,
    -1.0, -1.0, 1.0,
    1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0
]);

const mesh = new CGL.Mesh(cgl, geometry);
const skyboxShader = new CGL.Shader(cgl, "skybox");
const uniformSkybox = new CGL.Uniform(skyboxShader, "t", "skybox", 0);
const uniExposure = new CGL.Uniform(skyboxShader, "2f", "expGamma", inExposure, inGamma);

if (cgl.glVersion == 1) skyboxShader.enableExtension("GL_EXT_shader_texture_lod");

skyboxShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
skyboxShader.setSource(attachments.skybox_vert, attachments.skybox_frag);
skyboxShader.offScreenPass = true;

inTexture.onChange =
inRGBE.onChange = updateDefines;

updateDefines();

function updateDefines()
{
    skyboxShader.toggleDefine("RGBE", inRGBE.get());
    const b = inTexture.get() && inTexture.get().cubemap;

    skyboxShader.toggleDefine("TEX_FORMAT_CUBEMAP", b);
    skyboxShader.toggleDefine("TEX_FORMAT_EQUIRECT", !b);
}

inTrigger.onTriggered = () =>
{
    if (!inTexture.get() || !inRender.get())
    {
        outTrigger.trigger();
        return;
    }

    skyboxShader.popTextures();

    cgl.pushModelMatrix();

    if (!inTexture.get().cubemap && inTexture.get().filter !== CGL.Texture.FILTER_LINEAR)
        op.setUiError("linearFilter", "If there is a seam in the skybox, try changing the texture filter to linear!", 0);
    else
        op.setUiError("linearFilter", null);

    mat4.rotateY(cgl.mMatrix, cgl.mMatrix, inRot.get() * CGL.DEG2RAD);

    if (inTexture.get().tex)
        skyboxShader.pushTexture(uniformSkybox, inTexture.get().tex);
    else if (inTexture.get().cubemap)
        skyboxShader.pushTexture(uniformSkybox, inTexture.get().cubemap, cgl.gl.TEXTURE_CUBE_MAP);

    mesh.render(skyboxShader);

    cgl.popModelMatrix();
    cgl.popDepthFunc();

    outTrigger.trigger();
};

}
};

CABLES.OPS["97ce1d35-bd7a-43cb-a2bf-5b7e37fb8925"]={f:Ops.Gl.CubeMap.Skybox,objName:"Ops.Gl.CubeMap.Skybox"};




// **************************************************************
// 
// Ops.Math.MapRange
// 
// **************************************************************

Ops.Math.MapRange= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value", 0),
    old_min = op.inValueFloat("old min", 0),
    old_max = op.inValueFloat("old max", 1),
    new_min = op.inValueFloat("new min", 0),
    new_max = op.inValueFloat("new max", 1),
    easing = op.inValueSelect("Easing", ["Linear", "Smoothstep", "Smootherstep"], "Linear"),
    inClamp = op.inBool("Clamp", true),
    result = op.outNumber("result", 0);

op.setPortGroup("Input Range", [old_min, old_max]);
op.setPortGroup("Output Range", [new_min, new_max]);

let doClamp = true;
let ease = 0;
let r = 0;

v.onChange =
    old_min.onChange =
    old_max.onChange =
    new_min.onChange =
    new_max.onChange = exec;

exec();

inClamp.onChange =
() =>
{
    doClamp = inClamp.get();
    exec();
};

easing.onChange = function ()
{
    if (easing.get() == "Smoothstep") ease = 1;
    else if (easing.get() == "Smootherstep") ease = 2;
    else ease = 0;
};

function exec()
{
    const nMin = new_min.get();
    const nMax = new_max.get();
    const oMin = old_min.get();
    const oMax = old_max.get();
    let x = v.get();

    if (doClamp)
    {
        if (x >= Math.max(oMax, oMin))
        {
            result.set(nMax);
            return;
        }
        else
        if (x <= Math.min(oMax, oMin))
        {
            result.set(nMin);
            return;
        }
    }

    let reverseInput = false;
    const oldMin = Math.min(oMin, oMax);
    const oldMax = Math.max(oMin, oMax);
    if (oldMin != oMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(nMin, nMax);
    const newMax = Math.max(nMin, nMax);
    if (newMin != nMin) reverseOutput = true;

    let portion = 0;

    if (reverseInput) portion = (oldMax - x) * (newMax - newMin) / (oldMax - oldMin);
    else portion = (x - oldMin) * (newMax - newMin) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (ease === 0)
    {
        result.set(r);
    }
    else
    if (ease == 1)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * (3 - 2 * x) * (nMax - nMin)); // smoothstep
    }
    else
    if (ease == 2)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * x * (x * (x * 6 - 15) + 10) * (nMax - nMin)); // smootherstep
    }
}

}
};

CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"]={f:Ops.Math.MapRange,objName:"Ops.Math.MapRange"};




// **************************************************************
// 
// Ops.Math.Clamp
// 
// **************************************************************

Ops.Math.Clamp= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValueFloat("val", 0.5),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1),
    ignore = op.inValueBool("ignore outside values"),
    result = op.outNumber("result");

val.onChange = min.onChange = max.onChange = clamp;

function clamp()
{
    if (ignore.get())
    {
        if (val.get() > max.get()) return;
        if (val.get() < min.get()) return;
    }
    result.set(Math.min(Math.max(val.get(), min.get()), max.get()));
}

}
};

CABLES.OPS["cda1a98e-5e16-40bd-9b18-a67e9eaad5a1"]={f:Ops.Math.Clamp,objName:"Ops.Math.Clamp"};




// **************************************************************
// 
// Ops.Anim.Bang
// 
// **************************************************************

Ops.Anim.Bang= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inUpdate = op.inTrigger("update"),
    inBang = op.inTriggerButton("Bang"),
    inDuration = op.inValue("Duration", 0.1),
    invert = op.inBool("Invert", false),
    outTrigger = op.outTrigger("Trigger Out"),
    outValue = op.outNumber("Value");

const anim = new CABLES.Anim();
let startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(inUpdate);

let needsReset = false;

inBang.onTriggered = function ()
{
    needsReset = true;
};

inUpdate.onTriggered = function ()
{
    if (needsReset)
    {
        startTime = CABLES.now();
        anim.clear();
        anim.setValue(0, 1);
        anim.setValue(inDuration.get(), 0);
        needsReset = false;
    }

    const elapsed = (CABLES.now() - startTime) / 1000;
    if (elapsed <= inDuration.get())
    {
        const v = anim.getValue(elapsed);
        if (invert.get()) outValue.set(1.0 - v);
        else outValue.set(v);
    }
    else
    {
        if (invert.get())
        {
            outValue.set(1.0);
        }
        else
        {
            outValue.set(0);
        }
    }

    outTrigger.trigger();
};

}
};

CABLES.OPS["92ca45a7-5b4b-4238-956e-23d79bdc659f"]={f:Ops.Anim.Bang,objName:"Ops.Anim.Bang"};




// **************************************************************
// 
// Ops.Boolean.TriggerChangedTrue
// 
// **************************************************************

Ops.Boolean.TriggerChangedTrue= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
let val = op.inValueBool("Value", false);
let next = op.outTrigger("Next");
let oldVal = 0;

val.onChange = function ()
{
    let newVal = val.get();
    if (!oldVal && newVal)
    {
        oldVal = true;
        next.trigger();
    }
    else
    {
        oldVal = false;
    }
};

}
};

CABLES.OPS["385197e1-8b34-4d1c-897f-d1386d99e3b3"]={f:Ops.Boolean.TriggerChangedTrue,objName:"Ops.Boolean.TriggerChangedTrue"};




// **************************************************************
// 
// Ops.Gl.GradientTexture
// 
// **************************************************************

Ops.Gl.GradientTexture= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// STOP UPDATING THIS OP ... use Ops.Color.GradientColorArray

const inGrad = op.inGradient("Gradient"),
    inDir = op.inValueSelect("Direction", ["X", "XX", "Y", "YY", "XY", "YX", "Radial"], "X"),
    inSmoothstep = op.inValueBool("Smoothstep", false),
    inStep = op.inBool("Step", false),
    inFlip = op.inBool("Flip", false),
    inSRGB = op.inBool("sRGB", false),
    inOklab = op.inBool("Oklab", false),
    inSize = op.inValueInt("Size", 256),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inValueSelect("wrap", ["clamp to edge", "repeat", "mirrored repeat"], "clamp to edge"),
    inNoise = op.inFloatSlider("Dither", 0),
    inGradArray = op.inArray("Gradient Array"),
    inRandom = op.inTriggerButton("Randomize Colors"),
    outTex = op.outTexture("Texture"),
    outColors = op.outArray("Colors", null, 3),
    outColorPos = op.outArray("Colors Pos", null, 1);

const cgl = op.patch.cgl;
let timeout = null;
inGrad.setUiAttribs({ "editShortcut": true });

const bluenoise = [221, 125, 40, 94, 163, 50, 214, 174, 69, 229, 135, 79, 25, 92, 217, 129, 103, 155, 16, 237, 168, 75, 212, 126, 203, 157, 104, 223, 50, 96, 115, 189, 0, 104, 199, 16, 185, 242, 83, 26, 123, 95, 191, 175, 247, 159, 32, 170, 0, 88, 203, 133, 106, 46, 227, 14, 35, 246, 66, 20, 240, 205, 36, 159, 74, 252, 148, 231, 132, 117, 6, 145, 254, 39, 222, 5, 111, 46, 67, 197, 228, 116, 181, 66, 25, 245, 98, 139, 172, 89, 190, 149, 127, 177, 64, 138, 210, 169, 58, 28, 70, 100, 206, 188, 164, 107, 60, 150, 203, 126, 235, 142, 56, 249, 38, 222, 148, 178, 195, 56, 115, 230, 45, 108, 7, 84, 234, 21, 44, 90, 110, 216, 178, 37, 226, 53, 14, 77, 212, 31, 86, 180, 100, 23, 82, 14, 162, 93, 122, 6, 81, 156, 24, 209, 75, 255, 163, 218, 196, 121, 237, 187, 9, 152, 247, 136, 158, 91, 128, 232, 169, 137, 251, 10, 216, 154, 188, 131, 211, 71, 200, 34, 236, 216, 129, 13, 179, 136, 32, 54, 99, 146, 33, 131, 202, 49, 84, 18, 64, 197, 245, 114, 21, 193, 52, 74, 118, 44, 243, 105, 173, 50, 252, 110, 63, 166, 41, 102, 199, 62, 117, 184, 15, 77, 250, 162, 69, 120, 231, 107, 213, 2, 177, 43, 67, 102, 159, 238, 171, 206, 64, 29, 233, 10, 151, 135, 185, 87, 247, 147, 223, 91, 241, 152, 225, 175, 3, 102, 220, 25, 191, 170, 36, 143, 81, 152, 209, 224, 133, 35, 93, 2, 145, 87, 124, 193, 97, 22, 228, 1, 120, 51, 171, 8, 26, 210, 108, 48, 205, 59, 179, 92, 147, 253, 124, 99, 237, 186, 11, 120, 19, 181, 229, 112, 198, 160, 220, 76, 42, 210, 160, 71, 202, 31, 78, 190, 130, 67, 86, 138, 115, 156, 243, 14, 46, 74, 57, 219, 28, 51, 90, 250, 59, 81, 140, 47, 255, 17, 58, 181, 243, 114, 56, 178, 239, 139, 228, 156, 251, 40, 167, 232, 28, 38, 82, 136, 206, 161, 9, 196, 106, 139, 167, 204, 150, 195, 218, 70, 172, 35, 132, 103, 146, 27, 89, 128, 16, 107, 96, 57, 119, 201, 15, 187, 239, 126, 194, 225, 112, 182, 234, 131, 174, 240, 72, 39, 109, 29, 8, 100, 122, 207, 231, 4, 166, 224, 198, 153, 217, 44, 183, 212, 4, 93, 143, 72, 99, 172, 64, 0, 97, 34, 85, 66, 20, 208, 3, 125, 243, 164, 186, 235, 156, 82, 191, 67, 248, 49, 80, 10, 253, 68, 23, 162, 244, 179, 49, 215, 24, 151, 246, 51, 214, 153, 251, 118, 45, 157, 98, 224, 53, 88, 134, 62, 42, 23, 116, 94, 140, 33, 121, 188, 169, 141, 113, 76, 33, 131, 227, 110, 11, 202, 78, 122, 168, 18, 141, 194, 221, 80, 187, 142, 177, 210, 18, 249, 144, 221, 180, 12, 201, 215, 106, 60, 91, 226, 200, 236, 150, 85, 61, 164, 185, 133, 42, 229, 187, 73, 55, 101, 27, 235, 59, 12, 35, 75, 113, 199, 101, 163, 237, 57, 152, 174, 234, 134, 1, 37, 53, 123, 193, 6, 208, 253, 34, 91, 145, 104, 8, 240, 211, 175, 129, 164, 109, 253, 123, 230, 171, 6, 50, 79, 27, 127, 73, 43, 19, 246, 161, 211, 103, 17, 172, 96, 46, 117, 70, 241, 219, 27, 162, 115, 88, 38, 4, 148, 204, 92, 189, 154, 63, 130, 217, 188, 111, 254, 208, 101, 86, 191, 144, 75, 180, 249, 65, 137, 233, 157, 18, 171, 192, 49, 66, 201, 137, 246, 218, 51, 71, 15, 43, 214, 29, 95, 239, 38, 139, 165, 7, 225, 124, 30, 59, 112, 221, 154, 28, 197, 217, 106, 58, 85, 209, 128, 232, 151, 15, 79, 182, 120, 238, 168, 134, 81, 248, 146, 173, 16, 88, 195, 65, 150, 183, 205, 242, 11, 41, 89, 126, 80, 8, 183, 121, 141, 3, 98, 180, 31, 108, 58, 196, 97, 24, 222, 107, 198, 2, 116, 70, 207, 52, 230, 22, 109, 47, 80, 165, 132, 199, 235, 170, 52, 148, 247, 165, 23, 242, 74, 45, 254, 170, 226, 155, 36, 142, 179, 60, 158, 48, 182, 223, 154, 124, 98, 178, 250, 140, 5, 231, 96, 68, 19, 116, 204, 32, 227, 43, 200, 113, 161, 213, 122, 87, 0, 130, 248, 77, 13, 241, 92, 229, 30, 102, 13, 244, 77, 160, 33, 209, 119, 55, 176, 143, 190, 255, 103, 71, 93, 186, 62, 223, 145, 12, 189, 68, 202, 47, 211, 114, 192, 41, 127, 203, 141, 65, 189, 40, 135, 198, 61, 89, 222, 158, 24, 216, 45, 1, 157, 213, 130, 239, 83, 104, 26, 55, 134, 238, 29, 159, 95, 63, 167, 149, 7, 78, 255, 119, 166, 212, 1, 233, 19, 105, 186, 37, 244, 110, 86, 135, 56, 173, 11, 151, 36, 176, 196, 230, 94, 149, 109, 184, 226, 20, 236, 215, 105, 175, 22, 219, 52, 87, 111, 174, 128, 248, 149, 78, 125, 63, 184, 227, 242, 118, 22, 220, 138, 252, 119, 76, 168, 39, 250, 10, 136, 84, 123, 54, 69, 194, 37, 95, 147, 241, 73, 153, 48, 68, 7, 194, 17, 207, 161, 31, 76, 201, 90, 166, 69, 4, 48, 215, 21, 204, 57, 73, 176, 200, 30, 249, 155, 133, 233, 163, 9, 197, 32, 183, 220, 205, 137, 232, 167, 94, 144, 9, 105, 181, 44, 111, 207, 99, 132, 155, 182, 85, 127, 219, 147, 42, 97, 184, 5, 83, 208, 108, 61, 125, 228, 21, 100, 39, 90, 114, 53, 218, 41, 252, 129, 61, 234, 143, 30, 192, 245, 12, 112, 236, 101, 2, 244, 113, 165, 225, 118, 47, 20, 176, 251, 142, 84, 117, 160, 254, 177, 26, 238, 121, 72, 193, 213, 153, 13, 55, 173, 79, 224, 65, 140, 34, 195, 158, 54, 17, 206, 62, 144, 240, 190, 72, 40, 214, 54, 192, 5, 146, 60, 82, 185, 3, 138, 169, 25, 83, 245];
const bluenoiseSize = 32;

inNoise.onChange =
twrap.onChange =
    tfilter.onChange =
    inStep.onChange =
    inFlip.onChange =
    inSRGB.onChange =
    inOklab.onChange =
    inSize.onChange =
    inGrad.onChange =
    inSmoothstep.onChange =
    inDir.onChange =
    inGradArray.onChange = update;

inGrad.set("{\"keys\" : [{\"pos\":0,\"r\":0,\"g\":0,\"b\":0},{\"pos\":1,\"r\":1,\"g\":1,\"b\":1}]}");

op.onLoaded = update;

inRandom.onTriggered = () =>
{
    const keys = parseKeys();
    if (keys)
    {
        keys.forEach((key) =>
        {
            key.r = Math.random();
            key.g = Math.random();
            key.b = Math.random();
        });
        const newKeys = JSON.stringify({ "keys": keys });
        inGrad.set(newKeys);
    }
};

function rgbToOklab(r, g, b)
{
    let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    l = Math.cbrt(l); m = Math.cbrt(m); s = Math.cbrt(s);
    return [
        l * +0.2104542553 + m * +0.7936177850 + s * -0.0040720468,
        l * +1.9779984951 + m * -2.4285922050 + s * +0.4505937099,
        l * +0.0259040371 + m * +0.7827717662 + s * -0.8086757660
    ];
}

function oklabToRGB(L, a, b)
{
    let l = L + a * +0.3963377774 + b * +0.2158037573;
    let m = L + a * -0.1055613458 + b * -0.0638541728;
    let s = L + a * -0.0894841775 + b * -1.2914855480;
    l **= 3; m **= 3; s **= 3;
    let rgb_r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
    let rgb_g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
    let rgb_b = l * -0.0041960863 + m * -0.7034186147 + s * +1.7076147010;
    rgb_r = CABLES.clamp(rgb_r, 0, 1); rgb_g = CABLES.clamp(rgb_g, 0, 1); rgb_b = CABLES.clamp(rgb_b, 0, 1);
    return [rgb_r, rgb_g, rgb_b];
}

function lin2srgb(r, g, b)
{
    r /= 255;
    const thr = 0.0031308;
    let c_loR = 12.92 * r;
    let c_hiR = 1.055 * Math.pow(r, 0.41666) - 0.055;
    return ((r < thr) ? c_loR : c_hiR) * 255;
}

function update()
{
    cgl.addNextFrameOnceCallback(doUpdate);
}

function doUpdate()
{
    const keys = parseKeys();
    if (keys) updateGradient(keys);
}

function parseKeys()
{
    let keys = null;
    op.setUiError("nodata", null);
    op.setUiError("parse", null);

    if (Array.isArray(inGradArray.get()))
    {
        keys = inGradArray.get();
    }
    else
    {
        let grad = null;
        if (!inGrad.get() || inGrad.get() === "")
        {
            // op.setUiError("nodata", "gradient no data");
            return null;
        }

        try
        {
            grad = JSON.parse(inGrad.get());
        }
        catch (e)
        {
            op.setUiError("parse", "could not parse gradient data");
        }

        if (!grad || !grad.keys)
        {
            op.setUiError("nodata", "gradient no data");
            return null;
        }
        keys = grad.keys;
    }
    return keys;
}

function noise(x, y)
{
    x %= bluenoiseSize;
    y %= bluenoiseSize;

    return bluenoise[x + y * bluenoiseSize] / 255 - 0.5;
}

function addNoise(pixels, width, height)
{
    if (inNoise.get() == 0.0) return pixels;

    for (let x = 0; x < width; x++)
        for (let y = 0; y < height; y++)
        {
            const r1 = pixels[(x + (y * width)) * 4 + 0];
            const g1 = pixels[(x + (y * width)) * 4 + 1];
            const b1 = pixels[(x + (y * width)) * 4 + 2];

            let offX = (width / 8) * inNoise.get() * noise(x, y);
            let offY = (height / 8) * inNoise.get() * noise(x + bluenoiseSize / 2, y + bluenoiseSize / 2);

            if (height == 1) offY = 0;
            if (width == 1) offX = 0;

            offX = Math.round(offX);
            offY = Math.round(offY);

            const yOffY = CABLES.clamp(y + offY, 0, height - 1);
            const xOffX = CABLES.clamp(x + offX, 0, width - 1);

            const r2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 0];
            const g2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 1];
            const b2 = pixels[(xOffX + ((yOffY) * width)) * 4 + 2];

            pixels[(x + y * width) * 4 + 0] = r2;
            pixels[(x + y * width) * 4 + 1] = g2;
            pixels[(x + y * width) * 4 + 2] = b2;

            pixels[(xOffX + ((yOffY) * width)) * 4 + 0] = r1;
            pixels[(xOffX + ((yOffY) * width)) * 4 + 1] = g1;
            pixels[(xOffX + ((yOffY) * width)) * 4 + 2] = b1;
        }
    return pixels;
}

function updateGradient(keys)
{
    let width = Math.round(inSize.get());
    if (width < 4) width = 4;

    inGrad.setUiAttribs(
        {
            "editShortcut": true,
            "gradEditSmoothstep": inSmoothstep.get(),
            "gradEditStep": inStep.get(),
            "gradOklab": inOklab.get()
        });

    let selectedWrap = 0;
    let selectedFilter = 0;
    if (twrap.get() == "repeat") selectedWrap = CGL.Texture.WRAP_REPEAT;
    else if (twrap.get() == "mirrored repeat") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (twrap.get() == "clamp to edge") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    if (tfilter.get() == "nearest") selectedFilter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") selectedFilter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") selectedFilter = CGL.Texture.FILTER_MIPMAP;

    const tex = new CGL.Texture(cgl);

    let pixels = new Uint8Array(width * 4);

    for (let i = 0; i < keys.length - 1; i++)
    {
        const keyA = keys[i];
        const keyB = keys[i + 1];

        for (let x = keyA.pos * width; x < keyB.pos * width; x++)
        {
            let p = CABLES.map(x, keyA.pos * width, keyB.pos * width, 0, 1);
            if (inStep.get())p = Math.round(p);
            if (inSmoothstep.get()) p = CABLES.smoothStep(p);
            x = Math.round(x);

            let xx = x;
            if (inFlip.get())xx = width - x - 1;

            if (inOklab.get())
            {
                const klabA = rgbToOklab(keyA.r, keyA.g, keyA.b);
                const labA_r = klabA[0];
                const labA_g = klabA[1];
                const labA_b = klabA[2];

                const klabB = rgbToOklab(keyB.r, keyB.g, keyB.b);
                const labB_r = klabB[0];
                const labB_g = klabB[1];
                const labB_b = klabB[2];

                const l = ((p * labB_r + (1.0 - p) * labA_r));
                const a = ((p * labB_g + (1.0 - p) * labA_g));
                const b = ((p * labB_b + (1.0 - p) * labA_b));

                const pixCol = oklabToRGB(l, a, b);
                pixels[xx * 4 + 0] = Math.round(pixCol[0] * 255);
                pixels[xx * 4 + 1] = Math.round(pixCol[1] * 255);
                pixels[xx * 4 + 2] = Math.round(pixCol[2] * 255);
            }
            else
            {
                pixels[xx * 4 + 0] = Math.round((p * keyB.r + (1.0 - p) * keyA.r) * 255);
                pixels[xx * 4 + 1] = Math.round((p * keyB.g + (1.0 - p) * keyA.g) * 255);
                pixels[xx * 4 + 2] = Math.round((p * keyB.b + (1.0 - p) * keyA.b) * 255);
            }

            if (typeof keyA.a !== "undefined" && typeof keyB.a !== "undefined")
            {
                const alpha = Math.round((p * keyB.a + (1.0 - p) * keyA.a) * 255);
                pixels[xx * 4 + 3] = alpha;
            }
            else
            {
                pixels[xx * 4 + 3] = Math.round(255);
            }
        }
    }
    if (inSRGB.get())
        for (let i = 0; i < pixels.length; i += 4)
        {
            pixels[i + 0] = lin2srgb(pixels[i + 0]);
            pixels[i + 1] = lin2srgb(pixels[i + 1]);
            pixels[i + 2] = lin2srgb(pixels[i + 2]);
        }

    if (inDir.get() == "X") tex.initFromData(addNoise(pixels, width, 1), width, 1, selectedFilter, selectedWrap);
    if (inDir.get() == "Y") tex.initFromData(addNoise(pixels, 1, width), 1, width, selectedFilter, selectedWrap);

    if (inDir.get() == "Radial")
    {
        const rpixels = new Uint8Array(width * width * 4);

        for (let x = 0; x < width; x++)
        {
            for (let y = 0; y < width; y++)
            {
                const dx = x - (width - 1) / 2;
                const dy = y - (width - 1) / 2;
                let pos = Math.sqrt(dx * dx + dy * dy) / (width) * 2;

                if (inSmoothstep.get()) pos = CABLES.smoothStep(pos);

                let aa = Math.round(pos * width) * 4;
                if (aa >= width * 4)aa = width * 4 - 4;

                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        }

        pixels = rpixels;

        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "XX")
    {
        const rpixels = new Uint8Array(width * width * 4);
        for (let x = 0; x < width; x++)
            for (let y = 0; y < width; y++)
            {
                const aa = x * 4;
                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        pixels = rpixels;
        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "YY")
    {
        const rpixels = new Uint8Array(width * width * 4);
        for (let x = 0; x < width; x++)
            for (let y = 0; y < width; y++)
            {
                const aa = x * 4;
                rpixels[(y * 4) + (x * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(y * 4) + (x * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(y * 4) + (x * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(y * 4) + (x * 4 * width) + 3] = Math.round(255);
            }
        pixels = rpixels;
        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "XY" || inDir.get() == "YX")
    {
        const rpixels = new Uint8Array(width * width * 4);

        for (let x = 0; x < width; x++)
        {
            let xx = x;
            if (inDir.get() == "YX")xx = width - x - 1;

            for (let y = 0; y < width; y++)
            {
                let aa = Math.round(((xx) + y) / 2) * 4;

                rpixels[(x * 4) + (y * 4 * width) + 0] = pixels[aa + 0];
                rpixels[(x * 4) + (y * 4 * width) + 1] = pixels[aa + 1];
                rpixels[(x * 4) + (y * 4 * width) + 2] = pixels[aa + 2];
                rpixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        }

        pixels = rpixels;

        tex.initFromData(addNoise(pixels, width, width), width, width, selectedFilter, selectedWrap);
    }

    const colorArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorArr.push(keys[i].r, keys[i].g, keys[i].b);
    }

    const colorPosArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorPosArr.push(keys[i].pos);
    }

    outColors.set(colorArr);
    outColorPos.set(colorPosArr);

    // outTex.set(null);
    outTex.setRef(tex);
}

}
};

CABLES.OPS["01380a50-2dbb-4465-ae80-86349b0b717a"]={f:Ops.Gl.GradientTexture,objName:"Ops.Gl.GradientTexture"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Noise.SimplexNoise_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.Noise.SimplexNoise_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"simplexnoise_frag":"IN vec2 texCoord;\r\nUNI sampler2D tex;\r\nUNI float amount;\r\nUNI float smoothness;\r\nUNI float scale;\r\nUNI float seed;\r\nUNI float x;\r\nUNI float y;\r\nUNI float time;\r\nUNI float aspect;\r\nUNI float harmonics;\r\n\r\n#ifdef HAS_TEX_OFFSETMAP\r\n    UNI sampler2D texOffsetZ;\r\n    UNI float offMul;\r\n#endif\r\n\r\n\r\n#ifdef HAS_TEX_MASK\r\n    UNI sampler2D texMask;\r\n#endif\r\n\r\n\r\n\r\n{{CGL.BLENDMODES3}}\r\n\r\nvoid FAST32_hash_3D(    vec3 gridcell,\r\n                        vec3 v1_mask,       //  user definable v1 and v2.  ( 0s and 1s )\r\n                        vec3 v2_mask,\r\n                        out vec4 hash_0,\r\n                        out vec4 hash_1,\r\n                        out vec4 hash_2 )       //  generates 3 random numbers for each of the 4 3D cell corners.  cell  corners:  v0=0,0,0  v3=1,1,1  the other two are user definable\r\n{\r\n    //    gridcell is assumed to be an integer coordinate\r\n\r\n    //  TODO:   these constants need tweaked to find the best possible noise.\r\n    //          probably requires some kind of brute force computational searching or something....\r\n    const vec2 OFFSET = vec2( 50.0, 161.0 );\r\n    const float DOMAIN = 69.0;\r\n    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\r\n    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\r\n\r\n    //  truncate the domain\r\n    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;\r\n    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );\r\n\r\n    //  compute x*x*y*y for the 4 corners\r\n    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;\r\n    P *= P;\r\n    vec4 V1xy_V2xy = mix( P.xyxy, P.zwzw, vec4( v1_mask.xy, v2_mask.xy ) );     //  appl y mask for v1 and v2\r\n    P = vec4( P.x, V1xy_V2xy.xz, P.z ) * vec4( P.y, V1xy_V2xy.yw, P.w );\r\n\r\n    //  get the lowz and highz mods\r\n    vec3 lowz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );\r\n    vec3 highz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );\r\n\r\n    //  appl mask for v1 and v2 mod values\r\n    v1_mask = ( v1_mask.z < 0.5 ) ? lowz_mods : highz_mods;\r\n    v2_mask = ( v2_mask.z < 0.5 ) ? lowz_mods : highz_mods;\r\n\r\n    //  compute the final hash\r\n    hash_0 = fract( P * vec4( lowz_mods.x, v1_mask.x, v2_mask.x, highz_mods.x ) );\r\n    hash_1 = fract( P * vec4( lowz_mods.y, v1_mask.y, v2_mask.y, highz_mods.y ) );\r\n    hash_2 = fract( P * vec4( lowz_mods.z, v1_mask.z, v2_mask.z, highz_mods.z ) );\r\n}\r\n\r\n\r\n//\r\n//  Given an arbitrary 3D point this calculates the 4 vectors from the corners of the simplex pyramid to the point\r\n//  It also returns the integer grid index information for the corners\r\n//\r\nvoid Simplex3D_GetCornerVectors(    vec3 P,                 //  input point\r\n                                    out vec3 Pi,            //  integer grid index for the origin\r\n                                    out vec3 Pi_1,          //  offsets for the 2nd and 3rd corners.  ( the 4th = Pi + 1.0 )\r\n                                    out vec3 Pi_2,\r\n                                    out vec4 v1234_x,       //  vectors from the 4 corners to the intput point\r\n                                    out vec4 v1234_y,\r\n                                    out vec4 v1234_z )\r\n{\r\n    //\r\n    //  Simplex math from Stefan Gustavsons and Ian McEwans work at...\r\n    //  http://github.com/ashima/webgl-noise\r\n    //\r\n\r\n    //  simplex math constants\r\n    const float SKEWFACTOR = 1.0/3.0;\r\n    const float UNSKEWFACTOR = 1.0/6.0;\r\n    const float SIMPLEX_CORNER_POS = 0.5;\r\n    const float SIMPLEX_PYRAMID_HEIGHT = 0.70710678118654752440084436210485;    // sqrt( 0.5 )  height of simplex pyramid.\r\n\r\n    P *= SIMPLEX_PYRAMID_HEIGHT;        // scale space so we can have an approx feature size of 1.0  ( optional )\r\n\r\n    //  Find the vectors to the corners of our simplex pyramid\r\n    Pi = floor( P + dot( P, vec3( SKEWFACTOR) ) );\r\n    vec3 x0 = P - Pi + dot(Pi, vec3( UNSKEWFACTOR ) );\r\n    vec3 g = step(x0.yzx, x0.xyz);\r\n    vec3 l = 1.0 - g;\r\n    Pi_1 = min( g.xyz, l.zxy );\r\n    Pi_2 = max( g.xyz, l.zxy );\r\n    vec3 x1 = x0 - Pi_1 + UNSKEWFACTOR;\r\n    vec3 x2 = x0 - Pi_2 + SKEWFACTOR;\r\n    vec3 x3 = x0 - SIMPLEX_CORNER_POS;\r\n\r\n    //  pack them into a parallel-friendly arrangement\r\n    v1234_x = vec4( x0.x, x1.x, x2.x, x3.x );\r\n    v1234_y = vec4( x0.y, x1.y, x2.y, x3.y );\r\n    v1234_z = vec4( x0.z, x1.z, x2.z, x3.z );\r\n}\r\n\r\n//\r\n//  Calculate the weights for the 3D simplex surflet\r\n//\r\nvec4 Simplex3D_GetSurfletWeights(   vec4 v1234_x,\r\n                                    vec4 v1234_y,\r\n                                    vec4 v1234_z )\r\n{\r\n    //  perlins original implementation uses the surlet falloff formula of (0.6-x*x)^4.\r\n    //  This is buggy as it can cause discontinuities along simplex faces.  (0.5-x*x)^3 solves this and gives an almost identical curve\r\n\r\n    //  evaluate surflet. f(x)=(0.5-x*x)^3\r\n    vec4 surflet_weights = v1234_x * v1234_x + v1234_y * v1234_y + v1234_z * v1234_z;\r\n    surflet_weights = max(0.5 - surflet_weights, 0.0);      //  0.5 here represents the closest distance (squared) of any simplex pyramid corner to any of its planes.  ie, SIMPLEX_PYRAMID_HEIGHT^2\r\n    return surflet_weights*surflet_weights*surflet_weights;\r\n}\r\n\r\n\r\n\r\n//\r\n//  SimplexPerlin3D  ( simplex gradient noise )\r\n//  Perlin noise over a simplex (tetrahedron) grid\r\n//  Return value range of -1.0->1.0\r\n//  http://briansharpe.files.wordpress.com/2012/01/simplexperlinsample.jpg\r\n//\r\n//  Implementation originally based off Stefan Gustavsons and Ian McEwans work at...\r\n//  http://github.com/ashima/webgl-noise\r\n//\r\nfloat SimplexPerlin3D(vec3 P)\r\n{\r\n    //  calculate the simplex vector and index math\r\n    vec3 Pi;\r\n    vec3 Pi_1;\r\n    vec3 Pi_2;\r\n    vec4 v1234_x;\r\n    vec4 v1234_y;\r\n    vec4 v1234_z;\r\n    Simplex3D_GetCornerVectors( P, Pi, Pi_1, Pi_2, v1234_x, v1234_y, v1234_z );\r\n\r\n    //  generate the random vectors\r\n    //  ( various hashing methods listed in order of speed )\r\n    vec4 hash_0;\r\n    vec4 hash_1;\r\n    vec4 hash_2;\r\n    FAST32_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\r\n    //SGPP_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\r\n    hash_0 -= 0.49999;\r\n    hash_1 -= 0.49999;\r\n    hash_2 -= 0.49999;\r\n\r\n    //  evaluate gradients\r\n    vec4 grad_results = inversesqrt( hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2 ) * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z );\r\n\r\n    //  Normalization factor to scale the final result to a strict 1.0->-1.0 range\r\n    //  x = sqrt( 0.75 ) * 0.5\r\n    //  NF = 1.0 / ( x * ( ( 0.5 * x*x ) ^ 3 ) * 2.0 )\r\n    //  http://briansharpe.wordpress.com/2012/01/13/simplex-noise/#comment-36\r\n     float FINAL_NORMALIZATION = 37.837227241611314102871574478976*smoothness;\r\n\r\n    //  sum with the surflet and return\r\n    return dot( Simplex3D_GetSurfletWeights( v1234_x, v1234_y, v1234_z ), grad_results ) * FINAL_NORMALIZATION;\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec2 p=vec2(texCoord.x-0.5,texCoord.y-0.5);\r\n\r\n    p.x*=aspect;\r\n    p=p*scale;\r\n\r\n    p=vec2(p.x+0.5-x,p.y+0.5-y);\r\n\r\n    vec3 offset;\r\n    #ifdef HAS_TEX_OFFSETMAP\r\n        vec4 offMap=texture(texOffsetZ,texCoord);\r\n\r\n        #ifdef OFFSET_X_R\r\n            offset.x=offMap.r;\r\n        #endif\r\n        #ifdef OFFSET_X_G\r\n            offset.x=offMap.g;\r\n        #endif\r\n        #ifdef OFFSET_X_B\r\n            offset.x=offMap.b;\r\n        #endif\r\n\r\n        #ifdef OFFSET_Y_R\r\n            offset.y=offMap.r;\r\n        #endif\r\n        #ifdef OFFSET_Y_G\r\n            offset.y=offMap.g;\r\n        #endif\r\n        #ifdef OFFSET_Y_B\r\n            offset.y=offMap.b;\r\n        #endif\r\n\r\n        #ifdef OFFSET_Z_R\r\n            offset.z=offMap.r;\r\n        #endif\r\n        #ifdef OFFSET_Z_G\r\n            offset.z=offMap.g;\r\n        #endif\r\n        #ifdef OFFSET_Z_B\r\n            offset.z=offMap.b;\r\n        #endif\r\n\r\n        offset*=offMul;\r\n    #endif\r\n\r\n    float v=SimplexPerlin3D(vec3(p.x,p.y,time)+offset)*0.5+0.5;\r\n\r\n\r\n    if (harmonics >= 2.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*2.3+offset) * 0.5;\r\n    if (harmonics >= 3.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*4.2+offset) * 0.25;\r\n    if (harmonics >= 4.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*8.1+offset) * 0.125;\r\n    if (harmonics >= 5.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*16.7+offset) * 0.0625;\r\n\r\n\r\n\r\n    //blend section\r\n    vec4 col=vec4(v,v,v,1.0);\r\n\r\n    vec4 base=texture(tex,texCoord);\r\n\r\n    // outColor=cgl_blend(base,col,amount);\r\n\r\n\r\n    float str=1.0;\r\n    #ifdef HAS_TEX_MASK\r\n        str=texture(texMask,texCoord).r;\r\n    #endif\r\n\r\n    outColor=cgl_blendPixel(base,col,amount*str);\r\n\r\n}",};
const
    render = op.inTrigger("render"),
    inTexMask = op.inTexture("Mask"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    amount = op.inValueSlider("Amount", 1),
    maskAlpha = CGL.TextureEffect.AddBlendAlphaMask(op),
    smoothness = op.inValue("smoothness", 1.0),
    inHarmonics = op.inSwitch("Harmonics", ["1", "2", "3", "4", "5"], "1"),
    scale = op.inValue("scale", 7),
    trigger = op.outTrigger("trigger"),
    x = op.inValue("x"),
    y = op.inValue("y"),
    time = op.inValue("time", 0);

const
    inTexOffsetZ = op.inTexture("Offset"),
    inOffsetMul = op.inFloat("Offset Multiply", 1),
    offsetX = op.inSwitch("Offset X", ["None", "R", "G", "B"], "None"),
    offsetY = op.inSwitch("Offset Y", ["None", "R", "G", "B"], "None"),
    offsetZ = op.inSwitch("Offset Z", ["None", "R", "G", "B"], "R");

op.setPortGroup("Offset Map", [inTexOffsetZ, offsetZ, offsetY, offsetX, inOffsetMul]);

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.simplexnoise_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    textureUniformOffZ = new CGL.Uniform(shader, "t", "texOffsetZ", 1),
    uniTexMask = new CGL.Uniform(shader, "t", "texMask", 2),
    amountUniform = new CGL.Uniform(shader, "f", "amount", amount),
    uniSmoothness = new CGL.Uniform(shader, "f", "smoothness", smoothness),
    uniScale = new CGL.Uniform(shader, "f", "scale", scale),
    uniX = new CGL.Uniform(shader, "f", "x", x),
    uniY = new CGL.Uniform(shader, "f", "y", y),
    uniAspect = new CGL.Uniform(shader, "f", "aspect", 1),
    uniTime = new CGL.Uniform(shader, "f", "time", time),
    uniOffMul = new CGL.Uniform(shader, "f", "offMul", inOffsetMul),
    uniHarmonics = new CGL.Uniform(shader, "f", "harmonics", 0);

inHarmonics.onChange = () =>
{
    uniHarmonics.setValue(parseFloat(inHarmonics.get()));
};

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount, maskAlpha);

offsetX.onChange =
offsetY.onChange =
offsetZ.onChange =
inTexMask.onChange =
inTexOffsetZ.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("HAS_TEX_OFFSETMAP", inTexOffsetZ.get());
    shader.toggleDefine("HAS_TEX_MASK", inTexMask.get());

    shader.toggleDefine("OFFSET_X_R", offsetX.get() == "R");
    shader.toggleDefine("OFFSET_X_G", offsetX.get() == "G");
    shader.toggleDefine("OFFSET_X_B", offsetX.get() == "B");

    shader.toggleDefine("OFFSET_Y_R", offsetY.get() == "R");
    shader.toggleDefine("OFFSET_Y_G", offsetY.get() == "G");
    shader.toggleDefine("OFFSET_Y_B", offsetY.get() == "B");

    shader.toggleDefine("OFFSET_Z_R", offsetZ.get() == "R");
    shader.toggleDefine("OFFSET_Z_G", offsetZ.get() == "G");
    shader.toggleDefine("OFFSET_Z_B", offsetZ.get() == "B");

    offsetX.setUiAttribs({ "greyout": !inTexOffsetZ.isLinked() });
    offsetY.setUiAttribs({ "greyout": !inTexOffsetZ.isLinked() });
    offsetZ.setUiAttribs({ "greyout": !inTexOffsetZ.isLinked() });
    inOffsetMul.setUiAttribs({ "greyout": !inTexOffsetZ.isLinked() });
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    uniAspect.setValue(cgl.currentTextureEffect.aspectRatio);

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);
    if (inTexOffsetZ.get()) cgl.setTexture(1, inTexOffsetZ.get().tex);
    if (inTexMask.get()) cgl.setTexture(2, inTexMask.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};

}
};

CABLES.OPS["0f4a8d04-89b0-437a-9da8-b4098772d250"]={f:Ops.Gl.ImageCompose.Noise.SimplexNoise_v2,objName:"Ops.Gl.ImageCompose.Noise.SimplexNoise_v2"};




// **************************************************************
// 
// Ops.Math.Incrementor
// 
// **************************************************************

Ops.Math.Incrementor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    increment = op.inTriggerButton("Increment"),
    decrement = op.inTriggerButton("Decrement"),
    inLimit = op.inBool("Limit", false),
    inLength = op.inValueInt("Length"),
    inMode = op.inSwitch("Mode", ["Rewind", "Stop at Max"], "Rewind"),
    inDefault = op.inValueInt("Default", 0),
    reset = op.inTriggerButton("Reset"),
    outChanged = op.outTrigger("Changed"),
    value = op.outNumber("Value"),
    outRestarted = op.outTrigger("Restarted");

const MODE_REWIND = 0;
const MODE_STOP = 1;
value.ignoreValueSerialize = true;
inLength.set(10);
let val = 0;
let mode = MODE_REWIND;
value.set(0);

inLength.onTriggered = reset;
inDefault.onChange = doReset;
reset.onTriggered = doReset;
inLimit.onChange = updateUi;

updateUi();

inMode.onChange = () =>
{
    if (inMode.get() == "Rewind")
    {
        mode = MODE_REWIND;
    }
    if (inMode.get() == "Stop at Max")
    {
        mode = MODE_STOP;
    }
};

function updateUi()
{
    inLength.setUiAttribs({ "greyout": !inLimit.get() });
    inMode.setUiAttribs({ "greyout": !inLimit.get() });
}

function doReset()
{
    value.set(null);
    val = inDefault.get();
    value.set(val);
    outRestarted.trigger();
}

decrement.onTriggered = function ()
{
    val--;
    if (inLimit.get())
    {
        if (mode == MODE_REWIND && val < 0)val = inLength.get() - 1;
        if (mode == MODE_STOP && val < 0)val = 0;
    }
    value.set(val);

    outChanged.trigger();
};

increment.onTriggered = function ()
{
    val++;
    if (inLimit.get())
    {
        if (mode == MODE_REWIND && val >= inLength.get())
        {
            val = 0;
            outRestarted.trigger();
        }
        if (mode == MODE_STOP && val >= inLength.get())val = inLength.get() - 1;
    }

    value.set(val);

    outChanged.trigger();
};

}
};

CABLES.OPS["45cc0011-ada8-4423-8f5b-39a3810b8389"]={f:Ops.Math.Incrementor,objName:"Ops.Math.Incrementor"};




// **************************************************************
// 
// Ops.Html.MailtoLink
// 
// **************************************************************

Ops.Html.MailtoLink= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inEmail = op.inString("Email", "test@test.com"),
    inSubject = op.inString("Subject", ""),
    exec = op.inTriggerButton("Execute");

exec.onTriggered = function ()
{
    let str = "mailto:";
    str += inEmail.get();
    if (inSubject.get())str += "?subject=" + inSubject.get();
    window.location.href = str;
};

}
};

CABLES.OPS["6d03ec3b-f8b2-4544-bdb3-df771e857069"]={f:Ops.Html.MailtoLink,objName:"Ops.Html.MailtoLink"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}

}
};

CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};




// **************************************************************
// 
// Ops.Html.HyperLink_v2
// 
// **************************************************************

Ops.Html.HyperLink_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTriggerButton("Open"),
    inUrl = op.inString("URL", "https://cables.gl"),
    inTarget = op.inString("Target Name", "_self"),
    inSpecs = op.inString("Specs", "");

exec.onTriggered = function ()
{
    // document.location.href=inUrl.get();
    window.open(inUrl.get(), inTarget.get(), inSpecs.get());
};

}
};

CABLES.OPS["a669d4f7-1e35-463c-bf8b-08c9f1b68e04"]={f:Ops.Html.HyperLink_v2,objName:"Ops.Html.HyperLink_v2"};




// **************************************************************
// 
// Ops.Html.FontFile_v2
// 
// **************************************************************

Ops.Html.FontFile_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    filename = op.inUrl("file", [".otf", ".ttf", ".woff", ".woff2"]),
    fontname = op.inString("family"),
    inActive = op.inBool("Active", true),
    outLoaded = op.outBoolNum("Loaded"),
    loadedTrigger = op.outTrigger("Loaded Trigger");

let loadingId = null;
let fontFaceObj;
let doc = null;
let to = null;
let style = null;
let oldFontName = "";

filename.onChange = function ()
{
    outLoaded.set(false);
    addStyle(null);
};

inActive.onChange =
fontname.onChange = () =>
{
    loadSoon();
};

function loadSoon()
{
    clearTimeout(to);
    to = setTimeout(() =>
    {
        addStyle(null);
    }, 50);
}

op.patch.on("windowChanged",
    (win) =>
    {
        fontFaceObj = null;
        addStyle(win.document);
    });

function addStyle(_doc)
{
    if (style)style.remove();

    if (fontFaceObj)
    {
        const success = doc.fonts.delete(fontFaceObj);
        fontFaceObj = null;

        setTimeout(() => // delete needs some time, so we delay this a bit.....
        {
            op.patch.emitEvent("fontLoaded", oldFontName);
        }, 100);
    }

    if (!inActive.get()) return;
    doc = _doc || doc || op.patch.cgl.canvas.ownerDocument || document;

    if (loadingId)loadingId = op.patch.cgl.patch.loading.finished(loadingId);

    op.setUiError("loadingerror", null);

    oldFontName = fontname.get();

    if (filename.get() && fontname.get())
    {
        if (doc.fonts)
        {
            let url = "url(\"" + op.patch.getFilePath(String(filename.get())) + "\")";
            fontFaceObj = new FontFace(fontname.get(), url);

            loadingId = op.patch.cgl.patch.loading.start("FontFile", filename.get(), op);
            // Add the FontFace to the FontFaceSet
            doc.fonts.add(fontFaceObj);

            // Get the current status of the FontFace
            // (should be 'unloaded')

            // Load the FontFace

            // Get the current status of the Fontface
            // (should be 'loading' or 'loaded' if cached)

            // Wait until the font has been loaded, log the current status.
            fontFaceObj.loaded.then((fontFace) =>
            {
                outLoaded.set(true);
                loadedTrigger.trigger();
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);

                op.patch.emitEvent("fontLoaded", fontname.get());

                // Throw an error if loading wasn't successful
            }, (fontFace) =>
            {
                op.setUiError("loadingerror", "Font loading error: " + fontFaceObj.status + "(" + filename.get() + ")");
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);
                outLoaded.set(true);

                // op.logError("Font loading error! Current status", fontFaceObj.status);
            }).catch((f) =>
            {
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);
                console.error("catch ", f);
            });

            fontFaceObj.load();
        }
        else
        { // font loading api not supported
            const fileUrl = op.patch.getFilePath(String(filename.get()));
            const styleStr = ""
                .endl() + "@font-face"
                .endl() + "{"
                .endl() + "  font-family: \"" + fontname.get() + "\";"
                .endl() + "  src: url(\"" + fileUrl + "\") format(\"truetype\");"
                .endl() + "}";

            style = document.createElement("style");
            style.classList.add("cablesEle");
            style.type = "text/css";
            style.innerHTML = styleStr;
            document.getElementsByTagName("head")[document.getElementsByTagName("head").length - 1].appendChild(style);
            // TODO: Poll if font loaded
        }
    }
}

}
};

CABLES.OPS["68177370-116e-4c76-aef3-3b10d68e7227"]={f:Ops.Html.FontFile_v2,objName:"Ops.Html.FontFile_v2"};




// **************************************************************
// 
// Ops.Ui.Comment_v2
// 
// **************************************************************

Ops.Ui.Comment_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTitle = op.inString("title", "New comment"),
    inText = op.inTextarea("text");
inTitle.setUiAttribs({ "hidePort": true });
inText.setUiAttribs({ "hidePort": true });

op.init =
    inTitle.onChange =
    inText.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        op.uiAttr(
            {
                "comment_title": inTitle.get(),
                "comment_text": inText.get(),
                "extendTitle": inTitle.get()
            });
    }
}

}
};

CABLES.OPS["93492eeb-bf35-4a62-98f7-d85b0b79bfe5"]={f:Ops.Ui.Comment_v2,objName:"Ops.Ui.Comment_v2"};




// **************************************************************
// 
// Ops.Gl.Textures.VideoTexture_v3
// 
// **************************************************************

Ops.Gl.Textures.VideoTexture_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inExec = op.inTrigger("Update"),
    filename = op.inUrl("file", "video"),
    play = op.inValueBool("play"),
    loop = op.inValueBool("loop", true),

    volume = op.inValueSlider("Volume", 1),
    muted = op.inValueBool("mute", true),

    fps = op.inValueFloat("Update FPS", 30),
    tfilter = op.inSwitch("Filter", ["nearest", "linear"], "linear"),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
    flip = op.inValueBool("flip", true),

    speed = op.inValueFloat("speed", 1),
    time = op.inValueFloat("set time"),
    rewind = op.inTriggerButton("Rewind"),

    inPreload = op.inValueBool("Preload", true),
    inShowSusp = op.inBool("Show Interaction needed Button", true),

    outNext = op.outTrigger("Next"),
    textureOut = op.outTexture("texture", null, "texture"),
    outDuration = op.outNumber("duration"),
    outProgress = op.outNumber("progress"),
    outInteractionNeeded = op.outBoolNum("Interaction Needed"),
    outTime = op.outNumber("CurrentTime"),
    loading = op.outBoolNum("Loading"),
    outPlaying = op.outBoolNum("Playing"),
    canPlayThrough = op.outBoolNum("Can Play Through", false),

    outWidth = op.outNumber("Width"),
    outHeight = op.outNumber("Height"),
    outAspect = op.outNumber("Aspect Ratio"),
    outHasError = op.outBoolNum("Has Error"),
    outAutoFPS = op.outBoolNum("Auto FPS", false),
    outError = op.outString("Error Message");

op.setPortGroup("Texture", [tfilter, wrap, flip, fps]);
op.setPortGroup("Audio", [muted, volume]);
op.setPortGroup("Timing", [time, rewind, speed]);

let videoElementPlaying = false;
let embedded = false;
let interActionNeededButton = false;
let addedListeners = false;
let cgl_filter = 0;
let cgl_wrap = 0;
let tex = null;
let timeout = null;
let firstTime = true;
let needsUpdate = true;
let lastTime = 0;

const cgl = op.patch.cgl;
const videoElement = document.createElement("video");
videoElement.setAttribute("playsinline", "");
videoElement.setAttribute("webkit-playsinline", "");
videoElement.setAttribute("autoplay", "autoplay");

outAutoFPS.set(!!videoElement.requestVideoFrameCallback);

const emptyTexture = CGL.Texture.getEmptyTexture(cgl);
op.toWorkPortsNeedToBeLinked(textureOut);

textureOut.setRef(CGL.Texture.getEmptyTexture(cgl));
play.onChange = updatePlayState;
filename.onChange = reload;

volume.onChange =
    op.onMasterVolumeChanged = updateVolume;

tfilter.onChange = wrap.onChange = () =>
{
    if (tex)tex.delete();
    tex = null;
};

op.onDelete = () =>
{
    if (tex)tex.delete();
    videoElement.remove();
};

inExec.onTriggered = () =>
{
    if (performance.now() - lastTime > 1000 / fps.get())needsUpdate = true;

    if (needsUpdate)
    {
        updateTexture();
    }

    outPlaying.set(!videoElement.paused);

    if (interActionNeededButton && !videoElement.paused && play.get())
    {
        // remove button after player says no but plays anyhow after some time...
        interActionNeededButton = false;
        CABLES.interActionNeededButton.remove("videoplayer");
    }
    outInteractionNeeded.set(interActionNeededButton);

    outNext.trigger();
};

function reInitTexture()
{
    if (tex)tex.delete();

    cgl_filter = CGL.Texture.FILTER_NEAREST;
    if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;

    if (wrap.get() == "repeat") cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    tex = new CGL.Texture(cgl,
        {
            "wrap": cgl_wrap,
            "filter": cgl_filter
        });
}

rewind.onTriggered = function ()
{
    videoElement.currentTime = 0;
    textureOut.setRef(emptyTexture);
    needsUpdate = true;
};

time.onChange = function ()
{
    videoElement.currentTime = time.get() || 0;
    needsUpdate = true;
};

fps.onChange = function ()
{
    needsUpdate = true;
};

function doPlay()
{
    videoElement.playbackRate = speed.get();
}

function updatePlayState()
{
    op.setUiError("playvideo", null);
    embedVideo(true);

    if (play.get())
    {
        videoElement.currentTime = time.get() || 0;

        const promise = videoElement.play();

        if (promise)
            promise.then(function ()
            {
                doPlay();
            }).catch(function (error)
            {
                op.setUiError("playvideo", error.message);
                op.logWarn("exc", error);
                op.log(error);
                op.log(videoElement);

                if (videoElement.paused && inShowSusp.get())
                {

                    op.setUiError("playvideo", null);
                    interActionNeededButton = true;
                    CABLES.interActionNeededButton.add(op.patch, "videoplayer", () =>
                    {
                        interActionNeededButton = false;
                        videoElement.play().then(() => {
                            doPlay();
                            CABLES.interActionNeededButton.remove("videoplayer");
                        }).catch((e) => {
                            op.setUiError("playvideo", e.message);
                            op.logWarn("playvideo", e);
                        });

                    });
                }
                // Automatic playback failed.
                // Show a UI element to let the user manually start playback.
            });
    }
    else videoElement.pause();
}

speed.onChange = function ()
{
    try
    {
        op.setUiError("playbackRate", null);
        videoElement.playbackRate = speed.get();
    }
    catch (e)
    {
        op.setUiError("playbackRate", "value for 'speed' not supported by browser", 1);
    }
};

loop.onChange = function ()
{
    videoElement.loop = loop.get();
};

muted.onChange = function ()
{
    videoElement.muted = muted.get();
};

function updateTexture()
{
    const force = needsUpdate;
    lastTime = performance.now();

    if (!filename.get())
    {
        tex = null;
        textureOut.set(emptyTexture);
        return;
    }

    if (!videoElementPlaying) return;

    if (!tex)reInitTexture();
    if (tex.width != videoElement.videoWidth || tex.height != videoElement.videoHeight)
    {
        op.log("video size", videoElement.videoWidth, videoElement.videoHeight);
        tex.setSize(videoElement.videoWidth, videoElement.videoHeight);
    }

    outWidth.set(tex.width);
    outHeight.set(tex.height);
    outAspect.set(tex.width / tex.height);

    if (!canPlayThrough.get()) return;
    if (!videoElementPlaying) return;
    if (!videoElement) return;
    if (videoElement.videoHeight <= 0)
    {
        op.setUiError("videosize", "video width is 0!");
        // op.log(videoElement);
        return;
    }
    if (videoElement.videoWidth <= 0)
    {
        op.setUiError("videosize", "video height is 0!");
        // op.log(videoElement);
        return;
    }

    const perc = (videoElement.currentTime) / videoElement.duration;
    if (!isNaN(perc)) outProgress.set(perc);

    outTime.set(videoElement.currentTime);

    cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, tex.tex);

    // if (firstTime)
    // {
    cgl.gl.pixelStorei(cgl.gl.UNPACK_FLIP_Y_WEBGL, flip.get());
    cgl.gl.texImage2D(cgl.gl.TEXTURE_2D, 0, cgl.gl.RGBA, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, videoElement);
    tex._setFilter();
    // }
    // else
    // {
    // cgl.gl.pixelStorei(cgl.gl.UNPACK_FLIP_Y_WEBGL, flip.get());
    // cgl.gl.texSubImage2D(cgl.gl.TEXTURE_2D, 0, 0, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, videoElement);
    // }

    if (flip.get()) cgl.gl.pixelStorei(cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

    firstTime = false;

    textureOut.setRef(tex);
    needsUpdate = false;

    op.patch.cgl.profileData.profileVideosPlaying++;

    if (videoElement.readyState == 4) loading.set(false);
    else loading.set(false);

    if (videoElement.requestVideoFrameCallback)
        videoElement.requestVideoFrameCallback(
            () =>
            {
                needsUpdate = true;
            }
        );
}

function initVideo()
{
    videoElement.controls = false;
    videoElement.muted = muted.get();
    videoElement.loop = loop.get();

    needsUpdate = true;
    canPlayThrough.set(true);
}

function updateVolume()
{
    videoElement.volume = Math.min(1, Math.max(0, (volume.get() || 0) * op.patch.config.masterVolume));
}

function loadedMetaData()
{
    outDuration.set(videoElement.duration);
    updatePlayState();
}

function embedVideo(force)
{
    if (embedded) return;

    outHasError.set(false);
    outError.set("");
    canPlayThrough.set(false);
    if (filename.get() && String(filename.get()).length > 1) firstTime = true;

    if (!filename.get())
    {
        outError.set(true);
    }

    if (inPreload.get() || force)
    {
        clearTimeout(timeout);
        loading.set(true);
        videoElement.preload = "true";

        let url = op.patch.getFilePath(filename.get());
        if (String(filename.get()).indexOf("data:") == 0) url = filename.get();
        if (!url) return;

        op.setUiError("onerror", null);
        videoElement.style.display = "none";
        videoElement.setAttribute("src", url);
        videoElement.setAttribute("crossOrigin", "anonymous");
        try
        {
            op.setUiError("playbackRate", null);
            videoElement.playbackRate = speed.get();
        }
        catch (e)
        {
            op.setUiError("playbackRate", "value for 'speed' not supported by browser", 1);
        }
        if (!addedListeners)
        {
            addedListeners = true;
            videoElement.addEventListener("canplaythrough", initVideo, true);
            videoElement.addEventListener("loadedmetadata", loadedMetaData);
            videoElement.addEventListener("playing", function () { videoElementPlaying = true; }, true);
            videoElement.onerror = function ()
            {
                outHasError.set(true);
                if (videoElement)
                {
                    outError.set("Error " + videoElement.error.code + "/" + videoElement.error.message);
                    op.setUiError("onerror", "Could not load video / " + videoElement.error.message, 2);
                }
            };
        }
        embedded = true;
    }
}

function loadVideo()
{
    setTimeout(embedVideo, 100);
}

function reload()
{
    if (!filename.get()) return;
    embedded = false;
    loadVideo();
}

}
};

CABLES.OPS["9d66516f-d234-4114-b1d3-67b8e60f5dc6"]={f:Ops.Gl.Textures.VideoTexture_v3,objName:"Ops.Gl.Textures.VideoTexture_v3"};




// **************************************************************
// 
// Ops.Ui.VizTexture
// 
// **************************************************************

Ops.Ui.VizTexture= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"viztex_frag":"IN vec2 texCoord;\r\nUNI sampler2D tex;\r\nUNI samplerCube cubeMap;\r\nUNI float width;\r\nUNI float height;\r\nUNI float type;\r\nUNI float time;\r\n\r\nfloat LinearizeDepth(float d,float zNear,float zFar)\r\n{\r\n    float z_n = 2.0 * d - 1.0;\r\n    return 2.0 * zNear / (zFar + zNear - z_n * (zFar - zNear));\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec4 col=vec4(vec3(0.),0.0);\r\n\r\n    vec4 colTex=texture(tex,texCoord);\r\n\r\n\r\n\r\n    if(type==1.0)\r\n    {\r\n        vec4 depth=vec4(0.);\r\n        vec2 localST=texCoord;\r\n        localST.y = 1. - localST.y;\r\n\r\n        localST.t = mod(localST.t*3.,1.);\r\n        localST.s = mod(localST.s*4.,1.);\r\n\r\n        #ifdef WEBGL2\r\n            #define texCube texture\r\n        #endif\r\n        #ifdef WEBGL1\r\n            #define texCube textureCube\r\n        #endif\r\n\r\n//         //Due to the way my depth-cubeMap is rendered, objects to the -x,y,z side is projected to the positive x,y,z side\r\n//         //Inside where top/bottom is to be drawn?\r\n        if (texCoord.s*4.> 1. && texCoord.s*4.<2.)\r\n        {\r\n            //Bottom (-y) quad\r\n            if (texCoord.t*3. < 1.)\r\n            {\r\n                vec3 dir=vec3(localST.s*2.-1.,-1.,-localST.t*2.+1.);//Due to the (arbitrary) way I choose as up in my depth-viewmatrix, i her emultiply the latter coordinate with -1\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n            //top (+y) quad\r\n            else if (texCoord.t*3. > 2.)\r\n            {\r\n                vec3 dir=vec3(localST.s*2.-1.,1.,localST.t*2.-1.);//Get lower y texture, which is projected to the +y part of my cubeMap\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n            else//Front (-z) quad\r\n            {\r\n                vec3 dir=vec3(localST.s*2.-1.,-localST.t*2.+1.,1.);\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n        }\r\n//         //If not, only these ranges should be drawn\r\n        else if (texCoord.t*3. > 1. && texCoord.t*3. < 2.)\r\n        {\r\n            if (texCoord.x*4. < 1.)//left (-x) quad\r\n            {\r\n                vec3 dir=vec3(-1.,-localST.t*2.+1.,localST.s*2.-1.);\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n            else if (texCoord.x*4. < 3.)//right (+x) quad (front was done above)\r\n            {\r\n                vec3 dir=vec3(1,-localST.t*2.+1.,-localST.s*2.+1.);\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n            else //back (+z) quad\r\n            {\r\n                vec3 dir=vec3(-localST.s*2.+1.,-localST.t*2.+1.,-1.);\r\n                depth = texCube(cubeMap, dir);\r\n            }\r\n        }\r\n        // colTex = vec4(vec3(depth),1.);\r\n        colTex = vec4(depth);\r\n    }\r\n\r\n    if(type==2.0)\r\n    {\r\n       float near = 0.1;\r\n       float far = 50.;\r\n       float depth = LinearizeDepth(colTex.r, near, far);\r\n       colTex.rgb = vec3(depth);\r\n    }\r\n\r\n\r\n\r\n\r\n    #ifdef ANIM_RANGE\r\n\r\n        if(colTex.r>1.0 || colTex.r<0.0)\r\n            colTex.r=mod(colTex.r,1.0)*0.5+(sin(colTex.r+mod(colTex.r*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\r\n        if(colTex.g>1.0 || colTex.g<0.0)\r\n            colTex.g=mod(colTex.g,1.0)*0.5+(sin(colTex.g+mod(colTex.g*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\r\n        if(colTex.b>1.0 || colTex.b<0.0)\r\n            colTex.b=mod(colTex.b,1.0)*0.5+(sin(colTex.b+mod(colTex.b*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\r\n\r\n    #endif\r\n\r\n\r\n    // #ifdef ANIM_RANGE\r\n    //     if(colTex.r>1.0 || colTex.r<0.0)\r\n    //     {\r\n    //         float r=mod( time+colTex.r,1.0)*0.5+0.5;\r\n    //         colTex.r=r;\r\n    //     }\r\n    //     if(colTex.g>1.0 || colTex.g<0.0)\r\n    //     {\r\n    //         float r=mod( time+colTex.g,1.0)*0.5+0.5;\r\n    //         colTex.g=r;\r\n    //     }\r\n    //     if(colTex.b>1.0 || colTex.b<0.0)\r\n    //     {\r\n    //         float r=mod( time+colTex.b,1.0)*0.5+0.5;\r\n    //         colTex.b=r;\r\n    //     }\r\n    // #endif\r\n\r\n    #ifdef MOD_RANGE\r\n        colTex.r=mod(colTex.r,1.0001);\r\n        colTex.g=mod(colTex.g,1.0001);\r\n        colTex.b=mod(colTex.b,1.0001);\r\n\r\n    #endif\r\n\r\n    #ifdef ALPHA_ONE\r\n        colTex.a=1.0;\r\n    #endif\r\n    #ifdef ALPHA_INV\r\n        colTex.a=1.0-colTex.a;\r\n    #endif\r\n\r\n    outColor = mix(col,colTex,colTex.a);\r\n}\r\n\r\n","viztex_vert":"IN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nOUT vec2 texCoord;\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\nvoid main()\r\n{\r\n    texCoord=vec2(attrTexCoord.x,1.0-attrTexCoord.y);\r\n    vec4 pos = vec4( vPosition, 1. );\r\n    mat4 mvMatrix=viewMatrix * modelMatrix;\r\n    gl_Position = projMatrix * mvMatrix * pos;\r\n}",};
const
    inTex = op.inTexture("Texture In"),
    inShowInfo = op.inBool("Show Info", false),
    inVizRange = op.inSwitch("Visualize outside 0-1", ["Off", "Anim", "Modulo"], "Anim"),
    inAlpha = op.inSwitch("Alpha", ["A", "1", "1-A"], "A"),
    inPickColor = op.inBool("Show Color", false),
    inX = op.inFloatSlider("X", 0.5),
    inY = op.inFloatSlider("Y", 0.5),
    outTex = op.outTexture("Texture Out"),
    outInfo = op.outString("Info");

op.setUiAttrib({ "height": 150, "resizable": true });

const timer = new CABLES.Timer();
let shader = null;
let fb = null;
let pixelReader = null;
let colorString = "";
let firstTime = true;

inAlpha.onChange =
    inVizRange.onChange = updateDefines;

inPickColor.onChange = updateUi;
updateUi();

if (CABLES.UI)
{
    timer.play();
}

function updateUi()
{
    inX.setUiAttribs({ "greyout": !inPickColor.get() });
    inY.setUiAttribs({ "greyout": !inPickColor.get() });
}

inTex.onChange = () =>
{
    const t = inTex.get();

    outTex.setRef(t);

    let title = "";

    if (inTex.get() && inTex.isLinked()) title = inTex.links[0].getOtherPort(inTex).name;

    op.setUiAttrib({ "extendTitle": title });
};

function updateDefines()
{
    if (!shader) return;

    shader.toggleDefine("MOD_RANGE", inVizRange.get() == "Modulo");
    shader.toggleDefine("ANIM_RANGE", inVizRange.get() == "Anim");
    shader.toggleDefine("ALPHA_INV", inAlpha.get() == "1-A");
    shader.toggleDefine("ALPHA_ONE", inAlpha.get() == "1");
    // op.checkMainloopExists();
}

op.renderVizLayerGl = (ctx, layer) =>
{
    if (!inTex.isLinked()) return;
    if (!layer.useGl) return;

    const port = inTex;
    const texSlot = 5;
    const texSlotCubemap = texSlot + 1;

    const perf = gui.uiProfiler.start("previewlayer texture");
    const cgl = port.op.patch.cgl;

    if (!this._emptyCubemap) this._emptyCubemap = CGL.Texture.getEmptyCubemapTexture(cgl);
    port.op.patch.cgl.profileData.profileTexPreviews++;

    const portTex = port.get() || CGL.Texture.getEmptyTexture(cgl);

    if (!this._mesh)
    {
        const geom = new CGL.Geometry("vizTexture rect");
        geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
        geom.texCoords = [
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0];
        geom.verticesIndices = [0, 1, 2, 3, 1, 2];
        this._mesh = new CGL.Mesh(cgl, geom);
    }
    if (!this._shader)
    {
        this._shader = new CGL.Shader(cgl, "glpreviewtex");
        this._shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
        this._shader.setSource(attachments.viztex_vert, attachments.viztex_frag);
        this._shaderTexUniform = new CGL.Uniform(this._shader, "t", "tex", texSlot);
        this._shaderTexCubemapUniform = new CGL.Uniform(this._shader, "tc", "cubeMap", texSlotCubemap);
        shader = this._shader;
        updateDefines();

        this._shaderTexUniformW = new CGL.Uniform(this._shader, "f", "width", portTex.width);
        this._shaderTexUniformH = new CGL.Uniform(this._shader, "f", "height", portTex.height);
        this._shaderTypeUniform = new CGL.Uniform(this._shader, "f", "type", 0);
        this._shaderTimeUniform = new CGL.Uniform(this._shader, "f", "time", 0);
    }

    cgl.pushPMatrix();
    const sizeTex = [portTex.width, portTex.height];
    const small = port.op.patch.cgl.canvasWidth > sizeTex[0] && port.op.patch.cgl.canvasHeight > sizeTex[1];

    if (small)
    {
        mat4.ortho(cgl.pMatrix, 0, port.op.patch.cgl.canvasWidth, port.op.patch.cgl.canvasHeight, 0, 0.001, 11);
    }
    else mat4.ortho(cgl.pMatrix, -1, 1, 1, -1, 0.001, 11);

    const oldTex = cgl.getTexture(texSlot);
    const oldTexCubemap = cgl.getTexture(texSlotCubemap);

    let texType = 0;
    if (portTex)
    {
        if (portTex.cubemap) texType = 1;
        if (portTex.textureType == CGL.Texture.TYPE_DEPTH) texType = 2;

        if (texType == 0 || texType == 2)
        {
            cgl.setTexture(texSlot, portTex.tex);
            cgl.setTexture(texSlotCubemap, this._emptyCubemap.cubemap, cgl.gl.TEXTURE_CUBE_MAP);
        }
        else if (texType == 1)
        {
            cgl.setTexture(texSlotCubemap, portTex.cubemap, cgl.gl.TEXTURE_CUBE_MAP);
        }

        timer.update();
        this._shaderTimeUniform.setValue(timer.get());

        this._shaderTypeUniform.setValue(texType);
        let s = [port.op.patch.cgl.canvasWidth, port.op.patch.cgl.canvasHeight];

        cgl.gl.clearColor(0, 0, 0, 0);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

        cgl.pushModelMatrix();
        if (small)
        {
            s = sizeTex;
            mat4.translate(cgl.mMatrix, cgl.mMatrix, [sizeTex[0] / 2, sizeTex[1] / 2, 0]);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, [sizeTex[0] / 2, sizeTex[1] / 2, 0]);
        }
        this._mesh.render(this._shader);
        cgl.popModelMatrix();

        if (texType == 0) cgl.setTexture(texSlot, oldTex);
        if (texType == 1) cgl.setTexture(texSlotCubemap, oldTexCubemap);

        cgl.popPMatrix();
        cgl.resetViewPort();

        const sizeImg = [layer.width, layer.height];

        const stretch = false;
        // if (!stretch)
        // {
        if (portTex.width > portTex.height) sizeImg[1] = layer.width * sizeTex[1] / sizeTex[0];
        else
        {
            sizeImg[1] = layer.width * (sizeTex[1] / sizeTex[0]);

            if (sizeImg[1] > layer.height)
            {
                const r = layer.height / sizeImg[1];
                sizeImg[0] *= r;
                sizeImg[1] *= r;
            }
        }

        const scaledDown = sizeImg[0] > sizeTex[0] && sizeImg[1] > sizeTex[1];

        // ctx.imageSmoothingEnabled = !small || !scaledDown;
        ctx.imageSmoothingEnabled = true;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(layer.x, layer.y - 10, 10, 10);
        ctx.fillStyle = "#000000";
        ctx.fillRect(layer.x, layer.y - 10, 5, 5);
        ctx.fillRect(layer.x + 5, layer.y - 10 + 5, 5, 5);

        let layerHeight = layer.height;
        let numX = (10 * layer.width / layerHeight);
        let stepY = (layerHeight / 10);
        let stepX = (layer.width / numX);
        for (let x = 0; x < numX; x++)
            for (let y = 0; y < 10; y++)
            {
                if ((x + y) % 2 == 0)ctx.fillStyle = "#333333";
                else ctx.fillStyle = "#393939";
                ctx.fillRect(layer.x + stepX * x, layer.y + stepY * y, stepX, stepY);
            }

        ctx.fillStyle = "#222";
        const borderLeft = (layer.width - sizeImg[0]) / 2;
        const borderTop = (layerHeight - sizeImg[1]) / 2;

        let imgPosX = layer.x + (layer.width - sizeImg[0]) / 2;
        let imgPosY = layer.y + (layerHeight - sizeImg[1]) / 2;
        let imgSizeW = sizeImg[0];
        let imgSizeH = sizeImg[1];

        if (layerHeight - sizeImg[1] < 0)
        {
            imgPosX = layer.x + (layer.width - sizeImg[0] * layerHeight / sizeImg[1]) / 2;
            imgPosY = layer.y;
            imgSizeW = sizeImg[0] * layerHeight / sizeImg[1];
            imgSizeH = layerHeight;
        }

        ctx.fillRect(layer.x, layer.y, imgPosX - layer.x, layerHeight);
        ctx.fillRect(layer.x + imgSizeW + imgPosX - layer.x, layer.y, imgSizeW, layerHeight);
        ctx.fillRect(layer.x, layer.y, layer.width, borderTop);
        ctx.fillRect(layer.x, layer.y + sizeImg[1] + borderTop, layer.width, borderTop);

        if (cgl.canvas && cgl.canvasWidth > 0 && cgl.canvasHeight > 0 && cgl.canvas.width > 0 && cgl.canvas.height > 0)
        {
            try
            {
                const bigPixels = imgSizeW / s[0] > 3 || imgSizeH / s[1] > 3;
                const veryBigPixels = imgSizeW / s[0] > 10 || imgSizeH / s[1] > 10;

                if (sizeTex[1] == 1)
                {
                    ctx.imageSmoothingEnabled = false;// workaround filtering problems
                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        layer.x,
                        layer.y,
                        layer.width,
                        layerHeight);// workaround filtering problems
                    ctx.imageSmoothingEnabled = true;
                }
                else
                if (sizeTex[0] == 1)
                {
                    ctx.imageSmoothingEnabled = false;// workaround filtering problems
                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        layer.x,
                        layer.y,
                        layer.width,
                        layerHeight);
                    ctx.imageSmoothingEnabled = true;
                }
                else
                if (sizeImg[0] != 0 && sizeImg[1] != 0 && layer.width != 0 && layerHeight != 0 && imgSizeW != 0 && imgSizeH != 0)
                {
                    ctx.imageSmoothingEnabled = !bigPixels;

                    ctx.drawImage(cgl.canvas,
                        0,
                        0,
                        s[0],
                        s[1],
                        imgPosX,
                        imgPosY,
                        imgSizeW,
                        imgSizeH);
                }

                if (veryBigPixels)
                {
                    const stepx = imgSizeW / s[0];
                    const stepy = imgSizeH / s[1];

                    ctx.imageSmoothingEnabled = true;
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.5;
                    ctx.beginPath();

                    for (let x = 0; x <= s[0]; x++)
                    {
                        ctx.moveTo(imgPosX + x * stepx, imgPosY);
                        ctx.lineTo(imgPosX + x * stepx, imgPosY + imgSizeH);
                    }

                    for (let y = 0; y <= s[1]; y++)
                    {
                        ctx.moveTo(imgPosX, imgPosY + y * stepy);
                        ctx.lineTo(imgPosX + imgSizeW, imgPosY + y * stepy);
                    }

                    ctx.strokeStyle = "#555";
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
            catch (e)
            {
                console.error("canvas drawimage exception...", e);
            }
            // }
        }

        let info = "";
        if (inShowInfo.get() && port.get() && port.get().getInfoOneLine) info += port.get().getInfoOneLine() + "\n";
        outInfo.set(info);

        if (inPickColor.get())
        {
            info += colorString + "\n";

            const x = imgPosX + imgSizeW * inX.get();
            const y = imgPosY + imgSizeH * inY.get();

            for (let ii = 0; ii < 2; ii++)
            {
                if (ii == 0)ctx.fillStyle = "#000";
                else ctx.fillStyle = "#fff";

                ctx.fillRect(
                    x - 1 + ii,
                    y - 10 + ii,
                    1,
                    20);

                ctx.fillRect(
                    x - 10 + ii,
                    y - 1 + ii,
                    20,
                    1);
            }
        }

        if (inShowInfo.get() || inPickColor.get())
        {
            op.setUiAttrib({ "comment": info });
        }

        if (inPickColor.get())
        {
            const gl = cgl.gl;

            const realTexture = inTex.get();
            if (!realTexture)
            {
                colorString = "";
                return;
            }
            if (!fb) fb = gl.createFramebuffer();
            if (!pixelReader) pixelReader = new CGL.PixelReader();

            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, realTexture.tex, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            pixelReader.read(cgl, fb, realTexture.pixelFormat, inX.get() * realTexture.width, realTexture.height - inY.get() * realTexture.height, 1, 1, (pixel) =>
            {
                if (!CGL.Texture.isPixelFormatFloat(realTexture.pixelFormat))
                {
                    colorString = "Pixel Float: " + Math.floor(pixel[0] / 255 * 100) / 100;
                    if (!isNaN(pixel[1]))colorString += ", " + Math.floor(pixel[1] / 255 * 100) / 100;
                    if (!isNaN(pixel[2]))colorString += ", " + Math.floor(pixel[2] / 255 * 100) / 100;
                    if (!isNaN(pixel[3]))colorString += ", " + Math.floor(pixel[3] / 255 * 100) / 100;
                    colorString += "\n";

                    if (realTexture.pixelFormat.indexOf("ubyte") > 0)
                    {
                        colorString += "Pixel UByte: ";
                        colorString += Math.round(pixel[0]);
                        if (!isNaN(pixel[1]))colorString += ", " + Math.round(pixel[1]);
                        if (!isNaN(pixel[2]))colorString += ", " + Math.round(pixel[2]);
                        if (!isNaN(pixel[3]))colorString += ", " + Math.round(pixel[3]);

                        colorString += "\n";
                    }
                }
                else
                {
                    colorString = "Pixel Float: " + Math.round(pixel[0] * 100) / 100 + ", " + Math.round(pixel[1] * 100) / 100 + ", " + Math.round(pixel[2] * 100) / 100 + ", " + Math.round(pixel[3] * 100) / 100;
                    colorString += "\n";
                }
            });
        }
    }

    cgl.gl.clearColor(0, 0, 0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    perf.finish();
};

}
};

CABLES.OPS["4ea2d7b0-ca74-45db-962b-4d1965ac20c0"]={f:Ops.Ui.VizTexture,objName:"Ops.Ui.VizTexture"};




// **************************************************************
// 
// Ops.Devices.Browser.BrowserInfo_v3
// 
// **************************************************************

Ops.Devices.Browser.BrowserInfo_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    isMobile = op.outBoolNum("Is Mobile", false),
    isTouch = op.outBoolNum("Is Touchscreen", false),
    isIe = op.outBoolNum("Is IE", false),
    isEdge = op.outBoolNum("Is Edge", false),
    isChrome = op.outBoolNum("Is Chrome", false),
    isFirefox = op.outBoolNum("Is Firefox", false),
    isOpera = op.outBoolNum("Is Opera", false),
    isSafari = op.outBoolNum("Is Safari", false),
    isWindows = op.outBoolNum("Is Windows", false),
    isLinux = op.outBoolNum("Is Linux", false),
    isMac = op.outBoolNum("Is Mac", false),
    isIos = op.outBoolNum("Is iOS", false),
    isAndroid = op.outBoolNum("Is Android", false),
    isElectron = op.outBoolNum("Is Electron", false),
    outOS = op.outString("Operating System", ""),
    outBrowserName = op.outString("Browser Name", ""),
    outBrowserVersion = op.outString("Browser Version"),
    outVersion = op.outString("OS Version", ""),
    outNav = op.outString("Language"),
    outUA = op.outString("User Agent"),
    outPlatform = op.outObject("Platform Object", platform);

op.setPortGroup("Browsers", [isIe, isEdge, isChrome, isFirefox, isOpera, isSafari]);
op.setPortGroup("Operating Systems", [isWindows, isLinux, isMac, isIos, isAndroid, isElectron]);
op.setPortGroup("Textual Information", [outOS, outBrowserName, outNav, outVersion, outUA, outBrowserVersion]);
const pf = platform;

const osFamily = pf.os.family;

const isOperaBool = pf.name === "Opera";
const isSafariBool = pf.name === "Safari";
const isIEBool = pf.name === "IE";
const isEdgeBool = pf.name === "Microsoft Edge";
const isChromeBool = pf.name === "Chrome" || pf.name === "Chrome Mobile";
const isBlinkBool = pf.layout === "Blink";
const isFirefoxBool = pf.name === "Firefox" || pf.name === "Firefox Mobile" || pf.name === "Firefox for iOS";

const isLinuxBool = osFamily === "Linux"
    || osFamily === "Ubuntu"
    || osFamily === "SuSE"
    || osFamily === "Fedora"
    || osFamily === "OpenBSD"
    || osFamily === "Debian"
    || osFamily === "Red Hat";

const isMacBool = osFamily === "Mac" || osFamily === "Macintosh" || osFamily === "Mac OS X" || osFamily === "OS X";
const isWindowsBool = osFamily === "Windows" || osFamily === "Windows 98;";
const isAndroidBool = osFamily === "Android";
const isIosBool = osFamily === "iOS";
const isMobileBool = (osFamily === "webOS" // LG mobile phones
    || osFamily === "Windows Phone"
    || osFamily === "Android"
    || osFamily === "iOS")
    ||
    (pf.name === "Chrome Mobile"
    || pf.name === "Firefox for iOS"
    || pf.name === "Firefox Mobile"
    || pf.name === "IE Mobile"
    || pf.name === "Opera Mobile");
const isElectronBool = pf.name === "Electron";

const isTouchDevice = (
    ("ontouchstart" in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));

isMobile.set(isMobileBool);
isTouch.set(isTouchDevice);

isIe.set(isIEBool);
isEdge.set(isEdgeBool);
isChrome.set(isChromeBool);
isFirefox.set(isFirefoxBool);
isOpera.set(isOperaBool);
isSafari.set(isSafariBool);

isMac.set(isMacBool);
isLinux.set(isLinuxBool);
isWindows.set(isWindowsBool);
isIos.set(isIosBool);
isAndroid.set(isAndroidBool);
isElectron.set(isElectronBool);

outBrowserVersion.set(pf.version);
outNav.set(navigator.language || navigator.userLanguage);
outUA.set(pf.ua);
outVersion.set(pf.os.version);
outOS.set(pf.os.toString());
outBrowserName.set(pf.name);

}
};

CABLES.OPS["ec3e0121-b2c2-4c31-bbda-a6982080f73f"]={f:Ops.Devices.Browser.BrowserInfo_v3,objName:"Ops.Devices.Browser.BrowserInfo_v3"};




// **************************************************************
// 
// Ops.Ui.VizBool
// 
// **************************************************************

Ops.Ui.VizBool= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inBool("Boolean", 0),
    outBool = op.outBoolNum("Bool");

op.setUiAttrib({ "height": 100, "width": 100, "resizable": true });

inNum.onChange = () =>
{
    outBool.set(inNum.get());
};

op.renderVizLayer = (ctx, layer) =>
{
    if (layer.width <= 0 || layer.height <= 0) return;

    ctx.fillStyle = "#222";
    ctx.fillRect(layer.x, layer.y, layer.width, layer.height);

    let isTrue = !!inNum.get();

    let circle = new Path2D();
    let radius = Math.min(layer.height, layer.width) / 2.4 * 0.8;
    if (radius < 0)radius = 0;
    circle.arc(layer.x + layer.width / 2, layer.y + layer.height / 2, radius, 0, 2 * Math.PI, false);

    ctx.strokeStyle = "#555";
    ctx.lineWidth = 7 * layer.scale;
    ctx.stroke(circle);

    if (isTrue)
    {
        if (op.uiAttribs.color)ctx.fillStyle = op.uiAttribs.color;
        else ctx.fillStyle = "#ccc";

        let circle = new Path2D();
        circle.arc(layer.x + layer.width / 2, layer.y + layer.height / 2, radius - (ctx.lineWidth / 2), 0, 2 * Math.PI, false);
        ctx.fill(circle);
    }
};

}
};

CABLES.OPS["cf194306-175b-416a-b90e-31ff2192a190"]={f:Ops.Ui.VizBool,objName:"Ops.Ui.VizBool"};




// **************************************************************
// 
// Ops.Number.SwitchNumber
// 
// **************************************************************

Ops.Number.SwitchNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const idx = op.inValueInt("Index");
const valuePorts = [];
const result = op.outNumber("Result");

idx.onChange = update;

for (let i = 0; i < 16; i++)
{
    let p = op.inValue("Value " + i);
    valuePorts.push(p);
    p.onChange = update;
}

function update()
{
    if (idx.get() >= 0 && valuePorts[idx.get()])
    {
        result.set(valuePorts[idx.get()].get());
    }
}

}
};

CABLES.OPS["fbb89f72-f2e3-4d34-ad01-7d884a1bcdc0"]={f:Ops.Number.SwitchNumber,objName:"Ops.Number.SwitchNumber"};




// **************************************************************
// 
// Ops.Math.Compare.Between
// 
// **************************************************************

Ops.Math.Compare.Between= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number = op.inValue("value", 2),
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 3),
    result = op.outNumber("result");

number1.onChange = exec;
number2.onChange = exec;
number.onChange = exec;
exec();

function exec()
{
    result.set(
        number.get() > Math.min(number1.get(), number2.get()) &&
            number.get() < Math.max(number1.get(), number2.get())
    );
}

}
};

CABLES.OPS["d629959e-838d-4541-b12f-15e2d6ff5131"]={f:Ops.Math.Compare.Between,objName:"Ops.Math.Compare.Between"};




// **************************************************************
// 
// Ops.Devices.TouchGesture
// 
// **************************************************************

Ops.Devices.TouchGesture= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const inEnabled = op.inBool("Active", true);
let enableVerticalSwipePort = op.inValueBool("Vertical Swipe", true);
let enableVerticalPanPort = op.inValueBool("Vertical Pan", true);

// outputs
let pressPort = op.outTrigger("Press");
let pressUpPort = op.outTrigger("Press Up");
let panLeftPort = op.outTrigger("Pan Left");
let panRightPort = op.outTrigger("Pan Right");
let swipeLeftPort = op.outTrigger("Swipe Left");
let swipeRightPort = op.outTrigger("Swipe Right");
let swipeUpPort = op.outTrigger("Swipe Up");
let swipeDownPort = op.outTrigger("Swipe Down");
let eventPort = op.outObject("Event");

let canvas = op.patch.cgl.canvas;

// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(canvas);

// change listeners
enableVerticalSwipePort.onChange = onEnableVerticalSwipePortChange;
enableVerticalPanPort.onChange = onEnableVerticalPanPortChange;

// init
onEnableVerticalSwipePortChange();
onEnableVerticalPanPortChange();

function onEnableVerticalSwipePortChange()
{
    let direction = Hammer.DIRECTION_HORIZONTAL;
    if (enableVerticalSwipePort.get())
    {
        direction = Hammer.DIRECTION_ALL;
    }
    mc.get("swipe").set({ "direction": direction });
}

function onEnableVerticalPanPortChange()
{
    let direction = Hammer.DIRECTION_HORIZONTAL;
    if (enableVerticalPanPort.get())
    {
        direction = Hammer.DIRECTION_ALL;
    }
    mc.get("pan").set({ "direction": direction });
}

/*
mc.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});
*/

mc.on("panleft", onPanLeft);
mc.on("panright", onPanRight);
mc.on("swipeleft", onSwipeLeft);
mc.on("swiperight", onSwipeRight);
mc.on("swipeup", onSwipeUp);
mc.on("swipedown", onSwipeDown);
mc.on("press", onPress);
mc.on("pressup", onPressUp);

function onPress(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    pressPort.trigger();
}

function onPressUp(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    pressUpPort.trigger();
}

function onPanLeft(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    panLeftPort.trigger();
}

function onPanRight(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    panRightPort.trigger();
}

function onSwipeLeft(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    swipeLeftPort.trigger();
}

function onSwipeRight(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    swipeRightPort.trigger();
}

function onSwipeUp(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    swipeUpPort.trigger();
}

function onSwipeDown(ev)
{
    if (!inEnabled.get()) return;
    eventPort.set(ev);
    swipeDownPort.trigger();
}

/*
// By default it adds a set of tap, doubletap, press,
// horizontal pan and swipe, and the multi-touch pinch
// and rotate recognizers. The pinch and rotate recognizers
// are disabled by default because they would make the
// element blocking, but you can enable them by calling:
hammertime.get('pinch').set({ enable: true });
hammertime.get('rotate').set({ enable: true });

// Enabling vertical or all directions for the pan and swipe recognizers:
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
*/

}
};

CABLES.OPS["08c5d91e-32d2-4852-ac18-d4cae543dd37"]={f:Ops.Devices.TouchGesture,objName:"Ops.Devices.TouchGesture"};




// **************************************************************
// 
// Ops.Array.Array4
// 
// **************************************************************

Ops.Array.Array4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inValueInt("Num Quadruplets", 100),
    inX = op.inValueFloat("X", 1),
    inY = op.inValueFloat("Y", 1),
    inZ = op.inValueFloat("Z", 1),
    inW = op.inValueFloat("W", 1),
    outArr = op.outArray("Array", null, 4),
    outTotalPoints = op.outNumber("Total Quadruplets"),
    outArrayLength = op.outNumber("Array length");

inNum.onChange =
    inX.onChange =
    inY.onChange =
    inZ.onChange =
    inW.onChange = update;

let arr = [];
update();

function update()
{
    let num = Math.floor(inNum.get() * 4);

    if (num < 0)num = 0;
    if (arr.length != num) arr.length = num;

    const x = inX.get();
    const y = inY.get();
    const z = inZ.get();
    const w = inW.get();

    for (let i = 0; i < num; i += 4)
    {
        arr[i] = x;
        arr[i + 1] = y;
        arr[i + 2] = z;
        arr[i + 3] = w;
    }

    outArr.setRef(arr);
    outTotalPoints.set(num / 4);
    outArrayLength.set(num);
}

}
};

CABLES.OPS["28607c74-fa98-423e-a6b6-14305d159eac"]={f:Ops.Array.Array4,objName:"Ops.Array.Array4"};




// **************************************************************
// 
// Ops.Array.Array4GetNumbers
// 
// **************************************************************

Ops.Array.Array4GetNumbers= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    pArr = op.inArray("Array"),
    pIndex = op.inValueInt("Index"),
    outX = op.outNumber("X"),
    outY = op.outNumber("Y"),
    outZ = op.outNumber("Z"),
    outW = op.outNumber("W");

pArr.onChange =
    pIndex.onChange = update;

function update()
{
    let arr = pArr.get();
    if (!arr)
    {
        outX.set(0);
        outY.set(0);
        outZ.set(0);
        outW.set(0);
        return;
    }
    let ind = Math.min(arr.length - 4, pIndex.get() * 4);
    if (arr && arr.length > ind + 3)
    {
        outX.set(arr[ind + 0]);
        outY.set(arr[ind + 1]);
        outZ.set(arr[ind + 2]);
        outW.set(arr[ind + 3]);
    }
}

}
};

CABLES.OPS["95e5c82e-6cc2-4cd3-9f68-f94062e620fa"]={f:Ops.Array.Array4GetNumbers,objName:"Ops.Array.Array4GetNumbers"};




// **************************************************************
// 
// Ops.Vars.VarGetArray_v2
// 
// **************************************************************

Ops.Vars.VarGetArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outArray("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "array", op.varName, val);

}
};

CABLES.OPS["afa79294-aa9c-43bc-a49a-cade000a1de5"]={f:Ops.Vars.VarGetArray_v2,objName:"Ops.Vars.VarGetArray_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetArray_v2
// 
// **************************************************************

Ops.Vars.VarSetArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inArray("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "array", val, op.varName);

}
};

CABLES.OPS["8088290f-45d4-4312-b4ca-184d34ca4667"]={f:Ops.Vars.VarSetArray_v2,objName:"Ops.Vars.VarSetArray_v2"};




// **************************************************************
// 
// Ops.Array.SwitchArray
// 
// **************************************************************

Ops.Array.SwitchArray= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
let idx = op.inValueInt("Index");
let valuePorts = [];
let result = op.outArray("Result");

idx.onChange = update;

for (let i = 0; i < 10; i++)
{
    let p = op.inArray("Array " + i);
    valuePorts.push(p);
    p.onChange = update;
}

function update()
{
    if (idx.get() >= 0 && valuePorts[idx.get()] && valuePorts[idx.get()].isLinked())
    {
        result.setRef(valuePorts[idx.get()].get());
    }
    else
        result.setRef([]);
}

}
};

CABLES.OPS["3fab881c-c2cf-42a0-9c42-2d8edfd93f57"]={f:Ops.Array.SwitchArray,objName:"Ops.Array.SwitchArray"};




// **************************************************************
// 
// Ops.Boolean.BoolToNumber_v2
// 
// **************************************************************

Ops.Boolean.BoolToNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    useValue1Port = op.inBool("Use Value 1", false),
    value0port = op.inFloat("Value 0", 0),
    value1port = op.inFloat("Value 1", 1),
    outValuePort = op.outNumber("Out Value", 0);

value0port.onChange =
    value1port.onChange =
    useValue1Port.onChange = setOutput;

function setOutput()
{
    const useValue1 = useValue1Port.get();

    if (useValue1)
    {
        outValuePort.set(value1port.get());
    }
    else
    {
        outValuePort.set(value0port.get());
    }
}

}
};

CABLES.OPS["400eea7d-5a68-4dda-a94d-2bb2ee7c2331"]={f:Ops.Boolean.BoolToNumber_v2,objName:"Ops.Boolean.BoolToNumber_v2"};




// **************************************************************
// 
// Ops.Boolean.TriggerOnChangeBoolean_v2
// 
// **************************************************************

Ops.Boolean.TriggerOnChangeBoolean_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inBool = op.inValueBool("Value"),
    outTrue = op.outTrigger("True"),
    outFalse = op.outTrigger("False");

inBool.onChange = update;

function update()
{
    if (inBool.get()) outTrue.trigger();
    else outFalse.trigger();
}

op.init = () =>
{
    if (inBool.isLinked())update();
};

}
};

CABLES.OPS["57314742-8d51-422e-9f6a-977be424f2c9"]={f:Ops.Boolean.TriggerOnChangeBoolean_v2,objName:"Ops.Boolean.TriggerOnChangeBoolean_v2"};




// **************************************************************
// 
// Ops.Devices.TouchScreen
// 
// **************************************************************

Ops.Devices.TouchScreen= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    disableScaleWeb = op.inValueBool("Disable Scaling", true),
    disableDefault = op.inValueBool("Disable Scroll", true),
    hdpi = op.inValueBool("HDPI Coordinates", false),
    active = op.inValueBool("Active", true),

    outTouched = op.outNumber("Touched", false),
    numFingers = op.outNumber("Fingers", 0),

    f1x = op.outNumber("Finger 1 X", 0),
    f1y = op.outNumber("Finger 1 Y", 0),
    f1f = op.outNumber("Finger 1 Force", 0),

    f2x = op.outNumber("Finger 2 X", 0),
    f2y = op.outNumber("Finger 2 Y", 0),
    f2f = op.outNumber("Finger 2 Force", 0),
    area = op.inSwitch("Area", ["Canvas", "Document"], "Canvas"),

    outEvents = op.outArray("Events"),
    normalize = op.inValueBool("Normalize Coordinates"),
    flipY = op.inValueBool("Flip Y"),
    outTouchStart = op.outTrigger("Touch Start"),
    outTouchEnd = op.outTrigger("Touch End");

area.onChange = updateArea;

function setPos(event)
{
    if (event.touches && event.touches.length > 0)
    {
        var rect = event.target.getBoundingClientRect();
        var x = event.touches[0].clientX - event.touches[0].target.offsetLeft;
        var y = event.touches[0].clientY - event.touches[0].target.offsetTop;

        if (flipY.get()) y = rect.height - y;

        if (hdpi.get())
        {
            x *= (op.patch.cgl.pixelDensity || 1);
            y *= (op.patch.cgl.pixelDensity || 1);
        }

        if (normalize.get())
        {
            x = (x / rect.width * 2.0 - 1.0);
            y = (y / rect.height * 2.0 - 1.0);
        }

        f1x.set(x);
        f1y.set(y);

        if (event.touches[0].force)f1f.set(event.touches[0].force);
    }

    if (event.touches && event.touches.length > 1)
    {
        var rect = event.target.getBoundingClientRect();
        var x = event.touches[1].clientX - event.touches[1].target.offsetLeft;
        var y = event.touches[1].clientY - event.touches[1].target.offsetTop;

        if (hdpi.get())
        {
            x *= (op.patch.cgl.pixelDensity || 1);
            y *= (op.patch.cgl.pixelDensity || 1);
        }

        if (normalize.get())
        {
            x = (x / rect.width * 2.0 - 1.0);
            y = (y / rect.height * 2.0 - 1.0);
        }

        f2x.set(x);
        f2y.set(y);

        if (event.touches[1].force)f2f.set(event.touches[1].force);
    }
    outEvents.set(event.touches);
}

const ontouchstart = function (event)
{
    outTouched.set(true);
    setPos(event);
    numFingers.set(event.touches.length);
    outTouchStart.trigger();
};

const ontouchend = function (event)
{
    outTouched.set(false);
    f1f.set(0);
    f2f.set(0);
    setPos(event);

    numFingers.set(event.touches.length);
    outTouchEnd.trigger();
};

const ontouchmove = function (event)
{
    setPos(event);
    numFingers.set(event.touches.length);
    if (disableDefault.get() || (disableScaleWeb.get() && event.scale !== 1))
    {
        event.preventDefault();
        document.body.style["touch-action"] = "none";
    }
    else
    {
        document.body.style["touch-action"] = "initial";
    }
};

const cgl = op.patch.cgl;
let listenerElement = null;
function addListeners()
{
    listenerElement.addEventListener("touchmove", ontouchmove, { "passive": false });
    listenerElement.addEventListener("touchstart", ontouchstart, { "passive": false });
    listenerElement.addEventListener("touchend", ontouchend, { "passive": false });
}

function updateArea()
{
    removeListeners();

    if (area.get() == "Document") listenerElement = document;
    else listenerElement = cgl.canvas;

    if (active.get()) addListeners();
}

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("touchmove", ontouchmove);
        listenerElement.removeEventListener("touchstart", ontouchstart);
        listenerElement.removeEventListener("touchend", ontouchend);
    }
    listenerElement = null;
}

active.onChange = function ()
{
    updateArea();
};

updateArea();

}
};

CABLES.OPS["cedffacf-0f09-4342-bd21-540bd9c8037d"]={f:Ops.Devices.TouchScreen,objName:"Ops.Devices.TouchScreen"};




// **************************************************************
// 
// Ops.Gl.Matrix.ScreenCoordinates_v2
// 
// **************************************************************

Ops.Gl.Matrix.ScreenCoordinates_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Execute"),
    inUnit = op.inSwitch("Pixel Unit", ["Display", "CSS"], "Display"),
    trigger = op.outTrigger("Trigger"),
    x = op.outNumber("X"),
    y = op.outNumber("Y"),
    visi = op.outNumber("Visible");

const cgl = op.patch.cgl;
const trans = vec3.create();
const m = mat4.create();
const pos = vec3.create();
const identVec = vec3.create();
let div = -1;
inUnit.onChange = updateUnit;
updateUnit();

cgl.on("resize", updateUnit);

function updateUnit()
{
    if (inUnit.get() == "CSS")div = cgl.pixelDensity;
    else div = 1;
}

exec.onTriggered = function ()
{
    if (div == -1)updateUnit();
    mat4.multiply(m, cgl.vMatrix, cgl.mMatrix);

    vec3.transformMat4(pos, identVec, m);
    vec3.transformMat4(trans, pos, cgl.pMatrix);

    const vp = cgl.getViewPort();
    const xp = (trans[0] * vp[2] / 2) + vp[2] / 2;
    const yp = (trans[1] * vp[3] / 2) + vp[3] / 2;

    visi.set(pos[2] < 0.0 && xp > 0 && xp < vp[2] && yp > 0 && yp < vp[3]);

    x.set(xp / div);
    y.set(vp[3] / div - yp / div);

    trigger.trigger();
};

}
};

CABLES.OPS["adbf5273-3275-490d-9002-e735b81cbb9a"]={f:Ops.Gl.Matrix.ScreenCoordinates_v2,objName:"Ops.Gl.Matrix.ScreenCoordinates_v2"};




// **************************************************************
// 
// Ops.Math.Compare.BetweenEquals
// 
// **************************************************************

Ops.Math.Compare.BetweenEquals= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number = op.inValueFloat("Value", 2),
    range1 = op.inValueFloat("Range 1", 1),
    range2 = op.inValueFloat("Range 2", 3),
    result = op.outNumber("Result");

number.onChange = range1.onChange = range2.onChange = exec;
exec();

function exec()
{
    result.set(
        number.get() >= Math.min(range1.get(), range2.get()) &&
      number.get() <= Math.max(range1.get(), range2.get())
    );
}

}
};

CABLES.OPS["e2d6d6c4-84c7-42d7-a1b2-e9c5d4c5c13e"]={f:Ops.Math.Compare.BetweenEquals,objName:"Ops.Math.Compare.BetweenEquals"};




// **************************************************************
// 
// Ops.Anim.Smooth
// 
// **************************************************************

Ops.Anim.Smooth= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Update"),
    inMode = op.inBool("Separate inc/dec", false),
    inVal = op.inValue("Value"),
    next = op.outTrigger("Next"),
    inDivisorUp = op.inValue("Inc factor", 4),
    inDivisorDown = op.inValue("Dec factor", 4),
    result = op.outNumber("Result", 0);

let val = 0;
let goal = 0;
let oldVal = 0;
let lastTrigger = 0;

op.toWorkPortsNeedToBeLinked(exec);

let divisorUp;
let divisorDown;
let divisor = 4;
let finished = true;

let selectIndex = 0;
const MODE_SINGLE = 0;
const MODE_UP_DOWN = 1;

onFilterChange();
getDivisors();

inMode.setUiAttribs({ "hidePort": true });

inDivisorUp.onChange = inDivisorDown.onChange = getDivisors;
inMode.onChange = onFilterChange;
update();

function onFilterChange()
{
    const selectedMode = inMode.get();
    if (!selectedMode) selectIndex = MODE_SINGLE;
    else selectIndex = MODE_UP_DOWN;

    if (selectIndex == MODE_SINGLE)
    {
        inDivisorDown.setUiAttribs({ "greyout": true });
        inDivisorUp.setUiAttribs({ "title": "Inc/Dec factor" });
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        inDivisorDown.setUiAttribs({ "greyout": false });
        inDivisorUp.setUiAttribs({ "title": "Inc factor" });
    }

    getDivisors();
    update();
}

function getDivisors()
{
    if (selectIndex == MODE_SINGLE)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorUp.get();
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorDown.get();
    }

    if (divisorUp <= 0.2 || divisorUp != divisorUp)divisorUp = 0.2;
    if (divisorDown <= 0.2 || divisorDown != divisorDown)divisorDown = 0.2;
}

inVal.onChange = function ()
{
    finished = false;
    let oldGoal = goal;
    goal = inVal.get();
};

inDivisorUp.onChange = function ()
{
    getDivisors();
};

function update()
{
    let tm = 1;
    if (performance.now() - lastTrigger > 500 || lastTrigger === 0) val = inVal.get() || 0;
    else tm = (performance.now() - lastTrigger) / (performance.now() - lastTrigger);
    lastTrigger = performance.now();

    if (val != val)val = 0;

    if (divisor <= 0)divisor = 0.0001;

    const diff = goal - val;

    if (diff >= 0) val += (diff) / (divisorDown * tm);
    else val += (diff) / (divisorUp * tm);

    if (Math.abs(diff) < 0.00001)val = goal;

    if (divisor != divisor)val = 0;
    if (val != val || val == -Infinity || val == Infinity)val = inVal.get();

    if (oldVal != val)
    {
        result.set(val);
        oldVal = val;
    }

    if (val == goal && !finished)
    {
        finished = true;
        result.set(val);
    }
}

exec.onTriggered = function ()
{
    update();
    next.trigger();
};

}
};

CABLES.OPS["5677b5b5-753a-4fbf-9e91-64c81ec68a2f"]={f:Ops.Anim.Smooth,objName:"Ops.Anim.Smooth"};




// **************************************************************
// 
// Ops.Devices.Browser.JsExpression
// 
// **************************************************************

Ops.Devices.Browser.JsExpression= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inJs = op.inString("JS Expression", "document.body.clientWidth"),
    outStr = op.outString("Result String"),
    outNum = op.outNumber("Result Number"),
    outArr = op.outArray("Result Array"),
    outObj = op.outObject("Result Object"),
    outErr = op.outBoolNum("Error");

inJs.onChange = update;
update();

function update()
{
    outErr.set(false);
    try
    {
        const a = eval("\"use strict\";" + inJs.get());

        if (CABLES.isNumeric(a))
        {
            outNum.set(a);
            outStr.set(a + "");
        }
        else if (typeof a === "string")
        {
            outNum.set(0);
            outStr.set(a);
        }
        else if (Array.isArray(a))
        {
            outNum.set(0);
            outStr.set("");
            outObj.set(null);
            outArr.set(a);
        }
        else if (typeof a === "object")
        {
            outArr.set(null);
            outNum.set(0);
            outStr.set("");
            outObj.set(a);
        }
    }
    catch (e)
    {
        outErr.set(true);
        op.logWarn("error", e);
    }
}

}
};

CABLES.OPS["48da33bb-ca42-4e5e-a5de-ca5d14ab6709"]={f:Ops.Devices.Browser.JsExpression,objName:"Ops.Devices.Browser.JsExpression"};




// **************************************************************
// 
// Ops.String.NumberToString_v2
// 
// **************************************************************

Ops.String.NumberToString_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValue("Number"),
    decPlaces = op.inInt("Decimal Places", 4),
    result = op.outString("Result");

let doDec = false;
let decm = 1;
decPlaces.onChange = updateDecm;
val.onChange = update;
updateDecm();
update();

function updateDecm()
{
    doDec = decPlaces.get() < 100;
    decm = Math.pow(10, decPlaces.get());
    update();
}

function update()
{
    if (doDec)
        result.set(String(Math.round(val.get() * decm) / decm));
    else
        result.set(String(val.get() || 0));
}

}
};

CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};




// **************************************************************
// 
// Ops.String.StringCompose_v3
// 
// **************************************************************

Ops.String.StringCompose_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    format=op.inString('Format',"hello $a, $b $c und $d"),
    a=op.inString('String A','world'),
    b=op.inString('String B',1),
    c=op.inString('String C',2),
    d=op.inString('String D',3),
    e=op.inString('String E'),
    f=op.inString('String F'),
    result=op.outString("Result");

format.onChange=
    a.onChange=
    b.onChange=
    c.onChange=
    d.onChange=
    e.onChange=
    f.onChange=update;

update();

function update()
{
    var str=format.get()||'';
    if(typeof str!='string')
        str='';

    str = str.replace(/\$a/g, a.get());
    str = str.replace(/\$b/g, b.get());
    str = str.replace(/\$c/g, c.get());
    str = str.replace(/\$d/g, d.get());
    str = str.replace(/\$e/g, e.get());
    str = str.replace(/\$f/g, f.get());

    result.set(str);
}
}
};

CABLES.OPS["6afea9f4-728d-4f3c-9e75-62ddc1448bf0"]={f:Ops.String.StringCompose_v3,objName:"Ops.String.StringCompose_v3"};




// **************************************************************
// 
// Ops.Gl.CanvasInfo_v3
// 
// **************************************************************

Ops.Gl.CanvasInfo_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    width = op.outNumber("CSS Width"),
    height = op.outNumber("CSS Height"),
    pixelRatio = op.outNumber("Pixel Ratio"),
    widthPixel = op.outNumber("Pixel Width"),
    heightPixel = op.outNumber("Pixel Height"),
    aspect = op.outNumber("Aspect Ratio"),
    landscape = op.outBool("Landscape"),
    outCanvasEle = op.outObject("Canvas", "element"),
    outCanvasParentEle = op.outObject("Canvas Parent", "element"),
    outResize = op.outTrigger("Resized");

let cgl = op.patch.cgl;
outCanvasEle.set(op.patch.cgl.canvas);
outCanvasParentEle.set(op.patch.cgl.canvas.parentElement);

cgl.on("resize", () =>
{
    outResize.trigger();
    update();
});

update();

function update()
{
    let div = 1;

    if (cgl.canvasHeight == 0)setTimeout(update, 100);

    height.set(cgl.canvasHeight / op.patch.cgl.pixelDensity);
    width.set(cgl.canvasWidth / op.patch.cgl.pixelDensity);

    widthPixel.set(cgl.canvasWidth);
    heightPixel.set(cgl.canvasHeight);

    pixelRatio.set(op.patch.cgl.pixelDensity); // window.devicePixelRatio

    aspect.set(cgl.canvasWidth / cgl.canvasHeight);
    landscape.set(cgl.canvasWidth > cgl.canvasHeight ? 1 : 0);
}

}
};

CABLES.OPS["be186ff9-427e-409f-b6a4-f8d957bf7bc7"]={f:Ops.Gl.CanvasInfo_v3,objName:"Ops.Gl.CanvasInfo_v3"};




// **************************************************************
// 
// Ops.Array.Array3
// 
// **************************************************************

Ops.Array.Array3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inValueInt("Num Triplets", 100),
    inX = op.inValueFloat("X", 0),
    inY = op.inValueFloat("Y", 0),
    inZ = op.inValueFloat("Z", 0),
    outArr = op.outArray("Array", null, 3),
    outTotalPoints = op.outNumber("Total points"),
    outArrayLength = op.outNumber("Array length");

inNum.onChange =
    inX.onChange =
    inY.onChange =
    inZ.onChange = update;

let arr = [];
update();

function update()
{
    let num = Math.floor(inNum.get() * 3);

    if (num < 0)num = 0;
    if (arr.length != num) arr.length = num;

    const x = inX.get();
    const y = inY.get();
    const z = inZ.get();

    for (let i = 0; i < num; i += 3)
    {
        arr[i] = x;
        arr[i + 1] = y;
        arr[i + 2] = z;
    }

    outArr.setRef(arr);
    outTotalPoints.set(num / 3);
    outArrayLength.set(num);
}

}
};

CABLES.OPS["2766606a-3ea0-4204-8613-b8950a124435"]={f:Ops.Array.Array3,objName:"Ops.Array.Array3"};




// **************************************************************
// 
// Ops.Array.ArrayMath
// 
// **************************************************************

Ops.Array.ArrayMath= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inArray_0 = op.inArray("array 0"),
    NumberIn = op.inValueFloat("Number for math", 0.0),
    mathSelect = op.inSwitch("Math function", ["+", "-", "*", "/", "%", "min", "max"], "+"),
    outArray = op.outArray("Array result"),
    outArrayLength = op.outNumber("Array length");

op.toWorkPortsNeedToBeLinked(inArray_0);

let mathFunc;
let showingError = false;
let mathArray = [];

inArray_0.onChange = NumberIn.onChange = update;
mathSelect.onChange = onFilterChange;

onFilterChange();

inArray_0.onLinkChanged = () =>
{
    if (inArray_0) inArray_0.copyLinkedUiAttrib("stride", outArray);
};

function onFilterChange()
{
    let mathSelectValue = mathSelect.get();

    if (mathSelectValue === "+") mathFunc = function (a, b) { return a + b; };
    else if (mathSelectValue === "-") mathFunc = function (a, b) { return a - b; };
    else if (mathSelectValue === "*") mathFunc = function (a, b) { return a * b; };
    else if (mathSelectValue === "/") mathFunc = function (a, b) { return a / b; };
    else if (mathSelectValue === "%") mathFunc = function (a, b) { return a % b; };
    else if (mathSelectValue === "min") mathFunc = function (a, b) { return Math.min(a, b); };
    else if (mathSelectValue === "max") mathFunc = function (a, b) { return Math.max(a, b); };
    update();
    op.setUiAttrib({ "extendTitle": mathSelectValue });
}

function update()
{
    let array0 = inArray_0.get();

    mathArray.length = 0;

    if (!array0)
    {
        outArrayLength.set(0);
        outArray.set(null);
        return;
    }

    let num = NumberIn.get();
    mathArray.length = array0.length;

    let i = 0;

    for (i = 0; i < array0.length; i++)
    {
        mathArray[i] = mathFunc(array0[i], num);
    }

    outArray.setRef(mathArray);
    outArrayLength.set(mathArray.length);
}

}
};

CABLES.OPS["c7617717-3114-452f-9625-e4fefd841e88"]={f:Ops.Array.ArrayMath,objName:"Ops.Array.ArrayMath"};




// **************************************************************
// 
// Ops.Array.Array3GetNumbers
// 
// **************************************************************

Ops.Array.Array3GetNumbers= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    pArr = op.inArray("Array", 3),
    pIndex = op.inValueInt("Index"),
    outX = op.outNumber("X"),
    outY = op.outNumber("Y"),
    outZ = op.outNumber("Z");

pArr.onChange =
    pIndex.onChange = update;

function update()
{
    let arr = pArr.get();
    if (!arr)
    {
        outX.set(0);
        outY.set(0);
        outZ.set(0);
        return;
    }
    let ind = Math.min(arr.length - 3, pIndex.get() * 3);
    if (arr)
    {
        outX.set(arr[ind + 0]);
        outY.set(arr[ind + 1]);
        outZ.set(arr[ind + 2]);
    }
}

}
};

CABLES.OPS["56882cc4-c40d-4dc0-bf7c-db1b5a7acad0"]={f:Ops.Array.Array3GetNumbers,objName:"Ops.Array.Array3GetNumbers"};




// **************************************************************
// 
// Ops.Math.Compare.LessThan
// 
// **************************************************************

Ops.Math.Compare.LessThan= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const number1 = op.inValue("number1");
const number2 = op.inValue("number2");
const result = op.outBoolNum("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = exec;
number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() < number2.get());
}

}
};

CABLES.OPS["04fd113f-ade1-43fb-99fa-f8825f8814c0"]={f:Ops.Math.Compare.LessThan,objName:"Ops.Math.Compare.LessThan"};




// **************************************************************
// 
// Ops.Array.Array_v3
// 
// **************************************************************

Ops.Array.Array_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inLength = op.inValueInt("Array length", 10),
    modeSelect = op.inSwitch("Mode select", ["Number", "1,2,3,4", "0-1"], "Number"),
    inDefaultValue = op.inValueFloat("Default Value"),
    inReverse = op.inBool("Reverse", false),
    outArr = op.outArray("Array"),
    outArrayLength = op.outNumber("Array length out");

let arr = [];
let selectIndex = 0;
const MODE_NUMBER = 0;
const MODE_1_TO_4 = 1;
const MODE_0_TO_1 = 2;

modeSelect.onChange = onFilterChange;

inReverse.onChange =
    inDefaultValue.onChange =
    inLength.onChange = reset;

onFilterChange();
reset();

function onFilterChange()
{
    let selectedMode = modeSelect.get();
    if (selectedMode === "Number") selectIndex = MODE_NUMBER;
    else if (selectedMode === "1,2,3,4") selectIndex = MODE_1_TO_4;
    else if (selectedMode === "0-1") selectIndex = MODE_0_TO_1;

    inDefaultValue.setUiAttribs({ "greyout": selectIndex !== MODE_NUMBER });

    op.setUiAttrib({ "extendTitle": modeSelect.get() });

    reset();
}

function reset()
{
    arr.length = 0;

    let arrLength = inLength.get();
    let valueForArray = inDefaultValue.get();
    let i;

    // mode 0 - fill all array values with one number
    if (selectIndex === MODE_NUMBER)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = valueForArray;
        }
    }
    // mode 1 Continuous number array - increments up to array length
    else if (selectIndex === MODE_1_TO_4)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = i;
        }
    }
    // mode 2 Normalized array
    else if (selectIndex === MODE_0_TO_1)
    {
        if (arrLength > 1) { 
            for (i = 0; i < arrLength; i++)
                {
                    arr[i] = i / (arrLength - 1);
                }
        } else 
        {
            //When array length is only 1 
            arr = [0];
        }
    }

    if (inReverse.get())arr = arr.reverse();

    outArr.setRef(arr);
    outArrayLength.set(arr.length);
}

}
};

CABLES.OPS["e4d31a46-bf64-42a8-be34-4cbb2bbc2600"]={f:Ops.Array.Array_v3,objName:"Ops.Array.Array_v3"};




// **************************************************************
// 
// Ops.Array.ArrayGetNumber
// 
// **************************************************************

Ops.Array.ArrayGetNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    index = op.inValueInt("index"),
    valueInvalid = op.inFloat("Value Invalid Index", 0),
    value = op.outNumber("value"),
    outValidIndex = op.outBoolNum("Valid Index", true);

array.ignoreValueSerialize = true;

index.onChange = array.onChange = update;

function update()
{
    if (array.get())
    {
        const input = array.get()[index.get()];
        if (isNaN(input))
        {
            value.set(valueInvalid.get());
            outValidIndex.set(false);
        }
        else
        {
            outValidIndex.set(true);
            value.set(parseFloat(input));
        }
    }
}

}
};

CABLES.OPS["d1189078-70cf-437d-9a37-b2ebe89acdaf"]={f:Ops.Array.ArrayGetNumber,objName:"Ops.Array.ArrayGetNumber"};




// **************************************************************
// 
// Ops.Array.ArraySetNumber_v3
// 
// **************************************************************

Ops.Array.ArraySetNumber_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArray = op.inArray("Array"),
    inIndex = op.inInt("Index", 0),
    inValue = op.inFloat("Number", 1),
    outArray = op.outArray("Result");

let arr = [];
op.toWorkPortsNeedToBeLinked(inArray);

inArray.onChange =
    inIndex.onChange =
    inValue.onChange = update;

function update()
{
    const srcArr = inArray.get();

    if (!srcArr)
    {
        outArray.set(null);
        return;
    }

    arr.length = srcArr.length;
    const idx = inIndex.get();

    for (let i = 0; i < srcArr.length; i++)
    {
        if (idx === i)arr[i] = inValue.get();
        else arr[i] = srcArr[i];
    }

    outArray.setRef(arr);
}

}
};

CABLES.OPS["1a71327d-fe88-4796-9ebd-5a1c1cd083af"]={f:Ops.Array.ArraySetNumber_v3,objName:"Ops.Array.ArraySetNumber_v3"};




// **************************************************************
// 
// Ops.Math.Abs
// 
// **************************************************************

Ops.Math.Abs= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number = op.inValue("number"),
    result = op.outNumber("result");

number.onChange = function ()
{
    result.set(Math.abs(number.get()));
};

}
};

CABLES.OPS["6b5af21d-065f-44d2-9442-8b7a254753f6"]={f:Ops.Math.Abs,objName:"Ops.Math.Abs"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfDracoCompression
// 
// **************************************************************

Ops.Gl.GLTF.GltfDracoCompression= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
class DracoDecoderClass
{
    constructor()
    {
        this.workerLimit = 4;
        this.workerPool = [];
        this.workerNextTaskID = 1;
        this.workerSourceURL = "";

        this.config = {
            "wasm": Uint8Array.from(atob(DracoDecoderWASM), (c) => { return c.charCodeAt(0); }),
            "wrapper": DracoWASMWrapperCode,
            "decoderSettings": {},
        };

        const dracoWorker = this._DracoWorker.toString();
        const workerCode = dracoWorker.substring(dracoWorker.indexOf("{") + 1, dracoWorker.lastIndexOf("}"));

        const jsContent = this.config.wrapper;
        const body = [
            "/* draco decoder */",
            jsContent,
            "",
            "/* worker */",
            workerCode
        ].join("\n");

        this.workerSourceURL = URL.createObjectURL(new Blob([body]));
    }

    _getWorker(taskID, taskCost)
    {
        if (this.workerPool.length < this.workerLimit)
        {
            const worker = new Worker(this.workerSourceURL);
            worker._callbacks = {};
            worker._taskCosts = {};
            worker._taskLoad = 0;
            worker.postMessage({ "type": "init", "decoderConfig": this.config });
            worker.onmessage = (e) =>
            {
                const message = e.data;

                switch (message.type)
                {
                case "done":
                    worker._callbacks[message.taskID].finishedCallback(message.geometry);
                    break;

                case "error":
                    worker._callbacks[message.taskID].errorCallback(message);
                    break;

                default:
                    op.error("THREE.DRACOLoader: Unexpected message, \"" + message.type + "\"");
                }
                this._releaseTask(worker, message.taskID);
            };
            this.workerPool.push(worker);
        }
        else
        {
            this.workerPool.sort(function (a, b)
            {
                return a._taskLoad > b._taskLoad ? -1 : 1;
            });
        }

        const worker = this.workerPool[this.workerPool.length - 1];
        worker._taskCosts[taskID] = taskCost;
        worker._taskLoad += taskCost;
        return worker;
    }

    decodeGeometry(buffer, finishedCallback, errorCallback = null)
    {
        const taskID = this.workerNextTaskID++;
        const taskCost = buffer.byteLength;

        const worker = this._getWorker(taskID, taskCost);
        worker._callbacks[taskID] = { finishedCallback, errorCallback };
        worker.postMessage({ "type": "decode", "taskID": taskID, buffer }, [buffer]);
    }

    _releaseTask(worker, taskID)
    {
        worker._taskLoad -= worker._taskCosts[taskID];
        delete worker._callbacks[taskID];
        delete worker._taskCosts[taskID];
    }

    _DracoWorker()
    {
        let pendingDecoder;

        onmessage = function (e)
        {
            const message = e.data;
            switch (message.type)
            {
            case "init":
                const decoderConfig = message.decoderConfig;
                const moduleConfig = decoderConfig.decoderSettings;
                pendingDecoder = new Promise(function (resolve)
                {
                    moduleConfig.onModuleLoaded = function (draco)
                    {
                        // Module is Promise-like. Wrap before resolving to avoid loop.
                        resolve({ "draco": draco });
                    };
                    moduleConfig.wasmBinary = decoderConfig.wasm;
                    DracoDecoderModule(moduleConfig); // eslint-disable-line no-undef
                });
                break;
            case "decode":
                pendingDecoder.then((module) =>
                {
                    const draco = module.draco;

                    const f = new draco.Decoder();
                    const dataBuff = new Int8Array(message.buffer);

                    const geometryType = f.GetEncodedGeometryType(dataBuff);
                    const buffer = new draco.DecoderBuffer();
                    buffer.Init(dataBuff, dataBuff.byteLength);

                    let outputGeometry = new draco.Mesh();
                    const status = f.DecodeBufferToMesh(buffer, outputGeometry);
                    const attribute = f.GetAttributeByUniqueId(outputGeometry, 1);
                    const geometry = dracoAttributes(draco, f, outputGeometry, geometryType, name);

                    this.postMessage({ "type": "done", "taskID": message.taskID, "geometry": geometry });

                    draco.destroy(f);
                    draco.destroy(buffer);
                });
                break;
            }
        };

        let dracoAttributes = function (draco, decoder, dracoGeometry, geometryType, name)
        {
            const attributeIDs = {
                "position": draco.POSITION,
                "normal": draco.NORMAL,
                "color": draco.COLOR,
                "uv": draco.TEX_COORD,
                "joints": draco.GENERIC,
                "weights": draco.GENERIC,
            };
            const attributeTypes = {
                "position": "Float32Array",
                "normal": "Float32Array",
                "color": "Float32Array",
                "weights": "Float32Array",
                "joints": "Uint8Array",
                "uv": "Float32Array"
            };

            const geometry = {
                "index": null,
                "attributes": []
            };

            let count = 0;
            for (const attributeName in attributeIDs)
            {
                const attributeType = attributeTypes[attributeName];
                let attributeID = decoder.GetAttributeId(dracoGeometry, attributeIDs[attributeName]);

                count++;
                if (attributeID != -1)
                {
                    let attribute = decoder.GetAttribute(dracoGeometry, attributeID);
                    geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
                }
            }

            if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
            else op.warn("unknown draco geometryType", geometryType);

            draco.destroy(dracoGeometry);
            return geometry;
        };

        let decodeIndex = function (draco, decoder, dracoGeometry)
        {
            const numFaces = dracoGeometry.num_faces();
            const numIndices = numFaces * 3;
            const byteLength = numIndices * 4;
            const ptr = draco._malloc(byteLength);

            decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
            const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();

            draco._free(ptr);

            return {
                "array": index,
                "itemSize": 1
            };
        };

        let decodeAttribute = function (draco, decoder, dracoGeometry, attributeName, attributeType, attribute)
        {
            let bytesPerElement = 4;
            if (attributeType === "Float32Array") bytesPerElement = 4;
            else if (attributeType === "Uint8Array") bytesPerElement = 1;
            else op.warn("unknown attrtype bytesPerElement", attributeType);

            const numComponents = attribute.num_components();
            const numPoints = dracoGeometry.num_points();
            const numValues = numPoints * numComponents;
            const byteLength = numValues * bytesPerElement;
            const dataType = getDracoDataType(draco, attributeType);
            const ptr = draco._malloc(byteLength);
            let array = null;

            decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);

            if (attributeType === "Float32Array") array = new Float32Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else if (attributeType === "Uint8Array") array = new Uint8Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else op.warn("unknown attrtype", attributeType);

            draco._free(ptr);

            return {
                "name": attributeName,
                "array": array,
                "itemSize": numComponents
            };
        };

        let getDracoDataType = function (draco, attributeType)
        {
            switch (attributeType)
            {
            case "Float32Array": return draco.DT_FLOAT32;
            case "Int8Array": return draco.DT_INT8;
            case "Int16Array": return draco.DT_INT16;
            case "Int32Array": return draco.DT_INT32;
            case "Uint8Array": return draco.DT_UINT8;
            case "Uint16Array": return draco.DT_UINT16;
            case "Uint32Array": return draco.DT_UINT32;
            }
        };
    }
}

window.DracoDecoder = new DracoDecoderClass();

}
};

CABLES.OPS["4ecdc2ef-a242-4548-ad74-13f617119a64"]={f:Ops.Gl.GLTF.GltfDracoCompression,objName:"Ops.Gl.GLTF.GltfDracoCompression"};




// **************************************************************
// 
// Ops.Local.ISIPAD
// 
// **************************************************************

Ops.Local.ISIPAD= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const myString = op.inString("Input", "default string");
const result = op.outBoolNum("Result");

myString.onChange = update;


function update() {
    const inVal = myString.get();

    if (inVal.includes("iPad")) result.set(true);

    else result.set(false);
}


}
};

CABLES.OPS["84874a11-30d7-4d9e-ad6e-7652b66311c0"]={f:Ops.Local.ISIPAD,objName:"Ops.Local.ISIPAD"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
