"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[45586],{37938:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i="---\ntitle: Kubernetes &mdash; Deploying Applications\nlayout:\n  1: left\n---\n\n# Deploying PHP Guestbook Application with Redis\n\nThis tutorial shows you how to build and deploy a simple, multi-tier\nweb application using Kubernetes and Kui. You will learn how to\n**explore the structure** of this application. Once you are confident\nin your understanding of the implications of its deployment, this\nnotebook can help you with taking that next step.\n\nThe guestbook application uses **Redis** to store its data. It writes\nits data to a Redis **master** instance and reads data from multiple\nRedis **slave** instances.\n\nAlthough the Redis master is a single pod, you can make it highly\navailable to meet traffic demands by adding replica Redis slaves.\n\nThe guestbook application has a **web frontend** serving the HTTP\nrequests written in PHP. It is configured to connect to the\nredis-master `Service` for write requests and the redis-slave service\nfor Read requests.\n\n---\n\nFirst, let's create a namespace to keep our work isolated:\n\n```bash\nkubectl create ns kui-notebook-3\n```\n\n## Learning the Application's Structure\n\nThis application consists of the following components:\n\n- A single-instance Redis master to store guestbook entries\n- Multiple replicated Redis instances to serve reads\n- Multiple web frontend instances\n\nBy executing `kubectl get -f <dir>`, where `<dir>` is the directory\nthat contains the application's resource definitions, you can view a\nvisual summary of this application structure. This summary lets you\n**preview the deployment**.\n\n#### Here, we make sure to indicate that we want to target this application to the namespace we created on the left.\n\n```bash\nkubectl get -f plugins/plugin-kubectl/tests/data/k8s/application/guestbook/ -n kui-notebook-3\n```\n\n## Deploying the Application\n\nBy executing the following `apply -f` command view, you can initiate\nthe deployment of this application to your cluster.\n\n```bash\nkubectl apply -n kui-notebook-3 -f plugins/plugin-kubectl/tests/data/k8s/application/guestbook/\n```\n\n## Inspecting the Running Application\n\nBy drilling down the resource in the above view, you can inspect the\nstatus of the running deployment. For example, the following sidecar\nis the result of clicking `Deployment` `frontend`.\n\n```bash\nkubectl get Deployment frontend -o yaml -n kui-notebook-3\n```\n"}}]);