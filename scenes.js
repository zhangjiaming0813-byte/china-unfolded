
/* Original vector landscapes. No remote images, fonts, map tiles or trackers. */
'use strict';
let sceneCounter = 0;
function landscape(type = 'yangshuo') {
  const u = `scene-${++sceneCounter}`;
  const defs = `<defs>
    <linearGradient id="${u}-sky" x2="0" y2="1"><stop stop-color="#e9edd9"/><stop offset="1" stop-color="#faf1d5"/></linearGradient>
    <linearGradient id="${u}-water" x2="0" y2="1"><stop stop-color="#a5c3a8"/><stop offset="1" stop-color="#508d7d"/></linearGradient>
    <linearGradient id="${u}-land" x2="0" y2="1"><stop stop-color="#76966d"/><stop offset="1" stop-color="#385f4d"/></linearGradient>
    <linearGradient id="${u}-city" x2="0" y2="1"><stop stop-color="#e9d9b7"/><stop offset="1" stop-color="#f4e8d0"/></linearGradient>
    <pattern id="${u}-grain" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".45" fill="#274737" opacity=".12"/><circle cx="5" cy="4" r=".4" fill="#fff" opacity=".23"/></pattern>
  </defs>`;
  const birds = `<g fill="none" stroke="#5d7c65" stroke-width="1.1" opacity=".6"><path d="M395 90q5-6 10 0 5-6 10 0m-38 12q4-5 8 0 4-5 8 0m42 14q3-4 6 0 3-4 6 0"/></g>`;
  const house = (x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="25" height="22" fill="#ebdfbe"/><path d="M-5 1 12-10 31 1Z" fill="#516d54"/><rect x="15" y="10" width="5" height="12" fill="#83926e"/><rect x="4" y="7" width="5" height="5" fill="#9ba582"/></g>`;
  const tree = (x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v-32" stroke="#3e6248" stroke-width="2"/><ellipse cx="-6" cy="-29" rx="11" ry="16" fill="#668662"/><ellipse cx="5" cy="-35" rx="10" ry="17" fill="#70936a"/><ellipse cx="8" cy="-22" rx="11" ry="12" fill="#5d805b"/></g>`;
  let art = '';
  if (type === 'yangshuo') {
    art = `<rect width="700" height="440" fill="url(#${u}-sky)"/><circle cx="496" cy="81" r="38" fill="#ddb17e" opacity=".7"/>
    <path d="M0 242 0 130Q20 120 40 160Q63 190 88 124Q112 55 128 108Q147 172 169 157Q186 145 201 82Q218 28 237 112Q251 178 268 159Q289 130 312 176Q332 137 351 111Q373 87 387 133Q409 180 428 163Q449 134 469 190Q500 167 528 121Q554 90 570 152Q589 181 608 127Q630 56 650 125Q677 177 700 147L700 255Z" fill="#c1cfac"/>
    <path d="M0 269V178Q28 138 45 192Q63 220 82 207Q111 89 132 158Q151 233 181 208Q199 176 217 212Q238 244 259 179Q280 72 302 150Q321 216 340 209Q364 165 384 227Q408 185 427 198Q446 210 461 176Q485 124 505 195Q523 232 548 221Q568 157 590 191Q614 155 636 201Q662 170 700 218V288Z" fill="#a2b996"/>
    <path d="M0 297V249Q28 218 44 202Q62 177 76 98Q90 59 103 125Q115 219 135 238Q153 278 176 274Q197 256 219 240Q240 229 260 249Q282 263 297 285Q341 247 377 272L432 302Z" fill="#7f9b79"/>
    <path d="M0 317Q36 297 94 307Q160 318 201 303Q269 283 331 299Q405 317 482 283Q557 261 630 285L700 297V440H0Z" fill="#bac591"/>
    <path d="M409 289Q327 299 343 317Q361 332 418 333Q478 334 451 354Q424 373 314 369Q217 365 179 385Q140 411 220 440H443Q311 411 355 399Q385 390 449 389Q552 384 521 350Q502 332 457 328Q385 321 420 307L448 290Z" fill="url(#${u}-water)"/>
    <path d="M700 346Q661 308 637 315Q611 320 594 292Q574 266 562 192Q548 102 531 122Q515 143 502 240Q490 294 454 307Q465 329 523 335Q547 336 558 366Q616 337 700 383Z" fill="url(#${u}-land)"/>
    <path d="M535 135Q526 189 526 223Q530 282 549 302M553 187Q548 230 559 274M87 124Q86 189 100 228M66 192 70 231" stroke="#dbe3b2" stroke-width="1.3" opacity=".25" fill="none"/>
    <g stroke="#90a371" fill="none" stroke-width="1.3" opacity=".65"><path d="M15 326Q131 343 250 317M0 338Q130 354 268 327M0 353Q140 369 248 342M523 393Q624 368 700 388M506 407Q613 382 700 404M493 421Q614 394 700 420"/></g>
    ${house(240,300,.7)}${house(263,308,.65)}${house(227,318,.6)}${house(283,316,.55)}
    ${tree(209,322,.8)}${tree(298,323,.6)}${tree(44,333,1.1)}${tree(18,338,1.25)}
    <path d="M0 408Q42 371 90 402Q125 373 161 414L184 440H0Z" fill="#385f4d"/>
    ${tree(672,420,1.7)}${tree(641,430,1.1)}
    <g transform="translate(389 353)"><path d="M-13 4q15 8 30-1l-5 8H-6Z" fill="#475e41"/><path d="M2 5V-10M2-10 9 1M8 0 20 14" fill="none" stroke="#435b42" stroke-width="1.6"/><circle cx="3" cy="-13" r="3" fill="#435b42"/><path d="M-2-15 8-15 3-19Z" fill="#b89562"/></g>
    <g stroke="#d7e5c4" stroke-width=".8" opacity=".6"><path d="M375 333h27m-8 40h32m-192 31h41m81 13h30m-121 13h16"/></g>${birds}`;
  } else if (type === 'shanghai') {
    const buildings = [[36,183,38,110],[90,148,32,155],[137,192,51,115],[189,155,44,153],[244,208,26,95],[431,175,29,129],[465,121,30,184],[502,87,39,220],[560,161,28,146],[606,117,37,190],[657,190,33,114]];
    art = `<rect width="700" height="440" fill="url(#${u}-city)"/><circle cx="163" cy="110" r="46" fill="#e7b58b" opacity=".67"/>
      <path d="M0 298V219H22V183H49V218H68V162H102V203H128V183H152V208H186V140H212V230H238V170H258V297Z" fill="#b9c4ad"/>
      ${buildings.map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${x%2?'#78978d':'#90a399'}"/><path d="M${x+7} ${y+10}v${h-17}m10-${h-17}v${h-17}" stroke="#e5e6c8" stroke-width="2" opacity=".35"/>`).join('')}
      <path d="M555 303V64L570 45 584 305Z" fill="#557b73"/><path d="M566 69 570 53 576 297H564Z" fill="#99b4a0" opacity=".6"/>
      <g fill="#a97561"><path d="M334 272 347 70 359 272Z"/><path d="M347 68V31" stroke="#a97561" stroke-width="2"/><circle cx="347" cy="136" r="26"/><circle cx="347" cy="226" r="43"/></g><g fill="#e7c4a3"><ellipse cx="347" cy="128" rx="22" ry="6"/><ellipse cx="347" cy="216" rx="38" ry="8"/></g><path d="M329 265 319 312m43-47 12 47" stroke="#8e7664" stroke-width="6"/>
      <path d="M0 306Q173 291 343 311Q554 293 700 303V440H0Z" fill="url(#${u}-water)"/><path d="M0 319Q206 303 367 321Q544 311 700 317" fill="none" stroke="#e5dec0" stroke-width="6"/>
      <g stroke="#d8dfc3" opacity=".55"><path d="M24 345h87m69-9h139m66 26h110m39-23h94M93 379h96m121-5h114m-238 33h69m223-15h129"/></g>
      <g transform="translate(490 357)"><path d="M0 0h68l-10 13H9Z" fill="#456f65"/><rect x="15" y="-10" width="34" height="10" rx="2" fill="#e8dfc2"/><path d="M-18 18h88" stroke="#e4e6c5" opacity=".5"/></g>
      <path d="M0 401Q96 371 213 405L285 440H0Z" fill="#446e57"/>${tree(35,403,.9)}${tree(71,405,.8)}${birds}`;
  } else if(type === 'beijing') {
    art = `<rect width="700" height="440" fill="url(#${u}-sky)"/><circle cx="506" cy="91" r="44" fill="#d6ab77" opacity=".7"/>
    <path d="M0 209 53 163 121 186 210 84 264 147 321 128 415 201 460 146 526 201 621 124 700 198V440H0Z" fill="#c1c6a0"/>
    <path d="M0 288 85 206 164 239 277 157 366 244 442 208 511 253 583 186 700 281V440H0Z" fill="#9aa57c"/>
    <path d="M0 351 62 300 140 311 212 253 267 287 350 236 419 310 494 272 543 326 630 267 700 302V440H0Z" fill="#728763"/>
    <path d="M0 440 58 382 167 345 258 389 343 335 415 370 485 318 574 347 700 326V440Z" fill="#4f7156"/>
    <path d="M-20 419Q104 360 180 385Q252 405 289 355Q320 310 355 282Q386 251 400 245" stroke="#6c7155" stroke-width="26" fill="none"/>
    <path d="M-20 406Q100 350 180 374Q251 393 280 347Q316 302 350 273Q384 248 400 238" stroke="#cfbf91" stroke-width="20" fill="none"/>
    <path d="M-20 400Q100 345 180 369Q251 388 276 342Q312 299 347 269Q380 244 400 234" stroke="#ead6a6" stroke-width="3" fill="none"/>
    <path d="M-15 411Q100 355 180 379Q251 397 285 352Q319 308 353 278Q386 253 400 242" stroke="#6e7457" stroke-width="4" fill="none"/>
    <g fill="#c3ac7d"><path d="M144 380v-43h9v7h9v-7h9v7h9v-7h9v43Z"/><path d="M278 348v-31h7v5h7v-5h7v5h7v-5h7v31Z"/><path d="M387 244v-24h5v5h5v-5h5v5h5v-5h5v24Z"/></g>
    <g fill="#78785b"><rect x="159" y="356" width="11" height="14"/><rect x="288" y="330" width="8" height="10"/><rect x="397" y="232" width="6" height="8"/></g>
    <path d="M45 376v18m23-27v18m24-27v18m117-4-6 20m29-16-5 15m95-97 9 12m-20 1 7 15m-58 58 7 7m67-123 5 7" stroke="#657359" stroke-width="4"/>
    ${tree(620,428,1.3)}${tree(658,412,1.6)}${tree(59,430,.8)}${birds}`;
  } else if(type === 'hangzhou') {
    art = `<rect width="700" height="440" fill="url(#${u}-sky)"/><circle cx="197" cy="99" r="44" fill="#e0bc86" opacity=".65"/>
      <path d="M0 220Q88 111 184 198Q277 126 367 202Q462 103 558 200Q643 165 700 201V285H0Z" fill="#b7c7a6"/>
      <path d="M0 254Q119 176 218 231Q314 189 415 248Q489 197 570 235Q638 211 700 249V320H0Z" fill="#90ae92"/>
      <rect y="264" width="700" height="176" fill="url(#${u}-water)"/>
      <path d="M0 285Q130 257 223 283Q324 320 395 292Q514 266 700 294" stroke="#d5d4a8" stroke-width="7" fill="none"/>
      <g fill="#e8ddba"><path d="M466 260v-72h41v72Z"/><path d="M471 188v-36h31v36Z"/><path d="M478 152v-29h17v29Z"/></g><g fill="#536f53"><path d="M451 193 486 176 520 193Z"/><path d="M460 157 486 142 514 157Z"/><path d="M469 127 486 109 504 127Z"/></g><path d="M486 109V99" stroke="#536f53" stroke-width="2"/>
      <path d="M165 285Q205 242 246 285" fill="none" stroke="#e9dcaf" stroke-width="17"/><path d="M164 277Q205 232 247 277" fill="none" stroke="#5b7857" stroke-width="2"/>
      <g stroke="#dbe2c0" stroke-width="1" opacity=".55"><path d="M34 330h142m47 27h92m89-29h127m-186 49h154m-401 18h180m248 13h98"/></g>
      <path d="M0 440V358Q58 371 131 415L203 440Z" fill="#638861"/><path d="M0 0Q90 14 107 75Q120 117 94 203" fill="none" stroke="#5a7755" stroke-width="7"/>
      <g fill="none" stroke="#6f8a62" stroke-width="2"><path d="M97 57Q171 123 159 228M99 70Q146 153 122 262M89 45Q145 97 183 133M99 55Q215 95 208 167M109 83Q143 213 79 284M101 93Q101 205 61 230"/></g>
      <g transform="translate(384 360)"><path d="M-22 0h62l-10 10H-10Z" fill="#435f4c"/><path d="M0 0v-23m0 0 17 19" fill="none" stroke="#435f4c" stroke-width="2"/><path d="M-5-22 7-22 1-29Z" fill="#ceab74"/></g>${birds}`;
  } else if (type === 'chengdu') {
    art = `<rect width="700" height="440" fill="url(#${u}-city)"/><circle cx="534" cy="95" r="47" fill="#d7aa78" opacity=".6"/>
      <path d="M0 192Q100 133 198 180Q314 99 428 187Q553 132 700 200V330H0Z" fill="#b6c5a2"/>
      <path d="M0 311 177 277 307 287 488 263 700 301V440H0Z" fill="#9bb092"/><path d="M265 305Q374 288 432 315L578 440H115Z" fill="#d1c7a0"/>
      <g fill="#e2cfab"><path d="M33 207h176v137H33Z"/><path d="M441 198h178v146H441Z"/><path d="M232 170h177v140H232Z"/></g>
      <g fill="#527457"><path d="M7 217Q83 200 124 171Q151 201 232 217Z"/><path d="M212 176Q270 164 321 126Q367 161 429 176Z"/><path d="M413 207Q483 192 530 164Q573 196 649 207Z"/></g>
      <g stroke="#846f50" stroke-width="5"><path d="M49 220v119m63-121v123m77-119v117m59-159v125m62-126v126m81-125v125m64-94v127m64-127v127m71-127v127"/></g>
      <g fill="#65764f"><rect x="257" y="215" width="27" height="43"/><rect x="333" y="216" width="27" height="43"/><rect x="66" y="244" width="29" height="36"/><rect x="131" y="244" width="29" height="36"/><rect x="477" y="233" width="31" height="35"/><rect x="544" y="233" width="31" height="35"/></g>
      <path d="M165 206Q341 278 487 198" fill="none" stroke="#967d55" stroke-width="1.8"/>
      <g fill="#bb7655"><ellipse cx="201" cy="230" rx="10" ry="13"/><ellipse cx="254" cy="246" rx="10" ry="13"/><ellipse cx="312" cy="254" rx="10" ry="13"/><ellipse cx="373" cy="249" rx="10" ry="13"/><ellipse cx="430" cy="232" rx="10" ry="13"/></g>
      <g stroke="#c9a263" stroke-width="1.5"><path d="M201 243v6m53 10v6m58 2v6m61-11v6m57-23v6"/></g>
      ${tree(22,355,1.55)}${tree(648,365,1.8)}${tree(678,375,1.3)}
      <g transform="translate(531 350)"><ellipse cx="0" cy="0" rx="30" ry="6" fill="#d9c397"/><path d="M-20 3  -24 28M19 3 23 28" stroke="#7e8260" stroke-width="3"/><path d="M-3-5v-8h11v8Z" fill="#587858"/><path d="M9-12q10-1 6 6" fill="none" stroke="#587858" stroke-width="2"/></g>
      <path d="M0 410Q53 377 104 414L149 440H0Z" fill="#577b54"/><path d="M570 440Q622 393 700 399V440Z" fill="#62895b"/>${birds}`;
  } else {
    art = `<rect width="700" height="440" fill="url(#${u}-city)"/><circle cx="486" cy="98" r="43" fill="#d5a479" opacity=".64"/>
    <path d="M0 248Q183 176 345 232Q529 173 700 245V440H0Z" fill="#c0c6a1"/>
    <path d="M0 291 700 283V371H0Z" fill="#a9966f"/><path d="M0 287H700" stroke="#776d50" stroke-width="6"/>
    <g fill="#ded0aa"><path d="M263 178h175v130H263Z"/><path d="M288 131h125v47H288Z"/></g><g fill="#557251"><path d="M243 188Q304 170 350 139Q395 170 458 188Z"/><path d="M272 137Q314 125 350 95Q386 125 429 137Z"/></g>
    <g fill="#ac7657"><rect x="280" y="211" width="12" height="86"/><rect x="329" y="211" width="12" height="86"/><rect x="379" y="211" width="12" height="86"/><rect x="412" y="211" width="12" height="86"/></g>
    <g fill="#676e4e"><path d="M321 369v-30a29 29 0 0 1 58 0v30Z"/><path d="M76 300h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21H0v-21h16v21h16v-21h16v21h16v-21h12Zm400 0h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21h16v-21h16v21v20H476Z"/></g>
    <g stroke="#8f8c66" opacity=".6"><path d="M0 318h309m85 0h306M0 337h307m86 0h307M0 355h307m86 0h307"/></g>
    <path d="M313 374H393L521 440H180Z" fill="#d6c69d"/><path d="M0 379H298L164 440H0Zm418 0H700V440H538Z" fill="#84986a"/>
    ${tree(74,411,1.4)}${tree(126,396,.9)}${tree(607,407,1.5)}${tree(561,392,.9)}${birds}`;
  }
  return `<svg class="scene" viewBox="0 0 700 440" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${defs}${art}<rect width="700" height="440" fill="url(#${u}-grain)" opacity=".65"/></svg>`;
}

