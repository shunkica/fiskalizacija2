#!/bin/sh

# Build the base images
docker build -f assets/common/bus/domibus.Dockerfile -t domibus-base .
docker build -f assets/common/smp/domismp.Dockerfile -t domismp-base .
