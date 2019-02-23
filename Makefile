install:
	gem install bundler
	bundle install

clean:
	rm -rf _site .sass-cache

serve:
	bundle exec jekyll serve

build:
	echo "Building the example site..."
	bundle exec jekyll build

ci:
	build $@

	if test -e "./_site/index.html";then
	echo "It builds!"
	rm -Rf _site
	else
	echo "Huh. That's odd. The example site doesn't seem to build."
	exit 1
	fi
