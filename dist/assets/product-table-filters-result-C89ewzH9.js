import{r as s,j as a}from"./index-cVC9loO2.js";import{F as c,a as m,c as p}from"./filters-result-BjX7Ns58.js";import{C as i}from"./Chip-BK1jcf0v.js";function x({filters:e,totalResults:o,onResetPage:t,sx:r}){const l=s.useCallback(()=>{t(),e.setState({name:""})},[e,t]),n=s.useCallback(()=>{t(),e.onResetState()},[e,t]);return a.jsx(c,{totalResults:o,onReset:n,sx:r,children:a.jsx(m,{label:"Keyword:",isShow:!!e.state.name,children:a.jsx(i,{...p,label:e.state.name,onDelete:l})})})}export{x as P};
