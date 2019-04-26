#!/usr/bin/env bash

echo "Starting Docker build"

DOCKER_IMAGE="integration-tests:${BUILD_COUNTER:-0}"

echo DOCKER_IMAGE: ${DOCKER_IMAGE}

docker build --rm -t ${DOCKER_IMAGE} . && docker-compose up \
  --abort-on-container-exit --exit-code-from tests && docker-compose down
