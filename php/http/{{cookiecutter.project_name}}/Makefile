build-HelloFunction:
	# clean project directory
	rm -rf ./vendor
	# install dependencies
	composer install
	cp -r ./src $(ARTIFACTS_DIR)
	cp -r ./vendor $(ARTIFACTS_DIR)
	cp -r ./composer.json $(ARTIFACTS_DIR)
	cp -r ./composer.lock $(ARTIFACTS_DIR)
