import{r as s,j as a}from"./index-DP6a2E9k.js";import{F as c,a as m,c as p}from"./filters-result-B2OQGLKW.js";import{C as i}from"./Chip-Dz9uFi13.js";function x({filters:e,totalResults:o,onResetPage:t,sx:r}){const l=s.useCallback(()=>{t(),e.setState({name:""})},[e,t]),n=s.useCallback(()=>{t(),e.onResetState()},[e,t]);return a.jsx(c,{totalResults:o,onReset:n,sx:r,children:a.jsx(m,{label:"Keyword:",isShow:!!e.state.name,children:a.jsx(i,{...p,label:e.state.name,onDelete:l})})})}export{x as P};
