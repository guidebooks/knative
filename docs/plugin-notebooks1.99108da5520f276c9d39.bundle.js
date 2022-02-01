"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[29994],{62721:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="# Architecture of Kui VFS\n\nThe architecture has this stack:\n\n```\n--------------------\n Client Controller    e.g. a command registration for /mkdir\n--------------------\n  VFS Delegation      dispatch filepaths to the owning VFS impl\n--------------------\n    VFS Impls         e.g. interpret mkdir against local filesystem\n--------------------\n Server Controller    implement portions that cannot be run in a browser\n -------------------\n```\n\nThus, to add a new VFS API, you must currently add a controller (if\none does not already exist) for the command, code the delegation that\nknows which positional parameters correspond to filepaths, implement\nthe client-side and any needed server-side portions of the VFS impl.\n\n## VFS Interface\n\nThe interface consists\n\n- cd, ls, mkdir, etc.\n\n## Client Controllers\n\n- e.g. /mkdir -> which invokes the next layer: Delegates\n\n## VFS Delegation\n\nThese resolve filepaths to VFS impl.\n\n```\nmkdir /a/b/c\n      ^^^^ -> VFS Impl lookup based on path\n```\n\nThen call `impl.mkdir(args)`.\n\n## VFS Impls (running on Client)\n\n- These can't assume they are running on the Kui proxy side\n- Examples\n  - local.ts for local filesystem\n\n## Server-side support\n\nIf a client VFS impl requires execution of code that cannot safely run\nin a browser, it must manage routing this code to the Kui proxy. For\nexample:\n\n- `vfs _ls` for `ls` (because we handle ls without a pty, so ls needs its own server-side handler)\n- `sendtopty` for`mkdir`, and most everything else\n\n### Server-side controllers\n\nThese are command handlers that facilitate the server-side of the browser-unsafe logic.\n\n- `/vfs/_ls` handler\n- or generic `pty` handling for mkdir\n"}}]);