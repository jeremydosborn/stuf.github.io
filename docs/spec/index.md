# Spec

STUF is organized around a small trust kernel and profile-specific verification rules.

## Conceptual model

    Trust anchor
        ↓
    Metadata chain
        ↓
    Profile verification
        ↓
    Target authorization
        ↓
    Verified artifact

## Core vocabulary

| Concept | Meaning |
|---|---|
| Trust anchor | initial trusted root or key material |
| Metadata | signed statements about roles, versions, targets, hashes, and expiry |
| Profile | protocol-specific validation rules |
| Target | artifact being authorized |
| Verified target | artifact whose metadata path and bytes have been checked |

## Spec status

This documentation is descriptive and will become more formal as the TUF profile and no-heap profile stabilize.
