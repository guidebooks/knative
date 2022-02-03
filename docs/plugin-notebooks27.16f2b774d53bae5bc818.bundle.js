"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[7681],{83211:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});const a='---\ntitle: Knative &mdash; Getting Started\nlayout:\n    1: left\n    default: wizard\nwizard:\n    description: Kubernetes-based platform to deploy and manage modern serverless workloads\n    steps:\n        - Before you begin\n        - name: Prepare local Kubernetes cluster\n          description: Using kind or minikube can help you isolate your Knative learning experiments.\n        - Install the Kubernetes CLI\n        - Install the Knative CLI\n        - name: Install the Knative "Quickstart" environment\n          description: The kn quickstart plugin can quickly set up Knative against kind of minikube\ncodeblocks:\n    - language: bash\n      match: ^brew install kn$\n      validate: brew info kn\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](/Users/nickm/git/guidebooks/knative/node_modules/@kui-shell/plugin-kubectl/notebooks/(https:/knative.dev)) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n# Getting Started with Knative\n## Before you begin\n!!! warning\n    Knative Quickstart Environments are for experimentation use only. For production installation, see our [Installing Guide](https://raw.githubusercontent.com/knative/docs/main/docs/install/README.md)\n\nBefore you can get started with a Knative Quickstart deployment you must install kind, the Kubernetes CLI, and the Knative CLI.\n\n### Prepare local Kubernetes cluster\n\nYou can use [`kind`](https://kind.sigs.k8s.io/docs/user/quick-start){target=_blank} (Kubernetes in Docker) or [`minikube`](https://minikube.sigs.k8s.io/docs/start/){target=_blank} to run a local Kubernetes cluster with Docker container nodes.\n\n### Install the Kubernetes CLI\n\nThe [Kubernetes CLI (`kubectl`)](https://kubernetes.io/docs/tasks/tools/install-kubectl){target=_blank}, allows you to run commands against Kubernetes clusters. You can use `kubectl` to deploy applications, inspect and manage cluster resources, and view logs.\n\n### Install the Knative CLI\n\nThe Knative CLI (`kn`) provides a quick and easy interface for creating Knative resources, such as Knative Services and Event Sources, without the need to create or modify YAML files directly.\n\n`kn` also simplifies completion of otherwise complex procedures such as autoscaling and traffic splitting.\n\n!!! todo "Installing the `kn` CLI"\n\n    === "Using Homebrew"\n        For macOS, you can install `kn` by using [Homebrew](https://brew.sh){target=_blank}.\n\n        ```\n        brew install kn\n        ```\n\n        !!! note\n            Quickstart requires `kn` version 0.25 or later. To upgrade an existing install to the latest version, run `brew upgrade kn`.\n\n    === "Using a binary"\n\n        You can install `kn` by downloading the executable binary for your system and placing it in the system path. Note that you will need `kn` version 0.25 or later.\n\n        1. Download the binary for your system from the [`kn` release page](https://github.com/knative/client/releases){target=_blank}.\n\n        1. Rename the binary to `kn` and make it executable by running the commands:\n\n            ```\n            mv <path-to-binary-file> kn\n            chmod +x kn\n            ```\n\n            Where `<path-to-binary-file>` is the path to the binary file you downloaded in the previous step, for example, `kn-darwin-amd64` or `kn-linux-amd64`.\n\n        1. Move the executable binary file to a directory on your PATH by running the command:\n\n            ```\n            mv kn /usr/local/bin\n            ```\n\n        1. Verify that the plugin is working by running the command:\n\n            ```\n            kn version\n            ```\n\n    === "Using Go"\n\n        1. Check out the `kn` client repository:\n\n              ```\n              git clone https://github.com/knative/client.git\n              cd client/\n              ```\n\n        1. Build an executable binary:\n\n              ```\n              hack/build.sh -f\n              ```\n\n        1. Move `kn` into your system path, and verify that `kn` commands are working properly. For example:\n\n              ```\n              kn version\n              ```\n\n    === "Using a container image"\n\n        Links to images are available here:\n\n        - [Latest release](https://gcr.io/knative-releases/knative.dev/client/cmd/kn){target=_blank}\n\n        You can run `kn` from a container image. For example:\n\n        ```\n        docker run --rm -v "$HOME/.kube/config:/root/.kube/config" gcr.io/knative-releases/knative.dev/client/cmd/kn:latest service list\n        ```\n\n        !!! note\n            Running `kn` from a container image does not place the binary on a permanent path. This procedure must be repeated each time you want to use `kn`.\n\n??? bug "Having issues upgrading `kn`?"\n\n    If you are having issues upgrading using Homebrew, it may be due to a change to a `CLI` repository, where `master` branch was renamed to `main`. If so, run\n\n    ```\n    brew tap --repair\n    brew update\n    brew upgrade kn\n    ```\n\n    to resolve the issue.\n\n## Install the Knative "Quickstart" environment\n\nYou can get started with a local deployment of Knative by using the Knative `quickstart` plugin.\n\n!!! todo "Installing the `quickstart` plugin"\n    === "Using Homebrew"\n        For macOS, you can install the `quickstart` plugin by using [Homebrew](https://brew.sh){target=_blank}.\n            ```\n            brew install knative-sandbox/kn-plugins/quickstart\n            ```\n\n    === "Using a binary"\n         You can install the `quickstart` plugin by downloading the executable binary for your system and placing it on your `PATH` (for example, in `/usr/local/bin`).\n\n         A link to the latest stable binary release is available on the [`quickstart` release page](https://github.com/knative-sandbox/kn-plugin-quickstart/releases){target=_blank}.\n\n    === "Using Go"\n        1. Check out the `kn-plugin-quickstart` repository:\n\n              ```\n              git clone https://github.com/knative-sandbox/kn-plugin-quickstart.git\n              cd kn-plugin-quickstart/\n              ```\n\n        1. Build an executable binary:\n\n              ```\n              hack/build.sh\n              ```\n\n        1. Move the executable binary file to a directory on your `PATH`:\n\n             ```\n             mv kn-quickstart /usr/local/bin\n             ```\n\n         1. Verify that the plugin is working, for example:\n\n             ```\n             kn quickstart --help\n             ```\n\nThe `quickstart` plugin completes the following functions:\n\n1. **Checks if you have the selected Kubernetes instance installed,** and creates a cluster called `knative`.\n2. **Installs Knative Serving with Kourier** as the default networking layer, and sslip.io as the DNS.\n3. **Installs Knative Eventing** and creates an in-memory Broker and Channel implementation.\n\n\n!!! todo "Install Knative and Kubernetes locally"\n    === "Using kind"\n\n        Install Knative and Kubernetes on a local Docker daemon by running:\n        ```bash\n        kn quickstart kind\n        ```\n\n        After the plugin is finished, verify you have a cluster called `knative`:\n        ```bash\n        kind get clusters\n        ```\n\n    === "Using minikube"\n\n        Install Knative and Kubernetes in a minikube instance by running:\n        ```bash\n        kn quickstart minikube\n        ```\n\n        After the plugin is finished, verify you have a cluster called `knative`:\n        ```bash\n        minikube profile list\n        ```\n\n\x3c!-- This is a demonstration of including unmodified markdown content, and overlaying a wizard --\x3e\n'}}]);