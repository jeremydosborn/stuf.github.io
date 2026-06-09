# TUF profile

The TUF profile maps STUF verification concepts onto TUF-style metadata.

## Role chain

    Root -> Timestamp -> Snapshot -> Targets -> Target artifact

## Checks

The profile should check:

- role signatures
- role thresholds
- metadata expiry
- metadata versions
- target hashes
- target lengths
- delegation paths

## Goal

The TUF profile should provide a clear, auditable Rust implementation path for secure update verification.
