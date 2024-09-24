import{r as i,j as t,p as O,T as f,S as n,H as A,C as I}from"./index-Bm3rBIkL.js";import{C as h}from"./country-select-dI5VfxcM.js";import{C as w}from"./custom-breadcrumbs-DgyWxDBR.js";import{C as W}from"./component-hero-ZZj7uI9P.js";import{C as R,a as d}from"./component-block-BFnYnJd_.js";import{A as o}from"./Autocomplete-uJqWLfO9.js";import{T as s}from"./TextField-Zaq0_UQI.js";import{C as c}from"./Chip-wb6jkBj9.js";import{C as E}from"./Checkbox-DZc8qiZw.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C5fdA_pt.js";import"./Select-BbFY65UU.js";import"./Menu-BCmDYN65.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CLwZiNSB.js";import"./FormControl-Dpp_E6i1.js";import"./InputLabel-XKr5fbZR.js";import"./FormLabel-CW4sUJth.js";import"./FormHelperText-D4MtsGiu.js";const j=["Option 1","Option 2"];function M(){const[p,C]=i.useState(""),[y,T]=i.useState(j[0]),[m,S]=i.useState("Armenia"),[g,k]=i.useState("AR"),[x,v]=i.useState(["Austria","Australia","Bulgaria"]),[b,L]=i.useState(["BJ","BL","BM"]);return t.jsxs(t.Fragment,{children:[t.jsx(W,{children:t.jsx(w,{heading:"Autocomplete",links:[{name:"Components",href:O.components},{name:"Autocomplete"}],moreLink:["https://mui.com/components/autocomplete"]})}),t.jsxs(R,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[t.jsx(d,{title:"Combo box",children:t.jsx(o,{fullWidth:!0,options:r,getOptionLabel:e=>e.title,renderInput:e=>t.jsx(s,{...e,label:"Combo box",margin:"none"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l.title},l.title)})}),t.jsxs(d,{title:"Controlled states",sx:{flexDirection:"column"},children:[t.jsx(o,{fullWidth:!0,value:y,options:j,onChange:(e,l)=>{T(l)},inputValue:p,onInputChange:(e,l)=>{C(l)},getOptionLabel:e=>e,renderInput:e=>t.jsx(s,{...e,label:"Controllable"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l},l)}),t.jsx(f,{variant:"body2",children:`value: ${y!==null?`'${y}'`:"null"}`}),t.jsx(f,{variant:"body2",children:`inputValue: '${p}'`})]}),t.jsxs(d,{title:"Free solo",children:[t.jsx(o,{fullWidth:!0,freeSolo:!0,options:r.map(e=>e.title),getOptionLabel:e=>e,renderInput:e=>t.jsx(s,{...e,label:"Free solo"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l},l)}),t.jsx(o,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:r.map(e=>e.title),getOptionLabel:e=>e,renderInput:e=>t.jsx(s,{...e,label:"Search input",InputProps:{...e.InputProps,type:"search"}}),renderOption:(e,l)=>i.createElement("li",{...e,key:l},l)})]}),t.jsx(d,{title:"Multiple Values",children:t.jsx(o,{fullWidth:!0,multiple:!0,limitTags:3,options:r,getOptionLabel:e=>e.title,defaultValue:r.slice(0,8),renderInput:e=>t.jsx(s,{...e,label:"Multiple Select",placeholder:"Favorites"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l.title},l.title),renderTags:(e,l)=>e.map((a,u)=>i.createElement(c,{...l({index:u}),key:a.title,label:a.title,size:"small",variant:"soft"}))})}),t.jsx(d,{title:"Checkboxes",children:t.jsx(o,{fullWidth:!0,multiple:!0,limitTags:3,disableCloseOnSelect:!0,options:r,getOptionLabel:e=>e.title,defaultValue:r.slice(0,1),renderInput:e=>t.jsx(s,{...e,label:"Checkboxes",placeholder:"Favorites"}),renderOption:(e,l,{selected:a})=>i.createElement("li",{...e,key:l.title},t.jsx(E,{size:"small",disableRipple:!0,checked:a},l.title),l.title),renderTags:(e,l)=>e.map((a,u)=>i.createElement(c,{...l({index:u}),key:a.title,label:a.title,size:"small",variant:"soft"}))})}),t.jsxs(d,{title:"Sizes",children:[t.jsx(o,{fullWidth:!0,options:r,getOptionLabel:e=>e.title,defaultValue:r[13],renderInput:e=>t.jsx(s,{...e,label:"Size Medium",placeholder:"Favorites"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l.title},l.title)}),t.jsx(o,{fullWidth:!0,multiple:!0,size:"small",options:r,getOptionLabel:e=>e.title,defaultValue:[r[13]],renderInput:e=>t.jsx(s,{...e,label:"Size small",placeholder:"Favorites"}),renderOption:(e,l)=>i.createElement("li",{...e,key:l.title},l.title),renderTags:(e,l)=>e.map((a,u)=>i.createElement(c,{...l({index:u}),key:a.title,label:a.title,size:"small",color:"info",variant:"soft"}))})]}),t.jsxs(d,{title:"Country Select",sx:{gap:5},children:[t.jsxs(n,{direction:"row",spacing:1.5,sx:{width:1},children:[t.jsx(h,{id:"single-label",fullWidth:!0,label:"Single select label",placeholder:"Choose a country",value:m,onChange:(e,l)=>S(l)}),t.jsxs(n,{sx:{px:1,width:200,borderRadius:1,textAlign:"right",typography:"body2",justifyContent:"center",bgcolor:"background.neutral"},children:[t.jsx("small",{children:"Output:"}),t.jsx("strong",{children:t.jsx("small",{children:m??"-"})})]})]}),t.jsxs(n,{direction:"row",spacing:1.5,sx:{width:1},children:[t.jsx(h,{id:"single-code",getValue:"code",fullWidth:!0,label:"Single select code",placeholder:"Choose a country",value:g,onChange:(e,l)=>k(l)}),t.jsxs(n,{sx:{px:1,width:200,borderRadius:1,textAlign:"right",typography:"body2",justifyContent:"center",bgcolor:"background.neutral"},children:[t.jsx("small",{children:"Output:"}),t.jsx("strong",{children:t.jsx("small",{children:g??"-"})})]})]}),t.jsxs(n,{spacing:1.5,sx:{width:1},children:[t.jsx(h,{id:"multiple-label",multiple:!0,fullWidth:!0,limitTags:3,label:"Multi select label",placeholder:"Choose a country",value:x,onChange:(e,l)=>v(l)}),t.jsxs(n,{sx:{p:1,width:1,minHeight:54,borderRadius:1,textAlign:"right",typography:"body2",bgcolor:"background.neutral"},children:[t.jsx("small",{children:"Output:"})," ",t.jsx("strong",{children:t.jsx("small",{children:x.join(", ")??"-"})})]})]}),t.jsxs(n,{spacing:1.5,sx:{width:1},children:[t.jsx(h,{id:"multiple-code",getValue:"code",multiple:!0,fullWidth:!0,limitTags:3,label:"Multi select code",placeholder:"Choose a country",value:b,onChange:(e,l)=>L(l)}),t.jsxs(n,{sx:{p:1,width:1,minHeight:54,borderRadius:1,textAlign:"right",typography:"body2",bgcolor:"background.neutral"},children:[t.jsx("small",{children:"Output:"})," ",t.jsx("strong",{children:t.jsx("small",{children:b.join(", ")??"-"})})]})]})]})]})]})}const r=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],F={title:`Autocomplete | MUI - ${I.site.name}`};function le(){return t.jsxs(t.Fragment,{children:[t.jsx(A,{children:t.jsxs("title",{children:[" ",F.title]})}),t.jsx(M,{})]})}export{le as default};
