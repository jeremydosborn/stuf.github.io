# Contributing

STUF is early-stage. The most valuable contributions right now are things that improve clarity, testability, and reviewability — not things that add features.

## Contribution principle

> Prefer small, auditable changes over large opaque ones.

This applies to everything: code, documentation, test fixtures. A change that is easy to review is a change that can be merged with confidence. A change that requires reconstructing the author's reasoning is a liability.

## What helps most right now

### Test fixtures

Small, self-contained test cases that exercise a specific behavior. Especially useful: fixtures that expose edge cases in canonical encoding, threshold enforcement, or error handling.

### Documentation corrections

If something is unclear, wrong, or missing, a small targeted correction is immediately useful. You do not need to rewrite a page — fixing one confusing sentence is a contribution.

### Embedded constraints

If you work on constrained hardware, feedback on whether the no-heap profile's assumptions hold in practice is valuable. Real constraints are different from simulated ones.

### TUF profile review

If you are familiar with the TUF specification, reviewing the TUF profile for compatibility or divergence is useful work.

### Canonical encoding review

The encoding layer is security-critical. A careful read with attention to comparison semantics and adversarial inputs is welcome.

### Threat model feedback

The threat model documents what STUF assumes and what it does not protect against. Additions, corrections, and challenges are useful.

## What to avoid right now

- Large feature additions that expand the API surface
- Refactors that touch many files without a specific security or correctness motivation
- Changes to the trust kernel that have not been discussed in an issue first

## Process

1. Open an issue describing what you want to change and why
2. Wait for a brief acknowledgment before starting work
3. Keep pull requests small and focused
4. Reference the issue in the pull request description

The project is at [github.com/jeremydosborn/stuf](https://github.com/jeremydosborn/stuf).

!!! tip
    If you are unsure whether a contribution is useful, open an issue first and ask. A short conversation upfront saves time for everyone.
