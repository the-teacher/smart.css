up:
	docker compose -f docker/docker-compose.yml up -d

shell:
	docker compose -f docker/docker-compose.yml exec node bash

down:	
	docker compose -f docker/docker-compose.yml down