"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[32606],{55938:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i='---\ntitle: Knative &mdash; Traffic Splitting\nlayout:\n    1: left\n    default: wizard\nwizard:\n    description: Kubernetes-based platform to deploy and manage modern serverless workloads\n    steps:\n        - match: Basics of Traffic Splitting\n          name: Introduction\n        - Creating a new Revision\n        - Splitting Traffic\n        - name: Clean Up\n          description: Delete your "hello" Service\ncodeblocks:\n    - language: bash\n      match: ^kn service update hello\n      validate: kn revisions hello\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](https://knative.dev) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n# How Knative enables Powerful Traffic Splitting\n\n---\n\n# Basics of Traffic Splitting\nThe last super power :rocket: of Knative Serving we\'ll go over in this tutorial is traffic splitting.\n\n??? question "What are some common traffic splitting use-cases?"\n    Splitting traffic is useful for a number of very common modern infrastructure needs, such as\n    **[blue/green deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html){target=blank_}\n    and\n    [canary deployments](https://martinfowler.com/bliki/CanaryRelease.html){target=blank_}.**\n    Bringing these industry standards to bear on Kubernetes is **as simple as a single CLI command on Knative** or YAML tweak, let\'s see how!\n\n\n## Creating a new Revision\nYou may have noticed that when you created your Knative Service you assigned it a `revision-name`, "world". If you used `kn`, when your Service was created Knative returned both a URL and a "latest revision" for your Knative Service. **But what happens if you make a change to your Service?**\n\n??? question "What exactly is a Revision?""\n    You can think of a [Revision](https://raw.githubusercontent.com/knative/docs/main/docs/serving/README.md%23serving-resources){target=_blank} as a stateless, autoscaling, snapshot-in-time of application code and configuration.\n\n    A new Revision will get created each and every time you make changes to your Knative Service, whether you assign it a name or not. When splitting traffic, Knative splits traffic between different Revisions of your Knative Service.\n\nInstead of `TARGET`="World" update the environment variable `TARGET` on your Knative Service `hello` to greet "Knative" instead.  Name this new revision `hello-knative`\n=== "kn"\n\n    ``` bash\n    kn service update hello \\\n    --env TARGET=Knative \\\n    --revision-name=knative\n    ```\n\n    As before, `kn` prints out some helpful information to the CLI.\n\n    ==**Expected output:**==\n    ```{ .bash .no-copy }\n    Service hello created to latest revision \'hello-knative\' is available at URL:\n    http://hello.default.127.0.0.1.sslip.io\n    ```\n\n=== "YAML"\n    ``` bash\n    ---\n    apiVersion: serving.knative.dev/v1\n    kind: Service\n    metadata:\n      name: hello\n    spec:\n      template:\n        metadata:\n          name: hello-knative\n        spec:\n          containers:\n            - image: gcr.io/knative-samples/helloworld-go\n              ports:\n                - containerPort: 8080\n              env:\n                - name: TARGET\n                  value: "Knative"\n    ```\n    Once you\'ve edited your existing YAML file:\n    ``` bash\n    kubectl apply -f hello.yaml\n    ```\n\n    ==**Expected output:**==\n    ```{ .bash .no-copy }\n    service.serving.knative.dev/hello configured\n    ```\n\n\nNote, since we are updating an existing Knative Service `hello`, the URL doesn\'t change, but our new Revision should have the new name `hello-knative`\n\nLet\'s access our Knative Service again on your browser [http://hello.default.127.0.0.1.sslip.io](http://hello.default.127.0.0.1.sslip.io){target=_blank} to see the change, or use `curl` in your terminal:\n```bash\ncurl http://hello.default.127.0.0.1.sslip.io\n```\n\n==**Expected output:**==\n```{ .bash .no-copy }\nHello Knative!\n```\n\n## Splitting Traffic\nYou may at this point be wondering, "where did \'Hello World!\' go?" Remember, Revisions are a stateless snapshot-in-time of application code and configuration, so your "hello-world" `Revision` is still available to you.\n\nWe can easily see a list of our existing revisions with the `kn` CLI:\n\n\n=== "kn"\n\n    ```bash\n    kn revisions list\n    ```\n\n=== "kubectl"\n     Though the following example doesn\'t cover it, you can peak under the hood to Kubernetes to see the revisions as Kubernetes sees them.  \n    ```bash\n    kubectl get revisions\n    ```\n\n==**Expected output:**==\n```{ .bash .no-copy }\nNAME            SERVICE   TRAFFIC   TAGS   GENERATION   AGE   CONDITIONS   READY   REASON\nhello-knative   hello     100%             2            30s   3 OK / 4     True    \nhello-world     hello                      1            5m    3 OK / 4     True    \n```\n\nThe column most relevant for our purposes is `TRAFFIC`. It looks like 100% of traffic is going to our latest `Revision` ("hello-knative") and 0% of traffic is going to the Revision we configured earlier ("hello-world").\n\nWhen you create a new Revision of a Knative Service, Knative defaults to directing 100% of traffic to this latest Revision. **We can change this default behavior by specifying how much traffic we want each of our Revisions to receive.**\n\nLets split traffic between our two Revisions:\n\n!!! info inline end\n    `@latest` will always point to our "latest" `Revision` which, at the moment, is `hello-knative`.\n=== "kn"\n\n    ```bash\n    kn service update hello \\\n    --traffic hello-world=50 \\\n    --traffic @latest=50\n    ```\n\n=== "YAML"\n    Add the following to the bottom of your existing YAML file:\n    ``` bash\n    apiVersion: serving.knative.dev/v1\n    kind: Service\n    metadata:\n      name: hello\n    spec:\n      template:\n        metadata:\n          name: hello-knative\n        spec:\n          containers:\n            - image: gcr.io/knative-samples/helloworld-go\n              ports:\n                - containerPort: 8080\n              env:\n                - name: TARGET\n                  value: "Knative"\n      traffic:\n      - latestRevision: true\n        percent: 50\n      - revisionName: hello-world\n        percent: 50\n    ```\n    Once you\'ve edited your existing YAML file:\n    ``` bash\n    kubectl apply -f hello.yaml\n    ```\n\nVerify traffic split configure correctly by listing the revisions again.\n=== "kn"\n\n    ```bash\n    kn revisions list\n    ```\n\n=== "kubectl"\n     Though the following example doesn\'t cover it, you can peak under the hood to Kubernetes to see the revisions as Kubernetes sees them.  \n    ```bash\n    kubectl get revisions\n    ```\n\n==**Expected output:**==\n```{ .bash .no-copy }\nNAME            SERVICE   TRAFFIC   TAGS   GENERATION   AGE   CONDITIONS   READY   REASON\nhello-knative   hello     50%              2            10m   3 OK / 4     True\nhello-world     hello     50%              1            36m   3 OK / 4     True\n```\n\nAccess your Knative service on the browser again [http://hello.default.127.0.0.1.sslip.io](http://hello.default.127.0.0.1.sslip.io){target=_blank}, and refresh multiple times to see the different output being served by each Revision.\n\nSimilarly, you can `curl` the Service URL multiple times to see the traffic being split between the Revisions.\n```bash\ncurl http://hello.default.127.0.0.1.sslip.io\n```\n\n==**Expected output:**==\n```{ .bash .no-copy }\ncurl http://hello.default.127.0.0.1.sslip.io\nHello Knative!\n\ncurl http://hello.default.127.0.0.1.sslip.io\nHello World!\n```\n\nCongratulations, :tada: you\'ve successfully split traffic between 2 different Revisions of a Knative Service. Up next, Knative Eventing!\n\n## Clean Up\nYou won\'t need the `hello` Service in the Knative Eventing tutorial, so it\'s best to clean up before you move forward:\n\n=== "kn"\n    ```bash\n    kn service delete hello\n    ```\n\n=== "kubectl"\n    ```bash\n    kubectl delete -f hello.yaml\n    ```\n'}}]);