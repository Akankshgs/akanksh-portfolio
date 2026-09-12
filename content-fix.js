const replacements=[
 ['Android app development with Flutter and Dart.','Web and Android application development using Flutter, Dart, Vue.js, TypeScript, and REST APIs.'],
 ['I build for<br>the web.<br><span>And the road.</span>','I build<br>web and Android apps<br><span>for real work.</span>'],
 ["I'm Akanksh G S. I develop web and Android applications that help teams manage drivers, vehicles, incidents, and everyday operations.","I'm Akanksh G S, a Junior Software Engineer at Sigsenz Technologies Pvt. Ltd. I develop Android applications and contribute to web application features, API integration, ticket workflows, vehicle monitoring, incident management, and delivery operations."],
 ['Android applications','Web + Android applications'],
 ['Android App Development','Web + Android Application Development'],
 ['Web + Android Development','Web + Android Application Development'],
 ['Web + Android','Web + Android applications'],
 ['Web & backend','Web application & API development'],
 ['Software built for real work.','Applications built for real operations.'],
 ['Professional projects at<br>Sigsenz Technologies Pvt. Ltd.','Web and Android projects at<br>Sigsenz Technologies Pvt. Ltd.']
];
function replaceVisible(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(const node of nodes){for(const [from,to] of replacements){if(node.nodeValue.includes(from))node.nodeValue=node.nodeValue.replaceAll(from,to);}}}
replaceVisible();
const summary=document.querySelector('.experience p:not(.company)');if(summary)summary.textContent='I develop Android applications and contribute to web application features, connecting operational requirements with reliable APIs and clear user workflows.';
const heroIntro=document.querySelector('.intro');if(heroIntro)heroIntro.textContent='I develop Android apps and contribute to web application features that help teams manage drivers, vehicles, incidents, tickets, and everyday operations.';
