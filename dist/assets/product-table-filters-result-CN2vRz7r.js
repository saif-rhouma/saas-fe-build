import{r as s,j as a}from"./index-BEaGYMEI.js";import{F as c,a as m,c as p}from"./filters-result-DA5pDRfI.js";import{C as i}from"./Chip-Db-a91wo.js";function x({filters:e,totalResults:o,onResetPage:t,sx:r}){const l=s.useCallback(()=>{t(),e.setState({name:""})},[e,t]),n=s.useCallback(()=>{t(),e.onResetState()},[e,t]);return a.jsx(c,{totalResults:o,onReset:n,sx:r,children:a.jsx(m,{label:"Keyword:",isShow:!!e.state.name,children:a.jsx(i,{...p,label:e.state.name,onDelete:l})})})}export{x as P};
