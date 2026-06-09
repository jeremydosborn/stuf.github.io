# Security review

STUF should not be treated as production-ready without independent security review. The trust kernel handles verification decisions that directly affect update integrity — this code needs external scrutiny.

## Scope

A review should cover the following areas, roughly in priority order.

### Trust kernel

- Role separation and threshold enforcement
- Key loading and lifetime assumptions
- Trust anchor pinning and rotation paths
- API surface — what callers can do, what they cannot

### Metadata verification

- Chain validation logic
- Expiry and freshness checks
- Downgrade and freeze protections
- Version sequencing assumptions

### Canonical encoding

- Encoding correctness under adversarial inputs
- Comparison semantics — what "equal" means in practice
- Behavior on malformed or truncated input

### Embedded and no-heap profile

- Stack and allocation bounds
- Behavior when size limits are hit
- Platform binding assumptions

### Error handling

- Whether errors leak information
- Whether partial verification states are reachable
- Recovery paths and their security properties

### Signature verification

- Algorithm selection and agility
- Verification boundary — what exactly is covered
- Behavior under multi-signature scenarios

## Desired outputs

A useful review produces:

1. **Issue list** — specific findings with file and line references where possible
2. **Severity ratings** — critical / high / medium / low / informational
3. **Recommended fixes** — concrete guidance, not just identification
4. **Profile-specific concerns** — findings that apply only to embedded, no-heap, or TUF profiles
5. **Production-readiness notes** — what would need to change before recommending production use

## What a review is not

A review is not a full audit of every dependency or the Rust standard library. The focus is on STUF's own verification logic, trust assumptions, and API contracts.

## Getting involved

If you have security review experience and interest in embedded or update security, open an issue at [github.com/jeremydosborn/stuf](https://github.com/jeremydosborn/stuf) or reach out directly through the repository.

!!! note
    Findings should be reported as GitHub issues unless they are sensitive enough to warrant private disclosure, in which case use the email contact in the repository's security policy.
