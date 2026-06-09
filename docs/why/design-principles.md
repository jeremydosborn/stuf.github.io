# Design principles

## Small trust kernel

The core verifier should be small enough to audit. Complexity belongs in profiles, adapters, tooling, and examples.

## Explicit trust transitions

Verification should be visible in types and code paths.

    Untrusted<T> -> Verifier -> Verified<T>

## Profile-driven assumptions

Different environments need different assumptions.

### Embedded

- bounded memory
- static trust anchors
- minimal parser surface
- deterministic failure behavior

### Cloud

- audit logging
- CI/CD integration
- artifact policy checks
- provenance hooks

### Fleet

- staged rollout
- regional mirrors
- intermittent connectivity
- operational audit trails

## Fail closed

If verification cannot prove authorization, the artifact should not be accepted.

!!! warning
    "Downloaded successfully" is not equivalent to "verified."
