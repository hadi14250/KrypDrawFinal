# Simple makefile for docker-compose commands: make, make up, make down, make logs, make ps, make stop, make start, make clean, make fclean, make re, make help

# Variables
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_FILE = docker-compose.dev.yml
DOCKER_COMPOSE_DEV_FILE = docker-compose.dev.yml
DOCKER_COMPOSE_PROD_FILE = docker-compose.prod.yml

# Rules
all: help

up: ## Start the application
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) up -d

down: ## Stop the application
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down

logs: ## Show logs
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) logs -f

ps: ## Show running containers
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) ps

stop: ## Stop the application
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) stop

start: ## Start the application
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) start

clean: ## Remove all containers
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down

fclean: clean ## Remove all containers and volumes
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down -v

re: fclean up ## Restart the application

prune: ## Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) down -v
	docker system prune -a

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# .PHONY
.PHONY: all up down logs ps stop start clean fclean re help
