# fantasy-beer-league
A web app for managing a fantasy beer league

## Feature Roadmap (MVP)
- Account creation and authentication
- User / Profile management
- Account types (League admin, team/user, super admin)
  - League admin
  - Team/user
  - Super admin
- Live and offline draft
- Waivers
- Team profile
- Season scheduling
  - Set/change weekly beer styles
  - Support points matches
  - Support head-to-head matches
- Playoff brackets
- Upcoming matchup widget
  - Smack talk stream
  - Live score streaming when game starts


## Additional features
- Webcam/voice chat support
- Trades
- League buy-in support

## Pages
- Dashboard widgets
  - Waivers
  - Game day (info about week's game and beer style)
  - Team at a glance
  - League standings
- Draft page
- Waiver wire
- Team profile / lineup
- Admin
- Ed's premium selections

## Submitting PRs
If you'd like to submit a pull request to this project, please use the [template][/docs/pull_request_template.md].

## Submitting Issues
If you'd like to submit an issue, please run through the checklist and use the [template][/docs/issue_template.md].

## App Setup

Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) for dependency management `brew install yarn`.

Install [MongoDB Community Edition server](https://docs.mongodb.com/manual/installation/) `brew install mongodb`.

Navigate to both client and server directories and run `yarn` in each.

In client run `yarn start` to run the Angular app.

Run the Mongo server with `mongod`.

In server run `yarn run dev` to run the API.
