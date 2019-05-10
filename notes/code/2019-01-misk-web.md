---
title: "Misk-Web: Misk-Web: How is Cash using Typescript, React, Redux, and BlueprintJS"
date: 2019-01-15 00:00:00
path: /2019-01-misk-web
seo_title: "Edmund | Scenes | Andrew FM"
description: "The locomotive whistles sharply..."
---

# Misk-Web: How is Cash using Typescript, React, Redux, and BlueprintJS

2019-01-15

- What is Misk

  - Cash is moving to the cloud
  - Cash is moving to Kotlin
  - Misk is a new, built from the ground up thin Kotlin container for all new Cash services in the cloud
  - It includes all direct injection with Guice, Hibernate for familiar use of databases, and the same strong testing culture of Cash's main Franklin service with JUnit5?

- Why do we need a Misk-Web

  - Misk services need a UI
  - Developers need to be able to easily introspect their applications
  - Operators need to be able to monitor and manage running services
  - Customer success reps need to be able to administer parts of the application
  - More broadly... Customers need a UI to interact with, the framework should be generic enough to be used for customer facing code

- What does Misk-Web need to do

  - ... for operators and customers
    - Provide industry leading web experiences, consistency across all interactions, fast loads, promote mobile responsive design
  - ... for developers

    - Provide a curated stack, templates, and idioms to quickly get them building maintainable web UIs

  - Service developers want UIs but don't want to deal trying to research and decide on the best stack for their team. They want a well documented, curated stack with code templates so they can quickly build UIs for their services.

  - It needs to be easiest to do the right thing. The framework should have the most pressing desirable traits that people want to use it over 1999 Javascript or hacking together their own stack.

  - Modular. Misk at Cash is moving from the current Java monorepo to a polyrepo where each cloud micro-service has it's own repo. Misk-Web should be able to do the same. Code from different repos should be able to stitch together at runtime without prior coordination or compile time knowledge. Thus, Misk-Web should implement a micro-frontends architecture.
    - At minimum, a common interface for components to mount, load, and unmount. This is the minimum assuming an agnostic micro-frontends architecture using custom HTML `<WebComponents/>` to wrap components written in any framework (Vanilla JS, React, Angular, Ember).
    - But given goals of common UI elements, look and feel, and common stack for developers to know and be familiar with... we've isolated it to an opinionated React-only micro-frontends architecture.
    - This allows single browser load of shared React runtime and libraries, common styles, vendor libraries, UI components. We call each of our sub-applications, each of these micro-frontends, a "tab". With the bulk of their styles, UI, ...etc being loaded outside of the tab, each tab compiles to a much thinner production artifact. Thus faster browser loads since no duplicate code is being shipped to browser in multiple tabs.
  - Composable. Big advantage to Misk is Guice direct injection. Take full advantage of this to allow different front end experiences to live in the same service by changing the annotated multibound list of tabs being loaded for each specific front end experience.
  - N=1 should not be radically different than N=2 in the complexity of the project. This means that we didn't want Misk-Web to have a simple mode and an advanced mode that required a full rewrite once you moved past a few basic tasks. Misk-Web should make every effort to be approachable without compromising the power and potential of the framework to build anything that you could in an isolated similar stack project.

- Misk-Web Report Card

  - Industry leading web experiences (check)
  - Curated web stack with growing documentation and templates
  - Micro-frontends architecture with 0 compile time dependencies on other tabs. All tabs snap together at runtime.
  - Designed for use with Misk's Guice direct injection ~= 0 compile time knowledge required of which tabs will be bound, all are generated at runtime
  - N=1 and N=2 complexity... are identical.

