#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "docker" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "*** Building Docker Containers ***"
    docker build -f docker/Dockerfile -t fischettij/tarjetear-back .

    echo "*** Pushing Docker Containers ***"
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker push fischettij/tarjetear-back:latest

    # echo "*** Deploying on Server ***"
    # echo "$SERVER_IP ecdsa-sha2-nistp256 $SERVER_KEY" >> ~/.ssh/known_hosts
    # ssh $SERVER_USERNAME@$SERVER_IP "/home/$SERVER_USERNAME/unqdifi/covid-back-node-deploy.sh"
else
    echo "Not deploying, since this branch isn't master or it's a Pull Request."
fi