# Trust kernel

The trust kernel is the smallest part of STUF that should need security review.

## Responsibilities

The kernel defines:

- verification states
- verified artifact wrappers
- common verifier traits
- common error types
- trust-boundary invariants

## Non-responsibilities

The kernel should avoid owning:

- transport
- filesystem access
- clocks
- protocol-specific policy
- rollout orchestration

## Example shape

    pub struct Verified<T> {
        inner: T,
    }

    pub trait Verifier<T> {
        type Error;

        fn verify(&self, input: T) -> Result<Verified<T>, Self::Error>;
    }

## Principle

A verified value should be typed differently from an unverified value.
