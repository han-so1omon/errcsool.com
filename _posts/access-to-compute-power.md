---
date: '2024-03-21T11:55:54.000Z'
title: Access to Compute Power
tagline: Thoughts on access to compute power across industries
preview: >-
  Compute power is a valuable asset, but results that stem from large-scale computational programs do not necessarily
  yield valuable results. And on the other side, results that come from complex computational problems with large processes
  are not always optimized with respect to resource utilization efficiency
image: >-
  https://images.unsplash.com/photo-1603322327561-68aa78fb96bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Access Leads Creation

Compute power is a valuable asset, but results that stem from large-scale computational programs do not necessarily
yield valuable results. And on the other side, results that come from complex computational problems with large processes
are not always optimized with respect to resource utilization efficiency. The former issue stems from access to equal access
to resources, while the latter issue stems from informed access to computational problem-solving techniques 

## Access to Resources

Here, I am defining access to resources as the access to actual compute hardware that can run with suitable operating systems.
Most of the time, access to large-scale compute resources is limited to one of the following groups:

1. University research groups
2. Government labs
3. Large corporations
4. Medium-scale corporations with specific focus on high-powered computing

It is interesting to note that the first two groups are focused on exploring concepts, while the latter two groups are likely
also focused on utilizing known concepts to provide a service. It is not exactly clear if the one category leads the other, they
say 'art imitates life imitates art', which conflates the exploration of a concept with the provision of service that utilizes 
a 'known concept'. A fun example of this may be social networks created by random students or young, 'unestablished' 
professionals, which we can obviously tell now by the multi-datacenter scale of operations for successful social networking 
organizations requires large-scale compute resources, and also drives many research studies

So you can see that access to large-scale resources is either pre-defined by a public grant, pre-defined by a well-funded
private group, or grown over time via success of a practical service

## Access to Techniques

I am defining access to techniques, using the same verbiage for consistency, as the ability to create something that efficiently
utilizes paralellization, message-passing, and machine-level algorithmic/structural techniques to operate on 'big
amounts of data' or otherwise big processes. For example, when you run a computational fluid dynamics simulation, maybe run 100
simulations at once on 100 computers (this is an embarassingly parallel problem) instead of one simulation at a time on one 
computer until you've run 100 simulations. You can extend this perhaps to computer systems with shared memory pools and
cellular simulation techniques to define the parallelization parameters for a single simulation, which is more complex but
more efficient still

It is difficult to learn these techniques and may require specialist knowledge

On the other side, just managing these techniques on hardware at all, including setting up the hardware, may require a separate
team of engineers / administrators. If something goes down, you probably do not want the fluid dynamics engineer to be fixing
an Infiniband-connected network, checking system image properties, or something like that. You want a guy for that stuff
speficically. Obviously you can see another problem arising here, that multiple aspects of the technical system are complicated,
so much so that it may require an entire person just to focus on one sub-problem. Else hope that you've set stuff up
sufficiently to get through your process period or continuous service provision patterns as defined by consumer expectations
without encountering bugs that are hard for a non-specialist to fix

## Key Issues in Engineering

We need the best ideas, not just the well-funded and well-supported ideas

Pretty simple, but it seems to require a lot of coordination

## Scaling Down

This section is about both getting access to and generating real-world effects from compute power

I am focusing on scaling down (using a micro-economic analogy) because scaling up for an individual group has an obvious 
solution: spend more money and get what you need, even at the cost of economic efficiency. Scaling down seems to currently
require increased economic efficiency to produce demonstrable results even with a potentially very useful idea

There are two aspects of scaling down that are important to discuss for this issue:

1. Budget
2. Persuasion

With respect to budget, I don't mean manage your budget well. I mean figure out a way for it to be economical to access
high-powered systems with any budget and any budget efficiency

For persuasion, I am mostly discussing what to do with results once they are achieved, whether that be a research
exploration of a concept or a new service developed that relies on large-scale computing. Basically people are complicated,
and they don't always listen. People are not attracted to the idea that always yields the best results. Otherwise the stock market and romance would be solved, end of all problems. Often it is the case that a team with greater resources can be more
persuasive. This is not always the case, and in the modern world there are many interesting accelerators and limiters that
yield changes in effective persuasion for groups of all scales. For example with accelerators, social media marketing is fairly 
new and some of the best results have come from very small or under-funded teams, like Mr. Beast or Gary Vee, who just
mastered marketing techniques for modern media. For example with limiters, sometimes media traffic that may be viral in some
marketplace is restricted due to Google Ads policies or due to similarity-based recommendation engines

## Modern Approaches

To list a few:

- AI chat-based services can have very small paywalls for massive inference calculations
- Multi-tenant clusters like CoreWeave or AWS ParallelCluster may facilitate practical access to large-scale compute clusters without the issues of cluster development or management
- Day-2 end-to-end operational systems like Ansible Enterprise or Canonical Juju may remove some of the pressure on maintaining
a full system administration or DevOps team

## Compute Power Access Lagging Creation

It is important to note that often compute power for smaller organizations or less talented groups does grow over time, there
is just a built-in lag. The lag may come from the fact that compute power is often created or provided for a specific problem
with a pre-defined use case. In some sense, it is a positive trait that general access to compute power lags the more specific
access, because compute power in itself is not inherently useful. In some sense the proliferation of large-scale compute power is a generalization on the proof of the utility of the specific application to see what other problems may be applicable
to pursue with this technology. They say that hardcore engineers hate technology. Of course, they must see the utility in it somehow as well, just perhaps for their specific problem.