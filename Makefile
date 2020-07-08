docker-build:
	docker build -t srepollock/express-rest-api-example .
docker-start:
	docker run -p 3000:3000 -d srepollock/express-rest-api-example
