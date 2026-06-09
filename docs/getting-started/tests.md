# Run the tests

From the repository root:

    cargo test

## Package tests

    cargo test -p stuf-core
    cargo test -p stuf-encoding
    cargo test -p stuf-env
    cargo test -p stuf-protocols

## Development loop

    cargo fmt
    cargo clippy --all-targets --all-features
    cargo test

## No-default-features check

    cargo test --no-default-features

!!! note
    Test fixtures should stay small and readable. The point is not only coverage; it is auditability.
