import{j as t,S as n,T as p}from"./index-CuWEjZ-G.js";import{C as c}from"./Checkbox-BmspYUiW.js";function m({dense:e,action:s,rowCount:i,numSelected:r,onSelectAllRows:a,sx:o,...l}){return r?t.jsxs(n,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...e&&{height:38},...o},...l,children:[t.jsx(c,{indeterminate:!!r&&r<i,checked:!!i&&r===i,onChange:h=>a(h.target.checked)}),t.jsxs(p,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...e&&{ml:3}},children:[r," selected"]}),s&&s]}):null}export{m as T};