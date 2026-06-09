# Metadata model

STUF metadata is profile-specific, but profiles should make common security properties explicit.

## Common fields

A profile may define metadata for:

- role
- version
- expiry
- signatures
- thresholds
- target names
- target hashes
- target lengths
- delegations

## Metadata chain

    Root metadata
      authorizes
    Timestamp metadata
      authorizes
    Snapshot metadata
      describes
    Targets metadata
      authorizes
    Target artifact

## Rule

Metadata does not authorize an artifact unless the complete profile-defined chain verifies.
