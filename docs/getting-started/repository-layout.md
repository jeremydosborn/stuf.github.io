# Repository layout

    stuf-core       # trust kernel
    stuf-encoding   # canonical encoding
    stuf-env        # platform bindings
    stuf-protocols  # protocol profiles
    stuf-examples   # publisher and embedded examples

## stuf-core

The trust kernel.

Responsibilities:

- verified wrapper types
- verifier traits
- common error model
- trust-boundary primitives
- verification-state vocabulary

## stuf-encoding

Canonical encoding support.

Responsibilities:

- deterministic serialization
- canonical JSON support
- reproducible hash and signature inputs
- encoding test vectors

## stuf-env

Platform bindings.

Responsibilities:

- crypto providers
- clocks
- transport abstractions
- mock environments
- std and embedded support

## stuf-protocols

Protocol profiles.

Responsibilities:

- TUF profile
- role validation
- metadata-chain verification
- profile-specific constraints

## stuf-examples

Examples and demos.

Responsibilities:

- publisher fixtures
- embedded toaster demo
- no-heap checks
- profile demonstrations
