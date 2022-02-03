"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[63016],{537:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o='---\ntitle: Knative &mdash; Eventing Components\ndescription: Eventing components\nlayout:\n    1: left\n    default: wizard\nwizard:\n    steps:\n        - match: Sources, Brokers, Triggers, Sinks, oh my!\n          name: Introduction\n          description: About our four main Knative Eventing components\n        - name: CloudEvents\n          description: What are CloudEvents and how will we use them with Knative Eventing?\n        - Examining the Broker\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](/Users/nickm/git/guidebooks/knative/node_modules/@kui-shell/plugin-kubectl/notebooks/(https:/knative.dev)) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n# Sources, Brokers, Triggers, Sinks\n\n---\n\n## Sources, Brokers, Triggers, Sinks, oh my!\nFor the purposes of this tutorial, let\'s keep it simple. You will focus on four powerful Eventing components: Source, Trigger, Broker, and Sink.\n\nLet\'s take a look at how these components interact:\n\n![Source 1 and Source 2 are transmitting some data -- ones and twos -- to the Broker, which then gets filtered by Triggers to the desired Sink.](https://user-images.githubusercontent.com/16281246/116248768-1fe56080-a73a-11eb-9a85-8bdccb82d16c.png){draggable=false}\n\n| Component      | Basic Definition                          |\n| :---------: | :----------------------------------: |\n|:material-information: **Source**       |A Kubernetes Custom Resource which emits events to the Broker. |\n|:material-relation-many-to-many: **Broker**       | A "hub" for events in your infrastructure; a central location to send events for delivery. |\n|:material-magnet: **Trigger** |Acts as a filter for events entering the broker, can be configured with desired event attributes. |\n|:material-download: **Sink** | A destination for events. |\n\n!!! note "A note on Sources and Sinks"\n    A Knative Service can act as both a Source and a Sink for events, and for good reason. You may want to consume events from the Broker and send modified events back to the Broker, as you would in any pipeline use-case.\n\n### CloudEvents\nKnative Eventing uses\n[CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md){target=blank_} to send\ninformation back and forth between your Services and these components.\n\n??? question "What are CloudEvents?"\n    For our purposes, the only thing you need to know about CloudEvents are:\n\n    1. CloudEvents can carry some attributes (like id, Source, type, etc) as well as data payloads (JSON, plaintext, reference to data that lives elsewhere, etc).\n    1. CloudEvents can be "emitted" by almost anything and can be transported to anywhere in your deployment.\n    1. CloudEvents follow the [CloudEvents 1.0 Specification](https://github.com/cloudevents/spec){target=_blank}, with required and optional attributes.\n\n\n    To find out more about CloudEvents, check out the [CloudEvents website](https://cloudevents.io/)!\n\n\n## Examining the Broker\nAs part of the `kn quickstart` install, an In-Memory Broker should have already be installed in your Cluster. Check to see that it is installed by running the command:\n\n```bash\nkn broker list\n```\n\n==**Expected Output**==\n```{ .bash .no-copy }\nNAME             URL                                                                                AGE   CONDITIONS   READY   REASON\nexample-broker   http://broker-ingress.knative-eventing.svc.cluster.local/default/example-broker     5m    5 OK / 5    True\n```\n!!! warning\n    In-Memory Brokers are for development use only and must not be used in a production deployment.\n\n\n??? question "Are there any other components of Knative Eventing?"\n    Though it is out of scope for this tutorial, Knative Eventing has many components which can be used in many ways to suit your needs.\n\n    If you want to find out more about the different components of Knative Eventing, such as Channels, Sequences and Parallel flows, check out the [Knative Eventing documentation](https://raw.githubusercontent.com/knative/docs/main/docs/eventing/README.md){target=_blank}.\n\n**Next, you\'ll take a look at a simple implementation** of Sources, Brokers, Triggers and Sinks using an app called the Cloud Events Player.\n'}}]);