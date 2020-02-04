# Ns-Vue-Radio Contributing Guide

Hi! We're really excited that you are interested in contributing to Ns-Vue-Radio. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

+   [Code of Conduct](https://github.com/Cambalab/ns-vue-radio/blob/master/.github/CODE_OF_CONDUCT.md)
+   [Issue Reporting Guidelines](#issue-reporting-guidelines)
+   [Pull Request Guidelines](#pull-request-guidelines)
+   [Development Setup](#development-setup)
+   [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always use our [**bug**](https://github.com/Cambalab/ns-vue-radio/issues/new?assignees=&labels=&template=bug_report.md&title=) or [**feature**](https://github.com/Cambalab/ns-vue-radio/issues/new?assignees=&labels=&template=feature_request.md&title=) templates to create an issue.

## Pull Request Guidelines

+  The `master` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

+  Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch. Please follow this convention for the new branch: `issueNumber-githubUsernaame-commitTitle`

+  Most of the contributed work should generally target the `app` or `tools` folder.

+  It's OK to have multiple small commits as you work on the PR - We may squash them before merging if necessary.

+   Make sure `npm run test` passes. (see [**development setup**](#development-setup))

+   If adding a new feature:
    +   Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

+   If fixing bug:
    +   If you are resolving a special issue, please follow the branch naming convention mentioned above.
    +   Provide a detailed description of the bug in the PR. Live demo preferred.
    +   Add appropriate test coverage if applicable.

## Development Setup

You will need [**Node.js**](http://nodejs.org) **version 10+**, a G++ compiler, JDK 8, the Android SDK and it's build tools. Here's the official [setup guide](https://docs.nativescript.org/start/ns-setup-linux).

Assuming you've already configured `tns`, after cloning the forked repository, run:

```bash
npm install
```

### Committing Changes

We don't expect any strict convention, but we'd be grateful if you summarize what your modifications content is about when writing a commit.

### Commonly used scripts

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build for development
tns build <platform> --bundle --env.development

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and debug the application for development
tns debug <platform> --bundle --env.development

# Build, watch for changes and run the application
tns run <platform> --bundle

# Build, watch for changes and run the application for development
tns run <platform> --bundle --env.development

# Build, watch for changes and run the application using json_data
tns run <platform> --bundle --env.jsondata
```

## Project Structure

+   **`src`**: contains the application source code. The codebase is written in ES2015 and VueJs.

    +   **`api`**: contains the network configuration and REST services implementation.

    +   **`App_Resources`**: you'll probably never (or rarely) have to touch any file in this directory. This is where platform specific code is stored during development or after a building process.

    +   **`components`**: contains single file components (`*.vue` files).

        Here we can find `Home`, this is where the rest of the components are instanced as children. The `NoConnection` is similar to a `404` page. The rest (`Live`, `Schedule`, `Podcasts`, `Social`, `WriteUs`) are sections of the application, each with different responsibilities.

    +   **`langs`**: related to the i18n feature. Translations are stored in `.json` files and they're accesed using the `$t` global API.

    +   **`lib`**: contains utilities AND FIXTURES shared across the entire codebase.

    +   **`router`**: simple implementation of the Vue Router.

    +   **`store`**: an implementation of a [**vuex**]() store module where programs, podcasts and other kind of data is managed and stored.

+   **`tools`**: related to changes to the automated bash script to generate radio applications. Here we can find the bash tool and usage documentation.

## Attribution

This Contributing Guidelines were adapted from the [Vue.js Contributing Guide][vue-js-contributing-guide].

[vue-js-contributing-guide]: https://www.contributor-covenant.org
