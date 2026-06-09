# Cloud profile

The cloud profile is for server-side update verification, policy enforcement, and audit.

## Use cases

- CI/CD artifact verification
- release pipeline gates
- signed metadata validation
- fleet update staging
- repository mirror checks
- SBOM and provenance integration points

## Audit questions

Cloud verification should make it easy to answer:

- which trust root authorized this artifact?
- which metadata versions were used?
- which role signed the target?
- what hash and length were verified?
- when does authorization expire?
- what policy accepted or rejected the artifact?
