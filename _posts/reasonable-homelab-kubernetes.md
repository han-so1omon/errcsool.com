---
date: '2024-05-06T11:50:54.000Z'
title: Reasonable Homelab Kubernetes
tagline: A reasonable, non-optimal topology for a kubernetes homelab
preview: >-
  This is one way to do it
image: >-
  https://images.unsplash.com/photo-1627817471035-3333a9ece240?q=80&w=3218&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---
# Motivation

# Distribution choice

# Structure

k3s base
3 ubuntu 22.04 virtual machines
2 on windows 11 host with hyper-v
1 on macos 14 host with utm
all vms on bridged network
lens for observation
remove NoSchedule taint from node-role.kubernetes.control-plane node so that pods can run on all nodes
setup nfs server for persistent volume and persistent volume claims

# What I do with it

kubernetes development for scheduler-plugins and kubebuilder
prototyping
experimentation
short-running jobs
data analysis