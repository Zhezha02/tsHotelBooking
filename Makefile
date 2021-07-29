#!/usr/bin/make


up: 
	docker-compose up -d && docker-compose run server bash

stop:
	docker-compose down 

down:
	docker-compose down -v

run:
	docker-compose run server sh
# help: ## выводит в консоль инструкцию со всеми командами
# 	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[92m%-15s\033[0m %s\n", $$1, $$2}' Makefile
