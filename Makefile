up:
	docker compose -f docker/docker-compose.yml up -d

shell:
	docker compose -f docker/docker-compose.yml exec node bash

down:	
	docker compose -f docker/docker-compose.yml down

status:
	docker compose -f docker/docker-compose.yml ps

start:
	make up
	docker compose -f docker/docker-compose.yml exec node yarn start