- Why did you choose Typescript, React, Redux, and BlueprintJS? (Focus on Why of the decision, not necessarily What – especially if there exists other talks that go into the topic or framework. Emphasize rubric of the decision for inclusion in the stack)
  - Typescript
    - What? Well documented, Microsoft supported, superset of Javascript language that provides optional type safety onto modern ES6+ Javascript. Catches many, many bugs at compile time instead of at runtime in the browser (saves lots of headaches). Type checking allows for intelligent code completion and linking within the editor, especially in Microsoft's VS Code (which is written in Typescript). Side note: Typescript developed because VS Code developement was slowing to a hault at around 200k lines of code because of bugs and related typing errors. Typescript has restored productivity and progress to the massive project.
    - Why include in Misk-Web? Give our developers gaurd rails, increased type safe productivity, and the highest chances of shipping safe web code. Typescript is becoming the #1 choice of Javascript language variance for industry.
  - React
    - What? Industry leading, well documented, virtual DOM "view" management framework with strong use of componentization patterns.
    - Why? Year after year, the industry continues to use React more, Facebook continues to push forward active development, and the community continues to build and improve related tools, frameworks, and complementary libraries.
  - Redux-Sagas-Ducks
    - What? A varient of Redux which is a library of patterns and tools to manipulate state in an organized way.
    - Why? Redux is one of the tools that help make complexity manageable in larger Javascript applications. Though we've provided some wrapper libraries for network calls for example to simplify the Redux boilerplate for basic network requests, every Misk-Web tab starts with the full power of Redux managed state. Also, a super Chrome Redux DevTools app that makes it very easy to debug your application's state interactions.
  - BlueprintJS
    - What? A thorough set of well documented React UI Components built in Typescript for Palantir's many dashboard products.
    - Why? Given the initial use case of Misk-Web as an internal dashboard for Misk services, the focus of the UI elements on various dashboard components was a great fit. It also is closer to the style and colours of Square design than many other frameworks meaning that we can use elements with minimal or no additional styling.
- How are you using them? What have you built?
  - Palette Tab (make a GO link to the live demo)
  - Misk :: Admin Dashboard :: Config Tab
  - Tradie :: Admin Dashboard :: Query Tab
  - All are very simple, purpose built, and easily maintainable
- Micro-Frontends: How to maintain lots of tabs across many repos
  - Identical Build Stack
  - Every tab uses with the same build stack including industry leading tools like Webpack, Prettier, and TSLint.
  - Identical Build System
    - Every tab uses the same configuration settings for those tools with build files for Webpack, Prettier, and TSLint and the same Typescript compiler settings. Each tab also by default has the same dependencies and devDependencies.
    - Pull common configurations from `@misk/dev` and `@misk/tslint`, apply them.
    - But... which service developer is going to remember to update the dependencies and devDependencies every time. What if the way the build tools are configured changes? If tabs are to snap together at runtime, a lot of build system congruity is assumed and must be maintained.
  - Generated Build Files
    - Use a common `miskweb` CLI tool to regenerate build files based on a minimal set of metadata in a miskTab.json file.
  - What about developers who don't have adequate local environments
    - Since many tabs ship within services that build locally on developers who may not be ever working on a tab, Docker builds ensure that local builds always work without any developer configuration. If they want faster builds and to configure their local environment, they are always free to do so. The same versioned Docker image also is used in CI builds and is sped up because it ships with `node_modules` already pre-installed.
- What's next...
  - Misk Web continues to move forward expanding documentation, templates, recipes, and helpful libraries and shared components that reduce what any Tab developer needs to write.
  - 6 tabs are in develoment that I know about across Cash in different micro-services. More will continue to be built and features prioritized based on their needs.
  - Misk Web is ambitious, a principled risk, in structuring an opinionated micro-frontends framework with the goal of building easily composable, modular, scalable, idiomatic, and maintainable web UIs that will last for years to come.
  - Misk-Web works great even apart from Misk (we'll be moving the frontend for a Go service over to Misk-Web later this year). Consider it for your next project. And if not, I hope I've given you some insight into how we've made our decisions that can help as you decide how to move forward.
