---
title: "Service Status"
icon: material/heart-pulse
tags:
    - status
    - services
    - troubleshooting
---

# Beaty digital service status

The [Service Status dashboard](https://apps.beatymuseum.ubc.ca/status) reports
the current availability of the digital services that support the Beaty
Biodiversity Museum.

Check the dashboard when an application does not load, returns an error, or
appears unable to reach one of its supporting services. It can help distinguish
a shared service outage from a problem affecting only one browser, device,
network, account, or workflow.

## Check current availability

Open the [Service Status dashboard](https://apps.beatymuseum.ubc.ca/status) and
review the **Current status** section. Each configured service is checked using
its published health endpoint.

A successful check means the monitored endpoint responded as expected. It does
not guarantee that every feature, user account, background task, or downstream
dependency is working correctly.

## Review recent history

The dashboard also retrieves recent status history covering the previous seven
days. Use this history to determine whether a problem is:

- happening now;
- intermittent;
- associated with a recent period of unavailability; or
- absent from the shared monitoring data.

Brief interruptions may appear in history even when a service is currently
available.

## Troubleshoot a reported problem

If the affected service is unavailable on the dashboard:

1. Avoid repeatedly submitting the same form, upload, or data-changing action.
2. Record the service name, time, error message, and action being attempted.
3. Wait for availability to return or contact the service maintainer if the
   work is urgent.
4. After recovery, confirm whether the interrupted action completed before
   attempting it again.

If the dashboard reports the service as available:

1. Reload the application once.
2. Confirm that the full application URL is correct.
3. Try a private browser window or another supported browser.
4. Check the device's network or VPN connection.
5. Determine whether the problem affects another user or device.
6. Capture the exact error message and the steps needed to reproduce it.

An application can be reachable while a particular feature still fails. For
example, permissions, invalid input, a collection-specific configuration, or
an unmonitored downstream dependency may cause an error without changing the
service's overall availability result.

## Monitoring endpoints

The dashboard provides machine-readable endpoints for the current result and
recent history:

- [Current service status](https://apps.beatymuseum.ubc.ca/status/api/status)
- [Seven-day status history](https://apps.beatymuseum.ubc.ca/status/api/status/history?hours=168)

These endpoints are useful for diagnostics and integrations. The
[human-readable dashboard](https://apps.beatymuseum.ubc.ca/status) remains the
recommended starting point for staff.
