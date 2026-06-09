# No-heap profile

The no-heap profile is for maximally constrained verification paths.

## Goal

Support update verification without relying on dynamic allocation in the core verification path.

## Constraints

The no-heap profile should prefer:

- bounded buffers
- fixed-size metadata windows
- compile-time limits
- explicit failure on unsupported size
- compact error modes
- streaming verification where practical

## Status

The no-heap profile is experimental and under active development.
