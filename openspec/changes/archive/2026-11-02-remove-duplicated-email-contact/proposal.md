# Proposal

## Why

The profile currently repeats contact information: the email address appears twice in the sidebar, and location, phone, and website are repeated in the main content immediately before the professional experience section. Removing these redundant renderings will keep contact information centralized in the profile sidebar.

## What Changes

- Remove the dedicated second email entry from the author-profile sidebar rendering.
- Keep the email link defined in `author.links` alongside phone, website, LinkedIn, and GitHub.
- Remove the main-content contact paragraph containing location, phone, and website before the professional experience section.
- Remove the main-content action links for LinkedIn and email before the professional experience section.
- Preserve all other profile contact items and the email value used for metadata or other non-sidebar purposes.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `professional-portfolio`: the profile sidebar contact links must render each available contact channel once, including email, without repeating those channels or contact actions in the main content.

## Impact

- Affected files: `_includes/author-profile.html` and `index.md`.
- No API, dependency, data-schema, or publication-infrastructure changes.
- The visible sidebar will contain one email link instead of two.
- The main content will not display separate LinkedIn or email action links before the professional experience section.
