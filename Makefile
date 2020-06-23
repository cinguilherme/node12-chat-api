build-image:
	docker build . -f Dockerfile-dev -t chat-api-service-dev:latest
	docker build . -t chat-api-service:latest
