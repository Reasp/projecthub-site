---
title: "Editions and licenses"
description: "The Personal, Team and Enterprise editions of ProjectHub and the licenses of its code."
---

ProjectHub has three editions. Everything one person needs is in the free Personal edition. Paid editions are for several people working together and for companies with security and compliance requirements.

## Editions

| Edition | For whom | Price | Status |
|---|---|---|---|
| Personal | One person and their agents | Free, MIT license | Available |
| Team | A team on a shared host with a budget and rules | $25–40 per seat per month | In pilots |
| Enterprise | A company with security and compliance requirements | Annual license and support | Planned |

- The Team price is a hypothesis that is being tested in pilots.
- The builds on the [Download](/download/) page are the open edition, which is the Personal edition.

What each edition includes is listed on the [Pricing](/pricing/) page.

## Licenses

- **Open code: MIT.** Everything in the ProjectHub repository is licensed under MIT, except the `ee/` directory.
- **Paid modules: source-available.** The paid modules of the Team and Enterprise editions live in the `ee/` directory and are distributed under the ProjectHub Enterprise Edition License (`ee/LICENSE`).
- **Public repository.** The public repository of the open edition, `projecthub-oss`, does not contain `ee/` at all. The open edition is built from it with `npm run build:open` (see [Install](/docs/install/#build-from-source)).
