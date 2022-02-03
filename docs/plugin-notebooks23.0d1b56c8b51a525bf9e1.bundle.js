"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[63016],{18949:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a='---\ntitle: Knative &mdash; CloudEvents Player\nlayout:\n    1: left\n    default: wizard\nwizard:\n    steps:\n        - name: Introduction\n          description: What you will accomplish in this guidebook\n        - name: Creating your first Source\n          description: CloudEvents Player will act as a source\n        - name: Examining the CloudEvents Player\n          description: Use your browser to examine the CloudEvents Player\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](https://knative.dev) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n# Introducing the CloudEvents Player\n\n---\n\n## Introduction\n\nIn this tutorial, you use the [CloudEvents Player](https://github.com/ruromero/cloudevents-player){target=blank} to showcase the core concepts of Knative Eventing. By the end of this tutorial, you should have an architecture that looks like this:\n\n![The CloudEvents Player acts as both a Source and a Sink for CloudEvents](https://raw.githubusercontent.com/knative/docs/main/docs/getting-started/images/event_diagram.png)\n\nThe above image is Figure 6.6 from [Knative in Action](https://www.manning.com/books/knative-in-action){target=_blank}.\n\n## Creating your first Source\nThe CloudEvents Player acts as a Source for CloudEvents by intaking the URL of the Broker as an environment variable, `BROKER_URL`. You will send CloudEvents to the Broker through the CloudEvents Player application.\n\nCreate the CloudEvents Player Service:\n=== "kn"\n\n    ```bash\n    kn service create cloudevents-player \\\n    --image ruromero/cloudevents-player:latest \\\n    --env BROKER_URL=http://broker-ingress.knative-eventing.svc.cluster.local/default/example-broker\n    ```\n    ==**Expected Output**==\n    ```{ .bash .no-copy }\n    Service \'cloudevents-player\' created to latest revision \'cloudevents-player-vwybw-1\' is available at URL:\n    http://cloudevents-player.default.127.0.0.1.sslip.io\n    ```\n\n    ??? question "Why is my Revision named something different!"\n        Because we didn\'t assign a `revision-name`, Knative Serving automatically created one for us. It\'s okay if your Revision is named something different.\n\n=== "YAML"\n\n    ```bash\n    apiVersion: serving.knative.dev/v1\n    kind: Service\n    metadata:\n      name: cloudevents-player\n    spec:\n      template:\n        metadata:\n          annotations:\n            autoscaling.knative.dev/min-scale: "1"\n        spec:\n          containers:\n            - image: ruromero/cloudevents-player:latest\n              env:\n                - name: BROKER_URL\n                  value: http://broker-ingress.knative-eventing.svc.cluster.local/default/example-broker\n    ```\n\n    Once you\'ve created your YAML file, named something like `cloudevents-player.yaml`, apply it by running the command:\n    ``` bash\n    kubectl apply -f cloudevents-player.yaml\n    ```\n\n    ==**Expected Output**==\n    ```{ .bash .no-copy }\n    service.serving.knative.dev/cloudevents-player created\n    ```\n\n## Examining the CloudEvents Player\n**You can use the CloudEvents Player to send and receive CloudEvents.** If you open the [Service URL](http://cloudevents-player.default.127.0.0.1.sslip.io){target=_blank} in your browser, the **Create Event** form appears:\n\n![The user interface for the CloudEvents Player](https://raw.githubusercontent.com/knative/docs/main/docs/getting-started/images/event_form.png)\n\n??? question "What do these fields mean?"\n    | Field          | Description |\n    |:----------------:|:-------------|\n    | `Event ID`     | A unique ID. Click the loop icon to generate a new one.   |\n    | `Event Type`   | An event type.|\n    | `Event Source` | An event source.|\n    | `Specversion`  | Demarcates which CloudEvents spec you\'re using (should always be 1.0).|\n    | `Message`      | The `data` section of the CloudEvent, a payload which is carrying the data you care to be delivered.|\n\n    For more information on the CloudEvents Specification, check out the [CloudEvents Spec](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md){target=_blank}.\n\n  1. Fill in the form with whatever you data you want.\n  1. Ensure your Event Source does not contain any spaces.\n  1. Click **SEND EVENT**.\n\n![CloudEvents Player Send](https://raw.githubusercontent.com/knative/docs/main/docs/getting-started/images/event_sent.png)\n\n??? tip "Clicking the :fontawesome-solid-envelope: shows you the CloudEvent as the Broker sees it."\n    ![Event_Details](images/event_details.\n\n??? question "Want to send events via the command line instead?"\n    As an alternative to the Web form, events can also be sent/viewed via the command line.\n\n    To post an event:\n    ```bash\n    curl -i http://cloudevents-player.default.127.0.0.1.sslip.io \\\n        -H "Content-Type: application/json" \\\n        -H "Ce-Id: 123456789" \\\n        -H "Ce-Specversion: 1.0" \\\n        -H "Ce-Type: some-type" \\\n        -H "Ce-Source: command-line" \\\n        -d \'{"msg":"Hello CloudEvents!"}\'\n    ```\n\n    And to view events:\n    ```bash\n    curl http://cloudevents-player.default.127.0.0.1.sslip.io/messages\n    ```\n\nThe :material-send: icon in the "Status" column implies that the event has been sent to our Broker... but where has the event gone? **Well, right now, nowhere!**\n\nA Broker is simply a receptacle for events. In order for your events to be sent anywhere, you must create a Trigger which listens for your events and places them somewhere. And, you\'re in luck: you\'ll create your first Trigger on the next page!'}}]);