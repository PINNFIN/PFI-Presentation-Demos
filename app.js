/* PFI hosted demonstration: synthetic, browser-local only. No credentials or backend. */
'use strict';
const mode=document.body.dataset.product;
const $=s=>document.querySelector(s);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const usd=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n)||0);
const usd2=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2}).format(Number(n)||0);
const fmt=n=>new Intl.NumberFormat('en-US').format(Number(n)||0);
const percent=n=>Number(n).toFixed(1)+'%';
const seed={
 construction:{
  leads:[
   {id:'C-104',name:'Maple Ridge Meter Renewal',customer:'Maple Ridge',date:'2026-09-06',value:186000,stage:'Proposal',labor:57000,materials:42000,subcontract:11000,equipment:7000,overhead:7000,approved:false,converted:false},
   {id:'C-105',name:'Riverview Valve Program',customer:'Riverview Estates',date:'2026-08-18',value:410000,stage:'Negotiation',labor:115000,materials:99000,subcontract:39000,equipment:20000,overhead:14000,approved:false,converted:false},
   {id:'C-106',name:'North Bay Water Conservation',customer:'North Bay Complex',date:'2026-09-30',value:265000,stage:'Qualified',labor:77000,materials:59000,subcontract:24000,equipment:12000,overhead:10000,approved:false,converted:false}
  ],
  jobs:[
   {id:'J-1001',name:'Oceanview Submeter Retrofit',customer:'Oceanview Apartments',stage:'Installation',value:225000,budget:155000,actual:117800,committed:24800,progress:65,evidence:1,office:'Miami'},
   {id:'J-1002',name:'Palm Gardens Valve Replacement',customer:'Palm Gardens',stage:'Installation',value:148000,budget:101000,actual:92000,committed:18000,progress:82,evidence:2,office:'New York'},
   {id:'J-1003',name:'Lakeside AMR Upgrade',customer:'Lakeside Commons',stage:'Installation',value:320000,budget:224000,actual:151000,committed:42000,progress:48,evidence:1,office:'Texas'}
  ],
  invoices:[{id:'AIA-001',customer:'Oceanview Apartments',amount:75000,retainage:7500,paid:false},{id:'AIA-002',customer:'Palm Gardens',amount:68000,retainage:6800,paid:true},{id:'AIA-003',customer:'Lakeside Commons',amount:54000,retainage:5400,paid:false}]
 },
 uvexa:{
  leads:[
   {id:'UV-L101',name:'North Harbor Submeter Program',customer:'North Harbor',date:'2026-08-17',value:125000,stage:'New',labor:0,materials:0,subcontract:0,equipment:0,overhead:0,approved:false,converted:false},
   {id:'UV-L102',name:'South Bay Valve Deployment',customer:'South Bay',date:'2026-09-03',value:85000,stage:'New',labor:0,materials:0,subcontract:0,equipment:0,overhead:0,approved:false,converted:false},
   {id:'UV-L103',name:'Palm Court Meter Upgrade',customer:'Palm Court',date:'2026-09-19',value:72000,stage:'New',labor:0,materials:0,subcontract:0,equipment:0,overhead:0,approved:false,converted:false},
   {id:'UV-L104',name:'Marina Point Installation',customer:'Marina Point',date:'2026-10-08',value:55000,stage:'New',labor:0,materials:0,subcontract:0,equipment:0,overhead:0,approved:false,converted:false}
  ],
  jobs:[{id:'UV-J1001',name:'Oceanview Meter Retrofit',customer:'Oceanview Apartments',stage:'Installation',value:225000,budget:155000,actual:117800,committed:24800,progress:65,evidence:1,office:'Miami'}],
  meters:[
    {id:'M-1001',account:'T00001',customer:'Harbor View • Unit 101',previous:1200,current:1250,rate:2.5,fixed:8.5,reviewed:false},
    {id:'M-1002',account:'T00002',customer:'Harbor View • Unit 102',previous:2400,current:2390,rate:2.5,fixed:8.5,reviewed:false},
    {id:'M-1003',account:'T00003',customer:'Palm Court • Unit 203',previous:300,current:900,rate:2.5,fixed:8.5,reviewed:false},
    {id:'M-1004',account:'T00004',customer:'Palm Court • Unit 204',previous:100,current:150,rate:2.5,fixed:8.5,reviewed:false},
    {id:'M-1005',account:'T00005',customer:'Oceanview • Unit 305',previous:80,current:95,rate:2.5,fixed:8.5,reviewed:false}
  ],
  invoices:[{id:'UV-I001',customer:'Harbor View • Unit 101',account:'T00001',amount:8.63,paid:false},{id:'UV-I002',customer:'Palm Court • Unit 203',account:'T00003',amount:10,paid:false},{id:'UV-I003',customer:'Oceanview • Unit 305',account:'T00005',amount:8.54,paid:true}]
 }
};
const conf={
 construction:{label:'Construction Intelligence',short:'PFI Construction',sub:'Project controls | Revenue | Field operations',items:[['overview','Executive Overview'],['pipeline','Sales Pipeline'],['estimates','Estimates & Approvals'],['installations','Project & Field Operations'],['jobcost','Job Cost Intelligence'],['billing','AIA Billing & Collections'],['intelligence','Executive Intelligence'],['exports','Data Portability']]},
 uvexa:{label:'Uvexa Utility Intelligence',short:'Uvexa',sub:'Utility operations | Billing | Financial intelligence',items:[['overview','Executive Overview'],['pipeline','Sales Pipeline'],['estimates','Estimates & Approvals'],['installations','Installations & Work Orders'],['meters','Meter Monitoring'],['billing','Billing & Invoices'],['collections','Collections'],['intelligence','Financial Intelligence'],['core','Uvexa Core'],['revenue','Uvexa Intelligence'],['enterprise','Uvexa Enterprise'],['exports','Data Portability']]}
};
function home(){
 $('#app').innerHTML='<header><div class="logo"><span>PFI</span> Intelligence <span class="subbrand">Pinnacle Financial USA · Technology demonstration</span></div><div class="toplinks"><a href="construction.html">Construction</a><a href="uvexa.html">Uvexa</a><span class="pill">SYNTHETIC DATA</span></div></header><div class="home"><section class="hero"><div class="eyebrow">Executive demonstration suite</div><h1>From operations to<br>better financial decisions.</h1><p>Explore interactive demonstrations of PFI Construction Intelligence and Uvexa Utility Intelligence. Navigate the services, open records, and test the guided workflows.</p></section><div class="cards2"><section class="home-card"><div class="eyebrow">01 / Construction</div><h2>Construction Intelligence</h2><p>Sales pipeline, approved budgets, field evidence, job cost intelligence, AIA billing and collections.</p><a href="construction.html" class="btn">Open Construction Services</a></section><section class="home-card"><div class="eyebrow">02 / Utility operations</div><h2>Uvexa</h2><p>Lead management, estimates, installations, consumption monitoring, invoice preview and financial exceptions.</p><a href="uvexa.html" class="btn">Open Uvexa Services</a></section></div><div class="notice">Presentation environment. All records are synthetic, and demo actions run in this browser only. No live customer data, payment processing, external billing connections or accounting postings.</div><p class="foot">PFI Technologies · Financial Intelligence for Better Decisions</p></div>';
}
let state,page='overview',filter='',modal=null,step=0;
function initial(){return JSON.parse(JSON.stringify(seed[mode]))}
function init(){
 try{const raw=localStorage.getItem('pfi-demo-'+mode+'-v3');state=raw?JSON.parse(raw):initial();if(!Array.isArray(state.leads)||!Array.isArray(state.jobs))state=initial()}catch(e){state=initial()}
 const c=conf[mode];
 $('#app').innerHTML='<header><div class="logo"><span>'+ (mode==='uvexa'?'U':'PFI') +'</span>'+ (mode==='uvexa'?'vexa':' Construction')+'<span class="subbrand">'+esc(c.sub)+'</span></div><div class="toplinks"><a href="index.html">All Services</a><a href="'+(mode==='uvexa'?'construction.html':'uvexa.html')+'">'+(mode==='uvexa'?'Construction':'Uvexa')+'</a><span class="pill">INTERACTIVE DEMO · SYNTHETIC</span></div></header><div class="layout"><aside><div class="sidehead">SERVICE MODULES</div><div id="sidenav"></div><p class="sidefoot">No customer billing or financial postings. Changes are local to this browser.</p></aside><main><div class="pagehead"><div class="eyebrow">'+esc(c.label)+'</div><h1 id="page-title"></h1><p id="page-desc"></p></div><div id="content"></div><p class="foot">PFI Technologies · Private product code and customer data are not hosted here. This demonstration runs using synthetic browser-local records.</p></main></div><div id="overlay" class="overlay" hidden><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><div class="modalheader"><div><div class="eyebrow">Demonstration record</div><h2 id="modalTitle"></h2></div><button class="btn secondary" data-act="close">Close ✕</button></div><div id="modalBody"></div></div></div>';
 $('#sidenav').innerHTML=c.items.map(([id,name])=>'<button data-nav="'+id+'">'+esc(name)+'</button>').join('');
 document.addEventListener('click',handleClick);
 document.addEventListener('submit',handleSubmit);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
 $('#overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeModal()});
 const fragment=decodeURIComponent(location.hash.slice(1));if(c.items.some(([id])=>id===fragment))page=fragment;
 render();
}
function persist(){try{localStorage.setItem('pfi-demo-'+mode+'-v3',JSON.stringify(state))}catch(e){}}
function navigate(next){page=next;filter='';location.hash=next;closeModal();render();window.scrollTo(0,0)}
function htmlTable(cols,rows){return '<div class="tablewrap"><table><thead><tr>'+cols.map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.join('')+'</tbody></table></div>'}
function metric(a,b,c){return '<div class="metric"><small>'+esc(a)+'</small><strong>'+esc(b)+'</strong><span>'+esc(c||'Synthetic demonstration')+'</span></div>'}
function metrics(arr){return '<div class="metrics">'+arr.map(v=>metric(...v)).join('')+'</div>'}
function status(txt,type=''){return '<span class="status '+type+'">'+esc(txt)+'</span>'}
function button(act,id,text,cls=''){return '<button class="viewbutton '+cls+'" data-act="'+esc(act)+'" data-id="'+esc(id)+'">'+esc(text)+'</button>'}
function panel(title,body){return '<div class="panel"><h2>'+title+'</h2>'+body+'</div>'}
function budget(j){return ['labor','materials','subcontract','equipment','overhead'].reduce((x,k)=>x+Number(j[k]||0),0)}
function old(date){return Math.max(0,Math.floor((Date.now()-new Date(date+'T00:00:00').getTime())/86400000))}
function risk(j){const n=old(j.date);return n>=90?'bad':n>=30?'warn':''}
function meterStatus(m){const units=m.current-m.previous;return units<0?'Reading rollback':units>=400?'High consumption':null}
function meterCharge(m){return m.current>=m.previous?Number((8.5+((m.current-m.previous)/1000)*m.rate).toFixed(2)):null}
const descriptions={
 overview:'Portfolio-level KPIs, actions requiring attention, and the path from operations to financial insight.',
 pipeline:'Review opportunities, aging exposure and direct drilldowns.',
 estimates:'Cost assumptions, margin protection, approvals and controlled synthetic conversions.',
 installations:'Project and field execution, job progress and evidence.',
 jobcost:'Budget, actual cost, commitments and remaining headroom by project.',
 meters:'Meter readings, consumption anomalies and exception disposition.',
 billing:mode==='uvexa'?'Review billing accounts and calculate sample invoice previews.':'Keep AIA applications, collections and retainage visible.',
 collections:'Outstanding balances and simulated collection disposition.',
 intelligence:'Trace risks to financial effects and recommended next actions.',core:'Billing integrity, account identity and missing invoice exceptions.',revenue:'Usage investigations, associated invoice exposure and evidence-based review.',enterprise:'Enterprise controls, tenant isolation, portability and integrations readiness.',
 exports:'Export synthetic demonstration data and keep information portable.'
};
function render(){
 const selected=conf[mode].items.find(([id])=>id===page);
 $('#page-title').textContent=selected?selected[1]:'Executive Overview';$('#page-desc').textContent=descriptions[page]||'';
 document.querySelectorAll('[data-nav]').forEach(b=>{b.classList.toggle('active',b.dataset.nav===page);b.setAttribute('aria-current',b.dataset.nav===page?'page':'false')});
 const fn={overview:overview,pipeline:pipeline,estimates:estimates,installations:installations,jobcost:jobcost,meters:meters,billing:billing,collections:collections,intelligence:intelligence,core:uvexaCore,revenue:uvexaRevenue,enterprise:uvexaEnterprise,exports:exports}[page]||overview;
 $('#content').innerHTML=fn();
}
function overview(){
 const pipelineValue=state.leads.reduce((a,j)=>a+j.value,0);
 const jobValue=state.jobs.reduce((a,j)=>a+j.value,0);
 const extra=mode==='uvexa'?[['Meter exceptions',String(state.meters.filter(m=>meterStatus(m)&&!m.reviewed).length),'Open exceptions']]:[['Job value',usd(jobValue),'Sample installation portfolio']];
 return metrics([['Open opportunities',String(state.leads.filter(x=>!x.converted).length),'Sales intake'],['Pipeline value',usd(pipelineValue),'Unawarded opportunities'],['Active installations',String(state.jobs.length),'Synthetic jobs'],...extra])+
 panel('Process Workflow','<p class="muted">Follow one opportunity through its control points. Select a step for details and the related service.</p><div class="steps" id="step-buttons">'+[
 ['Lead captured','pipeline'],['Estimate approved','estimates'],['Installation','installations'],['Cost & meter check',mode==='uvexa'?'meters':'jobcost'],['Billing & cash','billing'],['Financial intelligence','intelligence']
 ].map(([name,target],i)=>'<button data-act="step" data-id="'+i+'" class="'+(step===i?'active':'')+'">'+(i+1)+'. '+esc(name)+'</button>').join('')+'</div><div class="insight" id="step-detail"><b>'+['Sales opportunities','Cost approval','Execution','Control and measurement','Billing and collection','Decision intelligence'][step]+'</b>'+['Review intake and aging before spending begins.','Prepare cost detail and require approval.','Open job evidence and completion milestones.','Inspect cost variances or consumption anomalies.','Preview invoices and collections, do not post live records.','Review the underlying causes and recommended actions.'][step]+'<p style="margin-bottom:0">'+button('nav',['pipeline','estimates','installations',mode==='uvexa'?'meters':'jobcost','billing','intelligence'][step],'Open related service →')+'</p></div>')+
 '<div class="grid2">'+panel('Executive priorities',mode==='uvexa'?'<div class="insight"><b>Billing integrity</b>Identify rollbacks and unusual usage before releasing charges.</div><div class="insight"><b>Estimate discipline</b>Approved estimate is required before a synthetic job conversion.</div>':'<div class="insight"><b>Job margin protection</b>Compare actual and committed costs against approved budgets.</div><div class="insight"><b>Working capital</b>Separate AIA billings, retainage and customer collections.</div>')+panel('Presentation checkpoints','<p>✓ Services are accessible from the navigation menu.</p><p>✓ Records open with drilldown details.</p><p>✓ Demo-only actions can be tested.</p><p class="notice">This hosted demonstration does not connect to the local PFI backend. Its sample records are isolated inside this browser.</p>')+'</div>';
}
function pipeline(){
 const leads=state.leads.filter(j=>(j.name+' '+j.customer+' '+j.id).toLowerCase().includes(filter.toLowerCase()));
 return metrics([['Opportunities',String(state.leads.length),'Synthetic leads'],['Pipeline',usd(state.leads.reduce((a,j)=>a+j.value,0)),'Not booked revenue'],['30+ day exposure',usd(state.leads.filter(j=>old(j.date)>=30).reduce((a,j)=>a+j.value,0)),'Aging at risk'],['Approved estimates',String(state.leads.filter(j=>j.approved).length),'Demo approvals']])+panel('Lead Opportunities','<div class="row between"><p class="muted">Click View to open the opportunity, estimate costs, and approval actions.</p><input style="max-width:270px" id="search" placeholder="Search opportunities" value="'+esc(filter)+'"></div>'+htmlTable(['Opportunity','Customer','Potential value','Lead age','Stage','Details'],leads.map(j=>'<tr><td><b>'+esc(j.name)+'</b><div class="mini muted">'+esc(j.id)+'</div></td><td>'+esc(j.customer)+'</td><td>'+usd(j.value)+'</td><td>'+status(old(j.date)+' days',risk(j))+'</td><td>'+status(j.converted?'Job created':j.approved?'Approved':j.stage,j.approved?'ok':'')+'</td><td>'+button('lead',j.id,'View →')+'</td></tr>')))+ '<p class="muted mini">Aging thresholds are cumulative. All dates and amounts are fictional.</p>';
}
function estimates(){
 const valid=state.leads.filter(x=>budget(x)>0);
 return metrics([['Leads',String(state.leads.length),'Pending pipeline'],['Costed estimates',String(valid.length),'Five categories'],['Approved',String(state.leads.filter(x=>x.approved).length),'Locked demo estimate'],['Synthetic conversions',String(state.leads.filter(x=>x.converted).length),'Generated jobs']])+panel('Cost and Approval Register',htmlTable(['Opportunity','Proposal','Cost estimate','Margin','Approval status','Action'],state.leads.map(j=>{const b=budget(j);return '<tr><td>'+esc(j.name)+'</td><td>'+usd(j.value)+'</td><td>'+(b?usd(b):'Not entered')+'</td><td>'+(b?percent((j.value-b)/j.value*100):'On hold')+'</td><td>'+status(j.approved?'Approved':'Not approved',j.approved?'ok':'warn')+'</td><td>'+button('lead',j.id,'Open estimate →')+'</td></tr>'})))+'<p class="notice">Approval, revision locks and job conversion here are local synthetic demonstrations; not real authorizations.</p>';
}
function installations(){
 return metrics([['Active jobs',String(state.jobs.length),'Project portfolio'],['Contract value',usd(state.jobs.reduce((s,j)=>s+j.value,0)),'Awarded demo jobs'],['Costs incurred',usd(state.jobs.reduce((s,j)=>s+j.actual,0)),'Synthetic cost'],['Field evidence',String(state.jobs.reduce((s,j)=>s+j.evidence,0)),'Demo timestamp events']])+panel('Installation / Work Order Register',htmlTable(['Job','Customer / Property','Progress','Office','Evidence','Detail'],state.jobs.map(j=>'<tr><td><b>'+esc(j.id)+'</b><div class="muted mini">'+esc(j.name)+'</div></td><td>'+esc(j.customer)+'</td><td>'+j.progress+'%</td><td>'+esc(j.office)+'</td><td>'+j.evidence+' events</td><td>'+button('job',j.id,'Open job →')+'</td></tr>')))+'<p class="muted mini">Field evidence shown here consists of sample timestamp events, not genuine site photographs.</p>';
}
function jobcost(){
 const over=state.jobs.filter(j=>j.actual+j.committed>j.budget);
 return metrics([['Approved budgets',usd(state.jobs.reduce((s,j)=>s+j.budget,0)),'Sample baseline'],['Actual costs',usd(state.jobs.reduce((s,j)=>s+j.actual,0)),'Source: fixtures'],['Open commitments',usd(state.jobs.reduce((s,j)=>s+j.committed,0)),'Source: fixtures'],['Budget overruns',String(over.length),'Actual + committed > budget']])+panel('Project Financial Controls',htmlTable(['Project','Budget','Actual','Committed','Headroom','Review'],state.jobs.map(j=>{const head=j.budget-j.actual-j.committed;return '<tr><td>'+esc(j.name)+'</td><td>'+usd(j.budget)+'</td><td>'+usd(j.actual)+'</td><td>'+usd(j.committed)+'</td><td>'+status(usd(head),head<0?'bad':'ok')+'</td><td>'+button('job',j.id,'Drill down')+'</td></tr>'})))+'<p class="notice">Forecast margin remains on hold until approved cost-to-complete is available. Budgeted margin is not a forecast.</p>';
}
function meters(){
 const flags=state.meters.filter(m=>meterStatus(m)&&!m.reviewed);
 return metrics([['Active sample meters',String(state.meters.length),'Test account set'],['Open exceptions',String(flags.length),'Pre-billing hold'],['Reading rollbacks',String(flags.filter(m=>meterStatus(m)==='Reading rollback').length),'Requires validation'],['Consumption spikes',String(flags.filter(m=>meterStatus(m)==='High consumption').length),'Requires review']])+panel('Meter Usage & Evidence',htmlTable(['Meter / Account','Customer','Previous','Current','Consumption','Status','Details'],state.meters.map(m=>'<tr><td>'+esc(m.id)+'<div class="muted mini">'+esc(m.account)+'</div></td><td>'+esc(m.customer)+'</td><td>'+fmt(m.previous)+'</td><td>'+fmt(m.current)+'</td><td>'+fmt(m.current-m.previous)+'</td><td>'+status(m.reviewed?'Reviewed':meterStatus(m)||'Normal',m.reviewed?'ok':meterStatus(m)?'bad':'ok')+'</td><td>'+button('meter',m.id,'Inspect →')+'</td></tr>')))+'<p class="muted mini">Sample meter values are not sourced from customer devices. A reviewed flag is not an override of billing validation.</p>';
}
function billing(){
 if(mode==='construction')return metrics([['AIA submitted',usd(state.invoices.reduce((s,x)=>s+x.amount,0)),'Illustrative applications'],['Collected',usd(state.invoices.filter(x=>x.paid).reduce((s,x)=>s+x.amount,0)),'Demo payments'],['Open A/R',usd(state.invoices.filter(x=>!x.paid).reduce((s,x)=>s+x.amount,0)),'Before retainage analysis'],['Retainage',usd(state.invoices.reduce((s,x)=>s+x.retainage,0)),'Separate control']])+panel('AIA & Collections',htmlTable(['AIA','Customer','Billed','Retainage','Collection','Action'],state.invoices.map(i=>'<tr><td>'+esc(i.id)+'</td><td>'+esc(i.customer)+'</td><td>'+usd(i.amount)+'</td><td>'+usd(i.retainage)+'</td><td>'+status(i.paid?'Collected':'Open',i.paid?'ok':'warn')+'</td><td>'+button('invoice',i.id,'View AIA →')+'</td></tr>')))+'<p class="notice">Retainage and collections are distinct. Simulated collection changes are not accounting journal entries.</p>';
 return metrics([['Recorded samples',String(state.invoices.length),'Demonstration ledger'],['Invoiced total',usd2(state.invoices.reduce((s,i)=>s+i.amount,0)),'Synthetic balances'],['Open A/R',usd2(state.invoices.filter(x=>!x.paid).reduce((s,i)=>s+i.amount,0)),'Uncollected samples'],['Billing exceptions',String(state.meters.filter(m=>meterStatus(m)&&!m.reviewed).length),'Pending review']])+panel('Billing & Invoice Review',htmlTable(['Invoice','Account','Customer','Sample amount','Status','Action'],state.invoices.map(i=>'<tr><td>'+esc(i.id)+'</td><td>'+esc(i.account)+'</td><td>'+esc(i.customer)+'</td><td>'+usd2(i.amount)+'</td><td>'+status(i.paid?'Paid':'Open',i.paid?'ok':'warn')+'</td><td>'+button('invoice',i.id,'View →')+'</td></tr>')))+panel('Meter-Based Preview','<p class="muted">Select a sample account to calculate its expected charge from consumption and sample rate.</p>'+state.meters.map(m=>button('meter',m.id,'Preview '+m.account)).join(' ')+'<p class="notice">A preview does not issue, post, email or charge an invoice.</p>');
}
function collections(){
 return metrics([['Open items',String(state.invoices.filter(x=>!x.paid).length),'Demo only'],['Uncollected',usd2(state.invoices.filter(x=>!x.paid).reduce((s,x)=>s+x.amount,0)),'Synthetic A/R'],['Paid samples',String(state.invoices.filter(x=>x.paid).length),'Demo collections'],['Rate history','Not connected','Source integration pending']])+panel('Collection Register',htmlTable(['Invoice','Account','Amount','Status','Action'],state.invoices.map(i=>'<tr><td>'+esc(i.id)+'</td><td>'+esc(i.account)+'</td><td>'+usd2(i.amount)+'</td><td>'+status(i.paid?'Collected':'Open',i.paid?'ok':'warn')+'</td><td>'+button('invoice',i.id,'Details')+'</td></tr>')));
}
function intelligence(){
 const risks=mode==='uvexa'?[
 ['Meter reading rollback','Hold invoice calculation; verify reading and device history.','M-1002'],
 ['Unusual usage','Review consumption history before release and investigate potential leak.','M-1003'],
 ['Unapproved estimates','Unapproved budgets must not create field jobs.','Sales pipeline']
 ]:[
 ['Budget overrun','Palm Gardens actual + committed cost exceeds approved budget.','J-1002'],
 ['Retainage exposure','Report held retainage separately from collectible A/R.','AIA register'],
 ['Proposal aging','Prioritize oldest unawarded opportunities before forecasting backlog.','Pipeline']
 ];
 return metrics([['Actionable review items',String(risks.length),'Synthetic findings'],['Source traceability','Available','Fixture records'],['Unexplained transactions','Blocked','No live posting'],['Projected impact','Review required','No unsupported forecast']])+panel('Evidence → Cause → Recommended Action',risks.map(([name,action,ref])=>'<div class="insight"><b>'+esc(name)+'</b><div class="mini muted">Evidence reference: '+esc(ref)+'</div><p>'+esc(action)+'</p></div>').join(''))+panel('Financial Control Philosophy','<p>Identifying anomalies is not enough. Uvexa and PFI Construction should connect each decision to source evidence, financial effect, responsible owner and an approved next action.</p><p class="notice">This browser demonstration is illustrative. No AI agent or financial forecasting model is invoked by this page.</p>');
}
function uvexaCore(){
 const t=state.meters,i=state.invoices,accounts=t.map(x=>x.account),dupes=accounts.filter((x,k)=>accounts.indexOf(x)!==k),billed=new Set(i.map(x=>x.account));
 const missing=t.filter(x=>!billed.has(x.account));
 const incomplete=t.filter(x=>!x.account||!x.customer||!x.id);
 return metrics([['Tenant accounts',String(t.length),'Demo accounts'],['Duplicate account IDs',String(dupes.length),'Integrity check'],['No invoice in sample',String(missing.length),'Review billing cycle'],['Incomplete records',String(incomplete.length),'Account completeness']])+
 panel('Billing integrity dashboard','<p>Account numbers must be unique within their business customer. Missing invoices require verification against activation dates, billing cycles and account status.</p>'+htmlTable(['Account','Property or unit','Invoice present','Status'],t.map(x=>'<tr><td>'+esc(x.account)+'</td><td>'+esc(x.customer)+'</td><td>'+status(billed.has(x.account)?'Yes':'Not in sample',billed.has(x.account)?'ok':'warn')+'</td><td>'+button('meter',x.id,'Review account')+'</td></tr>')))+ '<p class="notice">Loaded sample invoices are not a complete billing-cycle ledger. Results indicate reviews, not proven missing charges.</p>';
}
function uvexaRevenue(){
 const alerts=state.meters.filter(x=>meterStatus(x)&&!x.reviewed),flagged=new Set(alerts.map(x=>x.account)),invoiceList=state.invoices.filter(x=>flagged.has(x.account)),exposure=invoiceList.reduce((v,x)=>v+x.amount,0);
 return metrics([['Open usage alerts',String(alerts.length),'Investigation queue'],['Linked invoice exposure',usd2(exposure),'Associated invoice values'],['Affected accounts',String(flagged.size),'Not confirmed loss'],['Validated recovery','$0.00','No recovery verified']])+
 panel('Usage-alert investigation queue',htmlTable(['Account','Meter','Exception','Invoice exposure','Next action'],alerts.map(x=>'<tr><td>'+esc(x.account)+'</td><td>'+esc(x.id)+'</td><td>'+status(meterStatus(x),'bad')+'</td><td>'+usd2(state.invoices.filter(i=>i.account===x.account).reduce((v,i)=>v+i.amount,0))+'</td><td>'+button('meter',x.id,'Investigate evidence')+'</td></tr>')))+
 '<p class="notice">Invoice exposure does not equal lost revenue. Each finding requires meter, tariff, account and invoice validation before financial impact is calculated.</p>'+
 panel('Evidence-based actions','<div class="insight"><b>Read → Validation → Invoice → Recommendation</b>Investigate anomalous usage, validate the underlying readings and rates, then document the action before approving any charge.</div>');
}
function uvexaEnterprise(){
 const rows=[
 ['White-label client portals','Design and branding provisioning not enabled'],
 ['Company data isolation','Per-company API, storage and background-job tests required'],
 ['Role-based permissions','Production authorization and separation of duties required'],
 ['Customer-controlled exports','Completeness, secure delivery and retention acceptance required'],
 ['Encryption and audit controls','Encryption, access logging and backup recovery must be verified'],
 ['QuickBooks, Oracle and SAP','Integrations not connected in this hosted demo'],
 ['SOC 2 and ISO 27001','Control alignment is a target, not a certification'],
 ['Disaster recovery','SLA, recovery tests and incident runbooks outstanding']
 ];
 return metrics([['Client companies','Demo only','No production tenants'],['Export tools','Available','Synthetic CSV only'],['Integration status','Not connected','No ERP connection'],['Certification','Not claimed','Security controls need audit']])+
 panel('Enterprise readiness dashboard',htmlTable(['Capability','Readiness / required validation'],rows.map(r=>'<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td></tr>')))+
 panel('Customer ownership and isolation','<p>AW is one licensed business customer and could manage thousands of end-customer accounts. Each business customer must have isolated tenant data and permissioned exports.</p><p class="notice">This demo does not implement enterprise SSO, tenant isolation, payment processing, secure evidence storage or live integrations.</p>');
}
function exports(){
 return panel('Data Portability','<p class="muted">Export sample records for review. Downloads include only browser-local synthetic demonstration data.</p><div class="row">'+button('export','leads','Download lead CSV')+' '+button('export','jobs','Download jobs CSV')+' '+(mode==='uvexa'?button('export','meters','Download meters CSV'):'')+' '+button('export','invoices','Download invoice CSV')+'</div><hr><div class="row">'+button('reset','all','Reset demo to original synthetic data')+'</div><p class="notice">This hosted demo cannot connect to Starnik, QuickBooks, real customer data or the M1 development database.</p>');
}
function openModal(title,content){$('#modalTitle').textContent=title;$('#modalBody').innerHTML=content;$('#overlay').hidden=false;document.body.style.overflow='hidden'}
function closeModal(){if(!$('#overlay'))return;$('#overlay').hidden=true;document.body.style.overflow=''}
function leadModal(id){
 const j=state.leads.find(x=>x.id===id);if(!j)return;
 const costs=['labor','materials','subcontract','equipment','overhead'];const b=budget(j);
 const form='<form id="estimate-form" data-id="'+esc(j.id)+'"><div class="inputgroup">'+costs.map(k=>'<label>'+k[0].toUpperCase()+k.slice(1)+' cost ($)<input type="number" min="0" step="0.01" required name="'+k+'" value="'+Number(j[k]||0)+'" '+(j.approved?'disabled':'')+'></label>').join('')+'</div><p><button type="submit" class="btn" '+(j.approved?'disabled':'')+'>Save Synthetic Estimate</button></p></form>';
 openModal(j.name,'<p class="muted">'+esc(j.customer)+' · '+esc(j.id)+' · Received '+esc(j.date)+'</p>'+metrics([['Proposal',usd(j.value)],['Estimated cost',b?usd(b):'Not entered'],['Gross margin',b?percent((j.value-b)/j.value*100):'On hold'],['Stage',j.converted?'Job created':j.approved?'Approved':j.stage]])+panel('Itemized estimate',form)+'<div class="row">'+button('approve',j.id,'Approve & lock estimate')+' '+button('convert',j.id,'Create synthetic job')+'</div><p class="notice">Approved estimates are locked. Job conversion creates only a browser-local synthetic job, with no field dispatch or invoice posting.</p>');
}
function jobModal(id){
 const j=state.jobs.find(x=>x.id===id);if(!j)return;
 const head=j.budget-j.actual-j.committed;
 openModal(j.name,'<p class="muted">'+esc(j.id)+' · '+esc(j.customer)+' · '+esc(j.office)+'</p>'+metrics([['Contract',usd(j.value)],['Approved budget',usd(j.budget)],['Actual cost',usd(j.actual)],['Committed',usd(j.committed)]])+panel('Job financial control','<p>Budget headroom: '+status(usd(head),head<0?'bad':'ok')+'</p><p>Budgeted gross profit: '+usd(j.value-j.budget)+' · Budgeted margin: '+percent((j.value-j.budget)/j.value*100)+'</p><p class="muted">Forecast margin on hold until cost-to-complete is approved.</p>')+panel('Field evidence & execution','<p>Progress: '+j.progress+'% · Synthetic evidence events: '+j.evidence+'</p>'+button('evidence',j.id,'Add timestamped synthetic event')+'<p class="muted mini">No real camera images or timestamps from workers are captured in this hosted demo.</p>'));
}
function meterModal(id){
 const m=state.meters.find(x=>x.id===id);if(!m)return;const problem=meterStatus(m),due=meterCharge(m);
 openModal('Meter '+m.id,'<p class="muted">'+esc(m.customer)+' · '+esc(m.account)+'</p>'+metrics([['Prior reading',fmt(m.previous)],['Current reading',fmt(m.current)],['Usage',fmt(m.current-m.previous)+' gal'],['Calculated preview',due===null?'ON HOLD':usd2(due)]])+panel('Exception review','<p>'+status(m.reviewed?'Marked reviewed':problem||'No anomaly detected',m.reviewed?'ok':problem?'bad':'ok')+'</p><p>Rate: '+usd2(m.rate)+' per 1,000 gallons · Fixed charge: '+usd2(m.fixed)+'</p><p class="muted">Sample formula: (usage ÷ 1000 × rate) + fixed charge. Negative readings must be corrected before billing.</p>'+button('review',m.id,m.reviewed?'Undo demo review':'Mark reviewed (demo only)'))+'<p class="notice">Marking reviewed does not override an invalid meter reading or release a bill.</p>');
}
function invoiceModal(id){
 const x=state.invoices.find(x=>x.id===id);if(!x)return;
 openModal(x.id,'<p class="muted">'+esc(x.customer)+(x.account?' · '+esc(x.account):'')+'</p>'+metrics([['Recorded amount',usd2(x.amount)],['Status',x.paid?'Collected':'Open'],['Ledger posting','Not connected'],['Evidence','Synthetic only']])+panel('Collection controls','<p>Demo status: '+status(x.paid?'Paid':'Open',x.paid?'ok':'warn')+'</p>'+button('collect',x.id,x.paid?'Undo simulated collection':'Simulate collection')+'<p class="muted mini">Changes stay in this browser and never affect bank balances, invoices or accounting records.</p>'));
}
function saveEstimate(e){
 const j=state.leads.find(x=>x.id===e.target.dataset.id);if(!j||j.approved)return;
 const f=new FormData(e.target),cats=['labor','materials','subcontract','equipment','overhead'];
 const nums=Object.fromEntries(cats.map(k=>[k,Number(f.get(k))]));
 if(Object.values(nums).some(v=>!Number.isFinite(v)||v<0||Math.round(v*100)!==v*100)){alert('Enter valid nonnegative dollar amounts with cents precision.');return}
 const total=Object.values(nums).reduce((a,b)=>a+b,0);
 if(total<=0||total>j.value){alert('Cost must be above zero and may not exceed proposal value for this demo.');return}
 Object.assign(j,nums);j.stage='Estimate Draft';persist();render();leadModal(j.id);
}
function exportCSV(group){
 const arr=state[group];if(!Array.isArray(arr)||!arr.length)return;const keys=Object.keys(arr[0]);const cell=x=>'"'+String(x??'').replace(/"/g,'""')+'"';const content=keys.join(',')+'\r\n'+arr.map(r=>keys.map(k=>cell(r[k])).join(',')).join('\r\n');
 const b=new Blob([content],{type:'text/csv;charset=utf-8'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='pfi-'+mode+'-synthetic-'+group+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);
}
function handleClick(e){
 const nav=e.target.closest('[data-nav]');if(nav){navigate(nav.dataset.nav);return}
 const b=e.target.closest('[data-act]');if(!b)return;const act=b.dataset.act,id=b.dataset.id;
 if(act==='close'){closeModal();return}
 if(act==='nav'){navigate(id);return}
 if(act==='step'){step=Number(id);render();return}
 if(act==='lead'){leadModal(id);return}
 if(act==='job'){jobModal(id);return}
 if(act==='meter'){meterModal(id);return}
 if(act==='invoice'){invoiceModal(id);return}
 if(act==='export'){exportCSV(id);return}
 if(act==='reset'){if(confirm('Reset only this browser\'s synthetic demonstration?')){state=initial();persist();navigate('overview')}return}
 if(act==='approve'){
 const j=state.leads.find(x=>x.id===id);if(!j)return;if(j.approved){alert('Already approved');return}
 if(budget(j)<=0||budget(j)>j.value){alert('Save a valid, reconciled cost estimate first.');return}
 if(!confirm('Approve and lock this SYNTHETIC estimate?'))return;
 j.approved=true;j.stage='Approved';persist();render();leadModal(j.id);return
 }
 if(act==='convert'){
 const j=state.leads.find(x=>x.id===id);if(!j)return;if(!j.approved){alert('Approve the estimate before creating a synthetic job.');return}
 if(j.converted){alert('Demo job already created for this opportunity.');return}
 if(!confirm('Create a SYNTHETIC installation job? No operational systems will be updated.'))return;
 j.converted=true;j.stage='Converted';state.jobs.push({id:mode==='uvexa'?'UV-J'+(3000+state.jobs.length):'J-'+(3000+state.jobs.length),name:j.name,customer:j.customer,stage:'Planning',value:j.value,budget:budget(j),actual:0,committed:0,progress:0,evidence:0,office:'Miami'});persist();navigate('installations');return
 }
 if(act==='evidence'){
 const j=state.jobs.find(x=>x.id===id);if(!j)return;j.evidence+=1;j.progress=Math.min(100,j.progress+5);persist();render();jobModal(j.id);return
 }
 if(act==='review'){
 const m=state.meters.find(x=>x.id===id);if(!m)return;m.reviewed=!m.reviewed;persist();render();meterModal(m.id);return
 }
 if(act==='collect'){
 const x=state.invoices.find(x=>x.id===id);if(!x)return;x.paid=!x.paid;persist();render();invoiceModal(x.id);return
 }
}
function handleSubmit(e){if(e.target.id==='estimate-form'){e.preventDefault();saveEstimate(e)}}
document.addEventListener('input',e=>{if(e.target.id==='search'){const position=e.target.selectionStart;filter=e.target.value;render();const n=$('#search');if(n){n.focus();n.setSelectionRange(position,position)}}});

if(mode==='home'){home()}
else if(conf[mode]){init()}
