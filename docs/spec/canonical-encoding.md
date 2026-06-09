# Canonical encoding

Update metadata needs deterministic representation.

If two implementations serialize the same metadata differently, signatures and hashes become fragile.

## Goals

Canonical encoding should provide:

- stable key ordering
- deterministic string representation
- deterministic number representation
- predictable whitespace behavior
- reproducible hash inputs
- reproducible signature inputs

## Current direction

The current encoding work is oriented around RFC 8785 JSON Canonicalization Scheme concepts.

## Why this matters

Canonical encoding reduces bugs where metadata appears semantically identical but differs at the byte level.
