"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Cosmos Hub 2 Upgrade",order:1},i=void 0,s={unversionedId:"migration/cosmoshub-2/cosmoshub-2",id:"migration/cosmoshub-2/cosmoshub-2",title:"Cosmos Hub 2 Upgrade",description:"The following document describes the necessary steps involved that full-node operators",source:"@site/docs/migration/cosmoshub-2/cosmoshub-2.md",sourceDirName:"migration/cosmoshub-2",slug:"/migration/cosmoshub-2/",permalink:"/migration/cosmoshub-2/",draft:!1,tags:[],version:"current",frontMatter:{title:"Cosmos Hub 2 Upgrade",order:1},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/migration/"},next:{title:"Cosmos Hub 3 Upgrade",permalink:"/migration/cosmoshub-3/"}},l={},p=[{value:"Preliminary",id:"preliminary",level:2},{value:"Major Updates",id:"major-updates",level:2},{value:"Risks",id:"risks",level:2},{value:"Recovery",id:"recovery",level:2},{value:"Upgrade Procedure",id:"upgrade-procedure",level:2},{value:"Notes for Service Providers",id:"notes-for-service-providers",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following document describes the necessary steps involved that full-node operators\nmust take in order to upgrade from ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),". The Tendermint team\nwill post an official updated genesis file, but it is recommended that validators\nexecute the following instructions in order to verify the resulting genesis file."),(0,o.kt)("p",null,"There is a strong social consensus around proposal ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmos Hub 3 Upgrade Proposal E"),"\non ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2"),". This indicates that the upgrade procedure should be performed\non ",(0,o.kt)("inlineCode",{parentName:"p"},"December 11, 2019 at or around 14:27 UTC")," on block ",(0,o.kt)("inlineCode",{parentName:"p"},"2,902,000"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cosmos-hub-2-upgrade-instructions"},"Cosmos Hub 2 Upgrade Instructions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preliminary"},"Preliminary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#major-updates"},"Major Updates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#risks"},"Risks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recovery"},"Recovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#upgrade-procedure"},"Upgrade Procedure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#notes-for-service-providers"},"Notes for Service Providers"))))),(0,o.kt)("h2",{id:"preliminary"},"Preliminary"),(0,o.kt)("p",null,"Many changes have occurred to the Cosmos SDK and the Gaia application since the latest\nmajor upgrade (",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2"),"). These changes notably consist of many new features,\nprotocol changes, and application structural changes that favor developer ergonomics\nand application development."),(0,o.kt)("p",null,"First and foremost, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/"},"Cosmos SDK")," and the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"Gaia")," application have been split into separate\nrepositories. This allows for both the Cosmos SDK and Gaia to evolve naturally\nand independently. Thus, any future ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases"},"releases"),"\nof Gaia going forward, including this one, will be built and tagged from this\nrepository not the Cosmos SDK."),(0,o.kt)("p",null,"Since the Cosmos SDK and Gaia have now been split into separate repositories, their\nversioning will also naturally diverge. In an attempt to decrease community confusion and strive for\nsemantic versioning, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/"},"Cosmos SDK")," will continue\non its current versioning path (i.e. v0.36.x ) and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"Gaia"),"\napplication will become v2.0.x."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/cosmos/gaia"},"Gaia")," application v2.0.3 is\nwhat full node operators will upgrade to and run in this next major upgrade"),"."),(0,o.kt)("h2",{id:"major-updates"},"Major Updates"),(0,o.kt)("p",null,"There are many notable features and changes in the upcoming release of the SDK. Many of these\nare discussed at a high level in July's Cosmos development update found\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.cosmos.network/cosmos-development-update-july-2019-8df2ade5ba0a"},"here"),"."),(0,o.kt)("p",null,"Some of the biggest changes to take note on when upgrading as a developer or client are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tagging/Events"),": The entire system of what we used to call tags has been replaced by a more\nrobust and flexible system called events. Any client that depended on querying or subscribing to\ntags should take note on the new format as old queries will not work and must be updated. More in\ndepth docs on the events system can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/master/rpc/core/events.go"},"here"),".\nIn addition, each module documents its own events in the specs (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.36.0/docs/spec/slashing/06_events.md"},"slashing"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Height Queries"),": Both the CLI and REST clients now (re-)enable height queries via the\n",(0,o.kt)("inlineCode",{parentName:"li"},"--height")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"?height")," arguments respectively. An important note to keep in mind are that height\nqueries against pruning nodes will return errors when a pruned height is queried against. When no\nheight is provided, the latest height will be used by default keeping current behavior intact. In\naddition, many REST responses now wrap the query results in a new structure ",(0,o.kt)("inlineCode",{parentName:"li"},'{"height": ..., "result": ...}'),".\nThat is, the height is now returned to the client for which the resource was queried at.")),(0,o.kt)("h2",{id:"risks"},"Risks"),(0,o.kt)("p",null,"As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of\ndouble-signing and being slashed. The most important piece of this procedure is verifying your\nsoftware version and genesis file hash before starting your validator and signing."),(0,o.kt)("p",null,"The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade\nprocedure again during the network startup. If you discover a mistake in the process, the best thing\nto do is wait for the network to start before correcting it. If the network is halted and you have\nstarted with a different genesis file than the expected one, seek advice from a Tendermint developer\nbefore resetting your validator."),(0,o.kt)("h2",{id:"recovery"},"Recovery"),(0,o.kt)("p",null,"Prior to exporting ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2")," state, validators are encouraged to take a full data snapshot at the\nexport height before proceeding. Snapshotting depends heavily on infrastructure, but generally this\ncan be done by backing up the ",(0,o.kt)("inlineCode",{parentName:"p"},".gaia")," directories."),(0,o.kt)("p",null,"It is critically important to back-up the ",(0,o.kt)("inlineCode",{parentName:"p"},".gaia/data/priv_validator_state.json")," file after stopping your gaiad process. This file is updated every block as your validator participates in a consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted."),(0,o.kt)("p",null,"In the event that the upgrade does not succeed, validators and operators must downgrade back to\nv0.34.6+ of the ",(0,o.kt)("em",{parentName:"p"},"Cosmos SDK")," and restore to their latest snapshot before restarting their nodes."),(0,o.kt)("h2",{id:"upgrade-procedure"},"Upgrade Procedure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": It is assumed you are currently operating a full-node running v0.34.6+ of the ",(0,o.kt)("em",{parentName:"p"},"Cosmos SDK"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version/commit hash of Gaia v2.0.3: ",(0,o.kt)("inlineCode",{parentName:"li"},"2f6783e298f25ff4e12cb84549777053ab88749a")),(0,o.kt)("li",{parentName:"ul"},"The upgrade height as agreed upon by governance: ",(0,o.kt)("strong",{parentName:"li"},"2,902,000")),(0,o.kt)("li",{parentName:"ul"},"You may obtain the canonical UTC timestamp of the exported block by any of the following methods:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Block explorer"),(0,o.kt)("li",{parentName:"ul"},"Through manually querying an RPC node (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/block?height=2902000"),")"),(0,o.kt)("li",{parentName:"ul"},"Through manually querying a Gaia REST client (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/blocks/2902000"),")")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you are currently running the correct version (v0.34.6+) of the ",(0,o.kt)("em",{parentName:"p"},"Cosmos SDK"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gaiad version --long\ncosmos-sdk: 0.34.6\ngit commit: 80234baf91a15dd9a7df8dca38677b66b8d148c1\nvendor hash: f60176672270c09455c01e9d880079ba36130df4f5cd89df58b6701f50b13aad\nbuild tags: netgo ledger\ngo version go1.12.2 linux/amd64\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Export existing state from ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2"),":"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": It is recommended for validators and operators to take a full data snapshot at the export\nheight before proceeding in case the upgrade does not go as planned or if not enough voting power\ncomes online in a sufficient and agreed upon amount of time. In such a case, the chain will fallback\nto continue operating ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2"),". See ",(0,o.kt)("a",{parentName:"p",href:"#recovery"},"Recovery")," for details on how to proceed."),(0,o.kt)("p",{parentName:"li"},"Before exporting state via the following command, the ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," binary must be stopped!"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad export --for-zero-height --height=2902000 > cosmoshub_2_genesis_export.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the SHA256 of the (sorted) exported genesis file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ jq -S -c -M '' cosmoshub_2_genesis_export.json | shasum -a 256\n[PLACEHOLDER]  cosmoshub_2_genesis_export.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At this point you now have a valid exported genesis state! All further steps now require\nv2.0.3 of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"Gaia"),"."),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Go ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"1.13+")," is required!"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cosmos/gaia.git && cd gaia && git checkout v2.0.3; make install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you are currently running the correct version (v2.0.3) of the ",(0,o.kt)("em",{parentName:"p"},"Gaia"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gaiad version --long\nname: gaia\nserver_name: gaiad\nclient_name: gaiacli\nversion: 2.0.3\ncommit: 2f6783e298f25ff4e12cb84549777053ab88749a\nbuild_tags: netgo,ledger\ngo: go version go1.13.3 darwin/amd64\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Migrate exported state from the current v0.34.6+ version to the new v2.0.3 version:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad migrate v0.36 cosmoshub_2_genesis_export.json --chain-id=cosmoshub-3 --genesis-time=[PLACEHOLDER]> genesis.json\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," command takes an input genesis state and migrates it to a targeted version.\nBoth v0.36 and v0.37 are compatible as far as state structure is concerned."),(0,o.kt)("p",{parentName:"li"},"Genesis time should be computed relative to the blocktime of ",(0,o.kt)("inlineCode",{parentName:"p"},"2,902,000"),". The genesis time\nshall be the blocktime of ",(0,o.kt)("inlineCode",{parentName:"p"},"2,902,000")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"60")," minutes with the subseconds truncated."),(0,o.kt)("p",{parentName:"li"},"An example shell command(tested on OS X Mojave) to compute this values is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://stargate.cosmos.network:26657/block\\?height\\=2902000 | jq -r \'.result["block_meta"]["header"]["time"]\'|xargs -0 date -v +60M  -j  -f "%Y-%m-%dT%H:%M:%S" +"%Y-%m-%dT%H:%M:%SZ"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now we must update all parameters that have been agreed upon through governance. There is only a\nsingle parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"max_validators"),", that we're upgrading based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.mintscan.io/proposals/10"},"proposal 10")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat genesis.json | jq \'.app_state["staking"]["params"]["max_validators"]=125\' > tmp_genesis.json && mv tmp_genesis.json genesis.json\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the SHA256 of the final genesis JSON:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ jq -S -c -M '' genesis.json | shasum -a 256\n[PLACEHOLDER]  genesis.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reset state:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Be sure you have a complete backed up state of your node before proceeding with this step.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#recovery"},"Recovery")," for details on how to proceed."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad unsafe-reset-all\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the new ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},".gaia/config/")," directory")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"db_backend")," on ",(0,o.kt)("inlineCode",{parentName:"p"},".gaia/config/config.toml")," to:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "goleveldb"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note, if you have any application configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad.toml"),", that file has now been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv .gaia/config/gaiad.toml .gaia/config/app.toml\n")))),(0,o.kt)("h2",{id:"notes-for-service-providers"},"Notes for Service Providers"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The transition from ",(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-2")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," contains an unusual amount of API breakage.\nAfter this upgrade will maintain the CosmosSDK API stability guarantee to avoid breaking APIs for at\nleast 6 months and hopefully long."),(0,o.kt)("li",{parentName:"ol"},"Anyone running signing infrastructure(wallets and exchanges) should be conscious that the ",(0,o.kt)("inlineCode",{parentName:"li"},"type:"),"\nfield on ",(0,o.kt)("inlineCode",{parentName:"li"},"StdTx")," will have changed from ",(0,o.kt)("inlineCode",{parentName:"li"},'"type":"auth/StdTx","value":...')," to  ",(0,o.kt)("inlineCode",{parentName:"li"},'"type":"cosmos-sdk/StdTx","value":...')),(0,o.kt)("li",{parentName:"ol"},"As mentioned in the notes and SDK CHANGELOG, many queries to cosmos cli are wrapped with ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," fields now."),(0,o.kt)("li",{parentName:"ol"},"We highly recommend standing up a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/blob/master/docs/deploy-testnet.md"},"testnet"),"\nwith the ",(0,o.kt)("inlineCode",{parentName:"li"},"gaia-2.0")," release or joining the gaia-13006 testnet. More info for joining the testnet can be\nfound in the ",(0,o.kt)("a",{parentName:"li",href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org"},"riot validator room"),"."),(0,o.kt)("li",{parentName:"ol"},"We expect that developers with iOS or Android based apps may have to notify their users of downtime\nand ship an upgrade for cosmoshub-3 compatibility unless they have some kind of switch they can throw\nfor the new tx formats. Server side applications should experience briefer service interruptions and\nbe able to just spin up new nodes and migrate to the new apis.")))}c.isMDXComponent=!0}}]);