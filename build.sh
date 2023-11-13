#!/bin/sh

docker buildx build --load -t ofdistantworlds/fleetcommand:latest -f Dockerfile . && docker push ofdistantworlds/fleetcommand:latest
