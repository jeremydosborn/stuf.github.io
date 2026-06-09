# Profiles

Profiles adapt the STUF trust kernel to real deployment environments.

## Current profile directions

- embedded firmware verification
- cloud-side verification
- no-heap constrained verification
- TUF-oriented metadata chains
- fleet staging mirror patterns

## Why profiles exist

Different systems need different constraints.

| Environment | Constraint |
|---|---|
| Embedded | memory, heap, local verification |
| Cloud | logging, audit, CI/CD |
| Fleet | staged rollout and mirrors |
| Industrial IoT | long-lived devices and intermittent connectivity |
