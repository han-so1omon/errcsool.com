---
date: '2024-04-15T11:50:54.000Z'
title: Useful Distributed Computing
tagline: Some useful projects for distributed computing and why
preview: >-
  This is just a random list of useful distribute computing projects for a full
  stack approach
image: >-
  https://plus.unsplash.com/premium_photo-1663133608066-c0bc906f9577?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---
# Utility Leads Sustainability
When choosing a development stack for distributed computing products, it is important to consider the perspective of the product developer. They are always worried about the future of their project and how they should incorporate core changes or abandon a system that is not working. The most important factor, from their perspective, is utility. Some projects, like [openstack](https://www.openstack.org/), go for wide, complete utility. Their product suite is flexible to modern trends and independent for the most part with respect of vendor lock-in. Most projects, though, choose a lane and stick with it. As the saying goes, "it's better to do one thing well"

## Derived Utility versus Inherent Utility
It seems somewhat important to consider the background context of when a product's design was at its inception. The background informs whether the system is trying to be fit to the product or whether the product is a natural fit to the system. Is the product experimenting with an innovative idea, is it attempting to emulate another successful product with a small twist, etc. Take Warewulf, created by Gregory Kurtzer. Kurtzer worked in high-performance computing with research-grade clusters for years. He then began to design systems that generalize the utility of provisioning and using resources for scientific research projects by creating products such as Warewulf, CentOS, etc. The background knowledge that Kurtzer began in high-performance computing is a decent tell about the cohesion and future goals of the product suite created by him and his now company [Ctrl IQ](https://ciq.com/)

## Uniform Imaging
I am going to skip discussing Docker, because it is obvious

### [Packer](https://www.packer.io/)
If I really wanted, I could just skip the entire discovery process and default to discussing the HashiCorp product suite. They do a nice job of fitting everything together to create a distributed computing environment, including their vault and service mesh. I like Packer, similar to [Buildah](https://buildah.io/), because first of all I trust HashiCorp. It is nice and declarative with HCL templating. It integrates well with automation tools like the HCP cloud and terraform, and it allows for plugin development/installation so that your team can customize for your specific environment, which may even be your own cloud service provider layer. Not to mention, the Packer documentations are excellent

### [Snap](https://snapcraft.io/)
Canonical is all about being on-rails during the technology development process. Including for their own product development, where they typically take a product that exists and modify on top of it so that it is more presentable. Snap is another exemplification of this process. Snaps are a kind of bulky and mostly centrally distributed application packages. They are often compared to [Flatpaks](http://flatpak.org/) and [AppImages](https://appimage.org/), although they are actually more broad. Snaps can be any bundled application or suite, whereas Flatpaks and AppImages are mostly for GUI apps. Snaps are a specific, relatively lightweight form of containerization with a focus on dependency isolation and security. The snap channel-based distribution and integration with the snap daemon is fairly elegant as well

## Hardware Provisioning
### [Warewulf](https://warewulf.org/)
Honestly, I would trust Warewulf by default because it's from Gregory Kurtzer. That being said, there is going to be somewhat of a bias towards Red-Hat-type systems (Rocky, CentOS, RHEL, etc). And I am also aware that there may be some issues between the Red Hat group and the open-source community as to why Rocky Linux needs to exist in the first place after CentOS was acquired to be developed by Red Hat.

Use Warewulf for cluster image provision management, especially for HPC systems. Create your 'golden images' the way you like them, then distribute them to where they are needed with a lightweight, simple system. All systems booted by Warewulf don't know about Warewulf after reboot, but they should exist in the correct setup just the same. It's an elegant maintenance system that doesn't lock the administrator into using the tool

### [xCat](https://xcat.org/)
xCat is like Warewulf. It seems like it is in transition to being fully community developed. I would not recommend it if starting from scratch, but keep an eye on it

### [MAAS](https://maas.io/)
This is the Canonical on-rails offering for hardware provisioning at the scale of data centers or on-premises clusters. Ubuntu systems are obviously very capable at running virtualization softwares. While you can also deploy RHEL, CentOS, and Windows systems with MAAS, I would mostly recommend using MAAS if you want to provision Ubuntu bare-metal systems or if you want enterprise-level support from Canonical for hardware provisioning. MAAS is positioned as a more general purpose product than Warewulf, which specializes in HPC systems. It has a nice suite of integrations for storage, security, etc, and it is a suitable framework for managing an OpenStack cluster on top of, since Canonical is a key contributor to the OpenStack product suite

## Resource Management
### [Ansible](https://www.ansible.com/)
As far as I can tell, Ansible and other Red Hat products lead the industry with respect to open-source computation technology. They have a very full product suite and a sustainable economic model via both their commercial licensing and their recent acquisition by IBM (circa 2018-19). It seems a bit like they co-develop competing technologies with Canonical, where the Red Hat version is more well-used for enterprise, and the Canonical version is more favorable to the FOSS community

All of that being said, Ansible is like Terraform in that there is a control plane orchestrating changes to infrastructure providers for environment setup. It can be a minimal application without agents or constant connections. However, you can use it like a full-service operator platform for constant resource and application environment management. For this, you can use the Ansible Enterprise Automation Platform (or setup your own system for this, which may be complicated). The main benefit of Ansible is the hardened nature of the product and the breadth of community templates/playbooks available for setting up something like a continuously updating MERN-stack application with secrets management and role-based user access

### [Juju](https://juju.is/)
Juju is the Canonical product here. It is like Ansible in some ways, but it focuses on 'Day-2 operations', which means continuously running application environments after initial setup. It uses declarative tooling, but it is not as hardened as Ansible or Terraform, so as of now there still may be a fair bit of procedural intervention by administrators

## Service Management
Skipping Kubernetes because it is obvious

### [Nomad](https://www.nomadproject.io/)
The big draw of Nomad is that it can manage applications/services that are not containerized. There is a lot of utility to running on bare-metal at times. Kubernetes can only manage containerized applications, for comparison. Nomad scales well, has plugin capabilities, and integrates well with the rest of the Hashicorp product suite. You would probably have a nice time with Nomad, although you may feel slightly locked in to using other Hashicorp products. For example, Terraform has a weird license where they don't allow commercial use of the product by competitors

### [OpenStack](https://www.openstack.org/)
OpenStack in my opinion is really the champion in this product survey. It is basically an entire public cloud abstracted as an open-source software suite so that it can be run by anyone and across multiple clouds. You basically have AWS in a box. I recommend reading up on the [use cases](https://www.openstack.org/use-cases/) if you want to build something crazy on top of it

## Simplified Access
### [Jupyter](https://jupyter.org/)
Jupyter started as IPython about 15 years ago. Since then, it has evolved into possibly the most useful niche tool for scientific computing. It puts a bridge in between Python and now a dozen other languages for analyzing data step-by-step for users that don't care about the terminal or data structures or whatever other esoteric computer science things exist. It is really well copied or integrated now for things like cloud-based data analytics notebooks, for example [Google Colab](https://colab.research.google.com/). If you work with compute clusters or are in a STEM program, you've likely seen a Jupyter notebook. At this stage, if you want to do data analytics with folks that don't specialize in computer science, and you also don't like Matlab, it is almost a necessity

### [Open OnDemand](https://openondemand.org/)
Here's how you connect Jupyter to a supercomputer. The big bad application provisioning gauntlet isn't going to hurt you anymore, because the Open OnDemand wizard is going to help you put your little code where it needs to go so you can get your massive amounts of data and create the charts that are going to help your group decide what to do next (or how you can actually get your degree). It's extremely popular in the HPC domain. The docs are colorful and friendly. The plugin/application integrations are well-maintained and straightforward to use. Remember to also rely on administrators somewhat if you get stuck or need to request a new application for your cluster

## Other
### [Kindelia](https://github.com/HigherOrderCO/kindelia)
Weird, early stage project for decentralized, blockchain-type distributed computing. It is derived from the [HVM project](https://github.com/HigherOrderCO/HVM), which is quite well-used for highly parallel computing. I worked in blockchain computing for a while, and the execution environments are painfully inefficient. I think there's something about the Interaction Net ideas by Victor Taelin that might be really cool to explore here, especially given the established popularity of the HVM project
