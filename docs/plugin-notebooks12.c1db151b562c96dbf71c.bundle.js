"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[84915],{81839:(e,n,i)=>{i.r(n),i.d(n,{default:()=>t});const t='---\ntitle: Welcome to Kui\nlayout:\n  1: left\n---\n\n# Kui: CLI-driven Graphics for Kubernetes\n\nWe love CLIs, and think they are critical for interacting in a\nflexible way with the cloud. We need the power to go off the\nrails. But **ASCII is tedious**. Kui takes your normal kubectl command\nline requests and responds with graphics. Instead of ASCII tables, you\nare presented with sortable ones. Instead of copying and pasting long\nauto-generated resource names to drill down, in Kui **you just\nclick**.\n\n## Installation\n\n=== "Mac"\n\n    For MacOS, this is simplified by the use of [Homebrew](https://brew.sh/):\n\n    ```bash\n    ---\n    validate: brew info kui\n    ---\n    brew install kui\n    kubectl kui get pods\n    ```\n\n=== "Linux/Windows"\n    \n    [Kui-Linux-x64.zip](https://linux-zip.kui-shell.org) **|** [Kui-Linux-arm64.zip](https://linux-arm64-zip.kui-shell.org) **|** [Kui-Win32-x64.zip](https://win32-zip.kui-shell.org)\n\n### Contributing\n\nKui uses [Electron](https://electronjs.org). Using Electron, Kui can\nbe distributed as a double-clickable platform application, as a static\nsingle-page web application, or as a fully hosted client-server web\napp.\n\nIf you want to help, please take a look at the [developer\nguide](https://github.com/IBM/kui/wiki) and our\n[guidelines](CONTRIBUTING.md).\n\n---\n\n???+ tip "Kui as a `kubectl` plugin"\n\n    To run Kui as `kubectl kui`, add the unpacked directory to your\n    PATH. For users of Homebrew on macOS, this should happen automatically.\n\n## Listing Kubernetes Resources and Drilling Down\n\nTo use Kui, type a normal `kubectl` command, and you should quickly\nsee interactive graphics in response. You may use `k` as a shorthand\nfor `kubectl`.\n\nFirst, let us try viewing our pods:\n\n```bash\nk get deploy\n```\n\nClicking on a table cell gives you a quick way to drill down the\nfollowing details:\n\n```bash\nk get deploy frontend -o yaml\n```\n\n### Events\n\nKui has enhanced views over Kubernetes events.\n\n```bash\nk get events\n```\n\n## Viewing an Kubernetes Application\n\nKui also has enhanced views over heterogeneous collections of\nresources. Both `apply` and `get` operations present a unified view of\nthese resources, along with links to view the source yaml for each\ngroup of resources.\n\n```bash\nk apply -f plugins/plugin-kubectl/tests/data/k8s/application/guestbook/\n```\n'},78536:e=>{e.exports=JSON.parse('{"name":"@kui-shell/plugin-bash-like","version":"11.3.0","description":"Kui plugin that offers local bash-like shell integrations","license":"Apache-2.0","author":"Nick Mitchell","homepage":"https://github.com/IBM/kui#readme","bugs":{"url":"https://github.com/IBM/kui/issues/new"},"repository":{"type":"git","url":"git+https://github.com/IBM/kui.git"},"keywords":["kui","plugin"],"contributors":["Mengting Yan"],"main":"dist/index.js","typedocMain":"src/index.ts","module":"mdist/index.js","types":"mdist/index.d.ts","dependencies":{"@kui-shell/xterm-helpers":"1.0.1","cookie":"0.4.2","debug":"4.3.3","globby":"11.0.4","node-pty":"0.11.0-beta17","shelljs":"0.8.5","slash":"3.0.0","speed-date":"1.0.0","tmp":"0.2.1","uuid":"8.3.2","ws":"7.5.3","xterm":"4.17.0","xterm-addon-fit":"0.5.0"},"kui":{"exclude":{"headless":["asciidoctor.js","marked","xterm","ws","node-pty"],"proxy":["asciidoctor.js","marked","xterm"],"webpack":["ws","node-pty"]}},"publishConfig":{"access":"public"},"gitHead":"5172683d854209cc3affc4e6d366676e429e3f33"}')}}]);